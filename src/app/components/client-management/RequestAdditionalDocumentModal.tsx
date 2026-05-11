"use client";

import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { BrandButton } from "./BrandButton";
import { BlackTimesIcon } from "./icons";

// ── Email chip ────────────────────────────────────────────────────────────────
function EmailChip({
  email,
  onRemove,
}: {
  email: string;
  onRemove: () => void;
}) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        bgcolor: "#D1D3D8",
        border: "1px solid #E5E7EB",
        borderRadius: "20px",
        px: 1.4,
        py: 0.8,
        // h:4,
        fontSize: 12,
        color: "#242424",
        fontWeight: 500,
        flexShrink: 0,
      }}
    >
      {email}
      <IconButton
        size="small"
        onClick={onRemove}
        sx={{
          p: 0,
          width: 16,
          height: 16,
          color: "#6B7280",
          "&:hover": { color: "#242424" },
        }}
      >
        <BlackTimesIcon />
      </IconButton>
    </Box>
  );
}

// ── Email row (To / CC) ───────────────────────────────────────────────────────
function EmailRow({
  label,
  chips,
  inputValue,
  onInputChange,
  onKeyDown,
  onRemove,
  placeholder,
}: {
  label: string;
  chips: string[];
  inputValue: string;
  onInputChange: (v: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onRemove: (i: number) => void;
  placeholder?: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1.5px solid #767676",
        py: 0.9,
        px: 1,
        borderRadius: "4px",
        gap: 2,
        "&:focus-within .row-label": { color: "#FF6B22" },
      }}
    >
      <Typography
        className="row-label"
        sx={{
          fontSize: 13,
          color: "#333333",
          fontWeight: 600,
          //   width: 68,
          flexShrink: 0,
          transition: "color 0.15s",
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 0.5,
          //   minHeight: 32,
        }}
      >
        {chips.map((email, i) => (
          <EmailChip key={i} email={email} onRemove={() => onRemove(i)} />
        ))}
        <Box
          component="input"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onInputChange(e.target.value)
          }
          onKeyDown={onKeyDown}
          placeholder={chips.length === 0 ? placeholder : ""}
          sx={{
            border: "none",
            outline: "none",
            fontSize: 13,
            color: "#242424",
            bgcolor: "transparent",
            flex: 1,
            minWidth: 80,
            fontFamily: "inherit",
            py: "5px",
          }}
        />
      </Box>
    </Box>
  );
}

// ── Subject row ───────────────────────────────────────────────────────────────
function SubjectRow({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1.5px solid #767676",
        py: 1.5,
        px: 1,
        borderRadius: "4px",
        gap: 0.5,
        "&:focus-within .row-label": { color: "#FF6B22" },
      }}
    >
      <Typography
        className="row-label"
        sx={{
          fontSize: 13,
          color: "#333333",
          fontWeight: 600,
          //   width: 68,
          flexShrink: 0,
          transition: "color 0.15s",
        }}
      >
        Subject:
      </Typography>
      <Box
        component="input"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        sx={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: 13,
          color: "#333333",
          fontWeight: 600,
          bgcolor: "transparent",
          fontFamily: "inherit",
        }}
      />
    </Box>
  );
}

// ── Attach icon (paperclip SVG) ───────────────────────────────────────────────
function PaperclipIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface RequestAdditionalDocumentModalProps {
  open: boolean;
  onCancel: () => void;
  onSendEmail: () => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function RequestAdditionalDocumentModal({
  open,
  onCancel,
  onSendEmail,
}: RequestAdditionalDocumentModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [toEmails, setToEmails] = useState([
    "favour@example.com",
    "s-adegoke@leadway.com",
  ]);
  const [toInput, setToInput] = useState("");
  const [ccEmails, setCcEmails] = useState<string[]>([]);
  const [ccInput, setCcInput] = useState("");
  const [subject, setSubject] = useState("Request for additional document");
  const [body, setBody] = useState(
    `Dear Customer,\n\nThank you for your application with Leadway Life Insurance.\n\nFollowing a review of your submitted documents, we require additional supporting documentation to complete the verification of your account. Kindly provide the following at your earliest convenience:\n\n- [Insert required document(s) here]`,
  );
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)]);
  };

  const makeKeyDown =
    (
      chipList: string[],
      setList: (v: string[]) => void,
      input: string,
      setInput: (v: string) => void,
    ) =>
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if ((e.key === "Enter" || e.key === ",") && input.trim()) {
        e.preventDefault();
        setList([...chipList, input.trim()]);
        setInput("");
      }
      if (e.key === "Backspace" && !input && chipList.length) {
        setList(chipList.slice(0, -1));
      }
    };

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "12px",
            width: 741,
            maxWidth: "95vw",
            overflow: "hidden",
          },
        },
      }}
    >
      <Box>
        <Box sx={{ bgcolor: "#EBEBEB", px: 2, pt: 1.5,pb:1, mb:1 }}>
          {/* Heading */}
          <Typography
            fontWeight={700}
            sx={{ fontSize: 18, color: "#242424", mb: 0.5 }}
          >
            Request for additional document
          </Typography>
          <Typography sx={{ fontSize: 13, color: "#333333",  }}>
            An email would be sent to the customer requesting for further
            supporting documents
          </Typography>
        </Box>

        {/* Compose area */}
        <Box
          sx={{
            overflow: "hidden",
            bgcolor: "#fff",
            px: 2,
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <EmailRow
            label="To:"
            chips={toEmails}
            inputValue={toInput}
            onInputChange={setToInput}
            onKeyDown={makeKeyDown(toEmails, setToEmails, toInput, setToInput)}
            onRemove={(i) =>
              setToEmails(toEmails.filter((_, idx) => idx !== i))
            }
            placeholder="Add recipient email..."
          />
          <EmailRow
            label="Cc:"
            chips={ccEmails}
            inputValue={ccInput}
            onInputChange={setCcInput}
            onKeyDown={makeKeyDown(ccEmails, setCcEmails, ccInput, setCcInput)}
            onRemove={(i) =>
              setCcEmails(ccEmails.filter((_, idx) => idx !== i))
            }
            placeholder="Add Cc email..."
          />
          <SubjectRow value={subject} onChange={setSubject} />

          {/* Body — also the drop zone */}
          <Box
            sx={{ position: "relative" }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              addFiles(e.dataTransfer.files);
            }}
          >
            <Box
              sx={{
                border: "1.5px solid #767676",
                borderRadius: "4px",
                opacity: dragging ? 0.3 : 1,
                transition: "opacity 0.15s",
              }}
            >
              <Box
                component="textarea"
                value={body}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setBody(e.target.value)
                }
                rows={7}
                sx={{
                  width: "100%",
                  outline: "none",
                  fontSize: 13,
                  color: "#242424",
                  fontFamily: "inherit",
                  lineHeight: 1.7,
                  border: "none",
                  py: 0.5,
                  px: 1,
                  borderRadius: "4px",
                  resize: "vertical",
                  bgcolor: "transparent",
                  boxSizing: "border-box",
                  pt: 1.5,
                  pb: 0.5,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 0.5,
                  px: 0.5,
                  py: 0.6,
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  hidden
                  onChange={(e) => addFiles(e.target.files)}
                />
                <IconButton
                  size="small"
                  onClick={() => fileInputRef.current?.click()}
                  title="Attach documents"
                  sx={{
                    p: 0.3,
                    color: "#767676",
                    "&:hover": { color: "#FF6B22", bgcolor: "#FFF0E9" },
                  }}
                >
                  <PaperclipIcon />
                </IconButton>
                {files.length === 0 && (
                  <Typography sx={{ fontSize: 11, color: "#9CA3AF" }}>
                    Drag &amp; drop documents here, or browse to attach
                    &nbsp;·&nbsp; PDF, DOCX, JPG, PNG — up to 10 MB each
                  </Typography>
                )}
                {files.map((f, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      bgcolor: "#F3F4F6",
                      border: "1px solid #E5E7EB",
                      borderRadius: "20px",
                      px: 1.2,
                      py: 0.3,
                      fontSize: 12,
                      color: "#242424",
                    }}
                  >
                    {f.name}
                    <IconButton
                      size="small"
                      onClick={() =>
                        setFiles(files.filter((_, idx) => idx !== i))
                      }
                      sx={{
                        p: 0,
                        width: 14,
                        height: 14,
                        color: "#9CA3AF",
                        "&:hover": { color: "#EF4444" },
                      }}
                    >
                     <BlackTimesIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Drag overlay */}
            {dragging && (
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.8,
                  border: "2px dashed #FF6B22",
                  borderRadius: "6px",
                  bgcolor: "#FFF7F3",
                  pointerEvents: "none",
                }}
              >
                <PaperclipIcon />
                <Typography
                  sx={{ fontSize: 13, color: "#FF6B22", fontWeight: 600 }}
                >
                  Drop documents here
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 2,
            mt: 2.5,
            p:3
          }}
        >
          <BrandButton
            variant="ghost"
            size="sm"
            onClick={onCancel}
            className="!text-[#f97316] !font-normal !px-4 hover:!bg-[#FFF0E9]"
          >
            Cancel
          </BrandButton>
          <BrandButton
            onClick={onSendEmail}
            className="!py-[6px] !px-[28px]"
            size="sm"
          >
            Send Email
          </BrandButton>
        </Box>
      </Box>
    </Dialog>
  );
}

"use client";

import { useRef, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { LifeLogo, Menu, Search } from "./icons";
import { AngleDownIcon, BellIcon, GlobeIcon, HorizontalLineIcon } from "../../../../public/icons/icons";
import { SearchIcon } from "./icons";
import { GlobalSearchDropdown } from "./GlobalSearchDropdown";

const BRAND = "#FF6B22";

export function TopHeader({
  onMenuClick,
  crumbs: _crumbs = [],
}: {
  onMenuClick: () => void;
  crumbs?: string[];
}) {
  const [globeOpen, setGlobeOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // ── Search state ──────────────────────────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside the search wrapper
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSearchOpen(true);
  };

  const handleSearchFocus = () => {
    setSearchOpen(true);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: "background.paper", borderBottom: "1px solid", borderColor: "divider", color: "text.primary" }}
    >
      <Toolbar sx={{ minHeight: "56px !important", px: { xs: 2, md: 3 }, gap: 1 }}>
        <IconButton
          edge="start"
          onClick={onMenuClick}
          sx={{ display: { md: "none" }, color: "text.secondary" }}
        >
          <Menu size={20} />
        </IconButton>

        <Box sx={{ flex: 1 }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 2 } }}>

          {/* Search bar — wrapped in relative container for dropdown positioning */}
          <Box
            ref={searchWrapperRef}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: searchOpen ? "#fff" : "grey.100",
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
                gap: 1,
                border: "1px solid",
                borderColor: searchOpen ? BRAND : "divider",
                transition: "border-color 0.2s ease, background 0.2s ease",
                width: { md: 200, lg: 260 },
              }}
            >
              <SearchIcon />
              <InputBase
                placeholder="Global search..."
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                sx={{ fontSize: 14, flex: 1 }}
              />
            </Box>

            {/* Animated dropdown */}
            <GlobalSearchDropdown
              query={searchQuery}
              open={searchOpen}
              onViewAll={() => {
                setSearchOpen(false);
                // navigate to full results page if needed
              }}
            />
          </Box>

          {/* Mobile search icon */}
          <IconButton
            size="small"
            sx={{ display: { md: "none" }, color: "text.secondary" }}
          >
            <Search size={18} />
          </IconButton>

          {/* Bell */}
          <IconButton size="small" sx={{ color: "text.secondary" }}>
            <Badge variant="dot" sx={{ "& .MuiBadge-dot": { bgcolor: BRAND, width: 8, height: 8 } }}>
              <BellIcon />
            </Badge>
          </IconButton>

          {/* Globe + language */}
          <Box
            onClick={() => setGlobeOpen((v) => !v)}
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 0.5, cursor: "pointer", color: "text.secondary", userSelect: "none" }}
          >
            <GlobeIcon />
            <Box sx={{ display: "flex", alignItems: "center", transform: globeOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease", "& svg": { width: 10, height: 10 } }}>
              <AngleDownIcon />
            </Box>
          </Box>

          {/* Divider + Profile */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 0.5 }}>
            <HorizontalLineIcon />
            <Box onClick={() => setProfileOpen((v) => !v)} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <LifeLogo width={40} height={40} />
              <Box sx={{ display: "flex", alignItems: "center", transform: profileOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease", "& svg": { width: 10, height: 10 } }}>
                <AngleDownIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
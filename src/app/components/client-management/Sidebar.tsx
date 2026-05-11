"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { userAvatar } from "./images";
import {
  X,
  LeadwayLogo,
  LifeLogo,
  DashboardIcon,
  QuotationIcon,
  ClientMgtIcon,
  SettingsIcon,
  SetupIcon,
  AuditIcon,
  SignOutIcon,
} from "./icons";

const BRAND = "#FF6B22";
const SIDEBAR_WIDTH = 260;
const SIDEBAR_WIDTH_SM = 200;

type NavItem = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

const topNav: NavItem[] = [
  { label: "Dashboard", icon: <DashboardIcon /> },
  { label: "Quotation", icon: <QuotationIcon /> },
  { label: "Client Management", icon: <ClientMgtIcon />, active: true },
];

const bottomNav: NavItem[] = [
  { label: "Setup", icon: <SetupIcon /> },
  { label: "Settings", icon: <SettingsIcon /> },
  { label: "Audit Logs", icon: <AuditIcon /> },
  { label: "Sign Out", icon: <SignOutIcon /> },
];

function NavLink({ item }: { item: NavItem }) {
  return (
    <ListItem disablePadding>
      <ListItemButton
        disableRipple={item.active}
        sx={{
          borderRadius: 1,
          mb: 0.5,
          px: 1.5,
          py: 1,
          bgcolor: item.active ? "#FFF0E9" : "transparent",
          border: item.active ? "1px solid #FFD1BA" : "1px solid transparent",
          color: item.active ? BRAND : "#242424",
          cursor: item.active ? "default" : "pointer",
          "&:hover": {
            bgcolor: item.active ? "#FFF0E9" : undefined,
            boxShadow: "none",
          },
          "& .MuiListItemIcon-root": {
            color: item.active ? BRAND : "#242424",
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 32, fontSize: { xs: 18, md: 20 } }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography fontSize={14} fontWeight={item.active ? 600 : 400}>
              {item.label}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: isSmall ? SIDEBAR_WIDTH_SM : SIDEBAR_WIDTH,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
        borderRight: "1px solid #F0F1F2",
        transition: "width 0.2s ease",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 3 },
          py: 3,
          flexShrink: 0,
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 0 }}
        >
          {/* <Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}> */}
            <LeadwayLogo
              width={isMobile ? 36 : isSmall ? 40 : 48}
              height={isMobile ? 36 : isSmall ? 40 : 48}
            />
          {/* </Box> */}
          <Box
            sx={{
              width: "1.5px",
              height: 15,
              bgcolor: "grey.900",
              flexShrink: 0,
            }}
          />
          <Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
            <LifeLogo
              width={isMobile ? 28 : isSmall ? 34 : 40}
              height={isMobile ? 36 : isSmall ? 40 : 48}
            />
          </Box>
          <Box sx={{ lineHeight: 1.2, flexShrink: 0 }}>
            <Typography
              fontWeight={800}
              color="text.primary"
              sx={{ fontSize: { xs: 11, md: 13 } }}
            >
              LEADWAY
            </Typography>
            <Typography
              fontWeight={600}
              letterSpacing={2}
              sx={{ color: BRAND, fontSize: { xs: 9, md: 10 } }}
            >
              LIFE
            </Typography>
          </Box>
        </Box>
        {onClose && (
          <IconButton
            size="small"
            onClick={onClose}
            sx={{ display: { md: "none" } }}
          >
            <X size={18} />
          </IconButton>
        )}
      </Box>

      <List
        sx={{
          flex: 1,
          px: { xs: 1, md: 2 },
          pt: 0,
          overflowY: "auto",
          mt: 2,
        }}
      >
        {topNav.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}
      </List>

      <Box sx={{ px: { xs: 0.5, md: 1.5 }, pb: 3 }}>
        <Divider sx={{ mb: 1, borderColor: "#FFD1BA" }} />
        <List disablePadding>
          {bottomNav.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </List>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            bgcolor: "#FFF0E9",
            borderRadius: 1,
            border: "1px solid #FFD1BA",
            px: 1.5,
            py: 1,
            mt: 1,
          }}
        >
          <Avatar
            src={userAvatar}
            alt="Hassan Lamidi"
            sx={{
              width: { xs: 30, md: 36 },
              height: { xs: 30, md: 36 },
              flexShrink: 0,
              bgcolor: BRAND,
              fontSize: 13,
              fontWeight: 700,
              border: `1px solid ${BRAND}`,
            }}
          />
          <Box sx={{ minWidth: 0, lineHeight: 1.2 }}>
            <Typography
              fontWeight={600}
              noWrap
              lineHeight={1.3}
              sx={{ fontSize: { xs: 12, md: 14 } }}
            >
              Hassan Lamidi
            </Typography>
            <Typography
              color="#616874"
              noWrap
              lineHeight={1.3}
              display="block"
              sx={{ fontSize: { xs: 10, md: 12 } }}
            >
              Senior Underwriter
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const drawerWidth = isSmall ? SIDEBAR_WIDTH_SM : SIDEBAR_WIDTH;

  return (
    <>
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: SIDEBAR_WIDTH,
            boxSizing: "border-box",
            border: "none",
          },
        }}
      >
        <SidebarContent onClose={onClose} />
      </Drawer>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexShrink: 0,
          width: drawerWidth,
          transition: "width 0.2s ease",
        }}
      >
        <SidebarContent />
      </Box>
    </>
  );
}

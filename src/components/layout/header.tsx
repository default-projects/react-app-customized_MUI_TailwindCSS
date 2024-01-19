import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Menu, Stack, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { GlobalSpacing } from "./common";

const config = {
  homeLink: "/home",
  whitepaperLink: "/whitepaper",
  contactUsLink: "/contact-us",

  launchappLink: "/launchapp",
  LearnMoreLink: "/learn-more",
}

interface HeaderProps {
  sticky: boolean
}

const Header = ({ sticky }: HeaderProps) => {
  const [menuEL, setMenuEL] = useState<null | HTMLElement>(null);

  const onOpenMunu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuEL(event.currentTarget);
  }

  const onCloseMenu = () => {
    setMenuEL(null);
  }

  return (
    <HeaderWrapper sticky={sticky}>
      <HeaderContainer>
        <LogoWrapper to='/'>
          <Typography variant="h3">Logo Image</Typography>
        </LogoWrapper>

        <DesktopMenuContainer>
          <Typography variant="h5">Home</Typography>
          <Typography variant="h5">Whitepaper</Typography>
          <Typography variant="h5">Contact Us</Typography>
        </DesktopMenuContainer>

        <DesktopLaunchButton to='/'>
          <Typography variant="h6">Launch App</Typography>
        </DesktopLaunchButton>

        <ResponsiveMenu>
          <Stack onClick={onOpenMunu}>
            <MenuIcon fontSize="large" sx={{ cursor: "pointer" }} />
          </Stack>

          <Menu anchorEl={menuEL}
            open={Boolean(menuEL)} onClose={onCloseMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            transformOrigin={{ vertical: 'top', horizontal: 'right', }}
          >
            <ResponsiveMenuContainer onClick={onCloseMenu}>
              <MobileMenuContainer>
                <Typography variant="h5">Home</Typography>
                <Typography variant="h5">Whitepaper</Typography>
                <Typography variant="h5">Contact Us</Typography>
              </MobileMenuContainer>

              <MobileLaunchButton to='/'>
                <Typography variant="h6">Launch App</Typography>
              </MobileLaunchButton>
            </ResponsiveMenuContainer>
          </Menu>
        </ResponsiveMenu>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled('div')<{ sticky: boolean }>(({ sticky }) => ({
  zIndex: 10,
  top: 0, left: 0,
  width: "100vw",
  position: 'fixed',
  backdropFilter: sticky ? 'blur(20px)' : 'none',
  transition: sticky ? 'box-shadow 0.6s ease-out 0s' : 'box-shadow 0.6s ease-in 0s',
  boxShadow: sticky ? '#ffffff1a 0px 10px 15px -3px, #ffffff1a 0px 4px 6px -4px' : 'none',
}))

const HeaderContainer = styled(GlobalSpacing)(({ theme }) => ({
  height: "100px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    height: 90,
  },

  [theme.breakpoints.down("md")]: {
    height: 80,
  },

  [theme.breakpoints.down("sm")]: {
    height: 70,
  }
}))

const LogoWrapper = styled(Link)({
  height: '100%',
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
})

const LaunchButton = styled(Link)(({ theme }) => ({
  borderRadius: 50,
  padding: "8px 24px",
  transitionDuration: '0.3s',
  cursor: "pointer",

  border: `3px solid ${theme.palette.common.white}`,

  h6: {
    fontWeight: "bold",
  },

  '&:hover': {
    opacity: 0.5
  },

  [theme.breakpoints.down("lg")]: {
    padding: "10px 20px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "8px 15px",
  }
}))

const DesktopLaunchButton = styled(LaunchButton)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}))

const MobileLaunchButton = styled(LaunchButton)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("md")]: {
    display: 'block',
  }
}))

const MenuWrapper = styled(Stack)(({ theme }) => ({
  gap: 45,

  h5: {
    position: "relative",
    fontWeight: "bold",
    cursor: "pointer",

    '&:hover': {
      opacity: 0.5,
    }
  },

  [theme.breakpoints.down("lg")]: {
    gap: 35,
  },

  [theme.breakpoints.down("md")]: {
    gap: 25,
  }
}))

const DesktopMenuContainer = styled(MenuWrapper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("md")]: {
    display: "none",
  }
}))

const MobileMenuContainer = styled(MenuWrapper)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("md")]: {
    gap: 0,
    display: "flex",
    flexDirection: "column",
  },

  h5: {
    fontSize: 18,
    padding: 10
  }
}))

const ResponsiveMenu = styled(Stack)(({ theme }) => ({
  display: "none",
  color: theme.palette.common.white,

  [theme.breakpoints.down("md")]: {
    display: "block"
  },

  "&:hover": {
    opacity: 0.75,
  }
}))

const ResponsiveMenuContainer = styled(Stack)({
  display: "flex",
  flexDirection: "column",

  gap: 10,
  padding: 10,
  minWidth: 200,
})

export { Header };
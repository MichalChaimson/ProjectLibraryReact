import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { PATHS } from '../routes/paths';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from "../redux/auth/auth.slice";
import { selectAuth } from "../redux/auth/auth.selectors"
import { useSelector } from "react-redux"
// import { deleteUserSlice } from '../redux/user/user.slice';
import { removeSession } from '../auth/utils';

function ResponsiveAppBar() {
  const dispatch=useDispatch()
  const pages = [{ label: 'צור קשר', path: PATHS.contact }, { label: 'הספרים שלנו', path: `${PATHS.home}/${PATHS.ourBooks}` },
  { label: 'קצת עלינו', path: PATHS.about }, { label: 'בית', path: PATHS.home }
  ];
  const settings = [
    {
      label: 'התחברות', action: () => {
          navigate(PATHS.login)
      }
    },
    {
      label: 'התנתקות', action: () => {
        dispatch(clearUser());
        // dispatch(deleteUserSlice())
        removeSession()
        alert('!התנתקת בהצלחה')
        navigate(PATHS.ourBooks)
      }
    },
    {
      label: 'אזור אישי', action: () => {
          console.log("מחובר")
          navigate(PATHS.myAccount)
        }
      }
    
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { isAuthenticated } = useSelector(selectAuth);
  const navigate = useNavigate()
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  const handleSettingAction = (action: VoidFunction) => {
    action()
    handleCloseUserMenu()
  }

  const handleCloseUserMenu = async () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Library
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseUserMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => handleNavigate(page.path)}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'maroon',
              textDecoration: 'none',
            }}
          >
            Library
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handleNavigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={() => handleSettingAction(setting.action)}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { PATHS } from '../routes/paths';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { clearUser } from '../redux/auth/auth.slice';
// import { selectAuth } from '../redux/auth/auth.selectors';
// import { useSelector } from 'react-redux';
// import { cleartUserSlice } from '../redux/user/user.slice';
// import { removeSession } from '../auth/utils';
// import { useState } from 'react';

// function ResponsiveAppBar() {
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector(selectAuth);
//   const navigate = useNavigate();

//   const pages = [
//     { label: 'צור קשר', path: PATHS.contact },
//     { label: 'הספרים שלנו', path: `${PATHS.home}/${PATHS.ourBooks}` },
//     { label: 'קצת עלינו', path: PATHS.about },
//     { label: 'בית', path: PATHS.home },
//   ];

//   const settings = [
//     {
//       label: 'התחברות',
//       action: () => {
//         if (!isAuthenticated) {
//           navigate(PATHS.login);
//         } else {
//           alert('אתה כבר מחובר אלינו :)');
//           navigate(PATHS.home);
//         }
//       },
//     },
//     {
//       label: 'התנתקות',
//       action: () => {
//         dispatch(clearUser());
//         dispatch(cleartUserSlice());
//         removeSession();
//         alert('!התנתקת בהצלחה');
//         navigate(PATHS.home);
//       },
//     },
//     {
//       label: 'אזור אישי',
//       action: () => {
//         navigate(PATHS.myAccount);
//       },
//     },
//   ];

//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleNavigate = (path: string) => {
//     navigate(path);
//   };

//   const handleSettingAction = (action: VoidFunction) => {
//     action();
//     handleCloseUserMenu();
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'maroon' }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
          
//           <Typography
          
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'white', // Text color for the brand name
//               textDecoration: 'none',
//             }}
//           >
//             Library
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseUserMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page, index) => (
//                 <MenuItem key={index} onClick={() => handleNavigate(page.path)}>
//                   <Typography textAlign="center">{page.label}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'white', // Text color for the brand name
//               textDecoration: 'none',
//             }}
//           >
//             Library
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page, index) => (
//               <Button
//                 key={index}
//                 onClick={() => handleNavigate(page.path)}
//                 sx={{ my: 2, color: 'white' }} // Text color for the navigation buttons
//               >
//                 {page.label}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting, index) => (
//                 <MenuItem key={index} onClick={() => handleSettingAction(setting.action)}>
//                   <Typography textAlign="center">{setting.label}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { PATHS } from '../routes/paths';
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { clearUser } from "../redux/auth/auth.slice";
// import { selectAuth } from "../redux/auth/auth.selectors"
// import { useSelector } from "react-redux"
// import { cleartUserSlice } from '../redux/user/user.slice';
// import { removeSession } from '../auth/utils';

// function ResponsiveAppBar() {
//   const dispatch=useDispatch()
//   const pages = [{ label: 'צור קשר', path: PATHS.contact }, { label: 'הספרים שלנו', path: `${PATHS.home}/${PATHS.ourBooks}` },
//   { label: 'קצת עלינו', path: PATHS.about }, { label: 'בית', path: PATHS.home }
//   ];
//   const settings = [
//     {
//       label: 'התחברות', action: () => {
//         console.log(isAuthenticated)
//         if (!isAuthenticated) {
//           navigate(PATHS.login)
//         }
//         else {
//           alert('אתה כבר מחובר אלינו :)')
//           navigate(PATHS.home)
//         }
//       }
//     }
//     ,
//     {
//       label: 'התנתקות', action: () => {
//         dispatch(clearUser());
//         dispatch(cleartUserSlice())
//         alert('!התנתקת בהצלחה')
//         navigate(PATHS.home)
//       }
//     },
//     {
//       label: 'אזור אישי', action: () => {
//           console.log("מחובר")
//           navigate(PATHS.myAccount)
//         }
//       }
    
//   ];

//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
//   const { isAuthenticated } = useSelector(selectAuth);
//   const navigate = useNavigate()
//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleNavigate = (path: string) => {
//     navigate(path)
//   }

//   const handleSettingAction = (action: VoidFunction) => {
//     action()
//     handleCloseUserMenu()
//   }

//   const handleCloseUserMenu = async () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'maroon',
//               textDecoration: 'none',
//             }}
//           >
//             Library
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseUserMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page, index) => (
//                 <MenuItem key={index} onClick={() => handleNavigate(page.path)}>
//                   <Typography textAlign="center">{page.label}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'maroon',
//               textDecoration: 'none',
//             }}
//           >
//             Library
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page, index) => (
//               <Button
//                 key={index}
//                 onClick={() => handleNavigate(page.path)}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page.label}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting, index) => (
//                 <MenuItem key={index} onClick={() => handleSettingAction(setting.action)}>
//                   <Typography textAlign="center">{setting.label}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;
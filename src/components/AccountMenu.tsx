import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip
                title="Profile"
                slotProps={{
                    tooltip: {
                        sx: {
                            backgroundColor: '#09A295',
                            color: '#F8F8FF',
                        }
                    }
                }}
            >
                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    sx={{
                        p: 0,
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <Avatar
                        alt="Profile"
                        src="nyx.jpg"
                        sx={{
                            width: 34,
                            height: 34,
                            border: '2px solid transparent',
                            transition: '0.3s',
                            '&:hover': {
                                borderColor: '#09A295',
                            },
                        }}
                    />
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'hidden',
                            borderRadius: '10px',
                            backgroundColor: '#09A295',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            padding: '5px',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                sx={{
                    fontWeight: 600,
                    fontSize: '1.3rem',
                }}
                >
                    <Avatar
                    src="nyx.jpg"/> Marsha Mars
                </MenuItem>
                <MenuItem className='flex gap-x-3'>
                    <BalanceOutlinedIcon /> Balance: 69
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    )
}
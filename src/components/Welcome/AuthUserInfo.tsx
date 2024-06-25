import React from 'react'
import { AuthUser } from './styles'
import { Link } from 'react-router-dom'
import { Button, Paper } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'
import { getUserStatus } from '../../redux/slices/userSlice'
import FavouritesUser from '../FavouritesUser'

const AuthUserInfo: React.FC = () => {

    const userStatus = useAppSelector(getUserStatus)

    if (userStatus === "idle") {
        return (
            <>
            <AuthUser>
                <Link to="/sign-in">
                    <Button
                        color="secondary"
                        sx={{
                            borderRadius: "8px",
                            padding: "15px 24px"
                        }}
                    >
                        Login
                    </Button>
                </Link>

                <Button
                    color="secondary"
                    variant="contained"
                    sx={{
                        borderRadius: "8px",
                        padding: "15px 24px"
                    }}
                >
                    <span>
                        Sign up
                    </span>
                </Button>
            </AuthUser>
        </>
        )
    }

    if (userStatus === "loading") {
        return (
            <Paper
                sx={{padding: "5px 10px"}}
                elevation={0}
            >
                <p>loading</p>
            </Paper>
        )
    }

    if (userStatus === "succeeded") {
        return (
            <Paper
                sx={{padding: "5px 10px"}}
                elevation={0}
            >
                <FavouritesUser/>
            </Paper>
        )
    }

    return (
        <>
            <AuthUser>
                <Link to="sign-in">
                    <Button
                        color="secondary"
                        sx={{
                            borderRadius: "8px",
                            padding: "15px 24px"
                        }}
                    >
                        Login
                    </Button>
                </Link>

                <Button
                    color="secondary"
                    variant="contained"
                    sx={{
                        borderRadius: "8px",
                        padding: "15px 24px"
                    }}
                >
                    <span>
                        Sign up
                    </span>
                </Button>
            </AuthUser>
        </>
    )
}

export default AuthUserInfo
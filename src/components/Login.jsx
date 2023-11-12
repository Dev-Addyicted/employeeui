import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")

    const handleLogin = () => {
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)

        const emails = localStorage.getItem("email");
        const passwords = localStorage.getItem("password");

        if (emails === "addyatt16@gmail.com" && passwords === "12345") {
            navigate("/")
        } else {
            navigate("/login")
            setErrors("Invalid Credintials...")
        }
    }

    setTimeout(() => {
        setErrors("")
    }, 4000);
    return (

        <div className="content-login">
            <Card>
                <CardContent>
                    <Grid container spacing={2} align="center">
                        <Grid item xs={8}>
                            <img src="software.png" alt="" />
                        </Grid>
                        <Grid item xs={3} sx={{ marginTop: 10 }}>
                            <Card>
                                <CardContent>


                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="h4">Employee Login</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" label="EmailID" fullWidth onChange={(e) => setEmail(e.target.value)} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" label="Password" fullWidth onChange={(e) => setPassword(e.target.value)} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" color="warning" fullWidth onClick={() => handleLogin()} >Login</Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <span style={{ color: "red" }}>{errors}</span>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
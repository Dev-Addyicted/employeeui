import React, { useState } from "react";
import { Grid, Switch, Card, CardContent, Button, TextField } from '@mui/material'
import axios from "axios"

export const AddEmp = () => {

    const [empid, setEmpId] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [city, setCity] = useState("");
    const [isActive, setisActive] = useState("");

    const handleEmp = async () => {
        const url = "http://localhost:2888/addemp"
        const payload = {
            empid,
            fname,
            lname,
            email,
            mobile,
            city,
            isActive
        }
        const result = await axios.post(url, payload);
        console.log(result, "result============")
    }

    const handleClear = () => {
        setEmpId("");
        setFname("");
        setLname("");
        setEmail("");
        setMobile("");
        setCity("");

    }

    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <TextField onChange={(e) => setEmpId(e.target.value)} value={empid} type="number" variant="outlined" label="Employee ID" required fullWidth />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField onChange={(e) => setFname(e.target.value)} value={fname} variant="outlined" label="First Name" required fullWidth />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField onChange={(e) => setLname(e.target.value)} value={lname} variant="outlined" label="Last Name" required fullWidth />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField onChange={(e) => setEmail(e.target.value)} value={email} variant="outlined" label="Email ID" required fullWidth />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField onChange={(e) => setMobile(e.target.value)} value={mobile} variant="outlined" label="Mobile No" required fullWidth />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField onChange={(e) => setCity(e.target.value)} value={city} variant="outlined" label="City" required fullWidth />
                    </Grid>
                    <Grid item xs={1}>
                        <Switch isActive={isActive} onClick={() => setisActive(!isActive)} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={() => handleEmp()} variant="contained" color="warning" fullWidth>Submit</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={() => handleClear()} variant="outlined" color="error" fullWidth>Cancel</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
import React, { useState, useEffect } from "react";
import { Grid, Switch, Button, TextField, Alert } from '@mui/material'
import axios from "axios"
import { EmpList } from "./EmpList";
import Select from "react-select"
import { useNavigate } from "react-router-dom";

export const AddEmp = () => {

    const navigate = useNavigate()

    const [empid, setEmpId] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [emailid, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [city, setCity] = useState("");
    const [isActive, setisActive] = useState(false);
    const [update, setUpdate] = useState("")
    const [_id, set_id] = useState()
    const [valid, setValid] = useState(false)
    const [show, setShow] = useState("")

    const option = [
        {
            label: "Mumbai",
            value: "Mumbai"
        },
        {
            label: "Pune",
            value: "Pune"
        },
        {
            label: "Nanded",
            value: "Nanded"
        },
        {
            label: "Delhi",
            value: "Delhi"
        },
        {
            label: "Hyderabad",
            value: "Hyderabad"
        },
        {
            label: "Lukhnow",
            value: "Lukhnow"
        },
        {
            label: "Bengaluru",
            value: "Bengaluru"
        },
        {
            label: "Chennai",
            value: "Chennai"
        },
        {
            label: "Aurangabad",
            value: "Aurangabad"
        },
        {
            label: "Gujarat",
            value: "Gujarat"
        },
    ]

    const handleEmp = async () => {
        if (update === true) {
            const url = "http://localhost:2888/empupd";
            const payload = {
                _id,
                empid,
                fname,
                lname,
                emailid,
                mobile,
                city,
                isActive,
            };
            const result = await axios.post(url, payload);
            setShow(result.data)
            console.log(result, "result==========");

            setEmpId("");
            setFname("");
            setLname("");
            setEmail("");
            setMobile();
            setCity("");
            setisActive(false);
            setTimeout(() => {
                window.location.reload(false);

            }, 3000);
        } else {
            const url = "http://localhost:2888/addemp";
            const payload = { empid, fname, lname, emailid, mobile, city, isActive };
            const result = await axios.post(url, payload);
            setShow(result.data)
            console.log(result, "result==========");
            setEmpId("");
            setFname("");
            setLname("");
            setEmail("");
            setMobile();
            setCity("");
            setisActive(false);
        }
    };

    const handleClear = () => {
        setEmpId("");
        setFname("");
        setLname("");
        setEmail("");
        setMobile();
        setCity("");

    };

    const handleUpdate = (item) => {
        setEmpId(item.empid);
        setFname(item.fname);
        setLname(item.lname);
        setEmail(item.emailid);
        setMobile(item.mobile);
        setCity(item.city);
        setisActive(item.isActive);
        set_id(item._id);
        setUpdate(true);
        setTimeout(() => {
            window.location.reload(false);

        }, 5000);

    }

    useEffect(() => {
        setValid(
            fname !== "" &&
            lname !== "" &&
            // city !== "" &&
            emailid !== "" &&
            empid.length <= 5 &&
            mobile.length <= 10
        );
    }, [empid, fname, lname, mobile, city, emailid]);

    useEffect(() => {
        const emails = localStorage.getItem("email");


        emails || (!emails && navigate("/login"))
    }, [navigate])

    return (
        <React.Fragment>
            <div style={{ backgroundColor: "#fff", borderRadius: "4px", padding: "20px" }}>
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
                        <TextField onChange={(e) => setEmail(e.target.value)} value={emailid} variant="outlined" label="Email ID" required fullWidth />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField onChange={(e) => setMobile(e.target.value)} value={mobile} variant="outlined" label="Mobile No" required fullWidth />
                    </Grid>
                    <Grid item xs={3}>
                        {/* <TextField onChange={(e) => setCity(e.target.value)} value={city} variant="outlined" label="City" required fullWidth /> */}
                        <Select onChange={(e) => setCity(e.value)} options={option} />
                    </Grid>
                    <Grid item xs={1}>
                        <Switch isActive={isActive} onClick={() => setisActive(!isActive)} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={() => handleEmp()} variant="contained" color="warning" fullWidth disabled={update ? "" : !valid}>{update ? 'update' : 'submit'}</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={() => handleClear()} variant="outlined" color="error" fullWidth>Cancel</Button>
                    </Grid>
                </Grid>
            </div>
            <br />
            {
                show &&
                <Alert severity="success">{show}</Alert>
            }
            <br />
            <EmpList handleUpdate={handleUpdate} />
        </React.Fragment>

    )
}
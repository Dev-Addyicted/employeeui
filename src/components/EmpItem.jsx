import React from "react";
import { Grid, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const EmpItem = ({ item, handleUpdate }) => {
    const navigate = useNavigate();

    const handleDelete = async (_id) => {
        const url = "http://localhost:2888/empdel";
        const payload = { _id };
        if (window.confirm("Are you sure to delete...")) {

            const result = await axios.post(url, payload)
            console.log(result.data, "empdel======")
        }
    }

    const handleDetails = (item) => {
        navigate("/empdtl", { state: item });
    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={1}>
                {item.empid}
            </Grid>
            <Grid item xs={2} onClick={() => handleDetails(item)}>
                {
                    `${item.fname.toUpperCase()} ${item.lname.toUpperCase()}`
                }
            </Grid>
            <Grid item xs={2}>
                {item.emailid}
            </Grid>
            <Grid item xs={2}>
                {item.mobile}
            </Grid>
            <Grid item xs={2}>
                {item.city}
            </Grid>
            <Grid item xs={1}>
                <div
                    style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: item.isActive === true ? "green" : "red",
                    }}
                ></div>
            </Grid>
            <Grid item xs={1}>
                <Button onClick={() => handleUpdate(item)} variant="contained" fullWidth>
                    update
                </Button>
            </Grid>
            <Grid item xs={1}>
                <Button variant="contained" fullWidth color="warning" onClick={() => handleDelete(item._id)}>
                    delete
                </Button>
            </Grid>
        </Grid>
    );
};
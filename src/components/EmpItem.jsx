import React from "react";
import { Grid, Button } from "@mui/material";
export const EmpItem = ({ item }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={1}>
                {item.empid}
            </Grid>
            <Grid item xs={2}>
                {item.fname.toUpperCase()}
                {item.lname.toUpperCase()}
            </Grid>
            <Grid item xs={2}>
                {item.email}
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
                <Button variant="contained" fullWidth>
                    update
                </Button>
            </Grid>
            <Grid item xs={1}>
                <Button variant="contained" fullWidth color="warning">
                    delete
                </Button>
            </Grid>
        </Grid>
    );
};
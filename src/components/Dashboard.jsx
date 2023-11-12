import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

export const Dashboard = () => {

    const mydata = useLocation()
    const data = mydata.state
    console.log(data, "================");

    const active = data.filter((item) => item.isActive === true)
    const deactive = data.filter((item) => item.isActive === false)

    return (

        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <h1>Total Employees</h1>
                        <h1>{data.length}</h1>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <h1>Active Employees</h1>
                        <h1>{active.length}</h1>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <h1>De-Active Employees</h1>
                        <h1>{deactive.length}</h1>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
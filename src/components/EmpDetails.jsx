import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

export const EmpDetails = () => {
    const mydata = useLocation();
    const data = mydata.state;
    console.log("data===========", data);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <img
                                    style={{ width: "200px" }}
                                    src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
                                    alt=""
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <h1>{`${data.fname} ${data.lname}`}</h1>
                                <h3>{data.email}</h3>
                                <h3>{data.mobile}</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Adipisci molestias quam, officiis quae repudiandae unde in a
                                    consequatur tempora dolorem dolore saepe praesentium
                                    voluptatum. Aut.
                                </p>
                            </Grid>
                            <Grid item xs={3} align="center">
                                <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: data.isActive ? "green" : "red" }}></div>
                                <h3>{data.isActive ? "Active" : "De-Active"}</h3>
                                <h1>{data.empid}</h1>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import axios from "axios";
import { EmpItem } from "./EmpItem";
export const EmpList = () => {
    const [data, setData] = useState([]);

    const getApi = async () => {
        const result = await axios.get("http://localhost:2888/empall");
        setData(result.data);
    };
    useEffect(() => {
        getApi();
    }, []);
    return (
        <Grid container spacing={2} align="center">
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={1}>
                                <b>Employee Id</b>
                            </Grid>
                            <Grid item xs={2}>
                                <b>Full Name</b>
                            </Grid>
                            <Grid item xs={2}>
                                <b>Email Id</b>
                            </Grid>
                            <Grid item xs={2}>
                                <b>Mobile</b>
                            </Grid>
                            <Grid item xs={2}>
                                <b>City</b>
                            </Grid>

                            <Grid item xs={1}>
                                <b>Status</b>
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                        {data.map((item) => (
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <EmpItem item={item} />
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
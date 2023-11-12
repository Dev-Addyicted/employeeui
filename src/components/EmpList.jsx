import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { EmpItem } from "./EmpItem";
import { useNavigate } from "react-router-dom";

export const EmpList = ({ handleUpdate }) => {
    const [data, setData] = useState([]);
    const [pagi, setPagi] = useState(4);
    const navigate = useNavigate()

    const getApi = async () => {
        const result = await axios.get("http://localhost:2888/empall");
        setData(result.data);
    };
    useEffect(() => {
        getApi();
    }, []);

    const handlePrevious = () => {
        if (pagi > 5) {
            setPagi(pagi - 4);

        }
    }

    const handleNext = () => {
        if (pagi < data.length) {

            setPagi(pagi + 4)
        }
    }



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
                        {data.slice(pagi - 4, pagi).map((item) => (
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <EmpItem handleUpdate={handleUpdate} item={item} />
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Button sx={{ display: pagi <= 4 } ? "none" : "block"} variant="contained" fullWidth onClick={() => handlePrevious()} >Previous</Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth color="secondary" onClick={() => navigate("/dashboard", { state: data })} >Dashboard</Button>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}>
                <Button sx={{ display: pagi >= data.length } ? "none" : "block"} variant="contained" fullWidth onClick={() => handleNext()} >Next</Button>
            </Grid>
        </Grid>
    );
};
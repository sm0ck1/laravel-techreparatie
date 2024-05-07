import React from 'react';

import Grid from "@mui/material/Unstable_Grid2";
import {Box} from "@mui/material";
import {format} from "date-fns";

const PrintOrder = React.forwardRef(({repair}, ref) => {
    let date = new Date(repair.created_at);
    const formattedDate = format(date, 'dd MM yyyy');
    return (
        <Grid ref={ref} container
              sx={{
                  width: '100%',
                  m: 4
              }}
        >
            <Grid
                xs={8}
            >
                <img
                    width="300px"
                    src="/images/img.png"
                    alt=""/>
            </Grid>
            <Grid
                xs={4}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        fontWeight: 'bold'
                    }}
                >
                    <Box>Techreparatie.nl</Box>
                    <Box>Meeuwerderweg 135</Box>
                    <Box>9724ES Groningen</Box>
                    <Box>Tel: 050-8501234</Box>
                    <Box>KvK nr: 897 38 500</Box>
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 5,
                        mb: 5,
                        fontWeight: 'bold',
                        fontSize: '1.2rem'
                    }}
                >

                    REPARATIE: #{repair.id}
                </Box>
            </Grid>

            <Grid xs={8}
                  sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4,
                  }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Box>
                        <b>Gegevens aanvrager:</b>
                    </Box>
                    <Box>Naam: {repair.customer_name}</Box>
                    <Box>Telefoon: {repair.customer_phone}</Box>
                    <Box>Email: _________________________________</Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Box>
                        <b>Apparaatgegevens:</b>
                    </Box>
                    <Box>Product: {repair.device}</Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Box>
                        <b>Aangegeven problemen:</b>
                    </Box>
                    <Box>{repair.problem_description}</Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Box>
                        <b>Werknemer:</b>
                    </Box>
                    <Box>{repair.user ? repair.user.name : '____________________________'}</Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Box>
                        <b>Status:</b>
                    </Box>
                    <Box>______________________________________</Box>
                </Box>
            </Grid>
            <Grid xs={4}>
                <b>Prijs: {repair.price}</b>

            </Grid>
            <Grid xs={12}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mt: 3,
                        mb: 3,
                        fontSize: '1rem'
                    }}
                >
                    <Box>Let op! Het moment dat wij uw apparaat aannemen, zullen er altijd onderzoekskosten worden
                        verrekend.</Box>
                    <Box>De onderzoekskosten zijn 34,95 voor Spelcomputers, Computers, Laptops en Tablets</Box>
                    <Box>Voor de overige reparaties is het 24,95</Box>
                </Box>
            </Grid>
            <Grid xs={8}>
                <b>Datum: {formattedDate}</b>
            </Grid>
            <Grid xs={4}>
                <b>Vak: _______________________</b>
            </Grid>
        </Grid>
    );
});

export default PrintOrder;

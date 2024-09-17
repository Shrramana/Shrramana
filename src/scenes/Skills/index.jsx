import React from 'react';
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import axios from "axios";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { skillset } from "../../data/mockData";


const Skills = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const [rows, setRows] = useState([]);

    const columns = [
        {
            field: "skill",
            headerName: "Skill",
            flex: 1,
            // cellClassName: "name-column--cell",
          },
          {
            field: "stage",
            headerName: "Proficiency",
          //   type: "number",
          // flex:1,
          
          },
          {
            field: "cat",
            headerName: "Category",
            flex: 1,
          },

    ];



    return (
        <Box m="20px">
            <Header title="Skillset" subtitle="Categories: Programming lanaguages, Bioinformatics, Cloud, Machine learning, Project management, Interpersonal skills" />
            <Box m="40px 0 0 0" height="75vh" sx={{
                "& .MuiDataGrid-root": { border: "none" },
                "& .MuiDataGrid-cell": { borderBottom: "none" },
                "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
                "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
                "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
                "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": { color: `${colors.grey[100]} !important` },
            }}>
                <DataGrid
                    rows={skillset}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Skills;

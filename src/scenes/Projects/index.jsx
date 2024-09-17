import { Box, useTheme } from "@mui/material";
// import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { projects } from "../../data/mockData";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Projects = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "project",
      headerName: "Project Name",
      flex: 0.3,
      cellClassName: "name-column--cell",
    },
    {
      field: "desc",
      headerName: "Description",
      flex: 1,
    },
    // {
    //   field: "phase",
    //   headerName: "Phase",
    //   flex: 1,
    // },

  ];

  return (
    <Box m="20px">
      <Header title="Projects & Internship"/>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={projects} columns={columns} />
      </Box>
    </Box>
  );
};

export default Projects;
import { Box, useTheme,Typography } from "@mui/material";
// import { Box, Typography, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { projects } from "../../data/mockData";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Report = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Education & Work Experience" />
        {/* <Header title="Shrramana's Profile" subtitle="Welcome to 6440 dashboard" /> */}

      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

        <Box
          gridColumn="span 11"
          gridRow="span 5"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            {/* borderBottom={`4px solid ${colors.primary[500]}`} */}


            <Typography color={colors.grey[100]} variant="h4" fontWeight="600" >
              Education
            </Typography>
          </Box>
          <Box p="15px" display="flex" justifyContent="space-between" alignItems="center" >
              {/* left side: University and Degree */}
            <Box >
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                Georgia Institute of Technology, Atlanta, USA
              </Typography>
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                MS Bioinformatics
              </Typography>
            </Box>
            {/* right side: CGPA and Duration */}
            <Box textAlign="right">
            <Typography color={colors.grey[100]} variant="h6" fontWeight="500">
                August 2023- December 2024(Expected)
              </Typography>
              <Typography color={colors.grey[100]} variant="h6" fontWeight="500">
                CGPA: 4/4
              </Typography>              
            </Box>
          </Box>

          <Box p="15px" display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`}>
                        {/* left side: University and Degree */}
                      <Box >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                        Karunya Institute of Technology and Sciences, Coimbatore, India
                        </Typography>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                          B.Tech Bioinformatics
                        </Typography>
                      </Box>
                      {/* right side: CGPA and Duration */}
                      <Box textAlign="right">
                      <Typography color={colors.grey[100]} variant="h6" fontWeight="500">
                          Jube 2016 - May 2020
                        </Typography>
                        <Typography color={colors.grey[100]} variant="h6" fontWeight="500">
                          CGPA: 8.3/10
                        </Typography>              
                      </Box>
                      </Box>
                      <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h4" fontWeight="600" >
              Work Experience
            </Typography>
          </Box>
          <Box p="15px" display="flex" justifyContent="space-between" alignItems="center" >
              {/* left side:  */}
            <Box >
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Georgia Institute of Technology
              </Typography>
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Graduate Research Assistant
              </Typography>
            </Box>
            {/* right side: */}
            <Box textAlign="right">
            <Typography color={colors.grey[100]} variant="h6" fontWeight="500">
                Atlanta, USA
              </Typography>
            <Typography color={colors.grey[100]} variant="h6" fontWeight="500">
                January 2024 - Present
              </Typography>          
            </Box>
            
          </Box>
          <Box p="15px">
            <Typography color={colors.grey[100]} variant="h5" fontWeight="500">
            Developing a Supervised machine Learning model and conducting statistical analysis to build a screening panel for Pediatric Metabolic Dysfunction-Associated Steatohepatitis (MASH) Diagnosis and response to treatment.<br></br>
            Custom EMR dataset creation for Sepsis treatment from MIMIC using Python and SQLite.             
            </Typography>
            </Box>
            <Box p="15px" display="flex" justifyContent="space-between" alignItems="center" >
              {/* left side:  */}
            <Box >
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Accenture
              </Typography>
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Custom Software Engineering ANalyst
              </Typography>
            </Box>
            {/* right side: */}
            <Box textAlign="right">
            <Typography color={colors.grey[100]} variant="h6" fontWeight="500">
                Coimbatore, India
              </Typography>
            <Typography color={colors.grey[100]} variant="h6" fontWeight="500">
                October 2020 - July 2023
              </Typography>          
            </Box>
            
          </Box>
          <Box p="15px" borderBottom={`4px solid ${colors.primary[500]}`}>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="500">
            Handling backend database in a prompt engineering team for AI chat, utilizing Python and AWS.<br></br>
            Network engineer for a telecom project, responsible for network design.<br></br>
            Built web automation scripts using Selenium-Java to minimize manual workload in the project. <br></br>
            Led a sub-team of 10 people and had engagements with the client for project scope development.<br></br>
            Boosted work quality and efficiency by nearly 60% with new workflow and project management strategies.
            </Typography>
            </Box>



        </Box>

      </Box>
    </Box>
  );
};

export default Report;
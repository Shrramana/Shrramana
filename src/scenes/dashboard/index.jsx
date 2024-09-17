import { Box, Typography, useTheme } from "@mui/material";
// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
// import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="In search of a talent?" />
        {/* <Header title="Shrramana's Profile" subtitle="Welcome to 6440 dashboard" /> */}

      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >


        {/* ROW 2 */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Covered Geographical Regions
              </Typography>
            </Box>
          </Box>
          <Box height="50px"></Box>
          <Box height="300px" ml="-20px 0 0 0" display="flex"
          alignItems="center" justifyContent="center" borderRadius="10%">
            <img
                  alt="USA"
                  width="400px"
                  height="350px"
                  src={`../../image/USA.png`}
                //   style={{ cursor: "pointer", borderRadius: "50%" }}
                />
          </Box>
        </Box> */}



{/* 

        <Box
          gridColumn="span 4"
          gridRow="span 3"
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
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Data
            </Typography>
          </Box>
          <Box p="15px" borderBottom={`4px solid ${colors.primary[500]}`}>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Clinical Trial
            </Typography>
            <Box p="15px">
            <Typography color={colors.grey[100]} variant="p" fontWeight="600">
              Details of ongoing Drug development
            </Typography>
            </Box>
            </Box>

            <Box p="15px" borderBottom={`4px solid ${colors.primary[500]}`}>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Drugs
            </Typography>
            <Box p="15px">
            <Typography color={colors.grey[100]} variant="p" fontWeight="600">
              List of available drugs in the market
            </Typography>
            </Box>            
            </Box>

            <Box p="15px" borderBottom={`4px solid ${colors.primary[500]}`}>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Consumer Report
            </Typography>
            <Box p="15px">
            <Typography color={colors.grey[100]} variant="p" fontWeight="600">
              Average patient usage in the region for respective drugs till previous year
            </Typography>
            </Box>            
            </Box>

        </Box> */}


        <Box
          gridColumn="span 11"
          gridRow="span 4"
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
            <Typography color={colors.grey[100]} variant="h4" fontWeight="600" >
              Hi there!
            </Typography>
          </Box>
          <Box p="15px" >
            <Typography color={colors.grey[100]} variant="h3" fontWeight="600" >
              My name is Shrramana
            </Typography>
            <Box p="15px" borderBottom={`4px solid ${colors.primary[500]}`}>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="500">
              I am Bioinformatics master's student at Georgia Institute of Technology, USA expecting to graduate in December 2024.<br></br>
              Currently looking for career opportunities in the Healthcare, Biotech, or Life Sciences sectors. <br></br>
              I possess a wide range of technical skills and substantial project experience, and I am eager to transition my career into these domains.<br></br>              
            </Typography>

            </Box>
            <Box p="15px" borderBottom={`4px solid ${colors.primary[500]}`}>
              <Typography color={colors.grey[100]} variant="h5" fontWeight="500" textAlign="center">
                <br></br><br></br>
                  Check out my Academics, Work experince, Projects, Skillset, and download my resume through the navigation menu.
              </Typography>
          </Box>
          <Box p="15px">
              <Typography color={colors.grey[100]} variant="h5" fontWeight="500" textAlign="center">
                <br></br>
                  Contact: shrramanacb@gmail.com<br></br>                  
                  <a href="https://www.linkedin.com/in/shrramana/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>LinkedIn </a><br></br>
              </Typography>
          </Box>
            </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Dashboard;
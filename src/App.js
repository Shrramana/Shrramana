// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Skills from "./scenes/Skills";
import Projects from "./scenes/Projects";
import Report from "./scenes/Report";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
import Pie from "./scenes/pie";


import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const[theme,coloMode] = useMode();
  return (
    <ColorModeContext.Provider value = {coloMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Routes>
        <Route path="/" element={<Dashboard />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Report" element={<Report />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              <Route path="/pie" element={<Pie />} />
              {/* <Route path="/line" element={<Line />} /> */}

        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

import RTL from "./components/RTL";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Layout from "./components/Layout";
import Test from "./components/Test";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "'Vazirmatn', 'Roboto', sans-serif",
  },
});
function App() {
  return (
    <BrowserRouter>
      <RTL>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Layout theme={theme} />} />
            <Route path="test" element={<Test />} />
          </Routes>
        </ThemeProvider>
      </RTL>
    </BrowserRouter>
  );
}

export default App;

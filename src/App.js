import RTL from "./components/RTL";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./pages/Home";
import Test from "./pages/Test";

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
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="test" element={<Test />} />
          </Routes>
        </ThemeProvider>
      </RTL>
    </BrowserRouter>
  );
}

export default App;

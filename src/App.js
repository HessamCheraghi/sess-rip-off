import RTL from "./components/RTL";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//components
import Layout from "./components/Layout";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "'Vazirmatn', 'Roboto',sans-serif",
  },
});
function App() {
  return (
    <RTL>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </RTL>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./components/home/HomePage";
import Pages from "./components/Pages";

export default function App() {
  const pages = Pages();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {pages.map((page) => (
            <Route
              key={page.path}
              false
              path={page.path}
              element={page.element}
            />
          ))}
          <Route element={<HomePage />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

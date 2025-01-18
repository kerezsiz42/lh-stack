import { Container, Box } from "@mui/material";

export function Main() {
  return (
    <Container maxWidth={false} sx={{ bgcolor: "#1e1e2e", height: "100%" }}>
      <Box sx={{ width: "100%", height: "100px" }} />
    </Container>
  );
}

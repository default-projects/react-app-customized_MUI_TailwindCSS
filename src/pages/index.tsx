import React from "react";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Layout } from "../components/layout/layout";

const Dashboard = () => {
  return (
    <Layout>
      <DashboardWrapper>
        <Stack sx={{ height: "200vh" }}></Stack>
      </DashboardWrapper>
    </Layout>
  )
}

const DashboardWrapper = styled(Stack)(({ theme }) => ({
  padding: "100px 80px 30px 30px",
  minHeight: "100vh",

  gap: 25,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-evenly",

  [theme.breakpoints.down("lg")]: {
    padding: "30px 20px 0px 20px"
  }
}))

export { Dashboard };
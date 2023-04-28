import React from "react";
import { Button, TextField, Box, Typography, Link } from "@mui/material";
import Layout from "@/components/Layout/Layout";
import styles from "./Login.module.scss";

const index = () => {
  return (
    <>
      <Layout>
        <div className={styles.Login}>
          <Box
            className={styles.Login_Box}
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: "400px",
              mx: "auto",
              mt: 8,
              p: 4,
              boxShadow: 7,
              borderRadius: 1,
              bgcolor: "background.paper",
            }}
            noValidate
          >
            <Typography component="h1" variant="h5" mb={5}>
              Sign in
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userId"
              label="ユーザーID"
              name="userId"
              autoComplete="userId"
              autoFocus
              sx={{ mb: 2 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="パスワード"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ mb: 5 }}
            />
            <Button
              className={styles.Login_Box_Button}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Link href="#" variant="body2" sx={{ mt: 3, mb: 3 }}>
              Forgot password?
            </Link>
          </Box>
        </div>
      </Layout>
    </>
  );
};

export default index;

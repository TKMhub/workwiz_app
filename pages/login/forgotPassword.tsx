import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./Login.module.scss";
import Layout from "@/components/Layout";

const forgotPassword = () => {
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
            <Typography component="h1" variant="h5" mb={3}>
              Forgot Password
            </Typography>
            <Typography variant="body2" mb={2}>
              以下にメールアドレスを入力してください。パスワードをリセットするためのリンクが送信されます。
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="メールアドレス"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ mb: 2 }}
            />
            <Button
              className={styles.Login_Box_Button}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Reset Link
            </Button>
            <Link href="/login" className={styles.Login_Box_Link}>
              Back to Sign In
            </Link>
          </Box>
        </div>
      </Layout>
    </>
  );
};

export default forgotPassword;

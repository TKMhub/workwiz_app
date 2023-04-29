import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Layout from "@/components/Layout/Layout";
import styles from "./Login.module.scss";
import Link from "next/link";

const index = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

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
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              sx={{ mb: 5 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      color="primary"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
            <Link
              href="/login/forgotPassword"
              className={styles.Login_Box_Link}
            >
              Forgot password?
            </Link>
          </Box>
        </div>
      </Layout>
    </>
  );
};

export default index;

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
import Layout from "@/components/Layout";
import styles from "./Login.module.scss";
import Link from "next/link";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
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
            Sign Up
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="useriD"
            label="ユーザーID"
            type="useriD"
            id="useriD"
            autoComplete="current-useriD"
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
              onFocus={handleFocus}
              onBlur={handleBlur}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      color={isFocused ? "primary" : "default"}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      sx={{
                        fontSize: "1.3rem",
                      }}
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
            Sign Up
          </Button>
          <Link
              href="/login"
              className={styles.Login_Box_Link}
            >
              Already have an account? Sign In
            </Link>
        </Box>
      </div>
    </Layout>
  );
};

export default SignUp;

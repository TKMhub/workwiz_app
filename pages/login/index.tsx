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

import { styled } from "@mui/system";

const index = () => {
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

  const ButtonSpace = styled("div")({
    marginRight: "20px",
  });
  
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#fff",
    border: "2px solid #0046c9",
    color: "#002A76",
    fontWeight: "600",
    width: "100%",
    "&:hover": {
      backgroundColor: "#002A76",
      color: "#fff",
      fontWeight: "600",
    },
  }));

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
                        fontSize: "1rem",
                      }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* <Button
              className={styles.Login_Box_Button}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button> */}
            <ButtonSpace>
                <StyledButton variant="contained">Sign in</StyledButton>
            </ButtonSpace>
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

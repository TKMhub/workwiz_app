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
import Layout from "@/components/LayoutLoginBefore";
import styles from "./Login.module.scss";
import Link from "next/link";
import axios from 'axios';
import Cookie from 'js-cookie';
import { Router, useRouter } from "next/router";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const [email, setEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/create_user/`, {
        email,
        userID,
        password
      });
      console.log("新規 成功" + response.data);
      if (response.data.refresh && response.data.access) {
        // Save the JWT token and redirect to /pdfup
        localStorage.setItem("token", response.data.access);
        Cookie.set('token', response.data.access, { path: '/' });
        router.push('/pdfup');
      }
    } catch (error) {
      console.error(error);
    }
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
          onSubmit={handleSubmit}
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
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setUserID(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
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

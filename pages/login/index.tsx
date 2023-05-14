import React, { useState } from 'react';
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
import loginUser from "../api/login";
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

const index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleChangeUserID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await loginUser(userID, password);
    if (result.success) {
      if (result.token) { 
        console.log('ログインに成功しました:', result.token);
        localStorage.setItem("token", result.token);
        Cookie.set('token', result.token, { path: '/' });
        router.push('/pdfup');
      } else {
        console.error('トークンが取得できませんでした');
      }
    } else {
      console.error('ログインに失敗しました:', result.message);
    }
    
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
            onSubmit={handleSubmit}
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
              id="userID"
              label="ユーザーID"
              name="userID"
              autoComplete="userID"
              autoFocus
              sx={{ mb: 2 }}
              value={userID}
              onChange={handleChangeUserID}
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
              value={password} // 状態をバインド
            onChange={handleChangePassword} // onChangeハンドラを追加
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
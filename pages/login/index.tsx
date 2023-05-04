import React, { useState } from "react";
import { login, get_nickname } from "@/pages/api/apiClient";
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

const index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUserId = (event:any) => {
    setUserId(event.target.value);
  };

  const handleChangePassword = (event:any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event:any): Promise<void> => {
    event.preventDefault();
    try {
      console.log( 'ユーザーID:',userId);
      console.log( 'パスワード:',password);
      const { access_token } = await login(userId, password);

      const data = await get_nickname(access_token);

      console.log('ニックネーム:', data.nickname);
    } catch (error) {
      console.error('ログインに失敗しました:', error);
    }
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
            onSubmit={handleSubmit} // ここにonSubmitイベントハンドラを追加
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
              value={userId} // 状態をバインド
            onChange={handleChangeUserId} // onChangeハンドラを追加
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
            {/* <ButtonSpace>
                <StyledButton variant="contained">Sign in</StyledButton>
            </ButtonSpace> */}
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

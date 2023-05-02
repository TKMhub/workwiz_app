import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, TextField, Box, Typography, Snackbar } from "@mui/material";
import styles from "./Contact.module.scss";
import Layout from "@/components/Layout/Layout";
import Footer from "@/components/Layout/Footer/Footer";
import Alert from "@mui/material/Alert";

type FormData = {
    name: string;
    email: string;
    message: string;
  };

const index = () => {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error sending email");

      setFormData({ name: "", email: "", message: "" });
      setSnackbarMessage("Message sent successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Failed to send the message.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <>
      <Layout>
        <div className={styles.ContactForm}>
          <Box
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
            onSubmit={handleSubmit} // handleSubmit関数を追加
            noValidate
          >
            <Typography component="h1" variant="h5" mb={3}>
              Contact Us
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              sx={{ mb: 2 }}
              value={formData.name} // stateの値を設定
              onChange={handleChange} // 入力時にhandleChange関数を実行
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{ mb: 2 }}
              value={formData.email} // stateの値を設定
              onChange={handleChange} // 入力時にhandleChange関数を実行
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline
              rows={4}
              sx={{ mb: 2 }}
              value={formData.message} // stateの値を設定
              onChange={handleChange} // 入力時にhandleChange関数を実行
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </div>
      </Layout>
      <Footer />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
        </Snackbar>
    </>
  );
};

export default index;

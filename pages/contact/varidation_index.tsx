import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, Box, Typography, Snackbar } from "@mui/material";
import Layout from "@/components/LayoutLoginBefore";
import Footer from "@/components/Footer";
import Alert from "@mui/material/Alert";
import FormTextField from "@/components/FormTextField";
import styles from "./Contact.module.scss";

type FormData = {
  name: string | null;
  email: string | null;
  message: string | null;
};

const index = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

  const validateForm = () => {
    let errors: Partial<FormData> = {
      name: null,
      email: null,
      message: null,
    };

    if (!formData.name) {
      errors = { ...errors, name: "Please enter your name" };
    }

    if (!formData.email) {
      errors = { ...errors, email: "Please enter your email address" };
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors = { ...errors, email: "Please enter a valid email address" };
    }

    if (!formData.message) {
      errors = { ...errors, message: "Please enter your message" };
    }

    return errors;
  };

  const errors = validateForm();

  const isNameError = !!errors["name"];
  const isEmailError = !!errors["email"];
  const isMessageError = !!errors["message"];

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
            onSubmit={handleSubmit}
            noValidate
          >
            <Typography component="h1" variant="h5" mb={3}>
              Contact Us
            </Typography>
            <FormTextField
              label="名前"
              name="name"
              value={formData.name}
              error={errors["name"]}
              onChange={handleChange}
            />
            <FormTextField
              label="メールアドレス"
              name="email"
              value={formData.email}
              error={errors["email"]}
              onChange={handleChange}
            />
            <FormTextField
              label="メッセージ"
              name="message"
              value={formData.message}
              error={errors["message"]}
              onChange={handleChange}
              multiline
              rows={4}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isNameError || isEmailError || isMessageError}
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
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default index;

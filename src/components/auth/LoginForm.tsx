import React, { ReactElement, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { Box, TextField, Button } from "@mui/material";

import { loginRequested } from "../../redux/features/auth/authSlice";
// import styles from './styles.module.scss'

export default function LoginForm(): ReactElement {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("entered in submit", userData);
    dispatch(loginRequested(userData));
  };

  const handleChange = (event: any): void => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Box
    // className={styles.formContainer}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        //   className={styles.form}
      >
        <TextField
          required
          id="outlined-required"
          label="Usename"
          type="text"
          name="username"
          onChange={(event) => handleChange(event)}
          // value={email}
          //   className={styles.textfield}
        />
        <TextField
          required
          name="password"
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={(event) => handleChange(event)}
          //   value={password}
          //   className={styles.textfield}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            margin: "20px",
            paddingRight: "40px",
            paddingLeft: "40px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

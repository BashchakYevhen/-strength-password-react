import React from 'react';
import { Box } from "@mui/material"
import PasswordInput from './components/passwordInput/passwordInput';
import StrengthIndicator from './components/strengthIndicator/strangthIndicator';
import { useState } from "react"


const App: React.FC = () => {
  const [passwordForce, setPasswordForce] = useState<number>(999)
  const colors = ["gray", "gray", "gray"]
  switch (passwordForce) {
    case 1:
      for (let index = 0; index < passwordForce; index++) {
        colors.splice(0, passwordForce, "red")
      }
      break;
    case 2:
      for (let index = 0; index < passwordForce; index++) {
        colors.splice(0, passwordForce, "yellow", "yellow")
      }
      break;
    case 3:
      for (let index = 0; index < passwordForce; index++) {
        colors.splice(0, passwordForce, "green", "green", "green")
      }
      break;
    case 0:
      for (let index = 0; index < 3; index++) {
        colors.splice(0, 3, "red", "red", "red")
      }
      break;
    default:
      for (let index = 0; index < 3; index++) {
        colors.splice(0, 3, "gray", "gray", "gray")
      }
      break;
  }


  return (
    <Box sx={{ my: "20px", mx: 'auto' }}>
      <PasswordInput setPasswordForce={setPasswordForce} />
      <StrengthIndicator colors={colors} />
    </Box>
  );
}

export default App;

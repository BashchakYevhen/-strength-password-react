import React from 'react';
import { Box } from "@mui/material"
import PasswordInput from './components/passwordInput/passwordInput';
import StrengthIndicator from './components/strengthIndicator/strangthIndicator';
import { useState } from "react";

const App: React.FC = () => {
  const [passwordForce, setPasswordForce] = useState<number>(0)
  const getClassName = (passwordForce: number) => {
    switch (passwordForce) {
      case 1:
        return "short"
      case 2:
        return "weak";
      case 3:
        return "middle";
      case 4:
        return "strong"
      default:
        return ''
    }
  }
  return (
    <Box sx={{ my: "20px", mx: 'auto' }}>
      <PasswordInput setPasswordForce={setPasswordForce} />
      <StrengthIndicator getClass={getClassName(passwordForce)} />
    </Box>
  );
}

export default App;

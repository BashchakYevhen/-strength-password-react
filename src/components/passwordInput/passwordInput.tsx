import React, { Dispatch } from "react"
import { TextField } from "@mui/material"
interface IProp {
    setPasswordForce: Dispatch<React.SetStateAction<number>>
}


const PasswordInput: React.FC<IProp> = ({ setPasswordForce }) => {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value
        validatePassword(password)
    }
    const validatePassword = (password: string) => {
        let force = 0
        if (password.length >= 8) {

            const regex = /[$-/:-?{-~!"^_@`[\]]/;
            const letters = /[A-Z,a-z]+/.test(password);
            const digits = /[0-9]+/.test(password);
            const symbols = regex.test(password);
            const flags = [letters, digits, symbols]
            for (const flag of flags) {
                force += flag === true ? 1 : 0
            }
            setPasswordForce(force)
            return
        } if (password.length !== 0 && password.length < 8) {
            force = 0
            setPasswordForce(force)
        } if (password.length === 0) {
            force = 999
            setPasswordForce(force)
            return
        }
    }

    return (
        <TextField type="password" size="medium" placeholder="Password" onChange={handleChange} />
    )
}
export default PasswordInput
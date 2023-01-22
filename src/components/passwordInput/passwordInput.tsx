import React, { Dispatch } from "react"
import { TextField } from "@mui/material"
interface IProp {
    setPasswordForce: Dispatch<React.SetStateAction<number>>
}


const PasswordInput: React.FC<IProp> = ({ setPasswordForce }) => {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value
        passwordStrength(password)
    }
    const passwordStrength = (password: string) => {
        let force = 0
        const regex = /[$-/:-?{-~!"^_@`[\]]/g;
        const letters = /[A-Z,a-z]+/.test(password);
        const digits = /[0-9]+/.test(password);
        const symbols = regex.test(password);
        const length = password.length >= 8 ? true : false
        const flags = [letters, digits, symbols, length]
        for (const flag of flags) {
            force += flag === true ? 1 : 0
        }

        if (length) {
            setPasswordForce(force)
            return
        } if (letters || digits || symbols) {
            force = 1
            setPasswordForce(force)
            return
        }
        setPasswordForce(force)
        return
    }
    return (
        <TextField type="password" size="medium" placeholder="Password" onChange={handleChange} />
    )
}
export default PasswordInput
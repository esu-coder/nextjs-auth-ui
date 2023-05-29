import { InputError } from "../types/error";
import { signIn } from "next-auth/react";
import { LoginUserParams } from "../types";

export const getErrorMsg = (key: string, errors: InputError[]) => {
    if (errors.find(err => err.hasOwnProperty(key) !== undefined)) {
        const errorObj = errors.find(err => err.hasOwnProperty(key))
        return errorObj && errorObj[key]
    }
}

export const loginUser = async ({ email, password }: LoginUserParams) => {

    const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
    });

    return res;
}
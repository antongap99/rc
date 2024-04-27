import {FC, lazy} from "react";
import {LoginFormProps} from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    setTimeout(() => resolve(import('./LoginForm')), 1000);
}));

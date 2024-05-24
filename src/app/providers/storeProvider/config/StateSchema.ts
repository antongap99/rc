import { UserSchema } from 'entities/user/model/types/types';
import {LoginSchema} from "features/authByUserName";

export interface StateSchema {
	user: UserSchema,
	loginForm?: LoginSchema
}

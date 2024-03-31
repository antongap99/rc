import { UserSchema } from 'entities/user/model/types/types';
import { LoginSchema } from 'features/authByUserName/model/types/LoginSchema';

export interface StateSchema {
	user: UserSchema,
	loginForm?: LoginSchema
}

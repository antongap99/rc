import { UserSchema } from 'entities/user';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export const getUserData = (state: StateSchema) => state.user.authData;

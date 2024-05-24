import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export const getLoginState = (state: StateSchema) => state?.loginForm;

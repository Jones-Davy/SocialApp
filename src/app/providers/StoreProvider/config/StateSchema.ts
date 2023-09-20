import { UserSchema } from 'entitites/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  user: UserSchema;
  loginForm?: LoginSchema;
}

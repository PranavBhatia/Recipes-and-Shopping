import {User} from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
}

const initialState: State = {
  user: null
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = new User(
        (action as AuthActions.Login).payload.email,
        (action as AuthActions.Login).payload.userId,
        (action as AuthActions.Login).payload.token,
        (action as AuthActions.Login).payload.expirationDate
      );
      return {
        ...state,
        user
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}

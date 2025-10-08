import type { AnyAction } from "redux";

interface UserDetail {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  
}

interface UserState {
  userDetail: UserDetail | null;
  token: string | null;
}

const initialState: UserState = {
  userDetail: null,
  token: null
};

const userReducer = (state = initialState, action: AnyAction): UserState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userDetail: action.payload?.user,
        token: action.payload.token
      };
    case "LOGOUT":
      return {
        ...state,
        userDetail: null,
        token: null
      };
    default:
      return state;
  }
};

export default userReducer;

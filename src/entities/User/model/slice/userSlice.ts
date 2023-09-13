import {
	PayloadAction,
	createSlice,
} from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/User";
import { USER_LOCAL_STORAGE_KEY } from "@/shared/consts/localStorage";
import { setFeatureFlags } from "@/shared/lib/features";

const initialState: UserSchema = {
	authData: undefined,
	_inited: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (
			state,
			action: PayloadAction<User>
		) => {
			state.authData = action.payload;
		},
		initAuthData: (state) => {
			const user = localStorage.getItem(
				USER_LOCAL_STORAGE_KEY
			);
			if (user) {
				const jsonedUser: User = JSON.parse(user);
				state.authData = jsonedUser;
				setFeatureFlags(jsonedUser.features);
			}
			state._inited = true;
		},
		logout: (state) => {
			state.authData = undefined;
			localStorage.removeItem(
				USER_LOCAL_STORAGE_KEY
			);
		},
	},
});

export const {
	reducer: UserReducer,
	actions: UserActions,
} = userSlice;

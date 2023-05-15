export interface User {
	id: string;
	username: string;
}

export interface UserSchema {
	_initialised: boolean;
	authData?: User;
}

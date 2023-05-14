export type ErrorType = {
	[key: number]: string
}

export const serverErrors: ErrorType = {
	403: 'login_error',
	500: 'server_error'
};

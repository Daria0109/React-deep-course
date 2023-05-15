import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes } from 'shared/config/appRoutes/appRoutes';
import { selectAuthUserData } from 'entities/user';

interface IOwnProps {
	children: JSX.Element;
}

export const RequireAuth = (props: IOwnProps): JSX.Element => {
	const { children } = props;
	const auth = useSelector(selectAuthUserData);
	const location = useLocation();

	if (!auth) {
		return <Navigate to={AppRoutes.HOME} state={{ from: location }} replace />;
	}

	return children;
};

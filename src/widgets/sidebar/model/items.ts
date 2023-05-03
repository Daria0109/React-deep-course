import React from 'react';
import { AppRoutes } from 'shared/config/appRoutes/appRoutes';

export interface INavigationItem {
	path: string;
	text: string;
	icon?: React.VFC<React.SVGProps<SVGAElement>>
}

export const NavigationItemsList: INavigationItem[] = [
	{
		path: AppRoutes.HOME,
		text: 'home_nav'
	},
	{
		path: AppRoutes.ABOUT,
		text: 'about_nav'
	},
	{
		path: AppRoutes.PROFILE,
		text: 'profile_nav'
	}
];

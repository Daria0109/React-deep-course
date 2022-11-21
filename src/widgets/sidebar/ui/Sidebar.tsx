import { FC, useState } from 'react';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';

interface IOwnProps {
}

export const Sidebar: FC<IOwnProps> = (): JSX.Element => {
	const [collapsed, setCollapsed] = useState(false);
	
	const onToggle = () => setCollapsed(prev => !prev);
	
	return (
		<div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [])}>
			<button onClick={onToggle}>Toggle</button>
			<div className={classNames(cls.switchers)}>
				<ThemeSwitcher />
				{/*<LanguageSwitcher />*/}
			</div>
			
		</div>
	);
}

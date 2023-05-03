import { FC, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/langSwitcher/LangSwitcher';
import { Button } from 'shared/ui/button/Button';
import cls from './Sidebar.module.scss';

export const Sidebar: FC = (): JSX.Element => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = (): void => setCollapsed((prev) => !prev);

	return (
		<div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<Button onClick={onToggle}>Toggle</Button>
			<div className={classNames(cls.switchers)}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.langSwitcher} />
			</div>

		</div>
	);
};

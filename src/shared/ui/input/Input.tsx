import React, { FC, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'value'>;
interface IOwnProps extends HTMLInputProps {
	id?: string;
	value?: string;
	onChange?: (value: string) => void;
	label?: string;
	type?: string;
	className?: string;
}

export const Input: FC<IOwnProps> = memo((props: IOwnProps): JSX.Element => {
	const {
		id,
		value,
		onChange,
		className,
		label,
		type = 'text',
		...otherProps
	} = props;
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(cls.input, {}, [className])}>
			{label ? <label htmlFor={id}>{label}</label> : null}
			<input
				id={id}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={classNames(cls.input__field, {}, [className])}
				{...otherProps}
			/>
		</div>
	);
});

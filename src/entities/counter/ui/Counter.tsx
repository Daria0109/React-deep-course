import { Button } from 'shared/ui/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { selectCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
	const { t } = useTranslation();

	const dispatch = useDispatch();
	const value = useSelector(selectCounterValue);

	const increment = (): void => {
		dispatch(counterActions.increment());
	};

	const decrement = (): void => {
		dispatch(counterActions.decrement());
	};

	return (
		<>
			<h1 data-testid="value-title">{t(`{Value ${value}}`)}</h1>
			<Button
				data-testid="increment-btn"
				onClick={increment}
			>
				{t('Increment')}
			</Button>
			<Button
				data-testid="decrement-btn"
				onClick={decrement}
			>
				{t('Decrement')}
			</Button>
		</>
	);
};

import { useDispatch } from 'react-redux';
import { AppDispatchType } from 'app/providers/storeProvider';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatchType>();

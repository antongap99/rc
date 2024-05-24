import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type{ AppDispatch, RootState } from 'app/providers/storeProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type Dispatch = ReturnType<typeof useAppDispatch>

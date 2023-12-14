import { RootState } from '@/app/appStore'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
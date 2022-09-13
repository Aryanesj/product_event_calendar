import { useEffect } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { EVENTS_SELECTED_DATE_LS_KEY } from '../../../config/api';
import * as thunks from './thunks';

export const useEventCalendarMain = (): null => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const selectedDateFromLsStr = localStorage.getItem(
      EVENTS_SELECTED_DATE_LS_KEY,
    );

    const selectedDate = selectedDateFromLsStr
      ? Number.parseInt(selectedDateFromLsStr)
      : new Date().getTime();
    // const selectedDate = new Date().getTime();

    dispatch(thunks.fetchEventListThunk({ selectedDate }));
  }, []);

  return null;
};

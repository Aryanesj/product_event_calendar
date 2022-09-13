import { RequestSliceStateProperty, RootState } from '../../../store/types';
import { EventItem, EventList } from '../../../api/events/types';
import { EventFormShowMode } from './types';

export const getSelectedDate = (state: RootState): number =>
  state.eventCalendar.selectedDate;

export const getDatesOfSelectedInterval = (state: RootState): number[] =>
  state.eventCalendar.datesOfSelectedInterval;

export const getEventFormShowMode = (state: RootState): EventFormShowMode =>
  state.eventCalendar.eventFormShowMode;

export const getIsLoading = (state: RootState): boolean =>
  state.eventCalendar.addEventRequest.isLoading ||
  state.eventCalendar.fetchEventListRequest.isLoading ||
  state.eventCalendar.deleteEventRequest.isLoading ||
  state.eventCalendar.editEventRequest.isLoading ||
  state.eventCalendar.patchEventRequest.isLoading;

export const getFetchEventListRequest = (
  state: RootState,
): RequestSliceStateProperty<EventList> =>
  state.eventCalendar.fetchEventListRequest;

export const getEditEventRequest = (
  state: RootState,
): RequestSliceStateProperty<EventItem> => state.eventCalendar.editEventRequest;

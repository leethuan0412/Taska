import { createRef } from 'react';
import { LoadingProgressRef } from './index';
export const progressHolder = createRef<LoadingProgressRef>();

export const showLoading = () => {
  progressHolder.current?.show();
};

export const hideLoading = () => {
  progressHolder.current?.hide();
};

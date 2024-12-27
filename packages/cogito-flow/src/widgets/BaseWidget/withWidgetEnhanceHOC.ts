import { flow } from 'lodash-es';
import withBase from './withBase';

export const withWidgetEnhanceHOC = (WrappWidget: React.ReactNode) => {
  return flow([withBase])(WrappWidget);
};

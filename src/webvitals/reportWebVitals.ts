import { ReportHandler } from 'web-vitals';
import isFunction from 'lodash/isFunction';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && isFunction(onPerfEntry)) {
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
      return true;
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
  }
};

export default reportWebVitals;

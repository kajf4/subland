import { REQUEST_TYPE } from 'constants/RequestType';
import { get, post, CancelToken } from 'services/api';

type RequestList = {
  [key: string]: number;
};

const REQUEST_LIST: RequestList = {};
const MIN_TIME_FOR_DUPLICATE_REQUEST = 1000;

interface Properties {
  url: string;
  type: 'GET' | 'POST';
  transformer: (data: any) => unknown;
  inputTransformer: (data: any) => unknown;
}

export function apiRequestObject({
  url,
  transformer,
  inputTransformer,
  type = REQUEST_TYPE.GET
}: Properties) {
  const source = CancelToken.source();

  const apiCall = (data: unknown, options = {}) => {
    // Cancel Duplicate Request
    const REQUEST_HASH = `[${type}][${url}][${JSON.stringify(data)}]`;

    if (!!REQUEST_LIST[REQUEST_HASH]) {
      const diffTime = Date.now() - REQUEST_LIST[REQUEST_HASH];
      if (diffTime < MIN_TIME_FOR_DUPLICATE_REQUEST) {
        delete REQUEST_LIST[REQUEST_HASH];
        // eslint-disable-next-line no-throw-literal
        throw 'Request was cancelled';
      } else {
        REQUEST_LIST[REQUEST_HASH] = Date.now();
      }
    } else {
      REQUEST_LIST[REQUEST_HASH] = Date.now();
    }

    // start New Request
    const moderatedOptions = { ...options };
    const transformedData = inputTransformer ? inputTransformer(data) : data;
    const dataIsFormData = transformedData instanceof FormData;
    const modifiedData = dataIsFormData ? data : transformedData;

    return new Promise((resolve, reject) => {
      try {
        // RESPONSE
        const handleResponse = (response: unknown) => {
          if (transformer) {
            resolve(transformer({ data: response }));
          }
          resolve(response);
        };
        // GET
        if (type === REQUEST_TYPE.GET) {
          get({
            url,
            config: {
              params: modifiedData,
              cancelToken: source.token,
              ...moderatedOptions
            }
          }).then(handleResponse);
        }
        // POST
        if (type === REQUEST_TYPE.POST) {
          post({
            url,
            data: modifiedData,
            config: {
              cancelToken: source.token,
              ...moderatedOptions
            }
          }).then(handleResponse);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  apiCall.cancel = () => {
    source.cancel('Request was cancelled');
  };
  apiCall.url = url;
  return apiCall;
}

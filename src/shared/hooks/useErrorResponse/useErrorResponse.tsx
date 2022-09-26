import { IError } from '@redux/components/errors/__types__';
import { saveError } from '@redux/components/errors/errors.slice';
import { useAppDispatch } from '@redux/hooks';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { isFetchBaseQueryError } from '@shared/utils/isFetchBaseQueryError';

const useErrorResponse = () => {
  const dispatch = useAppDispatch();

  const checkError = (isError: boolean, error: FetchBaseQueryError | SerializedError) => {
    if (error) {
      if (isFetchBaseQueryError(error)) {
        dispatch(
          saveError({
            isError: isError,
            data: error.data,
            status: error.status,
          } as IError),
        );
      } else {
        dispatch(
          saveError({
            isError: isError,
            data: error.message,
            status: error.code,
          } as unknown as IError),
        );
      }
    }
  };

  return [checkError];
};

export default useErrorResponse;

import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const addNewLeadPOST = (Constants, { id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/add-new-lead`, {
    body: JSON.stringify({ id: id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useAddNewLeadPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => addNewLeadPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchAddNewLeadPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useAddNewLeadPOST(
    { id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchAddNewLead: refetch });
};

export const addNewUserPOST = (
  Constants,
  {
    agent_license,
    agent_username,
    comp_name,
    comp_number,
    email,
    first_name,
    mobile,
    operators,
    password,
    reg_no,
    terms,
    user_type,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/add/new/user`, {
    body: JSON.stringify({
      first_name: first_name,
      email: email,
      password: password,
      comp_name: comp_name,
      comp_number: comp_number,
      reg_no: reg_no,
      mobile: mobile,
      agent_username: agent_username,
      agent_license: agent_license,
      operators: operators,
      terms: terms,
      user_type: user_type,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useAddNewUserPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => addNewUserPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchAddNewUserPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  agent_license,
  agent_username,
  comp_name,
  comp_number,
  email,
  first_name,
  mobile,
  operators,
  password,
  reg_no,
  terms,
  user_type,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useAddNewUserPOST(
    {
      agent_license,
      agent_username,
      comp_name,
      comp_number,
      email,
      first_name,
      mobile,
      operators,
      password,
      reg_no,
      terms,
      user_type,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchAddNewUser: refetch });
};

export const addVehiclePOST = (Constants, { user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/add-vechicle`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useAddVehiclePOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => addVehiclePOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Vehicle', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Vehicle');
        queryClient.invalidateQueries('Vehicles');
      },
    }
  );
};

export const FetchAddVehiclePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useAddVehiclePOST(
    { user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchAddVehicle: refetch });
};

export const bookingSummaryAllPOST = (
  Constants,
  { id, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/booking-summary-all`, {
    body: JSON.stringify({ id: id, user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useBookingSummaryAllPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      bookingSummaryAllPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchBookingSummaryAllPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useBookingSummaryAllPOST(
    { id, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchBookingSummaryAll: refetch });
};

export const bookingSummaryDetailPOST = (
  Constants,
  { id, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/booking/summary/detail`, {
    body: JSON.stringify({ id: id, user_id: user_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useBookingSummaryDetailPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      bookingSummaryDetailPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchBookingSummaryDetailPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useBookingSummaryDetailPOST(
    { id, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchBookingSummaryDetail: refetch,
  });
};

export const bookingSummarySinglePOST = (
  Constants,
  { user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/booking-summary-single`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useBookingSummarySinglePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      bookingSummarySinglePOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchBookingSummarySinglePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useBookingSummarySinglePOST(
    { user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchBookingSummarySingle: refetch,
  });
};

export const cancelReasonPOST = (
  Constants,
  { book_id, cancel_reason, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/cancel-reason`, {
    body: JSON.stringify({
      user_id: user_id,
      book_id: book_id,
      cancel_reason: cancel_reason,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useCancelReasonPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => cancelReasonPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchCancelReasonPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  book_id,
  cancel_reason,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useCancelReasonPOST(
    { book_id, cancel_reason, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchCancelReason: refetch });
};

export const changePwdPOST = (
  Constants,
  { new_password, old_password, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/change-pwd`, {
    body: JSON.stringify({
      user_id: user_id,
      old_password: old_password,
      new_password: new_password,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useChangePwdPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => changePwdPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('change password', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('change password');
        queryClient.invalidateQueries('change passwords');
      },
    }
  );
};

export const FetchChangePwdPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  new_password,
  old_password,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useChangePwdPOST(
    { new_password, old_password, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchChangePwd: refetch });
};

export const checkFcmPOST = (
  Constants,
  { fcm_token, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/checkfcm`, {
    body: JSON.stringify({ user_id: user_id, fcm_token: fcm_token }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useCheckFcmPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => checkFcmPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchCheckFcmPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  fcm_token,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useCheckFcmPOST(
    { fcm_token, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchCheckFcm: refetch });
};

export const companyInformationPOST = (Constants, { id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/view-company-info`, {
    body: JSON.stringify({ operator_id: id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useCompanyInformationPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      companyInformationPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Profile', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Profile');
        queryClient.invalidateQueries('Profiles');
      },
    }
  );
};

export const FetchCompanyInformationPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useCompanyInformationPOST(
    { id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchCompanyInformation: refetch });
};

export const distanceCostPOST = (Constants, _args, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/distance-cost`, {
    body: JSON.stringify({ key: 'value' }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useDistanceCostPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => distanceCostPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchDistanceCostPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useDistanceCostPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchDistanceCost: refetch });
};

export const driverBookingOngoingStatusPOST = (
  Constants,
  { user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/driver/booking/ongoing-status`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useDriverBookingOngoingStatusPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      driverBookingOngoingStatusPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchDriverBookingOngoingStatusPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useDriverBookingOngoingStatusPOST(
    { user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchDriverBookingOngoingStatus: refetch,
  });
};

export const driverJobListPOST = (Constants, { user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/driver/job/list`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useDriverJobListPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => driverJobListPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchDriverJobListPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useDriverJobListPOST(
    { user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchDriverJobList: refetch });
};

export const editUserPOST = (Constants, { user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/edit-user`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useEditUserPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => editUserPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchEditUserPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useEditUserPOST(
    { user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchEditUser: refetch });
};

export const finishedRidePOST = (Constants, { id, owner_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/finished-ride`, {
    body: JSON.stringify({ id: id, owner_id: owner_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useFinishedRidePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => finishedRidePOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchFinishedRidePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
  owner_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useFinishedRidePOST(
    { id, owner_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFinishedRide: refetch });
};

export const forgotPwdPOST = (Constants, { mobile }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/forgot-pwd`, {
    body: JSON.stringify({ mobile: mobile }),
    headers: {
      Accept: 'application/json',
      Auhtorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useForgotPwdPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => forgotPwdPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Forget ', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Forget ');
        queryClient.invalidateQueries('Forget s');
      },
    }
  );
};

export const FetchForgotPwdPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  mobile,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useForgotPwdPOST(
    { mobile },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchForgotPwd: refetch });
};

export const getBidsPOST = (
  Constants,
  { bids, desc, id, user_id, vehicle },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/mybooking`, {
    body: JSON.stringify({
      user_id: user_id,
      bids: bids,
      vehicle: vehicle,
      id: id,
      desc: desc,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useGetBidsPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => getBidsPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchGetBidsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  bids,
  desc,
  id,
  user_id,
  vehicle,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useGetBidsPOST(
    { bids, desc, id, user_id, vehicle },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetBids: refetch });
};

export const getOwnerDriverListPOST = (
  Constants,
  { owner_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner-driver-all-lists`, {
    body: JSON.stringify({ owner_id: owner_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useGetOwnerDriverListPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      getOwnerDriverListPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchGetOwnerDriverListPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  owner_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useGetOwnerDriverListPOST(
    { owner_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetOwnerDriverList: refetch });
};

export const getOwnerVehicleAllListPOST = (
  Constants,
  { owner_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner-vehicle-all-lists`, {
    body: JSON.stringify({ owner_id: owner_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useGetOwnerVehicleAllListPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      getOwnerVehicleAllListPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchGetOwnerVehicleAllListPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  owner_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useGetOwnerVehicleAllListPOST(
    { owner_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchGetOwnerVehicleAllList: refetch,
  });
};

export const identityEditPOST = (Constants, { user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/identity-edit`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useIdentityEditPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => identityEditPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchIdentityEditPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useIdentityEditPOST(
    { user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchIdentityEdit: refetch });
};

export const loadTypesPOST = (
  Constants,
  { display, load_type },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/loadtypes`, {
    body: JSON.stringify({ load_type: load_type, display: display }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useLoadTypesPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => loadTypesPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchLoadTypesPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  display,
  load_type,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useLoadTypesPOST(
    { display, load_type },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchLoadTypes: refetch });
};

export const loadTypesHomePOST = (Constants, _args, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/loadtypeshome`, {
    body: JSON.stringify({ key: 'value' }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useLoadTypesHomePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => loadTypesHomePOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchLoadTypesHomePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useLoadTypesHomePOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchLoadTypesHome: refetch });
};

export const logOutPOST = (Constants, { id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/logout`, {
    body: JSON.stringify({ user_id: id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useLogOutPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => logOutPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('login', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('login');
        queryClient.invalidateQueries('logins');
      },
    }
  );
};

export const FetchLogOutPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useLogOutPOST(
    { id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchLogOut: refetch });
};

export const loginPOST = (
  Constants,
  { email, password, user_type },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/login`, {
    body: JSON.stringify({
      email: email,
      password: password,
      user_type: user_type,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useLoginPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => loginPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('login', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('login');
        queryClient.invalidateQueries('logins');
      },
    }
  );
};

export const FetchLoginPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email,
  password,
  user_type,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useLoginPOST(
    { email, password, user_type },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchLogin: refetch });
};

export const mobileOTPPOST = (Constants, { mobile, user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/mobile-otp`, {
    body: JSON.stringify({ mobile: mobile, user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useMobileOTPPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => mobileOTPPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchMobileOTPPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  mobile,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useMobileOTPPOST(
    { mobile, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchMobileOTP: refetch });
};

export const newAddOwnerPOST = (
  Constants,
  {
    certificate,
    comp_name,
    comp_phone,
    comp_reg_no,
    driving_license_back,
    driving_license_front,
    email,
    first_name,
    license_no,
    mobile,
    nrc_back,
    nrc_front,
    password,
    referral_code,
    user_type,
    vehicle_insurance,
    vehicle_reg_certificate,
    vehicle_reg_no,
    vehicle_type,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator-register`, {
    body: JSON.stringify({
      comp_name: comp_name,
      comp_phone: comp_phone,
      comp_reg_no: comp_reg_no,
      certificate: certificate,
      license_no: license_no,
      first_name: first_name,
      email: email,
      password: password,
      mobile: mobile,
      referral_code: referral_code,
      nrc_front: nrc_front,
      nrc_back: nrc_back,
      driving_license_front: driving_license_front,
      driving_licnese_back: driving_license_back,
      vehicle_type: vehicle_type,
      vehicle_reg_no: vehicle_reg_no,
      vehicle_reg_certificate: vehicle_reg_certificate,
      vehicle_insurance: vehicle_insurance,
      user_type: user_type,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useNewAddOwnerPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => newAddOwnerPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('register', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('register');
        queryClient.invalidateQueries('registers');
      },
    }
  );
};

export const FetchNewAddOwnerPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  certificate,
  comp_name,
  comp_phone,
  comp_reg_no,
  driving_license_back,
  driving_license_front,
  email,
  first_name,
  license_no,
  mobile,
  nrc_back,
  nrc_front,
  password,
  referral_code,
  user_type,
  vehicle_insurance,
  vehicle_reg_certificate,
  vehicle_reg_no,
  vehicle_type,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useNewAddOwnerPOST(
    {
      certificate,
      comp_name,
      comp_phone,
      comp_reg_no,
      driving_license_back,
      driving_license_front,
      email,
      first_name,
      license_no,
      mobile,
      nrc_back,
      nrc_front,
      password,
      referral_code,
      user_type,
      vehicle_insurance,
      vehicle_reg_certificate,
      vehicle_reg_no,
      vehicle_type,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchNewAddOwner: refetch });
};

export const newBidPOST = (
  Constants,
  {
    from,
    location,
    pick_up_date,
    to,
    user_id,
    user_landtitude,
    user_latitude,
    user_to_landtitude,
    user_to_latitude,
    vehicelgroup,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/new-bid`, {
    body: JSON.stringify({
      user_id: user_id,
      from: from,
      to: to,
      pick_up_date: pick_up_date,
      user_latitude: user_latitude,
      user_landtitude: user_landtitude,
      user_to_latitude: user_to_latitude,
      user_to_landtitude: user_to_landtitude,
      location: location,
      vehicelgroup: vehicelgroup,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useNewBidPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => newBidPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchNewBidPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  from,
  location,
  pick_up_date,
  to,
  user_id,
  user_landtitude,
  user_latitude,
  user_to_landtitude,
  user_to_latitude,
  vehicelgroup,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useNewBidPOST(
    {
      from,
      location,
      pick_up_date,
      to,
      user_id,
      user_landtitude,
      user_latitude,
      user_to_landtitude,
      user_to_latitude,
      vehicelgroup,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchNewBid: refetch });
};

export const newBookingTruckPOST = (
  Constants,
  {
    booking_type,
    comment,
    depot_contact_mobile,
    depot_contact_name,
    depot_location_id,
    depot_point_location,
    drop_contact_mobile,
    drop_contact_name,
    drop_location_id,
    drop_point_location,
    load_weight,
    no_of_truck,
    operator_id,
    pickup_contact_mobile,
    pickup_contact_name,
    pickup_date,
    pickup_location_id,
    pickup_point_location,
    provider_category,
    type_material,
    user_id,
    vech_id,
    vehicle_type,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/new-booking-truck`, {
    body: JSON.stringify({
      user_id: user_id,
      pickup_location_id: pickup_location_id,
      drop_location_id: drop_location_id,
      depot_location_id: depot_location_id,
      operator_id: operator_id,
      load_weight: load_weight,
      type_material: type_material,
      provider_category: provider_category,
      no_of_truck: no_of_truck,
      vehicle_type: vehicle_type,
      vech_id: vech_id,
      booking_type: booking_type,
      pickup_date: pickup_date,
      pickup_point_location: pickup_point_location,
      pickup_contact_name: pickup_contact_name,
      pickup_contact_mobile: pickup_contact_mobile,
      drop_point_location: drop_point_location,
      drop_contact_name: drop_contact_name,
      drop_contact_mobile: drop_contact_mobile,
      depot_point_location: depot_point_location,
      depot_contact_name: depot_contact_name,
      depot_contact_mobile: depot_contact_mobile,
      comment: comment,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useNewBookingTruckPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      newBookingTruckPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('bookingTruck', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('bookingTruck');
        queryClient.invalidateQueries('bookingTrucks');
      },
    }
  );
};

export const FetchNewBookingTruckPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  booking_type,
  comment,
  depot_contact_mobile,
  depot_contact_name,
  depot_location_id,
  depot_point_location,
  drop_contact_mobile,
  drop_contact_name,
  drop_location_id,
  drop_point_location,
  load_weight,
  no_of_truck,
  operator_id,
  pickup_contact_mobile,
  pickup_contact_name,
  pickup_date,
  pickup_location_id,
  pickup_point_location,
  provider_category,
  type_material,
  user_id,
  vech_id,
  vehicle_type,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useNewBookingTruckPOST(
    {
      booking_type,
      comment,
      depot_contact_mobile,
      depot_contact_name,
      depot_location_id,
      depot_point_location,
      drop_contact_mobile,
      drop_contact_name,
      drop_location_id,
      drop_point_location,
      load_weight,
      no_of_truck,
      operator_id,
      pickup_contact_mobile,
      pickup_contact_name,
      pickup_date,
      pickup_location_id,
      pickup_point_location,
      provider_category,
      type_material,
      user_id,
      vech_id,
      vehicle_type,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchNewBookingTruck: refetch });
};

export const newDriverPOST = (
  Constants,
  {
    adhar_back,
    adhar_image,
    lic,
    license_back,
    mobile,
    name,
    owner_id,
    pwd,
    vehicle_id,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/new-driver`, {
    body: JSON.stringify({
      owner_id: owner_id,
      vehicle_id: vehicle_id,
      name: name,
      lic: lic,
      license_back: license_back,
      adhar_image: adhar_image,
      adhar_back: adhar_back,
      mobile: mobile,
      pwd: pwd,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useNewDriverPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => newDriverPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchNewDriverPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  adhar_back,
  adhar_image,
  lic,
  license_back,
  mobile,
  name,
  owner_id,
  pwd,
  vehicle_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useNewDriverPOST(
    {
      adhar_back,
      adhar_image,
      lic,
      license_back,
      mobile,
      name,
      owner_id,
      pwd,
      vehicle_id,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchNewDriver: refetch });
};

export const newLeadListPOST = (Constants, { user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/new-lead-list`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useNewLeadListPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => newLeadListPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchNewLeadListPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useNewLeadListPOST(
    { user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchNewLeadList: refetch });
};

export const newVehiclePOST = (
  Constants,
  {
    capacity,
    insu,
    owner_id,
    rc,
    reg_details,
    vehicle_group_id,
    vehicle_id,
    vehicle_name,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/new-vehicle`, {
    body: JSON.stringify({
      owner_id: owner_id,
      vehicle_id: vehicle_id,
      vehicle_group_id: vehicle_group_id,
      reg_details: reg_details,
      vehicle_name: vehicle_name,
      rc: rc,
      insu: insu,
      capacity: capacity,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useNewVehiclePOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => newVehiclePOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchNewVehiclePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  capacity,
  insu,
  owner_id,
  rc,
  reg_details,
  vehicle_group_id,
  vehicle_id,
  vehicle_name,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useNewVehiclePOST(
    {
      capacity,
      insu,
      owner_id,
      rc,
      reg_details,
      vehicle_group_id,
      vehicle_id,
      vehicle_name,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchNewVehicle: refetch });
};

export const notificationsPOST = (Constants, { owner_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/notifications`, {
    body: JSON.stringify({ owner_id: owner_id }),
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVlMzBiMzA1MTQzNTUzMDJlYTMyNmQ4MGYwZWJiNmNhOTQyZmRjNzYxZjRmMzMwM2Q2MWQ1OTQzMzU3ODZjMDcyMDNhODgzMTA2NjdhZTU5In0.eyJhdWQiOiIxIiwianRpIjoiZWUzMGIzMDUxNDM1NTMwMmVhMzI2ZDgwZjBlYmI2Y2E5NDJmZGM3NjFmNGYzMzAzZDYxZDU5NDMzNTc4NmMwNzIwM2E4ODMxMDY2N2FlNTkiLCJpYXQiOjE3MDU1NjE2NzEsIm5iZiI6MTcwNTU2MTY3MSwiZXhwIjoxNzM3MTg0MDcxLCJzdWIiOiIxMjAiLCJzY29wZXMiOltdfQ.ULVfxmHHvyBT6E3X0tzdGz5GOe5Q2xhySE1wKRW6vGG1xwgGqwWwdiuJCsaUXnGTvi5eA21dKdGjwMwXiEOBe1vcjsjGtJbrTtoND-mCgmoZ-FBOVEUZ_ETiADkLkIZ_vDXbDrG-lef6ihDWBgkmOGHEw0xQF2gdalEmONdY4FG-A-OM8xzEUJhxe1FbGFZizBN354FhlRGOsGfeQjIsG29hhbBRQjiAXzEbXXdX5EG-xTYWYvoOA9xyG0lUhC_x6pyR533QXdHrvdurCz6608jY5mgxBUfKG4sPfnpY7ttBvnfc8D_ZHrwnN0sYRRevQuIvBGC3ipDucemFahoPedZD-AkKUv9IFYTwIHRrwgAHubpgO5uk6XH5Oa9zNeZRi213zoHRe8G9ZZP0HAzusXMnc_UD3mbunmvVDtmtPjweF-_ixc8fYjTV9od_BZEEUbGdxE3z1G8Rc-72LhBnlXYtvk_U_-8bx4iRyAsc6h46TF2FkD5GWHm1CgB8fMgc_vE92J5Dsu4gcDUwUlsCDeM_3ITXxxOgpFN3DxVx0CAVKw1QUpiKnW3WcXoZOg5XazGjTYK-duUQUZtaQkdcHpBGAEh2M9cgur9tJCnrwCUR-myP7qegZq8xaMEP5rZ3CC4_LiomEOIkaViPqYoP17wIsCUGvz2K1FMazKMIS8M',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useNotificationsPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => notificationsPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('notification', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('notification');
        queryClient.invalidateQueries('notifications');
      },
    }
  );
};

export const FetchNotificationsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  owner_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useNotificationsPOST(
    { owner_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchNotifications: refetch });
};

export const operatorBookingDetailByIdPOST = (
  Constants,
  { booking_id, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/booking-details-byId`, {
    body: JSON.stringify({ user_id: user_id, booking_id: booking_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOperatorBookingDetailByIdPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      operatorBookingDetailByIdPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('operator', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('operator');
        queryClient.invalidateQueries('operators');
      },
    }
  );
};

export const FetchOperatorBookingDetailByIdPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  booking_id,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOperatorBookingDetailByIdPOST(
    { booking_id, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOperatorBookingDetailById: refetch,
  });
};

export const operatorUserIdPOST = (Constants, { user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/new-lead-list`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOperatorUserIdPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      operatorUserIdPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('operator', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('operator');
        queryClient.invalidateQueries('operators');
      },
    }
  );
};

export const FetchOperatorUserIdPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOperatorUserIdPOST(
    { user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchOperatorUserId: refetch });
};

export const operatorVehicleListPOST = (
  Constants,
  { ownerid },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/get_vehicle_list`, {
    body: JSON.stringify({ ownerid: ownerid }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOperatorVehicleListPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      operatorVehicleListPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Vehicle', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Vehicle');
        queryClient.invalidateQueries('Vehicles');
      },
    }
  );
};

export const FetchOperatorVehicleListPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  ownerid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOperatorVehicleListPOST(
    { ownerid },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOperatorVehicleList: refetch,
  });
};

export const operatorViewDriverPOST = (
  Constants,
  { driver_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/view_driver`, {
    body: JSON.stringify({ driver_id: driver_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOperatorViewDriverPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      operatorViewDriverPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('operator', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('operator');
        queryClient.invalidateQueries('operators');
      },
    }
  );
};

export const FetchOperatorViewDriverPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  driver_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOperatorViewDriverPOST(
    { driver_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchOperatorViewDriver: refetch });
};

export const operatorViewVehiclePOST = (
  Constants,
  { vehicle_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/view_vehicle`, {
    body: JSON.stringify({ vehicle_id: vehicle_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOperatorViewVehiclePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      operatorViewVehiclePOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Vehicle', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Vehicle');
        queryClient.invalidateQueries('Vehicles');
      },
    }
  );
};

export const FetchOperatorViewVehiclePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  vehicle_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOperatorViewVehiclePOST(
    { vehicle_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOperatorViewVehicle: refetch,
  });
};

export const ownerActiveCheckPOST = (
  Constants,
  { status, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner-activecheck`, {
    body: JSON.stringify({ user_id: user_id, status: status }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerActiveCheckPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerActiveCheckPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerActiveCheckPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  status,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerActiveCheckPOST(
    { status, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchOwnerActiveCheck: refetch });
};

export const ownerBookStatusRejectPOST = (
  Constants,
  { id, reason, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner/bookstatus/reject`, {
    body: JSON.stringify({ user_id: user_id, id: id, reason: reason }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerBookStatusRejectPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerBookStatusRejectPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerBookStatusRejectPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
  reason,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerBookStatusRejectPOST(
    { id, reason, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOwnerBookStatusReject: refetch,
  });
};

export const ownerBookStatusUpdatePOST = (
  Constants,
  { driver_id, id, qty, status, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner-bookstatus-update`, {
    body: JSON.stringify({
      user_id: user_id,
      id: id,
      qty: qty,
      status: status,
      driver_id: driver_id,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerBookStatusUpdatePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerBookStatusUpdatePOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerBookStatusUpdatePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  driver_id,
  id,
  qty,
  status,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerBookStatusUpdatePOST(
    { driver_id, id, qty, status, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOwnerBookStatusUpdate: refetch,
  });
};

export const ownerBookingOngoingStatusPOST = (
  Constants,
  { user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner/booking/ongoing-status`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerBookingOngoingStatusPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerBookingOngoingStatusPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerBookingOngoingStatusPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerBookingOngoingStatusPOST(
    { user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOwnerBookingOngoingStatus: refetch,
  });
};

export const ownerDriverListViewPOST = (
  Constants,
  { id, owner_id, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner-driverlist-viw`, {
    body: JSON.stringify({ owner_id: owner_id, id: id, user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerDriverListViewPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerDriverListViewPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerDriverListViewPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
  owner_id,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerDriverListViewPOST(
    { id, owner_id, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOwnerDriverListView: refetch,
  });
};

export const ownerPutOngoingStatusPOST = (
  Constants,
  { user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner/booking/ongoing-status`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerPutOngoingStatusPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerPutOngoingStatusPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerPutOngoingStatusPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerPutOngoingStatusPOST(
    { user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOwnerPutOngoingStatus: refetch,
  });
};

export const ownerStartRidePOST = (
  Constants,
  { id, owner_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner-start-ride`, {
    body: JSON.stringify({ id: id, owner_id: owner_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerStartRidePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerStartRidePOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerStartRidePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
  owner_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerStartRidePOST(
    { id, owner_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchOwnerStartRide: refetch });
};

export const ownerUpdateStatusListPOST = (Constants, _args, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner-updatestatus-list`, {
    body: JSON.stringify({ key: 'value' }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerUpdateStatusListPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerUpdateStatusListPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerUpdateStatusListPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerUpdateStatusListPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOwnerUpdateStatusList: refetch,
  });
};

export const ownerVehicleListPOST = (Constants, { owner_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner-vechiclelist`, {
    body: JSON.stringify({ owner_id: owner_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerVehicleListPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerVehicleListPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerVehicleListPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  owner_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerVehicleListPOST(
    { owner_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchOwnerVehicleList: refetch });
};

export const ownerVehicleListAllPOST = (
  Constants,
  { owner_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner-vechiclelist/all`, {
    body: JSON.stringify({ owner_id: owner_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerVehicleListAllPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerVehicleListAllPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerVehicleListAllPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  owner_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerVehicleListAllPOST(
    { owner_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOwnerVehicleListAll: refetch,
  });
};

export const ownerVehicleListUpdatePOST = (
  Constants,
  { id, registr_number, user_id, vehicle_type },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner-vechiclelist-update`, {
    body: JSON.stringify({
      user_id: user_id,
      id: id,
      registr_number: registr_number,
      vehicle_type: vehicle_type,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerVehicleListUpdatePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerVehicleListUpdatePOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerVehicleListUpdatePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
  registr_number,
  user_id,
  vehicle_type,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerVehicleListUpdatePOST(
    { id, registr_number, user_id, vehicle_type },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOwnerVehicleListUpdate: refetch,
  });
};

export const ownerVehicleListViewPOST = (
  Constants,
  { id, owner_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/owner-vechiclelist-viw`, {
    body: JSON.stringify({ owner_id: owner_id, id: id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOwnerVehicleListViewPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      ownerVehicleListViewPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchOwnerVehicleListViewPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
  owner_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOwnerVehicleListViewPOST(
    { id, owner_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchOwnerVehicleListView: refetch,
  });
};

export const paymentDetailUserPOST = (Constants, { id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/payment/detail/user`, {
    body: JSON.stringify({ id: id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const usePaymentDetailUserPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      paymentDetailUserPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('payment detail', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('payment detail');
        queryClient.invalidateQueries('payment details');
      },
    }
  );
};

export const FetchPaymentDetailUserPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = usePaymentDetailUserPOST(
    { id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchPaymentDetailUser: refetch });
};

export const replaceDriverPOST = (
  Constants,
  { booking_truck_id, current_driver_id, new_driver_id, owner_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/replace_driver`, {
    body: JSON.stringify({
      booking_truck_id: booking_truck_id,
      owner_id: owner_id,
      current_driver_id: current_driver_id,
      new_driver_id: new_driver_id,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useReplaceDriverPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => replaceDriverPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchReplaceDriverPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  booking_truck_id,
  current_driver_id,
  new_driver_id,
  owner_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useReplaceDriverPOST(
    { booking_truck_id, current_driver_id, new_driver_id, owner_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchReplaceDriver: refetch });
};

export const requestBookingTruckPOST = (
  Constants,
  { book_id, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/request-booking-truck`, {
    body: JSON.stringify({ user_id: user_id, book_id: book_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useRequestBookingTruckPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      requestBookingTruckPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchRequestBookingTruckPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  book_id,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useRequestBookingTruckPOST(
    { book_id, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchRequestBookingTruck: refetch,
  });
};

export const resetPwdPOST = (
  Constants,
  { confirm_password, password, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/reset-pwd`, {
    body: JSON.stringify({
      user_id: user_id,
      password: password,
      confirm_password: confirm_password,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useResetPwdPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => resetPwdPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchResetPwdPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  confirm_password,
  password,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useResetPwdPOST(
    { confirm_password, password, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchResetPwd: refetch });
};

export const shipperCancleReasonPOST = (
  Constants,
  { book_id, cancel_reason, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/shipper-cancel-reason`, {
    body: JSON.stringify({
      user_id: user_id,
      book_id: book_id,
      cancel_reason: cancel_reason,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useShipperCancleReasonPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      shipperCancleReasonPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchShipperCancleReasonPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  book_id,
  cancel_reason,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useShipperCancleReasonPOST(
    { book_id, cancel_reason, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchShipperCancleReason: refetch,
  });
};

export const updateBookingTruckPOST = (
  Constants,
  {
    comment,
    drop_contact_mobile,
    drop_contact_name,
    drop_pointlocation,
    id,
    payment_type,
    pickup_contact_mobile,
    pickup_contact_name,
    pickup_date,
    pickup_point_location,
    truck_image,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/update-booking-truck`, {
    body: JSON.stringify({
      pickup_point_location: pickup_point_location,
      pickup_contact_name: pickup_contact_name,
      drop_pointlocation: drop_pointlocation,
      pickup_contact_mobile: pickup_contact_mobile,
      drop_contact_name: drop_contact_name,
      drop_contact_mobile: drop_contact_mobile,
      truck_image: truck_image,
      payment_type: payment_type,
      comment: comment,
      pickup_date: pickup_date,
      id: id,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUpdateBookingTruckPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateBookingTruckPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUpdateBookingTruckPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  comment,
  drop_contact_mobile,
  drop_contact_name,
  drop_pointlocation,
  id,
  payment_type,
  pickup_contact_mobile,
  pickup_contact_name,
  pickup_date,
  pickup_point_location,
  truck_image,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateBookingTruckPOST(
    {
      comment,
      drop_contact_mobile,
      drop_contact_name,
      drop_pointlocation,
      id,
      payment_type,
      pickup_contact_mobile,
      pickup_contact_name,
      pickup_date,
      pickup_point_location,
      truck_image,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUpdateBookingTruck: refetch });
};

export const updateIdentifyProofPOST = (
  Constants,
  { adhar_back, adhar_image, license_back, license_image, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/update-identity-proof`, {
    body: JSON.stringify({
      adhar_image: adhar_image,
      license_image: license_image,
      adhar_back: adhar_back,
      license_back: license_back,
      user_id: user_id,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUpdateIdentifyProofPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateIdentifyProofPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUpdateIdentifyProofPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  adhar_back,
  adhar_image,
  license_back,
  license_image,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateIdentifyProofPOST(
    { adhar_back, adhar_image, license_back, license_image, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchUpdateIdentifyProof: refetch,
  });
};

export const updateOTPPOST = (Constants, { otp, user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/update-otp`, {
    body: JSON.stringify({ user_id: user_id, otp: otp }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUpdateOTPPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => updateOTPPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUpdateOTPPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  otp,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateOTPPOST(
    { otp, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUpdateOTP: refetch });
};

export const updateOwnerDriverPOST = (
  Constants,
  { driver_uniq_id, mobile, name, owner_id, pwd, vehicle_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/update-owner-driver`, {
    body: JSON.stringify({
      driver_uniq_id: driver_uniq_id,
      vehicle_id: vehicle_id,
      name: name,
      owner_id: owner_id,
      mobile: mobile,
      pwd: pwd,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUpdateOwnerDriverPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateOwnerDriverPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUpdateOwnerDriverPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  driver_uniq_id,
  mobile,
  name,
  owner_id,
  pwd,
  vehicle_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateOwnerDriverPOST(
    { driver_uniq_id, mobile, name, owner_id, pwd, vehicle_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUpdateOwnerDriver: refetch });
};

export const updateOwnerVehiclePOST = (
  Constants,
  {
    capacity,
    owner_vehicle_unique_id,
    reg_details,
    vehicle_group_id,
    vehicle_id,
    vehicle_name,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/update-owner-vehicle`, {
    body: JSON.stringify({
      owner_vehicle_unique_id: owner_vehicle_unique_id,
      vehicle_id: vehicle_id,
      vehicle_group_id: vehicle_group_id,
      reg_details: reg_details,
      vehicle_name: vehicle_name,
      capacity: capacity,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUpdateOwnerVehiclePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateOwnerVehiclePOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUpdateOwnerVehiclePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  capacity,
  owner_vehicle_unique_id,
  reg_details,
  vehicle_group_id,
  vehicle_id,
  vehicle_name,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateOwnerVehiclePOST(
    {
      capacity,
      owner_vehicle_unique_id,
      reg_details,
      vehicle_group_id,
      vehicle_id,
      vehicle_name,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUpdateOwnerVehicle: refetch });
};

export const updateTermsCondsPOST = (
  Constants,
  { display, vehicle_groups },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/vehicle-groups`, {
    body: JSON.stringify({ vehicle_groups: vehicle_groups, display: display }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUpdateTermsCondsPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateTermsCondsPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUpdateTermsCondsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  display,
  vehicle_groups,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateTermsCondsPOST(
    { display, vehicle_groups },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUpdateTermsConds: refetch });
};

export const updateUserPOST = (
  Constants,
  {
    address,
    agent_license,
    comp_name,
    comp_number,
    email,
    first_name,
    mobile,
    registr_number,
    user_id,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/update-user`, {
    body: JSON.stringify({
      first_name: first_name,
      comp_name: comp_name,
      registr_number: registr_number,
      comp_number: comp_number,
      agent_license: agent_license,
      email: email,
      user_id: user_id,
      address: address,
      mobile: mobile,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUpdateUserPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => updateUserPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUpdateUserPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  address,
  agent_license,
  comp_name,
  comp_number,
  email,
  first_name,
  mobile,
  registr_number,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateUserPOST(
    {
      address,
      agent_license,
      comp_name,
      comp_number,
      email,
      first_name,
      mobile,
      registr_number,
      user_id,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUpdateUser: refetch });
};

export const updateVehiclePOST = (
  Constants,
  {
    prepared_path,
    registr_number,
    update_status,
    user_id,
    vechicle_id,
    vehicle_type,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/update-vechicle`, {
    body: JSON.stringify({
      registr_number: registr_number,
      vehicle_type: vehicle_type,
      vechicle_id: vechicle_id,
      prepared_path: prepared_path,
      update_status: update_status,
      user_id: user_id,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUpdateVehiclePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => updateVehiclePOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUpdateVehiclePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  prepared_path,
  registr_number,
  update_status,
  user_id,
  vechicle_id,
  vehicle_type,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateVehiclePOST(
    {
      prepared_path,
      registr_number,
      update_status,
      user_id,
      vechicle_id,
      vehicle_type,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUpdateVehicle: refetch });
};

export const updateVehicleEditPOST = (
  Constants,
  {
    operator_truck_image,
    registr_insurance,
    registr_number,
    registr_rc,
    user_id,
    vehicle_type,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/update-echicleedit`, {
    body: JSON.stringify({
      user_id: user_id,
      registr_number: registr_number,
      registr_rc: registr_rc,
      registr_insurance: registr_insurance,
      vehicle_type: vehicle_type,
      operator_truck_image: operator_truck_image,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUpdateVehicleEditPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateVehicleEditPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUpdateVehicleEditPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  operator_truck_image,
  registr_insurance,
  registr_number,
  registr_rc,
  user_id,
  vehicle_type,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateVehicleEditPOST(
    {
      operator_truck_image,
      registr_insurance,
      registr_number,
      registr_rc,
      user_id,
      vehicle_type,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUpdateVehicleEdit: refetch });
};

export const userBookingOngoingStatusPOST = (
  Constants,
  { user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/user/booking/ongoing-status`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUserBookingOngoingStatusPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      userBookingOngoingStatusPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUserBookingOngoingStatusPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUserBookingOngoingStatusPOST(
    { user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchUserBookingOngoingStatus: refetch,
  });
};

export const userBookingRegPOST = (
  Constants,
  {
    drop_location,
    drop_location_id,
    load_weight,
    no_of_truck,
    pickup_location,
    pickup_location_id,
    provider_category,
    type_material,
    user_id,
    vech_id,
    vehicle_type,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/user-booking-reg`, {
    body: JSON.stringify({
      user_id: user_id,
      pickup_location_id: pickup_location_id,
      drop_location_id: drop_location_id,
      pickup_location: pickup_location,
      drop_location: drop_location,
      load_weight: load_weight,
      type_material: type_material,
      provider_category: provider_category,
      no_of_truck: no_of_truck,
      vehicle_type: vehicle_type,
      vech_id: vech_id,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUserBookingRegPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      userBookingRegPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUserBookingRegPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  drop_location,
  drop_location_id,
  load_weight,
  no_of_truck,
  pickup_location,
  pickup_location_id,
  provider_category,
  type_material,
  user_id,
  vech_id,
  vehicle_type,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUserBookingRegPOST(
    {
      drop_location,
      drop_location_id,
      load_weight,
      no_of_truck,
      pickup_location,
      pickup_location_id,
      provider_category,
      type_material,
      user_id,
      vech_id,
      vehicle_type,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUserBookingReg: refetch });
};

export const userLocationCheckPOST = (
  Constants,
  {
    drop_location,
    drop_location_id,
    pickup_location,
    pickup_location_id,
    vech_id,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/user/location/check`, {
    body: JSON.stringify({
      pickup_location_id: pickup_location_id,
      drop_location_id: drop_location_id,
      pickup_location: pickup_location,
      drop_location: drop_location,
      vech_id: vech_id,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUserLocationCheckPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      userLocationCheckPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchUserLocationCheckPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  drop_location,
  drop_location_id,
  pickup_location,
  pickup_location_id,
  vech_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUserLocationCheckPOST(
    {
      drop_location,
      drop_location_id,
      pickup_location,
      pickup_location_id,
      vech_id,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUserLocationCheck: refetch });
};

export const vehicleGroupPOST = (Constants, _args, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/vehicle-groups`, {
    body: JSON.stringify({ key: 'value' }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useVehicleGroupPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => vehicleGroupPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchVehicleGroupPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useVehicleGroupPOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchVehicleGroup: refetch });
};

export const vehicleTypePOST = (Constants, _args, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/vechicle-type`, {
    body: JSON.stringify({ key: 'value' }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useVehicleTypePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => vehicleTypePOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchVehicleTypePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useVehicleTypePOST(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchVehicleType: refetch });
};

export const verifyOTPPOST = (Constants, { mobile, otp }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/verify-otp`, {
    body: JSON.stringify({ mobile: mobile, otp: otp }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useVerifyOTPPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => verifyOTPPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('otp', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('otp');
        queryClient.invalidateQueries('otps');
      },
    }
  );
};

export const FetchVerifyOTPPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  mobile,
  otp,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useVerifyOTPPOST(
    { mobile, otp },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchVerifyOTP: refetch });
};

export const waitingBookingSummaryPOST = (Constants, { id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/booking-summary`, {
    body: JSON.stringify({ id: id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useWaitingBookingSummaryPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      waitingBookingSummaryPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchWaitingBookingSummaryPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useWaitingBookingSummaryPOST(
    { id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchWaitingBookingSummary: refetch,
  });
};

export const waitingBookingSummaryAllOwnerPOST = (
  Constants,
  { id, user_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/waiting/bookingsummary/owner`, {
    body: JSON.stringify({ id: id, user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useWaitingBookingSummaryAllOwnerPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      waitingBookingSummaryAllOwnerPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchWaitingBookingSummaryAllOwnerPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useWaitingBookingSummaryAllOwnerPOST(
    { id, user_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchWaitingBookingSummaryAllOwner: refetch,
  });
};

export const testGET = (Constants, _args, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/test`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }).then(res => handleResponse(res, handlers));

export const useTestGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['test', args], () => testGET(Constants, args, handlers), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['tests']),
  });
};

export const FetchTestGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useTestGET({}, { refetchInterval, handlers: { onData, ...handlers } });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchTest: refetch });
};

export const vehiclesPOST = (Constants, { vehicle_group_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/vehicles`, {
    body: JSON.stringify({ vehicle_group_id: vehicle_group_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useVehiclesPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => vehiclesPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('test', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('test');
        queryClient.invalidateQueries('tests');
      },
    }
  );
};

export const FetchVehiclesPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  vehicle_group_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useVehiclesPOST(
    { vehicle_group_id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchVehicles: refetch });
};

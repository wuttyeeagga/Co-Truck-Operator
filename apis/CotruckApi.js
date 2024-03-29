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
import encodeQueryParam from '../utils/encodeQueryParam';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const acceptNewTripPOST = (
  Constants,
  {
    addon_amount,
    booking_id,
    driver_ids,
    final_total,
    operator_id,
    qty,
    sub_total,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/accept-booking`, {
    body: JSON.stringify({
      booking_id: booking_id,
      qty: qty,
      driver_ids: driver_ids,
      sub_total: sub_total,
      final_total: final_total,
      operator_id: operator_id,
      addon_amount: addon_amount,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useAcceptNewTripPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => acceptNewTripPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('New Leads', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('New Lead');
        queryClient.invalidateQueries('New Leads');
      },
    }
  );
};

export const FetchAcceptNewTripPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  addon_amount,
  booking_id,
  driver_ids,
  final_total,
  operator_id,
  qty,
  sub_total,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useAcceptNewTripPOST(
    {
      addon_amount,
      booking_id,
      driver_ids,
      final_total,
      operator_id,
      qty,
      sub_total,
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
  return children({ loading, data, error, refetchAcceptNewTrip: refetch });
};

export const addNewDriverPOST = (
  Constants,
  {
    driver_license_no,
    driving_license_back,
    driving_license_front,
    mobile,
    name,
    nrc_back,
    nrc_front,
    operator_id,
    password,
    vehicle_id,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/add-driver`, {
    body: JSON.stringify({
      operator_id: operator_id,
      name: name,
      mobile: mobile,
      password: password,
      vehicle_id: vehicle_id,
      driving_license_front: driving_license_front,
      driving_license_back: driving_license_back,
      nrc_front: nrc_front,
      nrc_back: nrc_back,
      driver_license_no: driver_license_no,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useAddNewDriverPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => addNewDriverPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Driver', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Driver');
        queryClient.invalidateQueries('Drivers');
      },
    }
  );
};

export const FetchAddNewDriverPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  driver_license_no,
  driving_license_back,
  driving_license_front,
  mobile,
  name,
  nrc_back,
  nrc_front,
  operator_id,
  password,
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
  } = useAddNewDriverPOST(
    {
      driver_license_no,
      driving_license_back,
      driving_license_front,
      mobile,
      name,
      nrc_back,
      nrc_front,
      operator_id,
      password,
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
  return children({ loading, data, error, refetchAddNewDriver: refetch });
};

export const addNewLeadPOST = (Constants, { id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/add-new-lead`, {
    body: JSON.stringify({ id: id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
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

export const addNewVehiclePOST = (
  Constants,
  {
    operator_id,
    reg_certificate,
    reg_no,
    vehicle_id,
    vehicle_image,
    vehicle_insurance,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/add-vehicle`, {
    body: JSON.stringify({
      operator_id: operator_id,
      vehicle_id: vehicle_id,
      reg_no: reg_no,
      reg_certificate: reg_certificate,
      vehicle_insurance: vehicle_insurance,
      vehicle_image: vehicle_image,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useAddNewVehiclePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => addNewVehiclePOST(Constants, { ...initialArgs, ...args }, handlers),
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

export const FetchAddNewVehiclePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  operator_id,
  reg_certificate,
  reg_no,
  vehicle_id,
  vehicle_image,
  vehicle_insurance,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useAddNewVehiclePOST(
    {
      operator_id,
      reg_certificate,
      reg_no,
      vehicle_id,
      vehicle_image,
      vehicle_insurance,
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
  return children({ loading, data, error, refetchAddNewVehicle: refetch });
};

export const bookingDetailPOST = (
  Constants,
  { book_truck_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/booking-detail`, {
    body: JSON.stringify({ book_truck_id: book_truck_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useBookingDetailPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => bookingDetailPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Activity', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Activity');
        queryClient.invalidateQueries('Activities');
      },
    }
  );
};

export const FetchBookingDetailPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  book_truck_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useBookingDetailPOST(
    { book_truck_id },
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
  return children({ loading, data, error, refetchBookingDetail: refetch });
};

export const bookingListPOST = (
  Constants,
  { booking_status, booking_type, operator },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/booking-list`, {
    body: JSON.stringify({
      operator_id: operator,
      booking_type: booking_type,
      booking_status: booking_status,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useBookingListPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => bookingListPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Activity', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Activity');
        queryClient.invalidateQueries('Activities');
      },
    }
  );
};

export const FetchBookingListPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  booking_status,
  booking_type,
  operator,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useBookingListPOST(
    { booking_status, booking_type, operator },
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
  return children({ loading, data, error, refetchBookingList: refetch });
};

export const bookingList$Confirmed$POST = (
  Constants,
  { booking_status, booking_type, operator },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/booking-list`, {
    body: JSON.stringify({
      operator_id: operator,
      booking_type: booking_type,
      booking_status: booking_status,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useBookingList$Confirmed$POST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      bookingList$Confirmed$POST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Activity', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Activity');
        queryClient.invalidateQueries('Activities');
      },
    }
  );
};

export const FetchBookingList$Confirmed$POST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  booking_status,
  booking_type,
  operator,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useBookingList$Confirmed$POST(
    { booking_status, booking_type, operator },
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
    refetchBookingList$Confirmed$: refetch,
  });
};

export const bookingList$PAID$POST = (
  Constants,
  { booking_status, booking_type, operator, paid_status },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/booking-list`, {
    body: JSON.stringify({
      operator_id: operator,
      booking_type: booking_type,
      booking_status: booking_status,
      paid_status: paid_status,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useBookingList$PAID$POST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      bookingList$PAID$POST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Activity', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Activity');
        queryClient.invalidateQueries('Activities');
      },
    }
  );
};

export const FetchBookingList$PAID$POST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  booking_status,
  booking_type,
  operator,
  paid_status,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useBookingList$PAID$POST(
    { booking_status, booking_type, operator, paid_status },
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
  return children({ loading, data, error, refetchBookingList$PAID$: refetch });
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

export const categoryChargesPOST = (Constants, _args, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/category-charges`, {
    body: JSON.stringify({ key: 'value' }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useCategoryChargesPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      categoryChargesPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('New Leads', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('New Lead');
        queryClient.invalidateQueries('New Leads');
      },
    }
  );
};

export const FetchCategoryChargesPOST = ({
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
  } = useCategoryChargesPOST(
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
  return children({ loading, data, error, refetchCategoryCharges: refetch });
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

export const companyInformationPOST = (Constants, { id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/get-company-info`, {
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

export const completeBookingPOST = (
  Constants,
  { book_truck_id, operator_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/complete-booking`, {
    body: JSON.stringify({
      operator_id: operator_id,
      book_truck_id: book_truck_id,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useCompleteBookingPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      completeBookingPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('New Leads', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('New Lead');
        queryClient.invalidateQueries('New Leads');
      },
    }
  );
};

export const FetchCompleteBookingPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  book_truck_id,
  operator_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useCompleteBookingPOST(
    { book_truck_id, operator_id },
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
  return children({ loading, data, error, refetchCompleteBooking: refetch });
};

export const deleteDriverPOST = (Constants, { driver_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/delete-driver`, {
    body: JSON.stringify({ driver_id: driver_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useDeleteDriverPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => deleteDriverPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Driver', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Driver');
        queryClient.invalidateQueries('Drivers');
      },
    }
  );
};

export const FetchDeleteDriverPOST = ({
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
  } = useDeleteDriverPOST(
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
  return children({ loading, data, error, refetchDeleteDriver: refetch });
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

export const driverDetailPOST = (Constants, { driver_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/driver-detail`, {
    body: JSON.stringify({ driver_id: driver_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useDriverDetailPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => driverDetailPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Driver', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Driver');
        queryClient.invalidateQueries('Drivers');
      },
    }
  );
};

export const FetchDriverDetailPOST = ({
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
  } = useDriverDetailPOST(
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
  return children({ loading, data, error, refetchDriverDetail: refetch });
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

export const driverList$ALL$POST = (
  Constants,
  { operator_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/driver-list`, {
    body: JSON.stringify({ operator_id: operator_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useDriverList$ALL$POST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      driverList$ALL$POST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Driver', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Driver');
        queryClient.invalidateQueries('Drivers');
      },
    }
  );
};

export const FetchDriverList$ALL$POST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  operator_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useDriverList$ALL$POST(
    { operator_id },
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
  return children({ loading, data, error, refetchDriverList$ALL$: refetch });
};

export const driverList$AVAILABLE$POST = (
  Constants,
  { driver_status, operator_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/driver-list`, {
    body: JSON.stringify({
      operator_id: operator_id,
      driver_status: driver_status,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useDriverList$AVAILABLE$POST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      driverList$AVAILABLE$POST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Driver', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Driver');
        queryClient.invalidateQueries('Drivers');
      },
    }
  );
};

export const FetchDriverList$AVAILABLE$POST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  driver_status,
  operator_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useDriverList$AVAILABLE$POST(
    { driver_status, operator_id },
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
    refetchDriverList$AVAILABLE$: refetch,
  });
};

export const driverList$Pending$POST = (
  Constants,
  { driver_status, operator_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/driver-list`, {
    body: JSON.stringify({
      operator_id: operator_id,
      driver_status: driver_status,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useDriverList$Pending$POST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      driverList$Pending$POST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Driver', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Driver');
        queryClient.invalidateQueries('Drivers');
      },
    }
  );
};

export const FetchDriverList$Pending$POST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  driver_status,
  operator_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useDriverList$Pending$POST(
    { driver_status, operator_id },
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
    refetchDriverList$Pending$: refetch,
  });
};

export const editProfilePOST = (Constants, { user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/get-user`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useEditProfilePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => editProfilePOST(Constants, { ...initialArgs, ...args }, handlers),
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

export const FetchEditProfilePOST = ({
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
  } = useEditProfilePOST(
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
  return children({ loading, data, error, refetchEditProfile: refetch });
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
          return queryClient.setQueryData('Forgot', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Forgot');
        queryClient.invalidateQueries('Forgots');
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

export const generatedInvoicesPOST = (
  Constants,
  { operator_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/generated-invoices`, {
    body: JSON.stringify({ operator_id: operator_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useGeneratedInvoicesPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      generatedInvoicesPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('System', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('System');
        queryClient.invalidateQueries('Systems');
      },
    }
  );
};

export const FetchGeneratedInvoicesPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  operator_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useGeneratedInvoicesPOST(
    { operator_id },
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
  return children({ loading, data, error, refetchGeneratedInvoices: refetch });
};

export const getDriverLocationsPOST = (
  Constants,
  { driver_job_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/driver-live-track`, {
    body: JSON.stringify({ driver_job_id: driver_job_id }),
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM2MDJkMWQwMmM3Nzk2MDI3MGZmNWVhY2RjY2ZkZGRhNWZkYmRjOTUxOTIyZTEwY2I0OWM4ZjMzOWJkZTYzZTBkOGMyYmQ1NDkxY2NkMDg2In0.eyJhdWQiOiIxIiwianRpIjoiMzYwMmQxZDAyYzc3OTYwMjcwZmY1ZWFjZGNjZmRkZGE1ZmRiZGM5NTE5MjJlMTBjYjQ5YzhmMzM5YmRlNjNlMGQ4YzJiZDU0OTFjY2QwODYiLCJpYXQiOjE3MDcxMjYzNDEsIm5iZiI6MTcwNzEyNjM0MSwiZXhwIjoxNzM4NzQ4NzQxLCJzdWIiOiIyMTMiLCJzY29wZXMiOltdfQ.YNtWy6AQoaGxJcmcl8Nqinc0P7UL-ikmNo9rKva5lg3qf0_t4vZwTd5MGBNvS1vzwOZMADnxBv5dwYW1x7B6YiK-sufEa7OHn7MFYpaLmLuruQAaKqJ44U4ODThSeMt90EbcExJ_x4U-KnjN_v4aunjz6b0BW5dStgc5aYBniRZ6vVP8A51pg95v9VpuRznQ2g1im8JZzw3QrWj_lO8O7Ym5cSxb5A6XnVxXhrbHqXZmhZUgBkzfRY5J8MYb_QY7PBBJ4p4Ck7s6Gy5mTmgh9-CbFvHMpDtaSk-gWjbAfr0QW9mCSaBImMQMsBw5XBhoIEj-EyTxDh1ZI9r95nARhhfYA-3Yfk0rzL6b8P8_zFf0dDrRlxgLahcghTMPMARLsnyftKw5g2goWno8-y_m5Ue7a3OjvtFu0PVKIdMz_em7iVXCE9hdx0kLARKjvcmPzeyXWpa-yDlX5zHAY1pDdLdBywFAC5ARo0edvb2up46lYkvbAf7MQ0wZlhALQeuShh0ksWk2p3lfk0Drd-vZxaRZDX0StotktQpGOXVyc1Vf-qkdLIkXJX5tAukoWQOC8Xp0DErpwfg4Gzl_T9qswGLhWeYax3vvzLGNaUKVRAhLnatCJ4zIrIbQyRh0nNOPQyCe9LQHQPBj6puvnx7nMHBXi-U1bHI5d2bvl1F0nQI',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useGetDriverLocationsPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      getDriverLocationsPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('live track', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('live track');
        queryClient.invalidateQueries('live tracks');
      },
    }
  );
};

export const FetchGetDriverLocationsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  driver_job_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useGetDriverLocationsPOST(
    { driver_job_id },
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
  return children({ loading, data, error, refetchGetDriverLocations: refetch });
};

export const getIdentifyProofPOST = (
  Constants,
  { operator_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/identification-proofs`, {
    body: JSON.stringify({ operator_id: operator_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useGetIdentifyProofPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      getIdentifyProofPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('identify', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('identify');
        queryClient.invalidateQueries('identifies');
      },
    }
  );
};

export const FetchGetIdentifyProofPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  operator_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useGetIdentifyProofPOST(
    { operator_id },
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
  return children({ loading, data, error, refetchGetIdentifyProof: refetch });
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

export const invoiceGenerateIndexPOST = (
  Constants,
  { operator_id },
  handlers = {}
) =>
  fetch(
    `https://dev.cotruck.co/index.php/api/operator/invoice_generate_index`,
    {
      body: JSON.stringify({ operator_id: operator_id }),
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTH_BEAR_TOKEN'],
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useInvoiceGenerateIndexPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      invoiceGenerateIndexPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('System', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('System');
        queryClient.invalidateQueries('Systems');
      },
    }
  );
};

export const FetchInvoiceGenerateIndexPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  operator_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useInvoiceGenerateIndexPOST(
    { operator_id },
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
    refetchInvoiceGenerateIndex: refetch,
  });
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

export const newLeadsPOST = (Constants, { booking_type, id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/new-lead-list`, {
    body: JSON.stringify({ operator_id: id, booking_type: booking_type }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useNewLeadsPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => newLeadsPOST(Constants, { ...initialArgs, ...args }, handlers),
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

export const FetchNewLeadsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  booking_type,
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
  } = useNewLeadsPOST(
    { booking_type, id },
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
  return children({ loading, data, error, refetchNewLeads: refetch });
};

export const newLeads$Pending$POST = (
  Constants,
  { booking_type, id, owner_status },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/new-lead-list`, {
    body: JSON.stringify({
      operator_id: id,
      booking_type: booking_type,
      owner_status: owner_status,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useNewLeads$Pending$POST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      newLeads$Pending$POST(Constants, { ...initialArgs, ...args }, handlers),
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

export const FetchNewLeads$Pending$POST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  booking_type,
  id,
  owner_status,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useNewLeads$Pending$POST(
    { booking_type, id, owner_status },
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
  return children({ loading, data, error, refetchNewLeads$Pending$: refetch });
};

export const newLeadsDetailsPOST = (
  Constants,
  { book_truck_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/lead-detail`, {
    body: JSON.stringify({ book_truck_id: book_truck_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useNewLeadsDetailsPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      newLeadsDetailsPOST(Constants, { ...initialArgs, ...args }, handlers),
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

export const FetchNewLeadsDetailsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  book_truck_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useNewLeadsDetailsPOST(
    { book_truck_id },
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
  return children({ loading, data, error, refetchNewLeadsDetails: refetch });
};

export const notificationsPOST = (Constants, { user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/notifications`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
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
  } = useNotificationsPOST(
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
  return children({ loading, data, error, refetchNotifications: refetch });
};

export const operatorVehicleListPOST = (
  Constants,
  { operator_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/vehicle-list`, {
    body: JSON.stringify({ operator_id: operator_id }),
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
  operator_id,
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
    { operator_id },
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

export const operatorVehicleList$available$POST = (
  Constants,
  { operator_id, vehicle_status },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/vehicle-list`, {
    body: JSON.stringify({
      operator_id: operator_id,
      vehicle_status: vehicle_status,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useOperatorVehicleList$available$POST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      operatorVehicleList$available$POST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
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

export const FetchOperatorVehicleList$available$POST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  operator_id,
  vehicle_status,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useOperatorVehicleList$available$POST(
    { operator_id, vehicle_status },
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
    refetchOperatorVehicleList$available$: refetch,
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

export const preferredPathsPOST = (Constants, _args, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/locations`, {
    body: JSON.stringify({ key: 'value' }),
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBmYWQzMzM5YjJmZjgxN2Q3YWZkOGI0ZDYzZDgwY2VhM2NjMTE3ZGIyNzhmMzY1YzIzMDUxMjRiMjU1ODYxNjQwNzUwYmY4Y2UzMTlkZTY2In0.eyJhdWQiOiIxIiwianRpIjoiMGZhZDMzMzliMmZmODE3ZDdhZmQ4YjRkNjNkODBjZWEzY2MxMTdkYjI3OGYzNjVjMjMwNTEyNGIyNTU4NjE2NDA3NTBiZjhjZTMxOWRlNjYiLCJpYXQiOjE3MTAzMDAxMjcsIm5iZiI6MTcxMDMwMDEyNywiZXhwIjoxNzQxODM2MTI3LCJzdWIiOiIyODkiLCJzY29wZXMiOltdfQ.BZoAUaHVzRdENpWkgq8CWnNVrbxTeACd439pHeNBzboT6b9aL4QIOPcqBjC2bjSkGOEXofb5ue7FUq5ZcdRoIfj02SqwaCAe5Wej7569lFgfDaOOVMGTPGaess8WUJNZFwIqGI48MiEqZxUhHnXR07DO5q2NJZR6jG3jeAysFnxWnj65gD9XLLKCJrhPU5B37A6UmN4EtJ3dDL4YrXBaO7OQ3-ZGr9TKnJa4wUpnhIlXd_Dxm3izCM_OSvQGQO8R6byuKM7JIlMjbs1CRf3-g78Hm0AJtzPSmWtSfYWAhaAc7qbYHCVDCw3nC_0rNjC9T4b9X9apEePIOwsTtC5y_sncs6jiS7nbnwP7cenGhjYzRy2yajg8_pQSrYibtLp9AoVhJhYYeufixfbs8RgrAGvHJuatX7yB-vD2nztzeCBENqCC4MZpBfDA2mcDudhzvlKioZLl-L4eYoO_a4aa-MLwAsDGyPBtxXZsn950-YPhRRBuLAVw-PJapit3AlTZ7B-T-kybCrk6mSC-JEDWKCt0TvpCwQdtkWZdGXmrIzJR0EAGc92dWwGU51LzIZcJEV3x93edZHV8da5hOpyFf0aDtoucqXsk_2HpzNpPblpuy7ePoY_Gvx2VK1ukTh6YeeR8-PoW2k0nobnRiZKCm7QxZgPidJQDXq7PTcHfZ5Y',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const usePreferredPathsPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      preferredPathsPOST(Constants, { ...initialArgs, ...args }, handlers),
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

export const FetchPreferredPathsPOST = ({
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
  } = usePreferredPathsPOST(
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
  return children({ loading, data, error, refetchPreferredPaths: refetch });
};

export const reasonForCancelPOST = (
  Constants,
  { book_truck_id },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/booking-cancel`, {
    body: JSON.stringify({ book_truck_id: book_truck_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useReasonForCancelPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      reasonForCancelPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Reason Cancel', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Reason Cancel');
        queryClient.invalidateQueries('Reason Cancels');
      },
    }
  );
};

export const FetchReasonForCancelPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  book_truck_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useReasonForCancelPOST(
    { book_truck_id },
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
  return children({ loading, data, error, refetchReasonForCancel: refetch });
};

export const registerPOST = (
  Constants,
  {
    agent_license,
    agent_name,
    certificate,
    comp_name,
    comp_phone,
    comp_reg_no,
    email,
    mobile,
    name,
    nrc_back,
    nrc_front,
    password,
    paths,
    referral_code,
    user_type,
    vehicle_insurance,
    vehicle_reamark,
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
      agent_license: agent_license,
      agent_name: agent_name,
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      referral_code: referral_code,
      nrc_front: nrc_front,
      nrc_back: nrc_back,
      vehicle_type: vehicle_type,
      vehicle_reg_no: vehicle_reg_no,
      vehicle_reg_certificate: vehicle_reg_certificate,
      vehicle_insurance: vehicle_insurance,
      user_type: user_type,
      preferred_paths: paths,
      vehicle_remark: vehicle_reamark,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useRegisterPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => registerPOST(Constants, { ...initialArgs, ...args }, handlers),
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

export const FetchRegisterPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  agent_license,
  agent_name,
  certificate,
  comp_name,
  comp_phone,
  comp_reg_no,
  email,
  mobile,
  name,
  nrc_back,
  nrc_front,
  password,
  paths,
  referral_code,
  user_type,
  vehicle_insurance,
  vehicle_reamark,
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
  } = useRegisterPOST(
    {
      agent_license,
      agent_name,
      certificate,
      comp_name,
      comp_phone,
      comp_reg_no,
      email,
      mobile,
      name,
      nrc_back,
      nrc_front,
      password,
      paths,
      referral_code,
      user_type,
      vehicle_insurance,
      vehicle_reamark,
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
  return children({ loading, data, error, refetchRegister: refetch });
};

export const rejectNewLeadPOST = (
  Constants,
  { booking_id, cancel_id, operator_id, reason },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/reject-booking`, {
    body: JSON.stringify({
      operator_id: operator_id,
      booking_id: booking_id,
      cancel_id: cancel_id,
      cancel_reason: reason,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useRejectNewLeadPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => rejectNewLeadPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('New Leads', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('New Lead');
        queryClient.invalidateQueries('New Leads');
      },
    }
  );
};

export const FetchRejectNewLeadPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  booking_id,
  cancel_id,
  operator_id,
  reason,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useRejectNewLeadPOST(
    { booking_id, cancel_id, operator_id, reason },
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
  return children({ loading, data, error, refetchRejectNewLead: refetch });
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

export const resendOTPPOST = (Constants, { user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/resend-otp`, {
    body: JSON.stringify({ user_id: user_id }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useResendOTPPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => resendOTPPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('OTP', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('OTP');
        queryClient.invalidateQueries('OTPS');
      },
    }
  );
};

export const FetchResendOTPPOST = ({
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
  } = useResendOTPPOST(
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
  return children({ loading, data, error, refetchResendOTP: refetch });
};

export const resetPasswordPOST = (
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

export const useResetPasswordPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => resetPasswordPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Forgot', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Forgot');
        queryClient.invalidateQueries('Forgots');
      },
    }
  );
};

export const FetchResetPasswordPOST = ({
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
  } = useResetPasswordPOST(
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
  return children({ loading, data, error, refetchResetPassword: refetch });
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

export const systemChargesPOST = (Constants, { operator_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/system_charges`, {
    body: JSON.stringify({ operator_id: operator_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useSystemChargesPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => systemChargesPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('System', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('System');
        queryClient.invalidateQueries('Systems');
      },
    }
  );
};

export const FetchSystemChargesPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  operator_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useSystemChargesPOST(
    { operator_id },
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
  return children({ loading, data, error, refetchSystemCharges: refetch });
};

export const updateBookedDriverPOST = (
  Constants,
  { bookingId, new_driver, old_driver, shipperID },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/update_booked_drivers`, {
    body: JSON.stringify({
      old_driver: old_driver,
      new_driver: new_driver,
      bookingId: bookingId,
      shipperId: shipperID,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUpdateBookedDriverPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateBookedDriverPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Change Driver', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Change Driver');
        queryClient.invalidateQueries('Change Drivers');
      },
    }
  );
};

export const FetchUpdateBookedDriverPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  bookingId,
  new_driver,
  old_driver,
  shipperID,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateBookedDriverPOST(
    { bookingId, new_driver, old_driver, shipperID },
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
  return children({ loading, data, error, refetchUpdateBookedDriver: refetch });
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

export const updateDriverPOST = (
  Constants,
  {
    dl_back,
    dl_front,
    driver_id,
    driver_name,
    mobile,
    nrc_back,
    nrc_front,
    operator_id,
    password,
    vehicle_id,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/update-driver`, {
    body: JSON.stringify({
      driver_id: driver_id,
      operator_id: operator_id,
      name: driver_name,
      mobile: mobile,
      password: password,
      vehicle_id: vehicle_id,
      driving_license_front: dl_front,
      driving_license_back: dl_back,
      nrc_front: nrc_front,
      nrc_back: nrc_back,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useUpdateDriverPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => updateDriverPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Driver', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Driver');
        queryClient.invalidateQueries('Drivers');
      },
    }
  );
};

export const FetchUpdateDriverPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  dl_back,
  dl_front,
  driver_id,
  driver_name,
  mobile,
  nrc_back,
  nrc_front,
  operator_id,
  password,
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
  } = useUpdateDriverPOST(
    {
      dl_back,
      dl_front,
      driver_id,
      driver_name,
      mobile,
      nrc_back,
      nrc_front,
      operator_id,
      password,
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
  return children({ loading, data, error, refetchUpdateDriver: refetch });
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
    agent_license,
    comp_name,
    comp_number,
    email,
    mobile,
    name,
    paths,
    register_number,
    user_id,
    user_image,
  },
  handlers = {}
) =>
  fetch(`https://dev.cotruck.co/index.php/api/update-user`, {
    body: JSON.stringify({
      user_id: user_id,
      comp_name: comp_name,
      comp_number: comp_number,
      register_number: register_number,
      agent_license: agent_license,
      name: name,
      email: email,
      mobile: mobile,
      user_image: user_image,
      preferred_paths: paths,
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

export const FetchUpdateUserPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  agent_license,
  comp_name,
  comp_number,
  email,
  mobile,
  name,
  paths,
  register_number,
  user_id,
  user_image,
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
      agent_license,
      comp_name,
      comp_number,
      email,
      mobile,
      name,
      paths,
      register_number,
      user_id,
      user_image,
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

export const updateIdentificationPOST = (
  Constants,
  { dl_back, dl_fron, nrc_back, nrc_front, operator_id },
  handlers = {}
) =>
  fetch(
    `https://dev.cotruck.co/index.php/api/operator/update-identification-proofs`,
    {
      body: JSON.stringify({
        operator_id: operator_id,
        nrc_front: nrc_front,
        nrc_back: nrc_back,
        driving_license_back: dl_back,
        driving_license_front: dl_fron,
      }),
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTH_BEAR_TOKEN'],
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  ).then(res => handleResponse(res, handlers));

export const useUpdateIdentificationPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateIdentificationPOST(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('identify', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('identify');
        queryClient.invalidateQueries('identifies');
      },
    }
  );
};

export const FetchUpdateIdentificationPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  dl_back,
  dl_fron,
  nrc_back,
  nrc_front,
  operator_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateIdentificationPOST(
    { dl_back, dl_fron, nrc_back, nrc_front, operator_id },
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
    refetchUpdateIdentification: refetch,
  });
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

export const vehicleDetailPOST = (Constants, { vehicle_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/vehicle-detail`, {
    body: JSON.stringify({ vehicle_id: vehicle_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useVehicleDetailPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => vehicleDetailPOST(Constants, { ...initialArgs, ...args }, handlers),
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

export const FetchVehicleDetailPOST = ({
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
  } = useVehicleDetailPOST(
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
  return children({ loading, data, error, refetchVehicleDetail: refetch });
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

export const vehicleTypeListPOST = (Constants, _args, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/vehicles`, {
    body: JSON.stringify({ key: 'value' }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useVehicleTypeListPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      vehicleTypeListPOST(Constants, { ...initialArgs, ...args }, handlers),
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

export const FetchVehicleTypeListPOST = ({
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
  } = useVehicleTypeListPOST(
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
  return children({ loading, data, error, refetchVehicleTypeList: refetch });
};

export const verifyOTPPOST = (Constants, { otp, user_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/verify-otp`, {
    body: JSON.stringify({ user_id: user_id, otp: otp }),
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
          return queryClient.setQueryData('OTP', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('OTP');
        queryClient.invalidateQueries('OTPS');
      },
    }
  );
};

export const FetchVerifyOTPPOST = ({
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
  } = useVerifyOTPPOST(
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
  return children({ loading, data, error, refetchVerifyOTP: refetch });
};

export const viewInvoicePOST = (Constants, { book_truck_id }, handlers = {}) =>
  fetch(`https://dev.cotruck.co/index.php/api/operator/view-invoice`, {
    body: JSON.stringify({ book_truck_id: book_truck_id }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTH_BEAR_TOKEN'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useViewInvoicePOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => viewInvoicePOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Invoice', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Invoice');
        queryClient.invalidateQueries('Invoices');
      },
    }
  );
};

export const FetchViewInvoicePOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  book_truck_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useViewInvoicePOST(
    { book_truck_id },
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
  return children({ loading, data, error, refetchViewInvoice: refetch });
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

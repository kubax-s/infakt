export type AccountantType = {
  cell: string;
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
};

export type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};
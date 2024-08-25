type RegistrationRequest = {
  userName: string,
  email: string,
  password: string,
  repeatPassword: string,
};

type RegistrationResponce = {
  id: number,
  email: string,
  userName: string,
};

type LoginReq = {
  email: string,
  password: string,
}

type LoginRes = {
  token: string;
}


export type { RegistrationRequest, RegistrationResponce, LoginReq, LoginRes }

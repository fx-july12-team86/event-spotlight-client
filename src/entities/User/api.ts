import { userTypes } from '.';
import { httpClient } from '../../app/configs/httpConfig';
import { USER_LOGIN, USER_POSITION_API, USER_REGISTRATION } from '../../shared/consts/url';

class UserApi {
  getUserCity(): Promise<{ city: string; stateProv: string }> {
    return httpClient.get(USER_POSITION_API);
  }

  register(data: userTypes.RegistrationRequest): Promise<userTypes.RegistrationResponce> {
    return httpClient.post(USER_REGISTRATION, data)
  }

  login(data: userTypes.LoginReq): Promise<userTypes.LoginRes> {
    return httpClient.post(USER_LOGIN, data)
  }
}

export default new UserApi();

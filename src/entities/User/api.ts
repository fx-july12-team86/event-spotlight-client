import { httpClient } from '../../app/configs/httpConfig';
import { USER_POSITION_API } from '../../shared/consts/url';

class UserApi {
  getUserCity(): Promise<{ city: string; stateProv: string }> {
    return httpClient.get(USER_POSITION_API);
  }
}

export default new UserApi();

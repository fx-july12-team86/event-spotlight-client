import { httpClient } from "../../../../app/configs/httpConfig";
import { PHOTO_UPLOAD_MANY } from "../../../../shared/lib/consts/url";

class EventApi {
  create() {
  }

  uploadPhotos(photos: FormData): Promise<unknown> {
    return httpClient.post(PHOTO_UPLOAD_MANY, photos)
  }
}

export default new EventApi();
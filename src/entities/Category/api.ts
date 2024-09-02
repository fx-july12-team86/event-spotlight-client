import { httpClient } from "../../app/configs/httpConfig";
import { CATEGORY_GET_ALL } from "../../shared/consts/url";
import { CategoryType } from "./types";

class Category {
  create() {
    //not implemented
  };

  getAll(): Promise<CategoryType[]> {
    return httpClient.get(CATEGORY_GET_ALL)
  }

  getById() {
    //not implemented
  };

  remove() {
    //not implemented
  };
}

export default new Category();
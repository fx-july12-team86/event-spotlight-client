import { faker } from '@faker-js/faker';

export function generateUser() {
  return {
    email: "usertest@test.com",
    password: "123456789",
    repeatPassword: "123456789",
    userName: faker.internet.userName()
  }
}
export class User {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;

  static fromHttp(user: User): User {
    const newUser = new User();
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    newUser.email = user.email;
    newUser.birthDate = user.birthDate;
    return newUser;
  }
}

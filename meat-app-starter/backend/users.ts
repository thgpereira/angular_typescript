export class User {
  constructor(public email: string, public name: string, private password: string) { }

  matches(another: User): boolean {
    return another !== undefined && another.email === this.email && another.password === this.password
  }
}

export const users: { [key: string]: User } = {
  "ze@gmail.com": new User('ze@gmail.com', 'Ze', '111111'),
  "maria@gmail.com": new User('maria@gmail.com', 'Maria', '111111'),
}
type UserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  paymentMethod: string;
};

export class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  private paymentMethod: string;

  constructor(props: UserProps)
  {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.paymentMethod = props.paymentMethod;
  }
}

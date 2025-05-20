type AddressProps = {
  id: string;
  zipCode: string;
  prefecture: string;
  municipality: string;
  address1: string;
  address2: string;
  address3: string;
};

class Address {
  private id: string;
  private zipCode: string;
  private prefecture: string;
  private municipality: string;
  private address1: string;
  private address2: string;
  private address3: string;

  constructor(props: AddressProps) {
    this.id = props.id;
    this.zipCode = props.zipCode;
    this.prefecture = props.prefecture;
    this.municipality = props.municipality;
    this.address1 = props.address1;
    this.address2 = props.address2;
    this.address3 = props.address3;
  }
}

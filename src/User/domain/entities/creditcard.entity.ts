type CreditCardProps = {
  id: string;
  lastFourDigits: string;
};

export class CreditCard {
  private id: string;
  private lastFourDigits: string;

  constructor(props: CreditCardProps) {
    this.id = props.id;
    this.lastFourDigits = props.lastFourDigits;
  }
}

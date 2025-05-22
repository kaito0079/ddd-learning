type BankAccountProps = {
  id: string;
  bankAccountNumber: string;
  accountType: string;
  branchCode: string;
  financialInstitutionCode: string;
};

export class BankAccount {
  private id: string;
  // 口座番号
  private bankAccountNumber: string;
  // 口座種別
  private accountType: string;
  // 支店番号
  private branchCode: string;
  // 金融機関コード
  private financialInstitutionCode: string;

  constructor(
    props: BankAccountProps,
  ) {
    this.id = props.id;
    this.bankAccountNumber = props.bankAccountNumber;
    this.accountType = props.accountType;
    this.branchCode = props.branchCode;
    this.financialInstitutionCode = props.financialInstitutionCode;
  }
}

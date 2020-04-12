enum BTRS_Code {
  FileHeader = '01',
  BankHeader = '02',
  AccountHeader = '16',
  TransactionDetail = '49',
  AccountTrailer = '98',
  FileTrailer = '99',
  Continuation = '88',
}

export default BTRS_Code;
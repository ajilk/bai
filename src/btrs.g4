grammar btrs;

btrsfile: r01 bank* r99;

bank: r02 account* r98;
account: r03 r88* transaction* r49;
transaction: r16 r88*;

r01: '01' body EORD # fileHeader;
r02: '02' body EORD # bankHeader;
r03: '03' body EORD # accountHeader;
r16: '16' body EORD # transactionDetail;
r88: '88' body EORD # continuation;
r49: '49' body EORD # accountTrailer;
r98: '98' body EORD # bankTrailer;
r99: '99' body EORD # fileTrailer;

body: TEXT+?;

EORD: '/';
TEXT: ~[,\n\r/]+;

COMMA: ',' -> skip;
WS: [ \t\r\n]+ -> skip;
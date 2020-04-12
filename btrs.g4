grammar btrs;

btrsFile: r01 bank* r99;

bank: r02 account* r98;
account: r03 r88* transaction* r49;
transaction: r16 r88*;

r01:
	'01' DELIM senderIdentification DELIM receiverIdentification DELIM fileCreationDate DELIM
		fileCreationTime DELIM fileIdentificationNumber DELIM physicalRecordLength DELIM blockSize
		DELIM versionNumber EORD # fileHeader;

senderIdentification: ALNUM;
receiverIdentification: ALNUM;
fileCreationDate: ALNUM;
fileCreationTime: ALNUM;
fileIdentificationNumber: DIGIT;
physicalRecordLength: ALNUM;
blockSize: DIGIT+;
versionNumber: DIGIT;

r02: '02' (DELIM field)+ EORD # bankHeader;
r03: '03' (DELIM field)+ EORD # accountHeader;
r16: '16' (DELIM field)+ EORD # transactionDetail;
r88: '88' (DELIM field)+ EORD # continuation;
r49: '49' (DELIM field)+ EORD # accountTrailer;
r98: '98' (DELIM field)+ EORD # bankTrailer;
r99: '99' (DELIM field)+ EORD # fileTrailer;

field: ALNUM;
DIGIT: [0-9];
LETTER: [a-zA-Z];
ALNUM: ~[,\n\r/]+;

EORD: '/';
DELIM: ',';
WS: [ \t\r\n]+ -> skip;
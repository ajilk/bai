grammar btrs;

btrsfile: r01 (r02 (r03 r88? r49)+ r98)+ r99 ;

record: r02;

r01: '01' body EORD;
r02: '02' body EORD;
r03: '03' body EORD;
r16: '16' body EORD (r16 | r88)?;
r49: '49' body EORD;
r88: '88' body EORD r16?;
r98: '98' body EORD;
r99: '99' body EORD;

body: TEXT+?;

EORD: '/';
TEXT: ~[,\n\r/]+;

COMMA: ',' -> skip;
WS: [ \t\r\n]+ -> skip;
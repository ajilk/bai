grammar btrs;
btrsfile: (fileheader | fileheader EOF)+;

fileheader: 'fileheader ' QUOTE FILEHEADER_NAME QUOTE;

QUOTE: '"';
FILEHEADER_NAME: [a-z]+;

WS: [ \t\r\n]+ -> skip;
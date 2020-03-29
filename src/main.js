const antlr = require('antlr4/index');
const fs = require('fs');

const Lexer = require('./parser/btrsLexer').btrsLexer;
const Parser = require('./parser/btrsParser').btrsParser;

const input = fs.readFileSync(__dirname+'../data/01.bai');
const chars = new antlr.InputStream(input.toString());
const lexer = new Lexer(chars);
const tokens = new antlr.CommonTokenStream(lexer);
const parser = new Parser(tokens);
const tree = parser.btrsfile();

console.log(tree.toStringTree(parser.ruleNames));

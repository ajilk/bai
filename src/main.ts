import { ANTLRInputStream as InputStream, Lexer, CommonTokenStream, Parser } from 'antlr4ts';

import fs from 'fs';
import path from 'path';

import { btrsLexer } from './lib/btrsLexer';
import { btrsParser, FileHeaderContext } from './lib/btrsParser';
import { btrsListener } from './lib/btrsListener';
import { ParseTreeWalker, ParseTreeListener } from 'antlr4ts/tree';


class MyListener implements btrsListener {
  enterFileHeader(context: FileHeaderContext) { }

  visitTerminal() { }
  visitErrorNode() { }
  enterEveryRule() { }
  exitEveryRule() { }
}

let input: Buffer = fs.readFileSync(path.resolve(__dirname, '../data/01.bai'));
let chars: InputStream = new InputStream(input.toString());
let lexer: Lexer = new btrsLexer(chars);
let tokens: CommonTokenStream = new CommonTokenStream(lexer);
let parser: btrsParser = new btrsParser(tokens);
let tree = parser.btrsFile();

const listener: MyListener = new MyListener();
ParseTreeWalker.DEFAULT.walk(listener, tree);
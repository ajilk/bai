import { ANTLRInputStream as InputStream, Lexer, CommonTokenStream, Parser } from 'antlr4ts';
import { AbstractParseTreeVisitor, ParseTreeWalker } from 'antlr4ts/tree';
import fs from 'fs';
import path from 'path';

import { btrsLexer } from './lib/btrsLexer';
import { btrsParser } from './lib/btrsParser';
import { btrsVisitor } from './lib/btrsVisitor';

class BTRSFileVisitor extends AbstractParseTreeVisitor<number> implements btrsVisitor<number> {
  defaultResult() {
    return 0;
  }
  visitBtrsFile(ctx: any) {
    console.log('visited btrsFile');
    console.log(ctx);
    return 1;
  }
}

export function visit() {
  let input: Buffer = fs.readFileSync(path.resolve(__dirname, '../data/01.bai'));
  let chars: InputStream = new InputStream(input.toString());
  let lexer: Lexer = new btrsLexer(chars);
  let tokens: CommonTokenStream = new CommonTokenStream(lexer);
  let parser: btrsParser = new btrsParser(tokens);
  let tree = parser.btrsFile();

  const btrsFileVisitor = new BTRSFileVisitor();
  btrsFileVisitor.visit(tree);
}

visit();
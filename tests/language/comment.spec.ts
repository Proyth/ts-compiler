/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Parsing from '@singleware/parsing';

import * as Language from '../../source/language';

/**
 * Comment rules, test case.
 */
@Class.Describe()
export class Comment extends Testing.Case {
  /**
   * Inline comment with end-of-line, test method.
   */
  @Testing.Method()
  @Class.Public()
  public inlineComment(): void {
    const context = new Parsing.Context(new Parsing.Data.Node('test'), `// Comment test, inline with end-of-line\r\n`);
    this.isTrue(Language.Comment.inline.consume(context));
    this.areSame(context.offset, context.length);
  }

  /**
   * Inline comment with end-of-content, test method.
   */
  @Testing.Method()
  @Class.Public()
  public inlineEndOfContentComment(): void {
    const context = new Parsing.Context(new Parsing.Data.Node('test'), `// Comment test, inline with end-of-content`);
    this.isTrue(Language.Comment.inline.consume(context));
    this.areSame(context.offset, context.length);
  }

  /**
   * Block comment with end-of-block, test method.
   */
  @Testing.Method()
  @Class.Public()
  public blockComment(): void {
    const context = new Parsing.Context(new Parsing.Data.Node('test'), `/*\r\n\tComment test.\r\n\tBlock with end-of-block.\r\n*/`);
    this.isTrue(Language.Comment.block.consume(context));
    this.areSame(context.offset, context.length);
  }

  /**
   * Block comment with end-of-content, test method.
   */
  @Testing.Method()
  @Class.Public()
  public blockEndOfContentComment(): void {
    const context = new Parsing.Context(new Parsing.Data.Node('test'), `/*\r\n\tComment test.\r\n\tBlock with end-of-content.`);
    this.isTrue(Language.Comment.block.consume(context));
    this.areSame(context.offset, context.length);
  }
}

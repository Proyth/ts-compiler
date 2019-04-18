/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Parsing from '@singleware/parsing';

import * as Language from '../../source/language';

/**
 * Whitespace rules, test case.
 */
@Class.Describe()
export class Whitespace extends Testing.Case {
  /**
   * Test method.
   */
  @Testing.Method()
  @Class.Public()
  public requiredWhitespace(): void {
    const context = new Parsing.Context(new Parsing.Data.Node('test'), `\t\r\n `);
    this.isTrue(Language.Whitespace.required.consume(context));
    this.areSame(context.offset, context.length);
  }
}

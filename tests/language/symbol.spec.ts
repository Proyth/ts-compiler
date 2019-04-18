/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Parsing from '@singleware/parsing';

import * as Language from '../../source/language';

/**
 * Symbol rules, test case.
 */
@Class.Describe()
export class Symbol extends Testing.Case {
  /**
   * Symbol success, test method.
   */
  @Testing.Method()
  @Class.Public()
  public symbolSuccess(): void {
    const context = new Parsing.Context(new Parsing.Data.Node('test'), `__My_Variable__0123456789_test__`);
    this.isTrue(Language.Symbol.required.consume(context));
    this.areSame(context.offset, context.length);
  }

  /**
   * Symbol failure, test method.
   */
  @Testing.Method()
  @Class.Public()
  public symbolFailure(): void {
    const context = new Parsing.Context(new Parsing.Data.Node('test'), `90var`);
    this.isFalse(Language.Symbol.required.consume(context));
    this.areSame(context.offset, 0);
  }
}

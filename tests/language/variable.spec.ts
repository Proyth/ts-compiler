/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';
import * as Parsing from '@singleware/parsing';

import * as Language from '../../source/language';
import { Errors } from '../../source/errors';

/**
 * Variable rules, test case.
 */
@Class.Describe()
export class Variable extends Testing.Case {
  /**
   * Variable success, test method.
   */
  @Testing.Method()
  @Class.Public()
  public variableSuccess(): void {
    const context = new Parsing.Context(new Parsing.Data.Node('test'), `auto myVar;`);
    this.isTrue(Language.Variable.statement.consume(context));
    this.areSame(context.offset, context.length);
    this.areSame((<Parsing.Data.Node>context.tree.next).type, 'variable');
    this.areSame((<Parsing.Data.Node>context.tree.next).data['name'], 'myVar');
  }

  /**
   * Variable failure, test method.
   */
  @Testing.Method()
  @Class.Public()
  public variableFailure(): void {
    const context = new Parsing.Context(new Parsing.Data.Node('test'), `auto ;`);
    this.isFalse(Language.Variable.statement.consume(context));
    this.areSame(context.offset, 5);
    this.areSame(context.error.offset, 5);
    this.areSame(context.error.code, Errors.UNEXPECTED_VARIABLE_NAME);
  }
}

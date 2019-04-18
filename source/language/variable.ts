/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Parsing from '@singleware/parsing';

import { Errors } from '../errors';

import { Whitespace } from './whitespace';
import { Symbol } from './symbol';

// Rule aliases.
const Flow = Parsing.Rules.Flow;
const Char = Parsing.Rules.Char;
const String = Parsing.Rules.String;
const Status = Parsing.Rules.Status;
const Data = Parsing.Rules.Data;

/**
 * Variable rules.
 */
@Class.Describe()
export class Variable extends Class.Null {
  /**
   * Statement rule.
   */
  @Class.Private()
  private static statementRule = new Data.Tree(
    'variable',
    Parsing.Data.Directions.NEXT,
    new Status.Success(
      new Flow.All(
        new String.Expect('auto'),
        Whitespace.required,
        new Status.Error(Errors.UNEXPECTED_VARIABLE_NAME, new Data.Extract('name', Symbol.required)),
        Whitespace.optional,
        new Char.Expect(';')
      )
    )
  );

  /**
   * Gets the statement rule.
   */
  @Class.Public()
  public static get statement() {
    return this.statementRule;
  }
}

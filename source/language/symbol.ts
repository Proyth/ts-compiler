/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Parsing from '@singleware/parsing';

// Rule aliases.
const Flow = Parsing.Rules.Flow;
const Char = Parsing.Rules.Char;
const String = Parsing.Rules.String;

/**
 * Symbol rules.
 */
@Class.Describe()
export class Symbol extends Class.Null {
  /**
   * Require rule.
   */
  @Class.Private()
  private static requiredRule = new Flow.Repeat(
    new Flow.All(new Flow.Any(new Char.Expect('_'), new String.Letters()), new Flow.Option(new String.Digits()))
  );

  /**
   * Gets the required rule.
   */
  @Class.Public()
  public static get required() {
    return this.requiredRule;
  }
}

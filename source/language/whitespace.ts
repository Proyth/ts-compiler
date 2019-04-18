/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Parsing from '@singleware/parsing';

// Rule aliases.
const Flow = Parsing.Rules.Flow;
const Char = Parsing.Rules.Char;

/**
 * White-space rule rules.
 */
@Class.Describe()
export class Whitespace extends Class.Null {
  /**
   * Required rule.
   */
  @Class.Private()
  private static requiredRule = new Flow.Repeat(new Char.Choice('\t', '\r', '\n', ' '));

  /**
   * Optional rule.
   */
  @Class.Private()
  private static optionalRule = new Flow.Option(Whitespace.requiredRule);

  /**
   * Gets the required rule.
   */
  @Class.Public()
  public static get required() {
    return this.requiredRule;
  }

  /**
   * Gets the optional rule.
   */
  @Class.Public()
  public static get optional() {
    return this.optionalRule;
  }
}

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
const Data = Parsing.Rules.Data;

/**
 * Comment rules.
 */
@Class.Describe()
export class Comment extends Class.Null {
  /**
   * Inline rule.
   */
  @Class.Private()
  private static inlineRule = new Flow.All(
    new String.Expect('//'),
    new Flow.Repeat(new Flow.Not(new Char.Expect('\n'), new Char.Any())),
    new Flow.Any(new Char.Expect('\n'), new Data.End())
  );

  /**
   * Block rule.
   */
  @Class.Private()
  private static blockRule = new Flow.All(
    new String.Expect('/*'),
    new Flow.Repeat(new Flow.Not(new String.Expect('*/'), new Char.Any())),
    new Flow.Any(new String.Expect('*/'), new Data.End())
  );

  /**
   * Gets the inline comment rule.
   */
  @Class.Public()
  public static get inline() {
    return this.inlineRule;
  }

  /**
   * Gets the block comment rule.
   */
  @Class.Public()
  public static get block() {
    return this.blockRule;
  }
}

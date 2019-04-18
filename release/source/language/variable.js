"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Parsing = require("@singleware/parsing");
const errors_1 = require("../errors");
const whitespace_1 = require("./whitespace");
const symbol_1 = require("./symbol");
// Rule aliases.
const Flow = Parsing.Rules.Flow;
const Char = Parsing.Rules.Char;
const String = Parsing.Rules.String;
const Status = Parsing.Rules.Status;
const Data = Parsing.Rules.Data;
/**
 * Variable rules.
 */
let Variable = class Variable extends Class.Null {
    /**
     * Gets the statement rule.
     */
    static get statement() {
        return this.statementRule;
    }
};
/**
 * Statement rule.
 */
Variable.statementRule = new Data.Tree('variable', Parsing.Data.Directions.NEXT, new Status.Success(new Flow.All(new String.Expect('auto'), whitespace_1.Whitespace.required, new Status.Error(errors_1.Errors.UNEXPECTED_VARIABLE_NAME, new Data.Extract('name', symbol_1.Symbol.required)), whitespace_1.Whitespace.optional, new Char.Expect(';'))));
__decorate([
    Class.Private()
], Variable, "statementRule", void 0);
__decorate([
    Class.Public()
], Variable, "statement", null);
Variable = __decorate([
    Class.Describe()
], Variable);
exports.Variable = Variable;
//# sourceMappingURL=variable.js.map
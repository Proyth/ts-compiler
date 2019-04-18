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
const Testing = require("@singleware/testing");
const Parsing = require("@singleware/parsing");
const Language = require("../../source/language");
const errors_1 = require("../../source/errors");
/**
 * Variable rules, test case.
 */
let Variable = class Variable extends Testing.Case {
    /**
     * Variable success, test method.
     */
    variableSuccess() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), `auto myVar;`);
        this.isTrue(Language.Variable.statement.consume(context));
        this.areSame(context.offset, context.length);
        this.areSame(context.tree.next.type, 'variable');
        this.areSame(context.tree.next.data['name'], 'myVar');
    }
    /**
     * Variable failure, test method.
     */
    variableFailure() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), `auto ;`);
        this.isFalse(Language.Variable.statement.consume(context));
        this.areSame(context.offset, 5);
        this.areSame(context.error.offset, 5);
        this.areSame(context.error.code, errors_1.Errors.UNEXPECTED_VARIABLE_NAME);
    }
};
__decorate([
    Testing.Method(),
    Class.Public()
], Variable.prototype, "variableSuccess", null);
__decorate([
    Testing.Method(),
    Class.Public()
], Variable.prototype, "variableFailure", null);
Variable = __decorate([
    Class.Describe()
], Variable);
exports.Variable = Variable;
//# sourceMappingURL=variable.spec.js.map
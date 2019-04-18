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
/**
 * Symbol rules, test case.
 */
let Symbol = class Symbol extends Testing.Case {
    /**
     * Symbol success, test method.
     */
    symbolSuccess() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), `__My_Variable__0123456789_test__`);
        this.isTrue(Language.Symbol.required.consume(context));
        this.areSame(context.offset, context.length);
    }
    /**
     * Symbol failure, test method.
     */
    symbolFailure() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), `90var`);
        this.isFalse(Language.Symbol.required.consume(context));
        this.areSame(context.offset, 0);
    }
};
__decorate([
    Testing.Method(),
    Class.Public()
], Symbol.prototype, "symbolSuccess", null);
__decorate([
    Testing.Method(),
    Class.Public()
], Symbol.prototype, "symbolFailure", null);
Symbol = __decorate([
    Class.Describe()
], Symbol);
exports.Symbol = Symbol;
//# sourceMappingURL=symbol.spec.js.map
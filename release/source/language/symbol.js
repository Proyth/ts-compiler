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
// Rule aliases.
const Flow = Parsing.Rules.Flow;
const Char = Parsing.Rules.Char;
const String = Parsing.Rules.String;
/**
 * Symbol rules.
 */
let Symbol = class Symbol extends Class.Null {
    /**
     * Gets the required rule.
     */
    static get required() {
        return this.requiredRule;
    }
};
/**
 * Require rule.
 */
Symbol.requiredRule = new Flow.Repeat(new Flow.All(new Flow.Any(new Char.Expect('_'), new String.Letters()), new Flow.Option(new String.Digits())));
__decorate([
    Class.Private()
], Symbol, "requiredRule", void 0);
__decorate([
    Class.Public()
], Symbol, "required", null);
Symbol = __decorate([
    Class.Describe()
], Symbol);
exports.Symbol = Symbol;
//# sourceMappingURL=symbol.js.map
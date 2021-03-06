"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Whitespace_1;
"use strict";
/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Parsing = require("@singleware/parsing");
// Rule aliases.
const Flow = Parsing.Rules.Flow;
const Char = Parsing.Rules.Char;
/**
 * White-space rule rules.
 */
let Whitespace = Whitespace_1 = class Whitespace extends Class.Null {
    /**
     * Gets the required rule.
     */
    static get required() {
        return this.requiredRule;
    }
    /**
     * Gets the optional rule.
     */
    static get optional() {
        return this.optionalRule;
    }
};
/**
 * Required rule.
 */
Whitespace.requiredRule = new Flow.Repeat(new Char.Choice('\t', '\r', '\n', ' '));
/**
 * Optional rule.
 */
Whitespace.optionalRule = new Flow.Option(Whitespace_1.requiredRule);
__decorate([
    Class.Private()
], Whitespace, "requiredRule", void 0);
__decorate([
    Class.Private()
], Whitespace, "optionalRule", void 0);
__decorate([
    Class.Public()
], Whitespace, "required", null);
__decorate([
    Class.Public()
], Whitespace, "optional", null);
Whitespace = Whitespace_1 = __decorate([
    Class.Describe()
], Whitespace);
exports.Whitespace = Whitespace;
//# sourceMappingURL=whitespace.js.map
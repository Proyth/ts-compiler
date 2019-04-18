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
const Data = Parsing.Rules.Data;
/**
 * Comment rules.
 */
let Comment = class Comment extends Class.Null {
    /**
     * Gets the inline comment rule.
     */
    static get inline() {
        return this.inlineRule;
    }
    /**
     * Gets the block comment rule.
     */
    static get block() {
        return this.blockRule;
    }
};
/**
 * Inline rule.
 */
Comment.inlineRule = new Flow.All(new String.Expect('//'), new Flow.Repeat(new Flow.Not(new Char.Expect('\n'), new Char.Any())), new Flow.Any(new Char.Expect('\n'), new Data.End()));
/**
 * Block rule.
 */
Comment.blockRule = new Flow.All(new String.Expect('/*'), new Flow.Repeat(new Flow.Not(new String.Expect('*/'), new Char.Any())), new Flow.Any(new String.Expect('*/'), new Data.End()));
__decorate([
    Class.Private()
], Comment, "inlineRule", void 0);
__decorate([
    Class.Private()
], Comment, "blockRule", void 0);
__decorate([
    Class.Public()
], Comment, "inline", null);
__decorate([
    Class.Public()
], Comment, "block", null);
Comment = __decorate([
    Class.Describe()
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map
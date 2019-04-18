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
 * Comment rules, test case.
 */
let Comment = class Comment extends Testing.Case {
    /**
     * Inline comment with end-of-line, test method.
     */
    inlineComment() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), `// Comment test, inline with end-of-line\r\n`);
        this.isTrue(Language.Comment.inline.consume(context));
        this.areSame(context.offset, context.length);
    }
    /**
     * Inline comment with end-of-content, test method.
     */
    inlineEndOfContentComment() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), `// Comment test, inline with end-of-content`);
        this.isTrue(Language.Comment.inline.consume(context));
        this.areSame(context.offset, context.length);
    }
    /**
     * Block comment with end-of-block, test method.
     */
    blockComment() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), `/*\r\n\tComment test.\r\n\tBlock with end-of-block.\r\n*/`);
        this.isTrue(Language.Comment.block.consume(context));
        this.areSame(context.offset, context.length);
    }
    /**
     * Block comment with end-of-content, test method.
     */
    blockEndOfContentComment() {
        const context = new Parsing.Context(new Parsing.Data.Node('test'), `/*\r\n\tComment test.\r\n\tBlock with end-of-content.`);
        this.isTrue(Language.Comment.block.consume(context));
        this.areSame(context.offset, context.length);
    }
};
__decorate([
    Testing.Method(),
    Class.Public()
], Comment.prototype, "inlineComment", null);
__decorate([
    Testing.Method(),
    Class.Public()
], Comment.prototype, "inlineEndOfContentComment", null);
__decorate([
    Testing.Method(),
    Class.Public()
], Comment.prototype, "blockComment", null);
__decorate([
    Testing.Method(),
    Class.Public()
], Comment.prototype, "blockEndOfContentComment", null);
Comment = __decorate([
    Class.Describe()
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Testing = require("@singleware/testing");
const Language = require("./language");
const suite = new Testing.Suite();
const logger = new Testing.Loggers.Tap();
// Test cases for helper rules.
suite.addCase(Language.Symbol);
suite.addCase(Language.Whitespace);
// Test cases for compound rules.
suite.addCase(Language.Comment);
suite.addCase(Language.Variable);
(async function () {
    const report = await suite.perform();
    logger.print(report);
    process.exitCode = report.errors > 0 ? 1 : 0;
})();
//# sourceMappingURL=suite.js.map
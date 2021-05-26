"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const data_model_1 = require("../packlets/data-model");
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
const logging_1 = require("../packlets/logging");
const reports_1 = require("../packlets/reports");
class App {
    run() {
        const logger = new logging_1.Logger();
        logger.log(logging_1.MessageType.Info, 'Starting app...');
        const dataModel = new data_model_1.ExampleModel(logger);
        const report = new reports_1.MainReport(logger);
        report.showReport(dataModel);
        logger.log(logging_1.MessageType.Info, 'Operation completed successfully');
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map
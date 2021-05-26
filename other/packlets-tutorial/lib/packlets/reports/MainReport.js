"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainReport = void 0;
const logging_1 = require("../logging");
class MainReport {
    constructor(logger) {
        this._logger = logger;
        this._logger.log(logging_1.MessageType.Info, 'Constructing MainReport');
    }
    showReport(dataModel) {
        console.log('\n---------------------------------------');
        console.log('REPORT');
        console.log('---------------------------------------');
        for (const record of dataModel.queryRecords()) {
            console.log(`${record.firstName} ${record.lastName}: Age=${record.age}`);
        }
        console.log('---------------------------------------\n');
    }
}
exports.MainReport = MainReport;
//# sourceMappingURL=MainReport.js.map
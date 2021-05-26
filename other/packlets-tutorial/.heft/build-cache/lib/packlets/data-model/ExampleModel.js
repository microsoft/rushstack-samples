"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleModel = void 0;
const DataModel_1 = require("./DataModel");
class ExampleModel extends DataModel_1.DataModel {
    queryRecords() {
        return [
            {
                firstName: 'Alice',
                lastName: 'Exampleton',
                age: 27
            },
            {
                firstName: 'Bob',
                lastName: 'Examplemeyer',
                age: 31
            }
        ];
    }
}
exports.ExampleModel = ExampleModel;
//# sourceMappingURL=ExampleModel.js.map
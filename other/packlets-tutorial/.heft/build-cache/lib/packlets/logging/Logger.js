"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const MessageType_1 = require("./MessageType");
class Logger {
    log(messageType, message) {
        switch (messageType) {
            case MessageType_1.MessageType.Info:
                console.log('[info]: ' + message);
                break;
            case MessageType_1.MessageType.Warning:
                console.log('[warning]: ' + message);
                break;
            case MessageType_1.MessageType.Error:
                console.log('[error]: ' + message);
                break;
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map
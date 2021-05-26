var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { ToggleSwitch } from './ToggleSwitch';
/**
 * This React component renders the application page.
 */
var ExampleApp = /** @class */ (function (_super) {
    __extends(ExampleApp, _super);
    function ExampleApp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // React event handlers should be represented as fields instead of methods to ensure the "this" pointer
        // is bound correctly.  This form does not work with virtual/override inheritance, so use regular methods
        // everywhere else.
        _this._onToggle = function (sender, args) {
            console.log('Toggle switch changed: ' + args.sliderPosition);
        };
        return _this;
    }
    ExampleApp.prototype.render = function () {
        var appStyle = {
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '5px',
            width: '400px'
        };
        return (React.createElement("div", { style: { padding: '20px' } },
            React.createElement("div", { style: appStyle },
                React.createElement("h2", null, "Hello, world!"),
                "Here is an example control:",
                React.createElement(ToggleSwitch, { leftColor: '#800000', rightColor: '#008000', onToggle: this._onToggle }))));
    };
    return ExampleApp;
}(React.Component));
export { ExampleApp };
//# sourceMappingURL=ExampleApp.js.map
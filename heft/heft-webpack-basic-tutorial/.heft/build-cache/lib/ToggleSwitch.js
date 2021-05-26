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
/**
 * An example component that renders a switch whose slider position can be "left" or "right".
 */
var ToggleSwitch = /** @class */ (function (_super) {
    __extends(ToggleSwitch, _super);
    function ToggleSwitch(props) {
        var _this = _super.call(this, props) || this;
        // React event handlers should be represented as fields instead of methods to ensure the "this" pointer
        // is bound correctly.  This form does not work with virtual/override inheritance, so use regular methods
        // everywhere else.
        _this._onClickSlider = function (event) {
            if (_this.state.sliderPosition === "left" /* Left */) {
                _this.setState({ sliderPosition: "right" /* Right */ });
            }
            else {
                _this.setState({ sliderPosition: "left" /* Left */ });
            }
            if (_this.props.onToggle) {
                _this.props.onToggle(_this, { sliderPosition: _this.state.sliderPosition });
            }
        };
        _this.state = {
            sliderPosition: "left" /* Left */
        };
        return _this;
    }
    ToggleSwitch.prototype.render = function () {
        var frameStyle = {
            borderRadius: '10px',
            backgroundColor: this.state.sliderPosition === "left" /* Left */
                ? this.props.leftColor
                : this.props.rightColor,
            width: '35px',
            height: '20px',
            cursor: 'pointer'
        };
        var sliderStyle = {
            borderRadius: '10px',
            backgroundColor: '#c0c0c0',
            width: '20px',
            height: '20px'
        };
        if (this.state.sliderPosition === "left" /* Left */) {
            sliderStyle.marginLeft = '0px';
            sliderStyle.marginRight = 'auto';
        }
        else {
            sliderStyle.marginLeft = 'auto';
            sliderStyle.marginRight = '0px';
        }
        return (React.createElement("div", { style: frameStyle, onClick: this._onClickSlider },
            React.createElement("div", { style: sliderStyle })));
    };
    return ToggleSwitch;
}(React.Component));
export { ToggleSwitch };
//# sourceMappingURL=ToggleSwitch.js.map
import * as React from 'react';
/**
 * Slider positions for `ToggleSwitch`.
 */
export declare const enum ToggleSwitchPosition {
    Left = "left",
    Right = "right"
}
/**
 * Event arguments for `IToggleSwitchProps.onToggle`.
 */
export interface IToggleEventArgs {
    sliderPosition: ToggleSwitchPosition;
}
export interface IToggleSwitchProps {
    /**
     * The CSS color when the `ToggleSwitch` slider is in the left position.
     * Example value: `"#800000"`
     */
    leftColor: string;
    /**
     * The CSS color when the `ToggleSwitch` slider is in the right position.
     * Example value: `"#008000"`
     */
    rightColor: string;
    /**
     * An event that fires when the `ToggleSwitch` control is clicked.
     */
    onToggle?: (sender: ToggleSwitch, args: IToggleEventArgs) => void;
}
/**
 * Private state for ToggleSwitch.
 */
interface IToggleSwitchState {
    sliderPosition: ToggleSwitchPosition;
}
/**
 * An example component that renders a switch whose slider position can be "left" or "right".
 */
export declare class ToggleSwitch extends React.Component<IToggleSwitchProps, IToggleSwitchState> {
    constructor(props: IToggleSwitchProps);
    render(): React.ReactNode;
    private _onClickSlider;
}
export {};
//# sourceMappingURL=ToggleSwitch.d.ts.map
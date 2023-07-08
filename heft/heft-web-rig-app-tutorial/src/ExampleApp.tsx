import * as React from 'react';
import { ToggleSwitch, IToggleEventArgs } from 'heft-web-rig-library-tutorial';

/**
 * This React component renders the application page.
 */
export class ExampleApp extends React.Component {
  public render(): React.ReactNode {
    const appStyle: React.CSSProperties = {
      backgroundColor: '#ffffff',
      padding: '20px',
      margin: '20px',
      borderRadius: '5px',
      width: '400px'
    };

    return (
      <div style={appStyle}>
        <h2>Hello, world!</h2>
        <p>Here is an example control:</p>
        <ToggleSwitch leftColor={'#800000'} rightColor={'#008000'} onToggle={this._onToggle} />

        <p>Here is an example image:</p>
        <img src={require('./example-image.png')} />
      </div>
    );
  }

  // React event handlers should be represented as fields instead of methods to ensure the "this" pointer
  // is bound correctly.  This form does not work with virtual/override inheritance, so use regular methods
  // everywhere else.
  private _onToggle = (sender: ToggleSwitch, args: IToggleEventArgs): void => {
    console.log('Toggle switch changed: ' + args.sliderPosition);
  };
}

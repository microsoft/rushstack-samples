"use strict";
// This example is adapted from the Jest guide here:
// https://jestjs.io/docs/en/es6-class-mocks
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundPlayer = void 0;
class SoundPlayer {
    constructor() {
        this._foo = 'bar';
    }
    playSoundFile(fileName) {
        console.log('Playing sound file ' + fileName);
        console.log('Foo=' + this._foo);
    }
}
exports.SoundPlayer = SoundPlayer;
//# sourceMappingURL=SoundPlayer.js.map
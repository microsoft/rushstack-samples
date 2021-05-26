"use strict";
// This example is adapted from the Jest guide here:
// https://jestjs.io/docs/en/es6-class-mocks
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundPlayerConsumer = void 0;
const SoundPlayer_1 = require("./SoundPlayer");
class SoundPlayerConsumer {
    constructor() {
        this._soundPlayer = new SoundPlayer_1.SoundPlayer();
    }
    playSomethingCool() {
        const coolSoundFileName = 'song.mp3';
        this._soundPlayer.playSoundFile(coolSoundFileName);
    }
}
exports.SoundPlayerConsumer = SoundPlayerConsumer;
//# sourceMappingURL=SoundPlayerConsumer.js.map
"use strict";
// This example is adapted from the Jest guide here:
// https://jestjs.io/docs/en/es6-class-mocks#manual-mock
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock('./SoundPlayer'); // SoundPlayer is now a mock constructor
const SoundPlayer_1 = require("./SoundPlayer");
const SoundPlayer_2 = require("./__mocks__/SoundPlayer");
const SoundPlayerConsumer_1 = require("./SoundPlayerConsumer");
beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mocked(SoundPlayer_1.SoundPlayer).mockClear();
    SoundPlayer_2.mockPlaySoundFile.mockClear();
});
it('We can check if the consumer called the class constructor', () => {
    new SoundPlayerConsumer_1.SoundPlayerConsumer();
    expect(SoundPlayer_1.SoundPlayer).toHaveBeenCalledTimes(1);
});
it('We can check if the consumer called a method on the class instance', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer_1.SoundPlayerConsumer();
    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.playSomethingCool();
    expect(SoundPlayer_2.mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});
// The test below validates that jest-improved-resolver.js is working correctly
const SoundPlayer_3 = require("./__mocks__/SoundPlayer");
it('Importing ./__mocks__/SoundPlayer returns the same object as importing ./SoundPlayer', () => {
    expect(SoundPlayer_1.SoundPlayer).toBe(SoundPlayer_3.SoundPlayer);
});
//# sourceMappingURL=SoundPlayerConsumer.test.js.map
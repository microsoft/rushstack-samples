"use strict";
// This example is adapted from the Jest guide here:
// https://jestjs.io/docs/en/es6-class-mocks#automatic-mock
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock('./SoundPlayer'); // SoundPlayer is now a mock constructor
const SoundPlayer_1 = require("./SoundPlayer");
const SoundPlayerConsumer_1 = require("./SoundPlayerConsumer");
beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mocked(SoundPlayer_1.SoundPlayer).mockClear();
});
it('We can check if the consumer called the class constructor', () => {
    new SoundPlayerConsumer_1.SoundPlayerConsumer();
    expect(SoundPlayer_1.SoundPlayer).toHaveBeenCalledTimes(1);
});
it('We can check if the consumer called a method on the class instance', () => {
    // Show that mockClear() is working:
    expect(SoundPlayer_1.SoundPlayer).not.toHaveBeenCalled();
    const soundPlayerConsumer = new SoundPlayerConsumer_1.SoundPlayerConsumer();
    // Constructor should have been called again:
    expect(SoundPlayer_1.SoundPlayer).toHaveBeenCalledTimes(1);
    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.playSomethingCool();
    // mock.instances is available with automatic mocks:
    const mockSoundPlayerInstance = mocked(SoundPlayer_1.SoundPlayer).mock.instances[0];
    const mockPlaySoundFile = mocked(mockSoundPlayerInstance.playSoundFile);
    expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
    // Equivalent to above check:
    expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
    expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
//# sourceMappingURL=01-automatic-mock.test.js.map
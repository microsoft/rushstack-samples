"use strict";
// This example is adapted from the Jest guide here:
// https://jestjs.io/docs/en/es6-class-mocks#complete-example
Object.defineProperty(exports, "__esModule", { value: true });
const mockPlaySoundFile = jest.fn();
jest.mock('./SoundPlayer', () => {
    return {
        SoundPlayer: jest.fn().mockImplementation(() => {
            return { playSoundFile: mockPlaySoundFile };
        })
    };
});
const SoundPlayerConsumer_1 = require("./SoundPlayerConsumer");
const SoundPlayer_1 = require("./SoundPlayer");
beforeEach(() => {
    mocked(SoundPlayer_1.SoundPlayer).mockClear();
    mockPlaySoundFile.mockClear();
});
it('The consumer should be able to call new() on SoundPlayer', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer_1.SoundPlayerConsumer();
    // Ensure constructor created the object:
    expect(soundPlayerConsumer).toBeTruthy();
});
it('We can check if the consumer called the class constructor', () => {
    new SoundPlayerConsumer_1.SoundPlayerConsumer();
    expect(SoundPlayer_1.SoundPlayer).toHaveBeenCalledTimes(1);
});
it('We can check if the consumer called a method on the class instance', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer_1.SoundPlayerConsumer();
    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.playSomethingCool();
    expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
});
//# sourceMappingURL=03-factory-constructor-mock.test.js.map
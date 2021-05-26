"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundPlayer = exports.mockPlaySoundFile = void 0;
// Import this named export into your test file:
exports.mockPlaySoundFile = jest.fn();
const SoundPlayer = jest.fn().mockImplementation(() => {
    return { playSoundFile: exports.mockPlaySoundFile };
});
exports.SoundPlayer = SoundPlayer;
//# sourceMappingURL=SoundPlayer.js.map
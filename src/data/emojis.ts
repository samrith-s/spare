import { emojisByCategory } from 'rn-emoji-keyboard';

export const EMOJIS = emojisByCategory.map((o) => o.data).flat();

import { createShortcut, createKeyHold } from '@solid-primitives/keyboard';

const pressing = createKeyHold('Control', { preventDefault: false });
const options = { preventDefault: false, requireReset: true };

export const undo = (action: () => void) => {
  if (pressing()) createShortcut(['Z'], action, options);
  createShortcut(['Control', 'Z'], action, options);
};

export const redo = (action: () => void) => {
  if (pressing()) createShortcut(['Y'], action, options);
  createShortcut(['Control', 'Y'], action, options);
};

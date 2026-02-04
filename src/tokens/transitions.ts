/**
 * Design Tokens: Transitions
 * Future Foundation Design System
 */

export const transitions = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  timing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    linear: 'linear',
  },
  // Pre-configured transitions
  presets: {
    fast: 'all 150ms ease-in-out',
    base: 'all 200ms ease-in-out',
    slow: 'all 300ms ease-in-out',
    colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
  },
} as const;

export type Transitions = typeof transitions;
export type TransitionDuration = keyof typeof transitions.duration;
export type TransitionTiming = keyof typeof transitions.timing;
export type TransitionPreset = keyof typeof transitions.presets;

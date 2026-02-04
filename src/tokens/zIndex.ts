/**
 * Design Tokens: Z-Index
 * Future Foundation Design System
 *
 * Defines the stacking order of elements in the design system.
 * Higher numbers appear above lower numbers.
 */

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  notification: 1700,
} as const;

export type ZIndex = typeof zIndex;
export type ZIndexKeys = keyof typeof zIndex;

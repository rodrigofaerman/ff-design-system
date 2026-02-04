/**
 * Design Tokens
 * Future Foundation Design System
 */

export * from './colors';
export * from './spacing';
export * from './typography';
export * from './borders';
export * from './shadows';
export * from './transitions';
export * from './zIndex';

import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { borders } from './borders';
import { shadows } from './shadows';
import { transitions } from './transitions';
import { zIndex } from './zIndex';

export const tokens = {
  colors,
  spacing,
  typography,
  borders,
  shadows,
  transitions,
  zIndex,
} as const;

export default tokens;

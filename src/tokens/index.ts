/**
 * Design Tokens
 * Future Foundation Design System
 */

export * from './colors';
export * from './spacing';
export * from './typography';

import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

export const tokens = {
  colors,
  spacing,
  typography,
} as const;

export default tokens;

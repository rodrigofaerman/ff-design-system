# Upgrade Guide: v1.x → v2.0.0

This guide will help you upgrade from Future Foundation Design System v1.x to v2.0.0.

---

## Table of Contents

1. [Overview](#overview)
2. [Breaking Changes](#breaking-changes)
3. [New Features](#new-features)
4. [Migration Steps](#migration-steps)
5. [Component-Specific Changes](#component-specific-changes)
6. [CSS Changes](#css-changes)
7. [Testing](#testing)
8. [Rollback Plan](#rollback-plan)

---

## Overview

**v2.0.0** is a major release that includes:
- Complete design token system
- Enhanced accessibility (WCAG 2.1 AA compliant)
- New variant support for all components
- Mobile-optimized examples
- Breaking changes to Switch component structure

**Estimated Migration Time:** 2-4 hours for most projects

**Risk Level:** Medium (breaking changes limited to Switch component structure)

---

## Breaking Changes

### 1. Switch Component Structure

The Switch component now has an additional wrapper to support error and helper text.

#### Before (v1.x)
```tsx
<div className="ff-switch-wrapper">
  {/* label */}
  <div className="ff-switch-container">
    <input type="checkbox" role="switch" />
    <span className="ff-switch-track">
      <span className="ff-switch-thumb" />
    </span>
  </div>
  {/* label */}
</div>
```

#### After (v2.0.0)
```tsx
<div className="ff-switch-field">              {/* NEW: outer wrapper */}
  <div className="ff-switch-wrapper">
    {/* label */}
    <div className="ff-switch-container">
      <input type="checkbox" role="switch" />
      <span className="ff-switch-track">
        <span className="ff-switch-thumb" />
      </span>
    </div>
    {/* label */}
  </div>
  {/* NEW: error and helper messages */}
</div>
```

#### Impact
**Affected:** Projects with custom CSS targeting `.ff-switch-wrapper`

**Action Required:**
1. Review custom CSS for Switch component
2. Update selectors if needed:
   ```css
   /* Before */
   .ff-switch-wrapper {
     /* custom styles */
   }

   /* After - if targeting the outer container */
   .ff-switch-field {
     /* custom styles */
   }

   /* After - if targeting the switch and label wrapper */
   .ff-switch-wrapper {
     /* custom styles - no change needed */
   }
   ```

### 2. CSS Variables Replace Hardcoded Values

All component styles now use CSS variables instead of hardcoded values.

#### Impact
**Affected:** Projects that override component styles with hardcoded values

**Action Required:**
Use CSS variables for consistency:

```css
/* Before (v1.x) - Hardcoded override */
.ff-button--primary {
  background-color: #3b82f6;
  padding: 0.5rem 1rem;
}

/* After (v2.0.0) - Using tokens */
.ff-button--primary {
  background-color: var(--color-primary-500);
  padding: var(--spacing-2) var(--spacing-4);
}
```

**Note:** Your existing CSS will still work, but using tokens ensures consistency and makes theming easier.

---

## New Features

### 1. Component Variants

All form components now support `variant` prop:

```tsx
// Select
<Select variant="success" helperText="Valid selection" />

// Checkbox
<Checkbox variant="error" error="Required field" />

// Radio
<Radio variant="success" helperText="Correct" />

// Switch
<Switch variant="error" error="This setting is required" />
```

**Variants:** `'default' | 'error' | 'success'`

### 2. Helper Text Support

Checkbox, Radio, and Switch now support helper text:

```tsx
<Checkbox
  label="Enable notifications"
  helperText="You'll receive email updates"
/>

<Radio
  label="Standard Shipping"
  helperText="Delivery in 5-7 business days"
/>

<Switch
  label="Dark Mode"
  helperText="Toggle dark theme"
/>
```

### 3. Enhanced Accessibility

All components now have:
- Proper `aria-describedby` linking helper text
- Standardized focus shadows (0.1 opacity)
- Improved keyboard navigation
- Screen reader announcements

### 4. Mobile Examples

All components have mobile-optimized story examples in Storybook:
- Small Mobile (320px)
- Large Mobile (375px)
- Tablet (768px)

---

## Migration Steps

### Step 1: Update Package

```bash
npm install @ff/design-system@2.0.0
# or
yarn upgrade @ff/design-system@2.0.0
```

### Step 2: Review Switch Component Usage

Search your codebase for Switch components:

```bash
grep -r "Switch" src/
# or
rg "Switch" src/
```

**Check for:**
1. Custom CSS targeting `.ff-switch-wrapper`
2. Direct DOM manipulation
3. Test selectors using Switch classes

### Step 3: Update Custom Styles (If Any)

If you have custom styles for components:

```bash
# Find files with component styles
grep -r ".ff-button\|.ff-input\|.ff-select" styles/
```

**Consider updating to use CSS variables:**
```css
/* Replace hardcoded values */
background-color: #3b82f6;        /* Before */
background-color: var(--color-primary-500);  /* After */

padding: 0.5rem 1rem;             /* Before */
padding: var(--spacing-2) var(--spacing-4);  /* After */
```

### Step 4: Test Components

Run your test suite to catch any breaking changes:

```bash
npm test
# or
yarn test
```

**Focus on:**
- Switch component tests
- Custom style overrides
- Accessibility tests

### Step 5: Visual Regression Testing (Recommended)

If you have visual regression tests, run them to catch any unexpected visual changes:

```bash
npm run test:visual
# or use your visual testing tool
```

### Step 6: Accessibility Testing

Run accessibility audits to verify improvements:

```bash
# Using axe-core
npm run test:a11y

# Or manually test with screen readers
# - NVDA (Windows)
# - JAWS (Windows)
# - VoiceOver (Mac)
```

---

## Component-Specific Changes

### Button
**No breaking changes** ✅

**New features:**
- Active states for outline and ghost variants
- Improved hover states
- Focus shadow uses CSS variable

**Usage:**
```tsx
// All existing code works without changes
<Button variant="primary">Click Me</Button>
```

---

### Input
**No breaking changes** ✅

**New features:**
- Hover states for all variants
- Clear button now keyboard accessible

**Usage:**
```tsx
// All existing code works without changes
<Input
  label="Email"
  placeholder="you@example.com"
  variant="success"  // Existing feature
  helperText="Valid email"  // Existing feature
/>
```

---

### Select
**No breaking changes** ✅

**New features:**
- `variant` prop now supports 'success'
- Hover states added

**Migration:**
```tsx
// Before (v1.x) - error-only
<Select error="Please select">...</Select>

// After (v2.0.0) - supports success
<Select variant="success" helperText="Valid selection">...</Select>
<Select error="Please select">...</Select>  // Still works
```

---

### Checkbox
**No breaking changes** ✅

**New features:**
- `variant` prop: `'default' | 'error' | 'success'`
- `helperText` prop for additional context

**Migration:**
```tsx
// Before (v1.x)
<Checkbox label="I agree" error="Required" />

// After (v2.0.0) - more options
<Checkbox
  label="I agree"
  variant="success"
  helperText="Thank you!"
/>
<Checkbox label="I agree" error="Required" />  // Still works
```

---

### Radio & RadioGroup
**No breaking changes** ✅

**New features:**
- `variant` prop: `'default' | 'error' | 'success'`
- `helperText` prop for both Radio and RadioGroup

**Migration:**
```tsx
// Before (v1.x)
<RadioGroup name="shipping" error="Required">
  <Radio value="standard" label="Standard" />
</RadioGroup>

// After (v2.0.0) - more options
<RadioGroup
  name="shipping"
  variant="success"
  helperText="Available in your area"
>
  <Radio value="standard" label="Standard" helperText="5-7 days" />
</RadioGroup>

// Old code still works
<RadioGroup name="shipping" error="Required">...</RadioGroup>
```

---

### Switch
**⚠️ BREAKING CHANGE** - Structure modified

**New features:**
- `variant` prop: `'default' | 'error' | 'success'`
- `error` prop for error messages
- `helperText` prop for helper text
- Outer wrapper added for messages

**Migration:**

#### Basic Usage (No Changes)
```tsx
// Before (v1.x)
<Switch label="Enable" />

// After (v2.0.0) - Still works
<Switch label="Enable" />
```

#### Custom CSS (Update Required)
```css
/* Before (v1.x) - Custom container styles */
.ff-switch-wrapper {
  background: white;
  padding: 1rem;
}

/* After (v2.0.0) - Target outer wrapper instead */
.ff-switch-field {
  background: white;
  padding: 1rem;
}

/* Or keep targeting inner wrapper */
.ff-switch-wrapper {
  /* styles for switch+label wrapper */
}
```

#### New Features
```tsx
// After (v2.0.0) - New capabilities
<Switch
  label="Dark Mode"
  variant="success"
  helperText="Toggle dark theme"
/>

<Switch
  label="Required Setting"
  error="This setting must be enabled"
/>
```

---

### Textarea
**No breaking changes** ✅

**New features:**
- Hover states for all variants
- Improved consistency with Input

**Usage:**
```tsx
// All existing code works without changes
<Textarea
  label="Message"
  variant="success"
  helperText="Message sent!"
/>
```

---

## CSS Changes

### Design Token System

v2.0.0 introduces a comprehensive CSS variable system. While existing styles will work, consider migrating to tokens for consistency.

#### Color Tokens
```css
/* Primary colors */
--color-primary-500: #3b82f6;
--color-primary-600: #2563eb;

/* Success colors */
--color-success-500: #22c55e;
--color-success-600: #16a34a;

/* Error colors */
--color-error-500: #ef4444;
--color-error-600: #dc2626;

/* Gray scale */
--color-gray-100: #f3f4f6;
--color-gray-300: #d1d5db;
--color-gray-500: #6b7280;
--color-gray-700: #374151;
--color-gray-900: #111827;

/* Base colors */
--color-white: #ffffff;
--color-black: #000000;
```

#### Spacing Tokens
```css
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
```

#### Other Tokens
```css
/* Border radius */
--border-radius-base: 0.25rem;
--border-radius-md: 0.375rem;
--border-radius-lg: 0.5rem;
--border-radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-focus-primary: 0 0 0 3px rgba(59, 130, 246, 0.1);

/* Transitions */
--transition-fast: all 150ms ease-in-out;
--transition-base: all 200ms ease-in-out;
```

### Migration Example

```css
/* Before (v1.x) - Hardcoded values */
.custom-button {
  background-color: #3b82f6;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.15s ease-in-out;
}

.custom-button:hover {
  background-color: #2563eb;
}

/* After (v2.0.0) - Using tokens */
.custom-button {
  background-color: var(--color-primary-500);
  color: var(--color-white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--border-radius-md);
  transition: var(--transition-fast);
}

.custom-button:hover {
  background-color: var(--color-primary-600);
}
```

---

## Testing

### Automated Testing

```bash
# Run all tests
npm test

# Run specific component tests
npm test -- Button
npm test -- Switch

# Run accessibility tests
npm test -- --testNamePattern="a11y"
```

### Manual Testing Checklist

#### Switch Component (Critical)
- [ ] Switch renders correctly
- [ ] Switch toggles work
- [ ] Custom styles still apply
- [ ] Error messages display correctly
- [ ] Helper text displays correctly
- [ ] Focus states work
- [ ] Keyboard navigation works

#### All Components
- [ ] Visual appearance matches expected
- [ ] Hover states work correctly
- [ ] Focus states are visible
- [ ] Form validation works
- [ ] Error messages display correctly
- [ ] Helper text displays correctly
- [ ] Mobile responsive layouts work
- [ ] Accessibility features work (test with screen reader)

### Browser Testing

Test in supported browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Device Testing

Test on:
- [ ] Desktop (1280px+)
- [ ] Tablet (768px)
- [ ] Large Mobile (375px)
- [ ] Small Mobile (320px)

---

## Rollback Plan

If you encounter issues, you can rollback to v1.x:

```bash
# Rollback to previous version
npm install @ff/design-system@1.x
# or
yarn add @ff/design-system@1.x

# Restore committed changes
git revert <commit-hash>

# Or restore from backup
git checkout <branch-name> -- package.json
npm install
```

### When to Rollback

Consider rollback if:
- Critical functionality breaks
- Visual regressions affect user experience
- Accessibility features regress
- Performance degrades significantly

### Getting Help

If you encounter issues:
1. Check this upgrade guide
2. Review [CHANGELOG.md](../CHANGELOG.md)
3. Read [IMPLEMENTATION_HISTORY.md](./IMPLEMENTATION_HISTORY.md)
4. Open an issue on GitHub
5. Contact the design system team

---

## Post-Migration

### Recommended Actions

1. **Update Documentation**
   - Update component examples
   - Update style guides
   - Share changes with team

2. **Enable Stylelint** (Optional)
   ```bash
   npm install --save-dev stylelint stylelint-config-standard
   npm run lint:css
   ```

3. **Explore New Features**
   - Try new variant props
   - Add helper text where appropriate
   - Review mobile examples in Storybook

4. **Performance Check**
   - Run lighthouse audits
   - Check bundle size
   - Verify load times

5. **Accessibility Audit**
   - Run axe-core tests
   - Test with screen readers
   - Verify keyboard navigation

---

## FAQ

### Q: Do I need to update all components at once?
**A:** No, v2.0.0 is mostly backward compatible. Only Switch component has structural changes. You can gradually adopt new features.

### Q: Will my custom styles break?
**A:** Most custom styles will work. Only Switch component styles may need updates if you target `.ff-switch-wrapper`.

### Q: Should I use CSS variables for my custom styles?
**A:** Recommended but not required. CSS variables make theming easier and ensure consistency.

### Q: How do I enable Stylelint?
**A:**
```bash
npm install --save-dev stylelint stylelint-config-standard
npm run lint:css
```

### Q: Can I use v1.x and v2.0.0 components together?
**A:** Not recommended. Stick with one version to avoid conflicts.

### Q: What if I find a bug?
**A:** Open an issue on GitHub with:
- Component name
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## Version Matrix

| Feature | v1.x | v2.0.0 |
|---------|------|--------|
| Design Tokens | ❌ | ✅ |
| WCAG 2.1 AA | ~78% | 90%+ |
| Variant Support | Partial | Complete |
| Helper Text | Partial | Complete |
| Mobile Examples | ❌ | ✅ |
| Hover States | Partial | Complete |
| Focus Shadow Consistency | ❌ | ✅ |

---

## Support

For questions or issues:
- **GitHub Issues:** https://github.com/rodrigofaerman/ff-design-system/issues
- **Documentation:** View Storybook at `/storybook-static/`
- **Email:** support@futurefoundation.com

---

**Document Version:** 1.0.0
**Last Updated:** February 4, 2026
**Migration Risk:** Medium (Switch component structure change)
**Recommended Testing Time:** 2-4 hours

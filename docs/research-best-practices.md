# Research: React Component Libraries & Design Systems Best Practices

**Date:** 2026-02-03
**Source:** Industry analysis of Material UI, Radix UI, Chakra UI, Headless UI
**For:** Future Foundation Design System

---

## 1. Form Components Architecture

### Input Components Pattern

**Controlled Component Approach (Recommended):**

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, required, ...props }, ref) => (
    <div className="input-wrapper">
      {label && <label>{label} {required && '*'}</label>}
      <input ref={ref} {...props} aria-invalid={!!error} />
      {error && <span className="error">{error}</span>}
      {helperText && <span className="helper">{helperText}</span>}
    </div>
  )
);
```

### Select Component Pattern

```typescript
// Compound component pattern for flexibility
<Select value={value} onChange={handleChange}>
  <Select.Trigger placeholder="Choose option" />
  <Select.Content>
    <Select.Item value="1">Option 1</Select.Item>
    <Select.Item value="2">Option 2</Select.Item>
  </Select.Content>
</Select>
```

### Checkbox/Radio/Switch Pattern

- Use controlled components with value/onChange props
- Implement proper ARIA attributes (aria-checked, role="switch", etc.)
- Support custom styling while maintaining semantics

### Error Handling & Validation

- Separate validation logic from components (use external validators like Zod, Yup)
- Display errors alongside inputs with ARIA live regions
- Support async validation (API calls)
- Clear error messages for accessibility

### Accessibility Standards

- ✅ ARIA labels for screen readers
- ✅ Keyboard navigation support (Tab, Enter, Arrow keys)
- ✅ Focus management and visual indicators
- ✅ Color contrast ratios (WCAG AA minimum)
- ✅ Touch targets minimum 44x44px

---

## 2. Leading Design Systems Analysis

### Material UI Patterns

- **Component composition:** Base + variants + states
- **CSS-in-JS:** Emotion for theming
- **Props API:** variant, size, color, disabled, fullWidth
- **ARIA support:** Built-in accessibility

**Example:**
```tsx
<Button variant="contained" size="large" color="primary">
  Click me
</Button>
```

### Radix UI Patterns

- **Headless component library:** Styling agnostic
- **Unstyled primitives:** Developers add CSS
- **Accessibility:** Out of box
- **Compound components:** Throughout
- **State management:** Built-in (open/closed, etc.)

**Example:**
```tsx
<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>Content</Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

### Chakra UI Patterns

- **CSS-in-JS:** Styled System
- **Prop-based styling:** Direct style props
- **Box component:** As base
- **TypeScript:** Excellent support
- **Theme provider:** At root

**Example:**
```tsx
<Box bg="blue.500" p={4} borderRadius="md">
  <Text color="white">Hello</Text>
</Box>
```

### Headless UI Patterns

- **Focus on functionality:** Not styling
- **Multiple states:** For consumer control
- **APIs:** Render props or hooks-based
- **Minimal JavaScript:** Maximum flexibility

---

## 3. Design Tokens Advanced

### Shadow System

```typescript
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;
```

### Border Radius Scale

```typescript
export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
} as const;
```

### Animation/Transition Tokens

```typescript
export const transitions = {
  durations: {
    fast: '100ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  timingFunctions: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;
```

### Z-index Management

```typescript
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  backdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;
```

---

## 4. Theme System

### CSS Variables Approach (Recommended)

```css
:root {
  /* Colors */
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;

  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-4: 1rem;
  --spacing-8: 2rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

  /* Transitions */
  --transition-fast: 100ms;
  --transition-base: 200ms;
}

[data-theme="dark"] {
  --color-primary-50: #172554;
  --color-primary-500: #60a5fa;
  --color-primary-900: #eff6ff;
}
```

### Dark Mode Implementation

```typescript
export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, []);

  return { isDark, setIsDark };
};
```

### Theme Switching Pattern

```typescript
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

---

## 5. Component Composition Patterns

### Compound Components Pattern

```typescript
// Tabs example
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs>
```

### Render Props Pattern

```typescript
<Form
  render={({ values, errors, handleChange }) => (
    <div>
      <input value={values.name} onChange={handleChange} />
      {errors.name && <span>{errors.name}</span>}
    </div>
  )}
/>
```

### Hooks Pattern (Modern)

```typescript
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  return { values, errors, setValues, setErrors };
};

// Usage
const { values, errors, setValues } = useForm({ name: '' });
```

### Polymorphic Components

```typescript
interface ButtonProps<T extends React.ElementType = 'button'> {
  as?: T;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = React.forwardRef<any, ButtonProps>(
  ({ as: Component = 'button', children, ...props }, ref) => (
    <Component ref={ref} {...props}>{children}</Component>
  )
);

// Usage
<Button as="a" href="/home">Link Button</Button>
<Button as={NextLink}>Next Link</Button>
```

---

## Key Recommendations for FF Design System

### Phase 1 (Immediate)

1. ✅ **Adopt CSS Variables** for theming (already using CSS in Button)
2. ⏳ **Extend Design Tokens** with shadows, borders, z-index, animations
3. ⏳ **Implement Form Components** (Input, Select, Checkbox, Radio, Switch, Textarea)
4. ⏳ **Add Storybook** with accessibility addon

### Phase 2 (Short-term)

5. **Implement Compound Component Pattern** for complex form controls
6. **Create Form Wrapper Components** (FormField, FormGroup, FormSection)
7. **Add State Management Utilities** for form state
8. **Establish Accessibility Audit Process** using axe or similar tools

### Phase 3 (Medium-term)

9. **Consider Radix UI as Base Layer** for unstyled accessible primitives
10. **Document Component API Patterns** in Storybook with multiple examples
11. **Add Dark Mode** with CSS variables
12. **Create Component Composition Examples**

---

## Next Implementation Steps

1. ✅ Add design tokens (colors, spacing, typography)
2. ✅ Create Button component
3. ⏳ Add advanced design tokens (shadows, z-index, animations)
4. ⏳ Implement Input, Select, Checkbox, Radio, Switch, Textarea
5. ⏳ Set up Storybook stories with accessibility checks
6. ⏳ Add dark mode CSS variables
7. ⏳ Create component composition examples

---

## References

- [Material UI](https://mui.com)
- [Radix UI](https://radix-ui.com)
- [Chakra UI](https://chakra-ui.com)
- [Headless UI](https://headlessui.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)

---

**Document Version:** 1.0
**Last Updated:** 2026-02-03
**Researched by:** AIOS Explore Agent

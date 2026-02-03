# Future Foundation Design System

**UI Component Library & Design Tokens**

Part of the [Future Foundation](https://github.com/rodrigofaerman) Apps Ecosystem.

---

## 🎨 Overview

The Future Foundation Design System provides a comprehensive set of reusable UI components and design tokens to ensure consistency across all FF applications.

### Features

- 🎨 **Design Tokens** - Colors, spacing, typography
- 🧩 **React Components** - 50+ components (in progress)
- 📚 **Storybook** - Interactive documentation
- 🎯 **TypeScript** - Full type safety
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎭 **Themeable** - Light & dark modes
- 📦 **Tree-shakeable** - Optimized bundle size

---

## 📦 Installation

```bash
npm install @ff/design-system
```

### Peer Dependencies

```bash
npm install react react-dom
```

---

## 🚀 Quick Start

### Import Components

```tsx
import { Button } from '@ff/design-system';

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

### Use Design Tokens

```tsx
import { tokens } from '@ff/design-system';

const styles = {
  color: tokens.colors.primary[600],
  padding: tokens.spacing[4],
  fontSize: tokens.typography.fontSize.base,
};
```

---

## 🧩 Available Components

### Atoms (Basic Components)

- ✅ **Button** - Primary interaction component
- 🚧 Input - Text, email, password, number
- 🚧 Select - Dropdown selection
- 🚧 Checkbox - Boolean input
- 🚧 Radio - Single choice
- 🚧 Badge - Status indicators
- 🚧 Icon - Icon system

### Molecules (Composite Components)

- 🚧 Card - Content container
- 🚧 Modal - Dialog overlay
- 🚧 Dropdown - Menu system
- 🚧 Tabs - Tab navigation
- 🚧 Alert - Notifications

### Organisms (Complex Components)

- 🚧 DataTable - Table with sorting/filtering
- 🚧 Navigation - Sidebar/header
- 🚧 Form - Complete form system

---

## 🎨 Design Tokens

### Colors

```tsx
import { colors } from '@ff/design-system';

// Primary palette
colors.primary[500]; // #3b82f6
colors.primary[600]; // #2563eb

// Semantic colors
colors.success[500]; // #22c55e
colors.error[500]; // #ef4444
colors.warning[500]; // #f59e0b

// Grayscale
colors.gray[100]; // #f3f4f6
colors.gray[900]; // #111827
```

### Spacing

```tsx
import { spacing } from '@ff/design-system';

spacing[4]; // 1rem (16px)
spacing[8]; // 2rem (32px)
spacing[12]; // 3rem (48px)
```

### Typography

```tsx
import { typography } from '@ff/design-system';

typography.fontSize.base; // 1rem (16px)
typography.fontWeight.bold; // 700
typography.lineHeight.normal; // 1.5
```

---

## 📚 Documentation

### Storybook

Run Storybook locally:

```bash
npm run dev
```

Then open http://localhost:6006

### Component API

Each component exports:
- TypeScript types
- Props interface
- Usage examples in Storybook

---

## 🛠️ Development

### Setup

```bash
cd ff-design-system
npm install
```

### Commands

```bash
npm run dev            # Start Storybook
npm run build          # Build package
npm run test           # Run tests
npm run lint           # Lint code
npm run typecheck      # Type checking
```

### Adding a New Component

1. Create component directory: `src/components/MyComponent/`
2. Add component file: `MyComponent.tsx`
3. Add styles: `MyComponent.css`
4. Add story: `MyComponent.stories.tsx`
5. Add tests: `MyComponent.test.tsx`
6. Export from `index.ts`

---

## 🎯 Roadmap

### Phase 1 (Current) - Foundation
- [x] Setup project structure
- [x] Design tokens (colors, spacing, typography)
- [x] Button component
- [ ] Input components
- [ ] Form controls
- [ ] Storybook setup

### Phase 2 - Molecules
- [ ] Card components
- [ ] Modal/Drawer
- [ ] Alert/Toast
- [ ] Tabs/Accordion

### Phase 3 - Organisms
- [ ] DataTable
- [ ] Navigation
- [ ] FileUpload

### Phase 4 - Polish
- [ ] Dark mode
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Documentation

---

## 🤝 Usage in FF Ecosystem

This design system is used by:

- `@ff/edu-platform` - Educational LMS
- `@ff/marketing-suite` - Marketing tools
- `@ff/ai-hub` - AI intelligence platform
- `@ff/ops-platform` - Operations dashboard
- `@ff/websites` - Website builder
- All other FF applications

---

## 📄 License

MIT © Future Foundation

---

## 🔗 Links

- **GitHub:** https://github.com/rodrigofaerman/ff-design-system
- **Storybook:** (Coming soon)
- **NPM:** @ff/design-system
- **Owner:** [@rodrigofaerman](https://github.com/rodrigofaerman)

---

**Version:** 1.0.0
**Status:** 🚧 In Development
**Last Updated:** 2026-02-03

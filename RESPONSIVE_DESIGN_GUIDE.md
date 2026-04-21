# Responsive Design Guide

This application is fully responsive and adapts to mobile, tablet, and desktop screens.

## Layout Constraints

- **Maximum Width**: 1440px on desktop (content is centered)
- **Header**: Full-width across all screen sizes
- **Content**: Centered with max-width constraint on desktop

## Breakpoints

The application uses Tailwind CSS breakpoints:

- **Mobile**: < 640px (default)
- **Tablet (sm)**: ≥ 640px
- **Desktop (lg)**: ≥ 1024px
- **Large Desktop (xl)**: ≥ 1280px
- **Content Max-Width**: 1440px (on desktop screens)

## Responsive Components

### 1. ResponsiveButton

A button component with built-in responsive sizing and variants.

```tsx
import { ResponsiveButton, ResponsiveButtonGroup } from './components/ResponsiveButton';

function MyComponent() {
  return (
    <>
      {/* Single button */}
      <ResponsiveButton variant="primary" size="large">
        Click Me
      </ResponsiveButton>

      {/* Button group - stacks on mobile */}
      <ResponsiveButtonGroup>
        <ResponsiveButton variant="primary">Save</ResponsiveButton>
        <ResponsiveButton variant="outline">Cancel</ResponsiveButton>
      </ResponsiveButtonGroup>

      {/* Full width on mobile */}
      <ResponsiveButton fullWidthOnMobile>
        Sign Up Now
      </ResponsiveButton>
    </>
  );
}
```

**Props:**
- `variant`: "primary" | "secondary" | "outline"
- `size`: "small" | "medium" | "large"
- `fullWidthOnMobile`: Boolean to make button full width on mobile devices

### 2. ResponsiveLayout

A wrapper component that provides consistent layout and header across all pages.

```tsx
import { ResponsiveLayout } from './components/ResponsiveLayout';

function MyPage() {
  return (
    <ResponsiveLayout>
      {/* Your page content */}
    </ResponsiveLayout>
  );
}
```

**Features:**
- Responsive header with logo and navigation
- Sticky header on scroll
- Automatic mobile/desktop header switching
- Language dropdown integration
- Full-width header that spans entire screen
- Content area constrained to 1440px max-width and centered

### 2. ResponsiveContainer

Centers content and adds appropriate padding for different screen sizes.

```tsx
import { ResponsiveContainer } from './components/ResponsiveLayout';

function MySection() {
  return (
    <ResponsiveContainer className="py-12">
      {/* Your content */}
    </ResponsiveContainer>
  );
}
```

**Features:**
- Max width constraint (1440px)
- Responsive horizontal padding
- Centered content alignment

### 3. ResponsiveGrid

Automatically adjusts grid columns based on screen size.

```tsx
import { ResponsiveGrid } from './components/ResponsiveLayout';

function MyGrid() {
  return (
    <ResponsiveGrid
      columns={{ mobile: 1, tablet: 2, desktop: 3 }}
      gap="gap-6"
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </ResponsiveGrid>
  );
}
```

**Props:**
- `columns`: Define column count for each breakpoint
- `gap`: Tailwind gap class (e.g., "gap-4", "gap-6")
- `className`: Additional custom classes

## Responsive Utilities

### Text Sizing

Use Tailwind's responsive text classes:

```tsx
<h1 className="text-2xl sm:text-3xl lg:text-5xl">
  Responsive Heading
</h1>

<p className="text-base sm:text-lg lg:text-xl">
  Responsive paragraph text
</p>
```

### Spacing

Use responsive padding and margins:

```tsx
<div className="px-4 sm:px-6 lg:px-10">
  Responsive padding
</div>

<div className="py-8 sm:py-12 lg:py-16">
  Responsive vertical spacing
</div>
```

### Display

Show/hide elements at different breakpoints:

```tsx
{/* Show only on mobile */}
<div className="block lg:hidden">
  Mobile content
</div>

{/* Show only on desktop */}
<div className="hidden lg:block">
  Desktop content
</div>

{/* Show on tablet and desktop */}
<div className="hidden sm:block">
  Tablet+ content
</div>
```

### Flexbox & Grid

Responsive layouts:

```tsx
{/* Stack on mobile, row on desktop */}
<div className="flex flex-col lg:flex-row gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

{/* 1 column mobile, 2 tablet, 3 desktop */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Interactive Components

### LoginModal

The login modal is fully responsive:
- Full width on mobile with padding
- Centered with max-width on desktop
- Proper touch targets on mobile

### LanguageDropdown

Responsive dropdown menu:
- Touch-friendly on mobile
- Click-friendly on desktop
- Closes on outside click

### RotatingText

Automatically scales text size:
- 36px on mobile
- 48px on tablet
- 60px on desktop

## Layout Architecture

### Full-Width Header + Centered Content

The application uses a full-width header with centered content pattern:

```tsx
{/* Header spans full width */}
<header className="w-full px-6 py-4">
  <div className="max-w-[1440px] mx-auto">
    {/* Header content */}
  </div>
</header>

{/* Main content is centered */}
<main className="w-full">
  <div className="max-w-[1440px] mx-auto">
    {/* Page content */}
  </div>
</main>
```

This pattern ensures:
- Header background spans the entire viewport
- Header content is centered and constrained to 1440px
- Main content is also centered and constrained to 1440px
- Consistent alignment between header and content

## Best Practices

### 1. Mobile-First Approach

Start with mobile styles, then add larger breakpoints:

```tsx
// ✅ Good - Mobile first
<div className="text-base sm:text-lg lg:text-xl">

// ❌ Bad - Desktop first
<div className="text-xl lg:text-lg sm:text-base">
```

### 2. Touch Targets

Ensure buttons/links are at least 44x44px on mobile:

```tsx
<button className="min-h-[44px] min-w-[44px] sm:min-h-[36px] sm:min-w-auto">
  Click me
</button>
```

### 3. Readable Text

Maintain readability across devices:

```tsx
<p className="max-w-prose text-base sm:text-lg leading-relaxed">
  This paragraph has optimal line length and spacing
</p>
```

### 4. Images

Use responsive images:

```tsx
<img
  className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-xl"
  src={image}
  alt="Description"
/>
```

### 5. Navigation

Consider different navigation patterns:

```tsx
{/* Mobile: Hamburger menu */}
<div className="lg:hidden">
  <button>☰ Menu</button>
</div>

{/* Desktop: Full navigation */}
<nav className="hidden lg:flex gap-6">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
</nav>
```

## Testing Responsive Design

1. **Browser DevTools**: Use responsive design mode
2. **Physical Devices**: Test on real phones and tablets
3. **Common Breakpoints**:
   - iPhone SE: 375px
   - iPhone 12/13: 390px
   - iPad: 768px
   - Desktop: 1024px+

## Example Page Template

See `src/app/components/ExamplePage.tsx` for a complete example of building responsive pages with all the available components.

## Questions?

For questions about responsive design in this application, refer to:
- Tailwind CSS documentation: https://tailwindcss.com/docs/responsive-design
- This guide's example components
- The existing landing page implementation in `src/app/App.tsx`

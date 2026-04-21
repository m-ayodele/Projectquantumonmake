# Responsive Components Library

All components in this library are fully responsive and work across mobile, tablet, and desktop devices.

## Layout Design

- **Maximum Content Width**: 1440px (centered on desktop)
- **Header**: Full-width with centered content
- **Navigation**: Spans entire viewport width
- **Content Areas**: Automatically centered within 1440px constraint

## Quick Reference

### Layout Components

```tsx
// Full page wrapper with header
<ResponsiveLayout>
  {/* Your page content */}
</ResponsiveLayout>

// Container with max-width and padding
<ResponsiveContainer className="py-12">
  {/* Section content */}
</ResponsiveContainer>

// Responsive grid
<ResponsiveGrid
  columns={{ mobile: 1, tablet: 2, desktop: 3 }}
  gap="gap-6"
>
  {/* Grid items */}
</ResponsiveGrid>
```

### Interactive Components

```tsx
// Responsive button
<ResponsiveButton
  variant="primary"
  size="large"
  fullWidthOnMobile
>
  Click Me
</ResponsiveButton>

// Button group (stacks on mobile)
<ResponsiveButtonGroup>
  <ResponsiveButton variant="primary">Save</ResponsiveButton>
  <ResponsiveButton variant="outline">Cancel</ResponsiveButton>
</ResponsiveButtonGroup>

// Language dropdown
<LanguageDropdown />

// Login modal
<LoginModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
/>

// Rotating text
<RotatingText />
```

### Image Components

```tsx
// Scrolling image column
<ScrollingImageColumn direction="down" speed={0.6}>
  <div className="flex flex-col gap-[32px]">
    {/* Image cards */}
  </div>
</ScrollingImageColumn>

// Individual image cards
<ImageCard1 />
<ImageCard2 />
<IconCard />
```

## Component Files

- `ResponsiveLayout.tsx` - Layout components (Layout, Container, Grid)
- `ResponsiveButton.tsx` - Button components
- `LanguageDropdown.tsx` - Language selection dropdown
- `LoginModal.tsx` - Login modal dialog
- `RotatingText.tsx` - Animated rotating text
- `ScrollingImageColumn.tsx` - Auto-scrolling image columns
- `ImageCards.tsx` - Individual image card components

## Usage Example

See `ExamplePage.tsx` for a complete example of how to build a responsive page using all available components.

## Documentation

For detailed documentation, see:
- `RESPONSIVE_DESIGN_GUIDE.md` - Complete responsive design guide
- `ExamplePage.tsx` - Working example with all components
- Individual component files - JSDoc comments for each component

## Breakpoints

- **Mobile**: < 640px
- **Tablet**: ≥ 640px (sm:)
- **Desktop**: ≥ 1024px (lg:)
- **Large Desktop**: ≥ 1280px (xl:)

## Building New Pages

1. Wrap your page with `<ResponsiveLayout>`
2. Use `<ResponsiveContainer>` for content sections
3. Use `<ResponsiveGrid>` for grid layouts
4. Use `<ResponsiveButton>` for all buttons
5. Apply Tailwind responsive classes (sm:, lg:) as needed

**Example:**

```tsx
import { ResponsiveLayout, ResponsiveContainer } from './components/ResponsiveLayout';
import { ResponsiveButton } from './components/ResponsiveButton';

export function MyNewPage() {
  return (
    <ResponsiveLayout>
      <ResponsiveContainer className="py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl">
          My Page
        </h1>
        <p className="text-base sm:text-lg mt-4">
          Page description
        </p>
        <ResponsiveButton variant="primary" className="mt-6">
          Call to Action
        </ResponsiveButton>
      </ResponsiveContainer>
    </ResponsiveLayout>
  );
}
```

This ensures your page is automatically responsive across all devices!

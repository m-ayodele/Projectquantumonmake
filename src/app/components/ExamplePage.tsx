import { ResponsiveLayout, ResponsiveContainer, ResponsiveGrid } from './ResponsiveLayout';
import { ResponsiveButton, ResponsiveButtonGroup } from './ResponsiveButton';
import { ResponsiveHeading, ResponsiveParagraph, ResponsiveLink } from './ResponsiveText';

/**
 * Example page demonstrating how to use the responsive layout components
 * for future pages. This ensures all pages are responsive by default.
 */
export function ExamplePage() {
  return (
    <ResponsiveLayout>
      <ResponsiveContainer className="py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <ResponsiveHeading level={1} className="mb-6">
            Example Responsive Page
          </ResponsiveHeading>
          <ResponsiveParagraph size="large" className="max-w-3xl">
            This is an example of how to build responsive pages using the ResponsiveLayout components.
            All content automatically adapts to mobile, tablet, and desktop screens. For more information,
            see the <ResponsiveLink href="/docs">documentation</ResponsiveLink>.
          </ResponsiveParagraph>
        </section>

        {/* Grid Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d27] mb-8">
            Responsive Grid Example
          </h2>
          <ResponsiveGrid
            columns={{ mobile: 1, tablet: 2, desktop: 3 }}
            gap="gap-6"
          >
            <div className="bg-[#fff0e9] p-6 rounded-[16px] border border-[#ffd1ba]">
              <h3 className="text-xl font-bold mb-3">Feature 1</h3>
              <p className="text-[#181d27]">
                This card automatically adjusts its width based on screen size.
              </p>
            </div>
            <div className="bg-[#fff0e9] p-6 rounded-[16px] border border-[#ffd1ba]">
              <h3 className="text-xl font-bold mb-3">Feature 2</h3>
              <p className="text-[#181d27]">
                On mobile: 1 column. On tablet: 2 columns. On desktop: 3 columns.
              </p>
            </div>
            <div className="bg-[#fff0e9] p-6 rounded-[16px] border border-[#ffd1ba]">
              <h3 className="text-xl font-bold mb-3">Feature 3</h3>
              <p className="text-[#181d27]">
                Spacing and padding also adapt to screen size automatically.
              </p>
            </div>
          </ResponsiveGrid>
        </section>

        {/* Button Examples */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d27] mb-8">
            Responsive Buttons
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Button Variants</h3>
              <ResponsiveButtonGroup>
                <ResponsiveButton variant="primary">Primary</ResponsiveButton>
                <ResponsiveButton variant="secondary">Secondary</ResponsiveButton>
                <ResponsiveButton variant="outline">Outline</ResponsiveButton>
              </ResponsiveButtonGroup>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Button Sizes</h3>
              <ResponsiveButtonGroup>
                <ResponsiveButton size="small">Small</ResponsiveButton>
                <ResponsiveButton size="medium">Medium</ResponsiveButton>
                <ResponsiveButton size="large">Large</ResponsiveButton>
              </ResponsiveButtonGroup>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Full Width on Mobile</h3>
              <ResponsiveButton fullWidthOnMobile variant="primary">
                Full Width on Mobile
              </ResponsiveButton>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d27] mb-6">
            How to Use
          </h2>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <ol className="space-y-4 text-[#181d27]">
              <li>
                <strong>ResponsiveLayout:</strong> Wrap your entire page with this component.
                It includes the responsive header and ensures consistent layout.
              </li>
              <li>
                <strong>ResponsiveContainer:</strong> Use this for content sections that need
                proper padding and max-width constraints.
              </li>
              <li>
                <strong>ResponsiveGrid:</strong> Use this for grid layouts that automatically
                adjust column count based on screen size.
              </li>
              <li>
                <strong>Tailwind Responsive Classes:</strong> Use sm:, md:, lg:, xl: prefixes
                for custom responsive styling (e.g., text-base sm:text-lg lg:text-xl).
              </li>
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 bg-[rgba(46,46,46,0.05)] rounded-[16px]">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d27] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-[#181d27] mb-6 max-w-2xl mx-auto px-4">
            Use these components for all future pages to ensure they're responsive out of the box.
          </p>
          <ResponsiveButtonGroup className="justify-center">
            <ResponsiveButton variant="primary" size="large">
              Get Started
            </ResponsiveButton>
            <ResponsiveButton variant="outline" size="large">
              Learn More
            </ResponsiveButton>
          </ResponsiveButtonGroup>
        </section>
      </ResponsiveContainer>
    </ResponsiveLayout>
  );
}

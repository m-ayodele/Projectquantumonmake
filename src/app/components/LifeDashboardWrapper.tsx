import { useEffect, useRef } from 'react';
import LifeDashboard from '../../imports/LifeDashboard';

interface LifeDashboardWrapperProps {
  onNavigateToClientManagement: () => void;
}

/**
 * Wrapper component for the Life Dashboard
 * This makes the imported dashboard responsive and integrates it with the app
 */
export function LifeDashboardWrapper({ onNavigateToClientManagement }: LifeDashboardWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Find and make the Client Management menu item clickable
    const findClientManagementItem = () => {
      if (!containerRef.current) return null;

      // Find all ListItemText components
      const listItemTexts = containerRef.current.querySelectorAll('[data-name="ListItem Text"]');

      // Find the one that contains "Client Management"
      for (const item of Array.from(listItemTexts)) {
        if (item.textContent?.includes('Client Management')) {
          // Get the parent ListItem container
          return item.closest('[data-name="<ListItem>"]');
        }
      }
      return null;
    };

    const clientManagementItem = findClientManagementItem();

    if (clientManagementItem) {
      // Add click handler
      const handleClick = () => {
        onNavigateToClientManagement();
      };

      const htmlElement = clientManagementItem as HTMLElement;
      htmlElement.style.cursor = 'pointer';
      htmlElement.style.transition = 'all 0.2s ease';

      // Add hover effect
      const handleMouseEnter = () => {
        htmlElement.style.backgroundColor = 'rgba(255, 107, 34, 0.05)';
      };

      const handleMouseLeave = () => {
        htmlElement.style.backgroundColor = '';
      };

      clientManagementItem.addEventListener('click', handleClick);
      clientManagementItem.addEventListener('mouseenter', handleMouseEnter);
      clientManagementItem.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        clientManagementItem.removeEventListener('click', handleClick);
        clientManagementItem.removeEventListener('mouseenter', handleMouseEnter);
        clientManagementItem.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [onNavigateToClientManagement]);

  return (
    <div ref={containerRef} className="w-full min-h-screen overflow-auto">
      <div className="max-w-[1440px] mx-auto">
        <LifeDashboard />
      </div>
    </div>
  );
}

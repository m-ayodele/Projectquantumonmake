# Navigation Flow Documentation

This document describes the complete navigation flow in the Leadway Quantum application.

## Application Views

The application has three main views managed by a state machine:

```
Landing Page → Portal → Life Dashboard
```

## View Details

### 1. Landing Page (`currentView = 'landing'`)
**Entry Point**: Initial load
**Components**: 
- Animated hero section with rotating text (Life/Health/General Business)
- Scrolling image columns (desktop only)
- "Sign In" CTA button

**User Actions**:
- Click "Sign In" → Opens Login Modal

### 2. Portal (`currentView = 'portal'`)
**Entry Point**: After successful login
**Components**:
- Welcome message
- Application selection grid with 5 apps:
  - Leadway Health
  - **Leadway Life** (clickable → navigates to dashboard)
  - Leadway General Business
  - Leadway Pensure
  - Quantum Admin
- User avatar dropdown (top right)
- Language selector (EN/FR)
- Quote section (desktop only)

**User Actions**:
- Click "Leadway Life" → Navigate to Life Dashboard
- Click User Avatar → Show dropdown with:
  - User Profile (placeholder)
  - **Logout** → Returns to Landing Page

### 3. Life Dashboard (`currentView = 'life-dashboard'`)
**Entry Point**: Click "Leadway Life" from Portal
**Components**:
- Side navigation
- Top navigation with breadcrumbs
- Main dashboard content (underwriter view)
- Various widgets and data displays

**User Actions**:
- (Navigation within dashboard - to be implemented)
- (Back to Portal - to be implemented)

## State Management

### App State
```tsx
type AppView = 'landing' | 'portal' | 'life-dashboard';
const [currentView, setCurrentView] = useState<AppView>('landing');
```

### State Transitions

```
Landing Page:
  - handleLoginSuccess() → currentView = 'portal'

Portal:
  - handleNavigateToLifeDashboard() → currentView = 'life-dashboard'
  - handleLogout() → currentView = 'landing'

Life Dashboard:
  - (Future: Back button → currentView = 'portal')
```

## Component Architecture

### Main App Component (`App.tsx`)
- **Responsibilities**:
  - Manages global application state
  - Renders appropriate view based on `currentView`
  - Provides navigation callbacks to child components

### Portal Component (`Portal.tsx`)
- **Props**:
  - `onNavigateToLifeDashboard: () => void`
  - `onLogout: () => void`
- **Features**:
  - Application cards with click handlers
  - User avatar dropdown with logout
  - Dark-themed language selector

### Life Dashboard Wrapper (`LifeDashboardWrapper.tsx`)
- **Responsibilities**:
  - Wraps imported LifeDashboard component
  - Ensures responsive layout
  - Centers content within 1440px max-width

## User Flows

### Complete Login Flow
1. User lands on Landing Page
2. Clicks "Sign In" button
3. Login modal appears
4. User enters email (optional)
5. Clicks "Next"
6. Loading screen shows (3 seconds)
   - "Verifying Credentials..."
   - "Finishing up..."
   - "Done!"
7. Portal page appears

### Navigate to Life Dashboard
1. User is on Portal page
2. Clicks "Leadway Life" application card
3. Life Dashboard loads immediately

### Logout Flow
1. User clicks avatar in top right
2. Dropdown appears with options
3. User clicks "Logout"
4. Returns to Landing Page

## Responsive Behavior

### Landing Page
- **Mobile**: Single column, stacked content, image grid
- **Tablet**: Two-column image grid
- **Desktop**: Full layout with scrolling columns

### Portal
- **Mobile**: 2-column app grid, simplified header
- **Tablet**: 3-column app grid
- **Desktop**: Full layout with quote section, centered max-width 1440px

### Life Dashboard
- **All Devices**: Currently uses imported design
- **Future**: Should be made fully responsive

## Future Enhancements

### Navigation Improvements
- [ ] Add breadcrumb navigation in Life Dashboard
- [ ] Back button from Life Dashboard to Portal
- [ ] Deep linking support for direct dashboard access
- [ ] Browser back/forward button support
- [ ] Navigation history tracking

### User Experience
- [ ] Page transition animations
- [ ] Loading states between views
- [ ] Remember last visited view
- [ ] Keyboard navigation support

### Security & Data
- [ ] Persist login state
- [ ] Session timeout handling
- [ ] Route guards for authenticated views
- [ ] User permissions per application

## Testing Navigation

### Manual Testing Steps
1. **Landing → Portal**:
   - Click "Sign In"
   - Wait for loading screen
   - Verify Portal appears

2. **Portal → Life Dashboard**:
   - Click "Leadway Life" card
   - Verify dashboard loads

3. **Logout**:
   - Click user avatar
   - Click "Logout"
   - Verify return to Landing Page

4. **Complete Journey**:
   - Landing → Login → Portal → Life Dashboard → Logout → Landing

## Implementation Notes

### Why Not Use React Router?
The current implementation uses state-based navigation for simplicity. As the application grows, consider migrating to React Router for:
- URL-based routing
- Deep linking
- Browser history integration
- Route-based code splitting

### State Persistence
Currently, navigation state is lost on page refresh. To implement persistence:
```tsx
// Save to localStorage
localStorage.setItem('currentView', currentView);

// Restore on mount
const [currentView, setCurrentView] = useState<AppView>(
  (localStorage.getItem('currentView') as AppView) || 'landing'
);
```

### Adding New Views
1. Add view name to `AppView` type
2. Create or import view component
3. Add state transition handlers
4. Add conditional rendering in App.tsx
5. Update this documentation

# Authentication Flow Documentation

This document describes the authentication and navigation flow in the application.

## Flow Overview

```
Landing Page → Login Modal → Loading Screen → Portal Page
```

## Components

### 1. Landing Page (`App.tsx`)
- Initial entry point of the application
- Shows the Quantum ecosystem introduction
- Contains animated scrolling image columns
- "Sign In" CTA button triggers the login modal

### 2. Login Modal (`LoginModal.tsx`)
- Modal dialog for user authentication
- Contains email input field
- Microsoft account integration messaging
- "Next" button triggers the loading sequence

### 3. Loading Screen (`LoadingScreen.tsx`)
- Full-screen overlay displayed during authentication
- Shows animated circular preloader (spinning logo)
- Displays status messages:
  - "Verifying Credentials..." (0-1 second)
  - "Finishing up..." (1-2 seconds)
  - "Done!" (2-3 seconds)
- Auto-redirects to Portal after 3 seconds

### 4. Portal Page (`Portal.tsx`)
- Main dashboard after successful login
- Displays available Leadway applications:
  - Leadway Health
  - Leadway Life
  - Leadway General Business
  - Leadway Pensure
  - Quantum Admin
- Quote section at the bottom
- Quick Access button for shortcuts

## State Management

The application uses React state to manage the authentication flow:

```tsx
const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

### State Transitions

1. **Initial State**: `isLoggedIn = false`, `isLoginModalOpen = false`
   - Shows: Landing Page

2. **User Clicks "Sign In"**: `isLoginModalOpen = true`
   - Shows: Landing Page + Login Modal

3. **User Clicks "Next"**: Triggers loading screen
   - Shows: Loading Screen (full overlay)

4. **Loading Complete**: `isLoggedIn = true`, `isLoginModalOpen = false`
   - Shows: Portal Page

## Responsive Design

All pages are fully responsive:

### Landing Page
- **Mobile**: Single column layout with stacked content
- **Tablet**: 2-column image grid
- **Desktop**: Full layout with scrolling image columns

### Portal Page
- **Mobile**: 2-column app grid, simplified header
- **Tablet**: 3-column app grid
- **Desktop**: Full layout with quote section

### Loading Screen
- **All Devices**: Centered spinner with status text

## Customization

### Adjusting Loading Duration

Change the `duration` prop in `App.tsx`:

```tsx
<LoadingScreen onComplete={handleLoadingComplete} duration={5000} />
// Default is 3000ms (3 seconds)
```

### Modifying Status Messages

Edit the `statusMessages` array in `LoadingScreen.tsx`:

```tsx
const statusMessages = [
  'Verifying Credentials',
  'Finishing up',
  'Done!'
];
```

### Adding Application Cards

Add new apps to the `apps` array in `Portal.tsx`:

```tsx
const apps = [
  { title: 'LEADWAY', subtitle: 'HEALTH', image: imgHealth },
  // Add more apps here
];
```

## Security Considerations

⚠️ **Note**: This is a UI-only flow. For production:

1. Add actual authentication API calls
2. Implement proper session management
3. Add error handling for failed login attempts
4. Secure API keys and credentials
5. Add CSRF protection
6. Implement JWT or session tokens

## Testing

To test the authentication flow:

1. Click "Sign In" on the landing page
2. (Optional) Enter email in the modal
3. Click "Next"
4. Observe the 3-second loading animation
5. Verify redirect to Portal page

## Future Enhancements

- [ ] Add actual backend authentication
- [ ] Implement "Remember Me" functionality
- [ ] Add password field
- [ ] Multi-factor authentication
- [ ] Session timeout handling
- [ ] Logout functionality
- [ ] User profile management

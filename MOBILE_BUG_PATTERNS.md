# Mobile UI Bug Patterns Report

## Overview
This report documents problematic UI patterns found in the codebase that are likely causing mobile display issues, based on analysis of the code and screenshots showing partial sidebar visibility and overlay problems.

## 1. Fixed/Absolute Positioning Issues

### Navbar Component (`src/components/layout/Navbar.tsx`)
- **Issue**: Mobile menu uses `fixed inset-0` positioning (line 152)
- **Pattern**: `className="fixed inset-0 bg-white z-50 flex flex-col"`
- **Problem**: This creates a full-screen overlay that might conflict with other fixed elements
- **Z-index**: Uses `z-50` which could cause stacking order issues

### Sheet Component (`src/components/ui/sheet.tsx`)
- **Issue**: Multiple fixed positioning overlays
- **Pattern**: 
  - Overlay: `fixed inset-0 z-50 bg-black/80` (line 22)
  - Content: `fixed z-50` with side-specific positioning (line 32)
- **Problem**: Sheet component sidebars (left/right) use `w-3/4` width on mobile, which matches the partial visibility seen in screenshots

### Dialog Component (`src/components/ui/dialog.tsx`)
- **Issue**: Centered modal with fixed positioning
- **Pattern**: `fixed left-[50%] top-[50%] z-50` (line 39)
- **Problem**: Complex transform animations that might break on certain mobile browsers

### Drawer Component (`src/components/ui/drawer.tsx`)
- **Issue**: Bottom drawer pattern with fixed positioning
- **Pattern**: `fixed inset-x-0 bottom-0 z-50` (line 44)
- **Problem**: Uses `vaul` library which might have mobile-specific issues

### Cookie Banner (`src/components/layout/CookieBanner.tsx`)
- **Issue**: Fixed bottom banner
- **Pattern**: `fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40` (line 75)
- **Problem**: Lower z-index (z-40) might cause it to appear behind other elements

## 2. Touch Event Handling Issues

### BeforeAfterSlider Component (`src/components/ui/BeforeAfterSlider.tsx`)
- **Pattern**: Custom touch event handling with `touchstart`, `touchmove`, `touchend`
- **Issue**: Uses `touchAction: "none"` (line 116) which disables native touch behaviors
- **Problem**: This can interfere with scrolling and native gestures on mobile devices

### Navbar Mobile Menu
- **Pattern**: Uses `touch-manipulation` CSS class for better touch response
- **Good Practice**: This is actually a positive pattern that should be applied more broadly

## 3. DOM Manipulation Patterns

### Body Style Manipulation
- **BeforeAfterSlider**: Sets `document.body.style.userSelect = "none"` during drag (line 43)
- **Problem**: This global DOM manipulation can affect other components and persist if not properly cleaned up

## 4. Z-Index Stacking Issues

### Z-Index Hierarchy Found:
- `z-50`: Navbar, Sheet, Dialog, Drawer overlays (highest)
- `z-40`: Cookie Banner
- `z-10`: Various UI elements
- Multiple components use `z-index` inline styles (BeforeAfterSlider)

**Problem**: No consistent z-index system, leading to potential stacking conflicts

## 5. Mobile-Specific Visibility Issues

### Partial Sidebar Visibility (Main Bug from Screenshots)
The partial sidebar visibility is likely caused by:

1. **Sheet Component Width**: The sheet component uses `w-3/4` (75% width) on mobile
2. **Transform Animations**: Slide animations might not complete properly
3. **Conflicting Fixed Elements**: Multiple fixed position elements competing for screen space

## 6. Responsive Breakpoint Issues

### Inconsistent Mobile Breakpoints:
- Some components use `sm:` (640px+)
- Others use `md:` (768px+) 
- Others use `lg:` (1024px+)
- No consistent mobile-first approach

## Specific Bugs and Likely Causes

### Bug 1: Partial Sidebar/Sheet Visibility
**Likely Cause**: Sheet component's slide animation not completing or width calculation issues
**Code Location**: `src/components/ui/sheet.tsx` lines 39-41
```tsx
left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
```

### Bug 2: Overlay Z-Index Conflicts
**Likely Cause**: Multiple components using z-50 without proper stacking context
**Affected Components**: Navbar mobile menu, Sheet, Dialog, Drawer

### Bug 3: Touch Interaction Issues
**Likely Cause**: `touchAction: "none"` preventing native scrolling
**Code Location**: `src/components/ui/BeforeAfterSlider.tsx` line 116

## Recommendations

1. **Implement Z-Index System**: Create a consistent z-index scale in Tailwind config
2. **Fix Sheet Width**: Change mobile width from `w-3/4` to `w-full` or implement proper responsive widths
3. **Remove touchAction Restrictions**: Allow native touch behaviors except where absolutely necessary
4. **Standardize Mobile Breakpoints**: Use consistent mobile-first responsive design
5. **Add Scroll Locks**: Implement proper scroll locking for modals/overlays to prevent background scrolling
6. **Test Transform Animations**: Ensure all transform animations complete properly on mobile devices
7. **Implement Proper Portal Usage**: Ensure all overlays use React Portals to avoid DOM hierarchy issues

## Priority Fixes

1. **High Priority**: Fix Sheet component width and animation completion
2. **High Priority**: Implement consistent z-index system
3. **Medium Priority**: Remove conflicting touch event handlers
4. **Medium Priority**: Standardize fixed positioning patterns
5. **Low Priority**: Clean up redundant overlay components
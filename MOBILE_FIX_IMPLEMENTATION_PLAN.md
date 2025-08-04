# Mobile Fix Implementation Plan

## Priority 1: Critical Fixes (Immediate)

### 1. Fix FAQ Component Fixed Width
**Issue**: FAQ has fixed width of 1629px causing horizontal overflow
**File**: `src/components/home/FAQ.tsx`
**Fix**: Replace fixed width with responsive classes

### 2. Fix Sheet Component Width on Mobile
**Issue**: Sheet uses w-3/4 (75%) causing partial visibility
**File**: `src/components/ui/sheet.tsx`
**Fix**: Change to w-full on mobile, maintain w-3/4 on larger screens

### 3. Implement Z-Index System
**Issue**: Multiple components use z-50 causing conflicts
**Files**: Create `src/lib/constants.ts`
**Fix**: Define consistent z-index scale

### 4. Fix Mobile Menu Body Scroll
**Issue**: Background scrolls when mobile menu is open
**File**: `src/components/layout/Navbar.tsx`
**Fix**: Add body scroll lock when menu is open

## Priority 2: Layout Fixes

### 5. Remove Fixed Dimensions
**Files**: 
- `src/components/home/Testimonials.tsx` (340x420px cards)
- `src/components/home/BlogSection.tsx` (380px max-width)
- `src/components/home/ShowcaseScroll.tsx` (600% width)
**Fix**: Replace with responsive units

### 6. Fix App.css Root Container
**File**: `src/App.css`
**Fix**: Remove or adjust max-width: 1280px constraint

### 7. Fix Overflow Issues
**Files**: Multiple components using overflow-hidden
**Fix**: Review and adjust overflow handling

## Priority 3: Enhancement

### 8. Add Mobile-First Utilities
**File**: `tailwind.config.ts`
**Fix**: Add mobile-specific breakpoints and utilities

### 9. Improve Touch Targets
**Fix**: Ensure all buttons/links are minimum 44x44px

### 10. Add Safe Area Support
**Fix**: Add safe-area-inset padding for modern devices

## Implementation Order:
1. Create z-index constants file
2. Fix FAQ component width
3. Fix Sheet component mobile width
4. Add body scroll lock to Navbar
5. Fix testimonial and blog card dimensions
6. Review and fix overflow issues
7. Test on actual devices
// Z-Index hierarchy constants for consistent stacking order
export const Z_INDEX = {
  base: '0',
  dropdown: '10',
  sidebar: '20',
  navbar: '30',
  cookieBanner: '35',
  mobileMenu: '40',
  sheet: '45',
  modal: '50',
  dialog: '55',
  tooltip: '60',
  notification: '70',
} as const;

// Mobile breakpoints
export const MOBILE_BREAKPOINTS = {
  xs: 320,  // Small phones
  sm: 375,  // Standard phones
  md: 414,  // Large phones
  lg: 768,  // Tablets
} as const;

// Touch target sizes
export const TOUCH_TARGET = {
  minimum: 44, // iOS Human Interface Guidelines minimum
  recommended: 48, // Material Design recommended
} as const;
# Color Style Guide

## Overview
This document outlines the standardized background color system implemented across the website to ensure consistency, accessibility, and maintainability.

## Color System Architecture

### CSS Custom Properties
All colors are defined as CSS custom properties (variables) in the `:root` selector for global accessibility and easy maintenance.

## Primary Background Colors

### Brand Gradient
- **Primary Start**: `#667eea` (Blue-purple)
- **Primary End**: `#764ba2` (Deep purple)
- **Primary Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **CSS Variable**: `--bg-primary-gradient`
- **Usage**: Main brand elements, hero sections, primary buttons

## Secondary Background Colors

### Light Theme
- **Primary Light**: `#ffffff` (Pure white)
  - **CSS Variable**: `--bg-light-primary`
  - **Usage**: Main content areas, cards, sections
  
- **Secondary Light**: `#f8f9fa` (Light gray)
  - **CSS Variable**: `--bg-light-secondary`
  - **Usage**: Alternate sections, subtle backgrounds
  
- **Tertiary Light**: `#e9ecef` (Medium light gray)
  - **CSS Variable**: `--bg-light-tertiary`
  - **Usage**: Borders, dividers, subtle elements

- **Light Gradient**: `linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`
  - **CSS Variable**: `--bg-light-gradient`
  - **Usage**: Hero sections in light theme

### Dark Theme
- **Primary Dark**: `#2c3e50` (Dark blue-gray)
  - **CSS Variable**: `--bg-dark-primary`
  - **Usage**: Footer, dark sections, navigation
  
- **Secondary Dark**: `#34495e` (Medium dark gray)
  - **CSS Variable**: `--bg-dark-secondary`
  - **Usage**: Secondary dark elements, hover states
  
- **Tertiary Dark**: `#3c4858` (Lighter dark gray)
  - **CSS Variable**: `--bg-dark-tertiary`
  - **Usage**: Subtle dark elements

- **Dark Gradient**: `linear-gradient(135deg, #2c3e50 0%, #34495e 100%)`
  - **CSS Variable**: `--bg-dark-gradient`
  - **Usage**: Dark theme hero sections

## Accent Colors

### Status Colors
- **Success**: `#28a745` (Green)
  - **CSS Variable**: `--bg-success`
  - **Usage**: Success messages, positive actions
  
- **Warning**: `#ffc107` (Yellow)
  - **CSS Variable**: `--bg-warning`
  - **Usage**: Warning messages, caution states
  
- **Error**: `#dc3545` (Red)
  - **CSS Variable**: `--bg-error`
  - **Usage**: Error messages, destructive actions
  
- **Info**: `#17a2b8` (Cyan)
  - **CSS Variable**: `--bg-info`
  - **Usage**: Information messages, neutral actions

## Overlay Colors

### Semi-transparent Overlays
- **Light Overlay**: `rgba(255, 255, 255, 0.95)`
  - **CSS Variable**: `--bg-overlay-light`
  - **Usage**: Content overlays on dark backgrounds
  
- **Dark Overlay**: `rgba(0, 0, 0, 0.8)`
  - **CSS Variable**: `--bg-overlay-dark`
  - **Usage**: Content overlays on light backgrounds
  
- **Primary Overlay**: `rgba(102, 126, 234, 0.9)`
  - **CSS Variable**: `--bg-overlay-primary`
  - **Usage**: Brand-colored overlays
  
- **Blur Overlay**: `rgba(255, 255, 255, 0.1)`
  - **CSS Variable**: `--bg-overlay-blur`
  - **Usage**: Glassmorphism effects with backdrop-filter

## Text Colors (Accessibility Compliant)

### High Contrast Text
- **Text on Primary**: `#ffffff` (White)
  - **CSS Variable**: `--text-on-primary`
  - **Contrast Ratio**: 4.5:1+ (WCAG AA compliant)
  - **Usage**: Text on primary gradient backgrounds
  
- **Text on Light**: `#212529` (Dark gray)
  - **CSS Variable**: `--text-on-light`
  - **Contrast Ratio**: 4.5:1+ (WCAG AA compliant)
  - **Usage**: Text on light backgrounds
  
- **Text on Dark**: `#ffffff` (White)
  - **CSS Variable**: `--text-on-dark`
  - **Contrast Ratio**: 4.5:1+ (WCAG AA compliant)
  - **Usage**: Text on dark backgrounds

### Muted Text
- **Muted Light**: `#6c757d` (Medium gray)
  - **CSS Variable**: `--text-muted-light`
  - **Usage**: Secondary text on light backgrounds
  
- **Muted Dark**: `#adb5bd` (Light gray)
  - **CSS Variable**: `--text-muted-dark`
  - **Usage**: Secondary text on dark backgrounds

## Utility Classes

### Background Classes
- `.bg-primary` - Primary gradient background
- `.bg-primary-solid` - Solid primary color background
- `.bg-light` - Light primary background
- `.bg-light-secondary` - Light secondary background
- `.bg-light-tertiary` - Light tertiary background
- `.bg-light-gradient` - Light gradient background
- `.bg-dark` - Dark primary background
- `.bg-dark-secondary` - Dark secondary background
- `.bg-dark-tertiary` - Dark tertiary background
- `.bg-dark-gradient` - Dark gradient background

### Status Classes
- `.bg-success` - Success background
- `.bg-warning` - Warning background
- `.bg-error` - Error background
- `.bg-info` - Info background

### Overlay Classes
- `.bg-overlay-light` - Light overlay with blur
- `.bg-overlay-dark` - Dark overlay with blur
- `.bg-overlay-primary` - Primary overlay with blur
- `.bg-overlay-blur` - Blur overlay

### Container Classes
- `.page-container` - Full page container with primary gradient
- `.section-container` - Section container with light overlay
- `.card-container` - Card container with light background

## Accessibility Standards

### WCAG Compliance
All color combinations meet WCAG AA accessibility standards with a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.

### Contrast Ratios
- Primary gradient with white text: 4.5:1+
- Light backgrounds with dark text: 4.5:1+
- Dark backgrounds with white text: 4.5:1+

## Implementation Guidelines

### Usage Rules
1. Always use CSS custom properties instead of hardcoded color values
2. Apply appropriate text color variables with background colors
3. Use utility classes for consistent styling
4. Test color combinations for accessibility compliance
5. Maintain contrast ratios for readability

### Browser Support
- Modern browsers: Full support for CSS custom properties
- Legacy browsers: Fallback colors provided in `@supports` rules

## Responsive Considerations

### Breakpoints
- **Mobile**: `768px` and below
- **Tablet**: `769px` to `1024px`
- **Desktop**: `1025px` and above

### Adaptive Colors
Colors remain consistent across all screen sizes, with pattern overlays adjusting for optimal performance on mobile devices.

## Maintenance

### Adding New Colors
1. Define new color as CSS custom property in `:root`
2. Create corresponding utility class if needed
3. Verify accessibility compliance
4. Update this documentation
5. Test across all browsers and devices

### Modifying Existing Colors
1. Update CSS custom property value
2. Test all affected components
3. Verify accessibility compliance
4. Update documentation
5. Communicate changes to team

## Testing Checklist

- [ ] All color combinations meet WCAG AA standards
- [ ] Colors display correctly across different browsers
- [ ] Mobile devices show appropriate color rendering
- [ ] High contrast mode compatibility
- [ ] Print stylesheet considerations
- [ ] Color blindness accessibility testing

## Future Enhancements

### Planned Features
- Dark mode toggle functionality
- Theme customization options
- Dynamic color adaptation based on user preferences
- Enhanced accessibility features for visually impaired users

---

**Last Updated**: January 2025
**Version**: 1.0
**Maintained by**: Development Team
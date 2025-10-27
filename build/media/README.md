# QuickSecure Media Assets

This folder contains all images for the QuickSecure website.

## Image Specifications

### Landing Page
- **QuickSecure-Hero-1**
  - Aspect Ratio: 3:2
  - Resolution: 1200×800px
  - Usage: Landing page hero image (right column)
  - Note: Replace the PlaceholderImage component

### Product Pages
Refer to `src/components/ProductPages.tsx` for specific product image requirements.

### How to Add Images
1. Place your image files in this directory (`public/media/`)
2. Name them according to the specifications above
3. The code will automatically reference these images from the `/media/` URL path

### Example
If you add `QuickSecure-Hero-1.jpg` to this folder, it will be accessible at:
`/media/QuickSecure-Hero-1.jpg`

## Current Placeholder System
Currently, the site uses `PlaceholderImage` components that display:
- The image name
- Aspect ratio (e.g., "3:2")
- Suggested resolution (e.g., "1200×800px")

Replace these with actual images by updating the relevant components in `src/components/`.

# Deployment Instructions for GitHub Pages

This document explains how to push this simplified project to a new GitHub repository and deploy it to GitHub Pages.

## Current Status

✅ **Branch Created**: `github-pages-simple`  
✅ **Code Simplified**: Single page application with minimal dependencies  
✅ **Build Tested**: Successfully builds to `dist` folder  
✅ **GitHub Actions**: Workflow configured for automatic deployment  

## Step 1: Create a New GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `strengthening-jewish-life`)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Make it public (required for free GitHub Pages)

## Step 2: Push to New Repository

```bash
# Add the new repository as a remote
git remote add new-origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push the github-pages-simple branch to the new repo as main
git push new-origin github-pages-simple:main
```

## Step 3: Configure GitHub Pages

1. Go to your new repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - **Source**: GitHub Actions
4. The site will automatically deploy when you push to main

## Step 4: Access Your Site

After the GitHub Actions workflow completes (usually 1-2 minutes), your site will be available at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## Updating the Site

To make changes and redeploy:

```bash
# Make your changes
# Build and test locally
npm run dev

# Commit and push
git add .
git commit -m "Your commit message"
git push new-origin github-pages-simple:main
```

The GitHub Actions workflow will automatically rebuild and deploy your changes.

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment configuration
├── public/                     # Static assets (images, favicon)
├── src/
│   ├── components/
│   │   └── StarOfDavid.tsx    # Star of David SVG component
│   ├── pages/
│   │   └── Four.tsx           # Main page (only page)
│   ├── App.tsx                # Simple app wrapper
│   ├── main.tsx               # Entry point
│   └── index.css              # Minimal global styles
├── index.html                 # HTML template
├── package.json               # Minimal dependencies
├── tailwind.config.ts         # Tailwind configuration
├── vite.config.ts             # Vite build configuration
└── README.md                  # Project documentation
```

## Dependencies

The project uses minimal dependencies:

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Tailwind CSS**: Styling

Total production bundle size: ~152 KB (gzipped: ~49 KB)

## Troubleshooting

### Build fails on GitHub Actions

- Check that all dependencies are in `package.json`
- Ensure `npm ci` can install from `package-lock.json`
- Review the Actions tab for error logs

### Site shows 404

- Verify GitHub Pages is enabled in repository settings
- Check that the workflow completed successfully
- Wait a few minutes for DNS propagation

### Images not loading

- Ensure all images are in the `public` folder
- Use absolute paths starting with `/` (e.g., `/headshot.png`)
- Check that images are committed to git

## Notes

- The page is optimized for both web viewing and printing
- The design follows an A4 page format (210mm × 297mm)
- All fonts are loaded from Google Fonts (no local font files needed)
- The site is fully static and requires no backend server


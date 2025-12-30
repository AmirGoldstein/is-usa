# Quick Start Guide

## 🚀 Deploy to New Repository (3 Steps)

### Step 1: Create GitHub Repository
```bash
# Go to: https://github.com/new
# Repository name: strengthening-jewish-life (or your choice)
# Public repository (required for free GitHub Pages)
# Do NOT initialize with README
```

### Step 2: Push Code
```bash
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your values
git remote add new-origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push new-origin github-pages-simple:main
```

### Step 3: Enable GitHub Pages
```bash
# Go to: https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/settings/pages
# Under "Source", select: GitHub Actions
# Wait 1-2 minutes
```

### Your Site Will Be Live At:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

---

## 💻 Local Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
# Visit: http://localhost:5173
```

### Build for Production
```bash
npm run build
# Output in: dist/
```

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
israeli-stories-usa/
├── .github/workflows/deploy.yml  ← Auto-deployment
├── public/                       ← Images & static files
├── src/
│   ├── App.tsx                  ← Main app (3 lines)
│   ├── main.tsx                 ← Entry point
│   ├── index.css                ← Styles
│   ├── components/
│   │   └── StarOfDavid.tsx      ← SVG component
│   └── pages/
│       └── Four.tsx             ← THE PAGE (only page)
├── index.html                   ← HTML template
├── package.json                 ← Dependencies
└── vite.config.ts               ← Build config
```

---

## 📝 Key Files

| File | Purpose |
|------|---------|
| `src/pages/Four.tsx` | The main page content |
| `public/headshot.png` | Your photo |
| `public/nyc-skyline.png` | Header background |
| `.github/workflows/deploy.yml` | Auto-deployment config |

---

## 🔄 Making Updates

### To Update Content:
1. Edit `src/pages/Four.tsx`
2. Test locally: `npm run dev`
3. Commit: `git commit -am "Update content"`
4. Push: `git push new-origin github-pages-simple:main`
5. Auto-deploys in 1-2 minutes

### To Update Images:
1. Replace files in `public/` folder
2. Keep same filenames OR update references in `Four.tsx`
3. Commit and push

---

## ✅ Checklist Before Pushing

- [ ] Created new GitHub repository (public)
- [ ] Updated remote URL in push command
- [ ] Pushed to new repository
- [ ] Enabled GitHub Pages (Source: GitHub Actions)
- [ ] Waited for deployment (check Actions tab)
- [ ] Verified site is live

---

## 🆘 Troubleshooting

**Site shows 404:**
- Check GitHub Pages is enabled (Settings → Pages)
- Verify GitHub Actions workflow completed (Actions tab)
- Wait a few minutes for DNS propagation

**Build fails:**
- Check Actions tab for error logs
- Verify all dependencies are in package.json
- Ensure package-lock.json is committed

**Images not loading:**
- Verify images are in public/ folder
- Check paths start with / (e.g., /headshot.png)
- Ensure images are committed to git

---

## 📚 Documentation

- **DEPLOYMENT.md** - Detailed deployment guide
- **PROJECT_SUMMARY.md** - Complete project overview
- **README.md** - Project documentation

---

## 🎯 Current Status

✅ Branch: `github-pages-simple`  
✅ Build: Working  
✅ Bundle: 152 KB (49 KB gzipped)  
✅ Dependencies: 9 (minimal)  
✅ Ready: Production-ready  

**You're ready to deploy! 🚀**


# Personal Portfolio — Jekyll

Elegant, professional multi-page portfolio. Light theme with dark accents.

## Pages
- **Home** — headshot, bio, stats, featured projects, publications, news
- **Projects** — 3 tabbed categories: Academic / Career / Curiosity
- **Publications** — filterable list + conferences & workshops
- **News** — blog posts + short announcements with sidebar
- **CV** — full curriculum vitae with sticky side navigation
- **Contact** — contact details + contact form

## Quick Start

```bash
# Install dependencies (once)
bundle install

# Run locally
bundle exec jekyll serve

# Open in browser
http://localhost:4000
```

## How to customise

### 1. Your info → `_config.yml`
Fill in: name, title, institution, bio, email, github, linkedin, scholar, orcid

### 2. Your headshot → `assets/images/headshot.jpg`
Upload your professional photo. Then in `index.html`, replace the placeholder block with:
```html
<img src="/assets/images/headshot.jpg" alt="Your Name" class="hero-photo">
```

### 3. Your CV PDF → `assets/pdf/cv.pdf`
Upload your CV as a PDF file.

### 4. Add a project → `_projects/project-name.md`
```yaml
---
title: "Project Title"
description: "One or two sentence description."
category: academic   # academic | career | curiosity
tags: [Python, R, Economics]
github: "https://github.com/you/repo"
demo: ""
featured: true       # shows on home page
---
Your longer project description goes here.
```

### 5. Add a publication → `_publications/paper-year.md`
```yaml
---
title: "Paper Title"
authors: "<strong>Your Name</strong>, Co-Author"
venue: "Journal Name"
year: 2024
pub_type: journal    # journal | conference | working
pdf: "/assets/pdf/paper.pdf"
doi: "10.1000/xyz"
arxiv: "2401.00000"
abstract: "Your abstract text here."
---
```

### 6. Add a news item → `_news/event-name.md`
```yaml
---
title: "News headline"
date: 2024-09-01
type: conference    # conference | publication | award | news
short: "One line summary shown on home page."
---
Full write-up here.
```

### 7. Contact form
Sign up free at https://formspree.io, get your form ID.
Replace `YOUR_FORM_ID` in `_pages/contact.html`.

## Deploy to GitHub Pages

1. Create repo named `yourusername.github.io` on GitHub (Public)
2. Upload all these files (use VS Code + Git)
3. Settings → Pages → Branch: main → Save
4. Live at `https://yourusername.github.io` in ~2 minutes

## File structure
```
├── _config.yml              ← All site settings
├── index.html               ← Home page
├── Gemfile
├── _layouts/
│   ├── default.html         ← Nav + footer
│   ├── project.html
│   ├── publication.html
│   └── news-post.html
├── _pages/
│   ├── projects.html
│   ├── publications.html
│   ├── news.html
│   ├── cv.html
│   └── contact.html
├── _projects/               ← One .md per project
├── _publications/           ← One .md per publication
├── _news/                   ← One .md per news post
└── assets/
    ├── css/main.css
    ├── js/main.js
    ├── images/              ← Upload headshot.jpg here
    └── pdf/                 ← Upload cv.pdf here
```

# Christabelle Vevina — Architecture Portfolio

Responsive portfolio website built with HTML, CSS, Bootstrap 5, and JavaScript.

## Pages
- `index.html` — homepage, about, selected work, and contact
- `grounds-on-the-ground.html`
- `a-day-in-my-room.html`
- `room-transformation.html`
- `situating-the-room.html`

## Replacing image placeholders
The current frames are intentional placeholders. The simplest approach is to replace each placeholder `<div>` with an `<img>` tag:

```html
<img src="assets/images/your-image.jpg" alt="Project description" class="w-100 h-100 object-fit-cover">
```

For GIF holders:

```html
<img src="assets/images/animation.gif" alt="Project animation" class="w-100">
```

Create an `assets/images` folder and place your image files there. Use compressed JPG or WebP files for large project images.

## Publishing on GitHub Pages
1. Upload all files to one GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and `/root` folder.
5. Save and wait for the published URL.

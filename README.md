# PrimeHomes – Real Estate Property Listing Application

A responsive real estate listing website built with React. It is a student practical project demonstrating reusable components, props, React state, hooks, routing, search, filtering, form validation, local storage and responsive CSS.

## Features
- Home page with featured properties and a search panel
- Properties page with keyword search and filters for listing type, property type and maximum price
- Property details page with photos, facilities and agent contact details
- Favourite properties saved in browser local storage
- About and Contact pages
- Controlled contact form with required-field and email validation
- Responsive navigation for mobile, tablet and desktop
- Sample property data stored locally in `src/data/properties.js`

## Technologies
- React 18
- Vite
- React Router
- JavaScript (ES6+)
- CSS
- Lucide React icons

## Requirements
Install Node.js (LTS) and npm.

## Run locally
1. Extract the ZIP file.
2. Open the `primehomes-real-estate` folder in VS Code.
3. Open the VS Code terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local address printed in the terminal (usually `http://localhost:5173`).

## Build for production
```bash
npm run build
npm run preview
```

## GitHub
Create a new empty GitHub repository, then run these commands in the project folder:

```bash
git init
git add .
git commit -m "Build PrimeHomes real estate application"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Do not upload `node_modules`; it is already excluded by `.gitignore`.

## Deploy on Netlify
1. Push the project to GitHub.
2. Sign in to Netlify and choose **Add new site → Import an existing project**.
3. Select the GitHub repository.
4. Set build command to `npm run build`.
5. Set publish directory to `dist`.
6. Deploy and copy the public website URL.

## Notes
- Property listings and contact details are demonstration content, not verified live listings.
- The contact form validates the information in the browser and displays a confirmation message. It does not send an email because no backend or form service is connected.
- Property photos are loaded from Unsplash, so an internet connection is needed to display them.
- Replace the sample business contact details and property data with your own before submission.

# Clarity - Stuttering Therapy Web Application

A professional, responsive desktop web application for stuttering therapy. Practice daily exercises, track your progress, and build confidence in your speech journey.

![Clarity App](https://img.shields.io/badge/React-18.3.1-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8) ![Vite](https://img.shields.io/badge/Vite-Latest-646cff)

## Features

- 📊 **Progress Tracking** - Monitor your improvement with detailed statistics and charts
- 🎯 **Daily Goals** - Stay motivated with XP goals and streak counters
- 🏆 **Achievements** - Unlock badges as you complete milestones
- 🎤 **Interactive Exercises** - Practice with guided speech exercises
- 📈 **Data Visualization** - View your progress with beautiful charts
- 🌐 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

## Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React
- **Charts:** Recharts
- **Utilities:** clsx, tailwind-merge

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abdu-l7hman/new_stuttering.git
cd new_stuttering
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
clarity-web/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   ├── Dashboard.jsx       # Main dashboard with grid layout
│   │   ├── Stats.jsx           # Statistics and charts
│   │   ├── ExerciseModal.jsx   # Exercise practice modal
│   │   ├── Assessment.jsx      # Speech assessment wizard
│   │   └── Onboarding.jsx      # Welcome screen
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub (already done)

2. Go to [Vercel](https://vercel.com)

3. Click "New Project"

4. Import `abdu-l7hman/new_stuttering` repository

5. Configure build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

6. Click "Deploy"

Your app will be live at `https://your-project-name.vercel.app`

### Environment Variables

No environment variables required for basic deployment.

## Features Walkthrough

### Dashboard
- View daily XP goals and current streak
- Access practice exercises in a responsive grid
- Track overall progress percentage

### Practice Exercises
- Turtle Pace - Slow down your speech
- Soft Sounds - Practice gentle onset
- Breathing Exercise - Control your breath
- Word Repetition - Practice challenging words
- Prolonged Sounds - Stretch vowel sounds
- Phrase Practice - Build fluent phrases

### Statistics
- Weekly stuttering severity chart
- Total sessions, XP, and streak counters
- Achievement badges and milestones

### Assessment
- 3-step speech assessment wizard
- Recording simulation with visualizer
- Progress tracking across steps

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue on GitHub.

---

Built with ❤️ for the stuttering therapy community

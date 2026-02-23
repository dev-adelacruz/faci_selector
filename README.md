# Facilitator Forge - Modern React Facilitator Selector

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

A sophisticated facilitator selection tool with immersive visual themes, radar animations, and interactive features for team meetings, workshops, and events.

[Live Demo](#) • [Features](#features) • [Installation](#installation) • [Usage](#usage)

</div>

## 📋 Overview

**Facilitator Forge** (formerly "Faci Selector") is a modern React application designed to make facilitator selection engaging and visually captivating. Built with performance and aesthetics in mind, it transforms the mundane task of picking facilitators into an immersive experience with multiple visual themes, radar sweep animations, and interactive UI elements.

Originally developed for **LiKHA-iT** team meetings, this tool combines functionality with cutting-edge visual design to create a memorable selection process.

## ✨ Features

### 🎨 **Immersive Visual Themes**
- **Command Center**: Navy-themed mission control interface with radar animations
- **Retro Arcade**: Nostalgic 80s arcade aesthetic with pixel-perfect styling
- **Terminal Pro**: Cyberpunk terminal interface with monospace typography
- **Zen Studio**: Minimalist, calming environment with subtle animations

### 🎯 **Core Functionality**
- **Candidate Management**: Add, remove, and manage facilitator candidates
- **Smart Selection**: Random facilitator selection with visual scanning progress
- **History Tracking**: Keep track of previous selections (last 8 facilitators)
- **Fullscreen Mode**: Theater mode for presentations and group view
- **Radar Animation**: Sophisticated radar sweep system for visual tension
- **Confetti Celebration**: Animated celebration when selection completes

### 🛠️ **Technical Features**
- **Real-time Updates**: Live scanning progress with candidate preview
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Keyboard Shortcuts**: Escape key to exit fullscreen mode
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Modern Tooling**: ESLint, PostCSS, and Tailwind CSS integration

## 📸 Screenshots

<details>
<summary>Click to view theme previews</summary>

### Command Center Theme
![Command Center Theme](https://via.placeholder.com/800x450/0f172a/ffffff?text=Command+Center+Theme)

### Retro Arcade Theme
![Retro Arcade Theme](https://via.placeholder.com/800x450/581c87/fbbf24?text=Retro+Arcade+Theme)

### Terminal Pro Theme
![Terminal Pro Theme](https://via.placeholder.com/800x450/000000/10b981?text=Terminal+Pro+Theme)

### Zen Studio Theme
![Zen Studio Theme](https://via.placeholder.com/800x450/fafaf9/57534e?text=Zen+Studio+Theme)

</details>

## 🚀 Quick Start

### Prerequisites
- **Node.js 18.0.0 or higher** (required for optional chaining syntax)
  - *Note: The application uses modern JavaScript features that require Node.js 18+*
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dev-adelacruz/faci_selector.git
   cd faci-selector
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview

# Run linting
npm run lint
```

## 🎮 Usage Guide

### Basic Workflow

1. **Add Candidates**
   - Enter names in the "ADD PERSONNEL..." input field
   - Click the "+" button or press Enter to add

2. **Remove Candidates**
   - Hover over any candidate name
   - Click the "×" icon that appears

3. **Start Selection**
   - Click the "PRESS START" button
   - Watch the radar animation and scanning progress
   - The selected facilitator will be revealed with confetti celebration

4. **Change Themes**
   - Click the "HUD MODE" dropdown in the header
   - Select from the four available themes
   - Each theme changes the entire visual experience

### Advanced Features

- **Fullscreen Mode**: Click "FULL SCREEN" button for presentation mode
- **Re-roll Selection**: After a selection, click "RE-ROLL" to pick another facilitator
- **Confirm Selection**: Click "CONFIRM" to accept the current selection
- **View History**: Check the "Log History" panel for recent selections

## 🏗️ Project Structure

```
faci-selector/
├── src/
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── public/
│   └── vite.svg          # Favicon
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── eslint.config.js      # ESLint configuration
```

## 🛠️ Technologies Used

### Core Framework
- **[React 19](https://react.dev/)**: Modern React with latest features
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework

### UI & Icons
- **[Lucide React](https://lucide.dev/)**: Beautiful & consistent icons
- **[CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)**: Custom keyframe animations

### Development Tools
- **[ESLint](https://eslint.org/)**: Code linting and quality
- **[PostCSS](https://postcss.org/)**: CSS transformation tool
- **[Autoprefixer](https://github.com/postcss/autoprefixer)**: CSS vendor prefixing

## 🎨 Theme Architecture

The application uses a centralized theme system with the following structure:

```javascript
const THEMES = {
  navy: {
    id: 'navy',
    name: 'Command Center',
    class: 'bg-slate-950 text-slate-100',
    card: 'bg-slate-900/60 backdrop-blur-xl',
    accent: 'text-blue-500',
    // ... more theme properties
  },
  // ... other themes
};
```

Each theme defines:
- **Color schemes**: Background, text, and accent colors
- **Component styling**: Cards, buttons, borders
- **Icons**: Theme-specific iconography
- **Animations**: Custom animations and effects

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and patterns
- Add tests for new functionality
- Update documentation as needed
- Ensure responsive design compatibility

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **LiKHA-iT Team**: For inspiration and testing
- **React Community**: For amazing tools and libraries
- **Lucide Icons**: For beautiful iconography
- **Vite Team**: For blazing-fast build tooling

## 🔮 Roadmap

### Planned Features
- [ ] **User Authentication**: Save and load candidate lists
- [ ] **Export Functionality**: Export selection history to CSV/PDF
- [ ] **Custom Animations**: User-configurable animation speeds
- [ ] **Sound Effects**: Theme-specific audio feedback
- [ ] **Team Management**: Save multiple team configurations
- [ ] **Statistics Dashboard**: Selection frequency analytics
- [ ] **Mobile App**: Native mobile application
- [ ] **API Integration**: Connect with calendar/meeting tools

### Known Issues
- Fullscreen mode may require browser permission
- Some animations may be heavy on low-end devices
- Mobile touch interactions could be improved

## 📞 Support

For questions, issues, or feature requests:

- **GitHub Issues**: [Report a bug or request a feature](https://github.com/dev-adelacruz/faci_selector/issues)
- **Email**: [Add your contact email]
- **Documentation**: Check this README first for common questions

---

<div align="center">

**Made with ❤️ by the LiKHA-iT Development Team**

*Transforming mundane tasks into memorable experiences*

</div>
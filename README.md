# 🌟 Screens

A beautiful 3D application built with Electron and Three.js, optimized for Raspberry Pi deployment.

## ✨ Features

- **3D Graphics**: Powered by Three.js for stunning visual effects
- **Cross-Platform**: Built with Electron for desktop deployment
- **Raspberry Pi Ready**: Optimized builds for ARM architecture
- **Interactive**: Mouse controls for camera movement and zoom
- **Modern UI**: Beautiful gradient backgrounds and smooth animations

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start the application in development mode
npm start
```

### Building

```bash
# Build for current platform
npm run build

# Build specifically for Raspberry Pi (32-bit ARM)
npm run build:rpi
```

## 🔧 Installation

### On Raspberry Pi

1. Download the latest release from the [Releases](https://github.com/skaramicke/screens/releases) page
2. Extract the archive:
   ```bash
   tar -xzf screens-*-linux-armv7l.tar.gz
   ```
3. Run the application:
   ```bash
   ./screens
   ```

### System Requirements

- **Raspberry Pi**: 3B+ or newer recommended
- **OS**: Raspberry Pi OS (32-bit)
- **Graphics**: OpenGL ES support
- **Memory**: 1GB RAM minimum, 2GB recommended

## 🎮 Controls

- **Mouse Movement**: Orbit camera around the scene
- **Mouse Wheel**: Zoom in and out
- **Auto-rotation**: Cube and spheres rotate automatically

## 🏗️ Project Structure

```
screens/
├── main.js           # Electron main process
├── renderer.js       # Three.js renderer and scene setup
├── index.html        # Application HTML template
├── package.json      # Project configuration
└── .github/
    └── workflows/
        ├── release.yml   # Production release workflow
        └── dev.yml       # Development build workflow
```

## 🔄 Automated Releases

This project uses GitHub Actions for automated building and releasing:

### Manual Release

1. Go to the **Actions** tab in your GitHub repository
2. Select **"Build and Release for Raspberry Pi"**
3. Click **"Run workflow"**
4. Choose version bump type (patch/minor/major)
5. Click **"Run workflow"**

The workflow will:
- Bump the version number
- Build the application for Raspberry Pi
- Create a GitHub release
- Upload the build artifacts

### Development Builds

Automatic builds are triggered on:
- Push to `main` or `develop` branches
- Pull requests to `main`

## 🛠️ Technologies

- **[Electron](https://electronjs.org/)**: Cross-platform desktop applications
- **[Three.js](https://threejs.org/)**: 3D graphics library
- **[electron-builder](https://www.electron.build/)**: Application packaging
- **GitHub Actions**: CI/CD automation

## 📝 License

ISC License - feel free to use this project as a starting point for your own applications!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you encounter any issues:
1. Check the [Issues](https://github.com/skaramicke/screens/issues) page
2. Create a new issue with details about your problem
3. Include your system information and error messages
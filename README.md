# CoCo Starter Template

CoCo Starter Template provides my preferred setup for building modern single-page applications (SPA) with Vite and React. It’s designed to streamline development and ensure a solid foundation for scalable, maintainable projects.

## Features

### Core Stack
- **Vite** 🚀: Blazing fast development and build tool, configured with:
    - SWC for high-performance JavaScript and TypeScript compilation.
    - TypeScript type checking.
    - Support for `tsconfig` paths (e.g., `~/foo/bar` instead of `../../foo/bar`).

### Styling
- **TailwindCSS** 🎨: Utility-first CSS framework for rapid UI development.
- **NextUI** 🧩: A modern component library to speed up UI building.

### Data Fetching
- **TanStack Query** 📡: Advanced data-fetching and state management for your API calls.

### Routing
- **TanStack Router** 🗺️: A powerful routing solution tailored for modern React applications.

### Format & Lint
- **Biome** 🛠️: Unified code formatter and linter for consistent code style and quality.

### Testing
- **Vitest** ⚡: Fast, unit testing framework with a focus on simplicity and speed.
- **React Testing Library** 🧪: Tools to test your React components in a user-focused way.
- **Playwright** 🎭: End-to-end testing for robust UI testing across browsers.

### CI/CD
- **GitHub Actions** 🤖: Pre-configured workflows for:
    - Continuous Integration (CI) to run tests and checks.
    - Continuous Deployment (CD) for automated deployments.
    - Dependabot integration to keep dependencies updated.

## Getting Started

1. **Clone the Repository** 📁
   ```bash
   git clone https://github.com/oferitz/coco
   cd coco-starter-template
   ```

2. **Install Dependencies** 📦
   ```bash
   pnpm install
   ```

3. **Start Development Server** 🏃‍♂️
   ```bash
   pnpm dev
   ```

4. **Build for Production** 🏗️
   ```bash
   pnpm build
   ```

5. **Run Tests** ✅
   ```bash
   pnpm test
   ```

6. **Formatting** 🧹
   ```bash
    pnpm format
    ```
    
   
## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to help improve this template.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.



# AI Chat App

A modern, fast AI chat application powered by Groq's LLM inference API. 
Built with React and following best practices for code organization and structure.

## Features

- Lightning-fast AI responses using Groq API
- Modern, responsive UI design
- Secure API key management with environment variables
- Mobile-friendly responsive design
- Modular component architecture
- Clean separation of concerns
- Accessible UI components

## Project Structure

The project follows a modular, component-based architecture with clear separation of concerns:

```
src/
├── components/              # Reusable UI components
│   ├── ChatHistory/        # Chat history display component
│   │   ├── ChatHistory.js
│   │   ├── ChatHistory.css
│   │   └── index.js
│   ├── ChatInput/          # Message input form component
│   │   ├── ChatInput.js
│   │   ├── ChatInput.css
│   │   └── index.js
│   ├── ChatMessage/        # Individual message display component
│   │   ├── ChatMessage.js
│   │   ├── ChatMessage.css
│   │   └── index.js
│   ├── ErrorMessage/       # Error display component
│   │   ├── ErrorMessage.js
│   │   ├── ErrorMessage.css
│   │   └── index.js
│   └── Header/             # App header component
│       ├── Header.js
│       ├── Header.css
│       └── index.js
├── hooks/                  # Custom React hooks
│   └── useChat.js          # Chat state management hook
├── services/               # API and external services
│   └── apiService.js       # Groq API service layer
├── constants/              # App configuration constants
│   └── index.js            # API and app configuration
├── App.js                  # Main app component
├── App.css                 # App-level styles
├── index.js                # Application entry point
└── index.css               # Global styles
```

### Key Improvements

#### 1. **Security Enhancements**
- Removed hardcoded API key from source code
- Implemented environment variable configuration (`.env`)
- Added `.env.example` template file
- Updated `.gitignore` to exclude sensitive files

#### 2. **Code Organization**
- Modular folder structure with clear separation of concerns
- Each component has its own folder with CSS and index file
- Separated UI, business logic, and API calls

#### 3. **Component Architecture**
- **Header**: Displays app title and description
- **ChatHistory**: Manages and displays chat message history
- **ChatMessage**: Individual message component (user/AI)
- **ChatInput**: Input form with validation and keyboard shortcuts
- **ErrorMessage**: Error display with dismiss functionality

#### 4. **Custom Hooks**
- `useChat`: Centralized chat state management
- Uses `useCallback` for performance optimization
- Clean separation of business logic from UI

#### 5. **Service Layer**
- `apiService`: Dedicated API service class
- Comprehensive error handling
- Singleton pattern for service instance
- Environment variable validation

#### 6. **Styling**
- Component-scoped CSS files
- Modern, responsive design
- Smooth animations and transitions
- Mobile-friendly layout

#### 7. **Code Quality**
- JSDoc comments for documentation
- Consistent naming conventions
- Proper error handling throughout
- Input validation
- Accessibility improvements (ARIA labels)

### Benefits

1. **Maintainability**: Clear structure makes it easy to find and modify code
2. **Scalability**: Easy to add new features and components
3. **Reusability**: Components can be reused across the application
4. **Testability**: Separated concerns make unit testing easier
5. **Security**: API keys are no longer exposed in source code
6. **Performance**: Optimized with React hooks and proper state management
7. **Developer Experience**: Better code organization improves productivity

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Open API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/J534-spec/webapp.git
cd ai-chat-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your API key to `.env`:
```env
REACT_APP_GROQ_API_KEY=your_api_key_here
```

5. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Architecture

### Components

The application follows a component-based architecture:

- **Header**: Displays app title and description
- **ChatHistory**: Manages and displays chat message history
- **ChatMessage**: Individual message component (user/AI)
- **ChatInput**: Input form with validation
- **ErrorMessage**: Error display with dismiss functionality

### Custom Hooks

- **useChat**: Manages chat state, API calls, and history

### Services

- **apiService**: Handles all API communication with Groq, including error handling

### Constants

- Centralized configuration for API endpoints, models, and app text

## Best Practices Implemented

 **Security**: API keys stored in environment variables  
 **Separation of Concerns**: UI, logic, and API calls separated  
 **Reusability**: Modular, reusable components  
 **Error Handling**: Comprehensive error handling and user feedback  
 **Code Organization**: Clear folder structure following React conventions  
 **Performance**: Optimized with React hooks (useCallback)  
 **Accessibility**: ARIA labels and semantic HTML  
 **Responsive Design**: Mobile-friendly layout  

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_GROQ_API_KEY` | Your Groq API key | Yes |

## Technologies Used

- **React 19.2.4** - UI library
- **Axios** - HTTP client for API requests
- **Groq API** - Fast LLM inference service
- **Create React App** - Build tooling and development environment

## Future Enhancements

Potential improvements for future versions:

- [ ] Add TypeScript for type safety
- [ ] Implement unit tests for components and hooks
- [ ] Add error boundary component
- [ ] Implement message persistence (localStorage)
- [ ] Add loading skeletons
- [ ] Implement message streaming for real-time responses
- [ ] Add dark mode support
- [ ] Implement message search/filter functionality

## License

This project is private and proprietary.

## Contributing

This is a private project. For questions or issues, please contact the project maintainer.

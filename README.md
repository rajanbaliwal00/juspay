# React SaaS Dashboard

A modern, responsive SaaS dashboard implementation built with React, Ant Design, and Vite. Features include dark/light themes, interactive data visualization, and real-time data management.

## 🚀 Features

- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Theme Support**: Toggle between dark and light modes
- **Data Visualization**:
  - Revenue charts
  - Sales projections
  - Geographic revenue distribution
  - Total sales analytics
- **Interactive Tables**:
  - Advanced sorting
  - Multi-column filtering
  - Real-time search
  - Pagination
- **Microinteractions & Animations**:
  - Smooth transitions between themes
  - Loading states
  - Hover effects
  - Interactive charts

## 🛠 Tech Stack

- React 19
- Ant Design 5
- Recharts
- React Simple Maps
- Redux Toolkit
- React Router
- Vite
- Lodash

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/rajanbaliwal00/juspay.git
```

2. Install dependencies:

```bash
cd juspay
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🏗 Project Structure

```
src/
├── assets/         # Images, icons, and other static files
├── components/     # Reusable React components
│   ├── Cards/     # Dashboard card components
│   ├── Charts/    # Data visualization components
│   ├── Sidebar/   # Navigation and sidebar components
│   └── Tables/    # Data table components
├── themes/        # Theme configurations
└── utils/         # Helper functions and utilities
```

## 🎨 Design Decisions

### Component Architecture

- **Modular Design**: Components are built to be reusable and maintainable
- **Atomic Structure**: Following atomic design principles for component hierarchy
- **Theme Integration**: Centralized theme management using Ant Design's ConfigProvider

### State Management

- **Local State**: useState for component-level state
- **Context API**: Theme management and global configurations
- **Redux**: (Planned) For more complex state management needs

### Performance Optimizations

- **Debounced Search**: Optimized search functionality in tables
- **Lazy Loading**: Component and route-level code splitting
- **Memoization**: Strategic use of useMemo and useCallback

## 🎯 Challenges & Solutions

1. **Theme Implementation**

   - Challenge: Maintaining consistent styling across components
   - Solution: Centralized theme configuration with Ant Design

2. **Table Interactions**

   - Challenge: Complex table operations affecting performance
   - Solution: Implemented debouncing and optimized filtering logic

3. **Chart Responsiveness**
   - Challenge: Maintaining chart clarity across screen sizes
   - Solution: Dynamic resizing and mobile-optimized layouts

## 🔄 Future Improvements

1. **Authentication & Authorization**

   - User roles and permissions
   - Protected routes

2. **Data Management**

   - Backend integration
   - Real-time updates
   - Data caching

3. **Testing**
   - Unit tests for components
   - Integration tests
   - End-to-end testing

## 📱 Responsive Design

The dashboard is optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎮 Usage

### Theme Toggle

```jsx
// Use the theme toggle in HeaderRight component
const HeaderRight = ({ darkMode, setDarkMode }) => {
  return <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>;
};
```

### Table Features

```jsx
// Example of table implementation with all features
<Table
  dataSource={filteredData}
  pagination={paginationConfig}
  onChange={handleTableChange}
  columns={columns}
/>
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

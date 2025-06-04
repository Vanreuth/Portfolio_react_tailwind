// components/Layout.jsx or App.js/tsx

import React from 'react';
import { cn } from "@/lib/utils"; // Assuming you still have this utility

const Layout = ({ children }) => {
  return (
    <div
      className={cn(
        "min-h-screen bg-gray-100 text-gray-900", // Default light mode styles
        "dark:bg-background dark:text-foreground"    // Dark mode styles
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-16 py-6">
        <h2 className="text-2xl font-semibold mb-4">Welcome to My Website</h2>
        <p> This is the main content area.</p>
      </main>

    </div>
  );
}

export default App;
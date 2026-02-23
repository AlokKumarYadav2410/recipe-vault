import React from "react";
import MainRoutes from "./routes/mainroutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <Navbar />
        <div className="mt-8">
          <MainRoutes />
        </div>
      </div>
    </div>
  );
};

export default App;
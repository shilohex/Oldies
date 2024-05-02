import React, { useState, useEffect } from "react";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-4">Popup Content</h2>
        <p>This is a popup window.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={openPopup}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded"
      >
        Open Popup
      </button>
      <Popup isOpen={isOpen} onClose={closePopup} />
    </div>
  );
};

// Create the root only once

export default App;

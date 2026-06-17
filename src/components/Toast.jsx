// Alternative: Add this as a separate Toast component file (Toast.jsx)
import React, { useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: "✅",
    error: "❌",  
    warning: "⚠️",
    info: "ℹ️"
  };

  const colors = {
    success: "bg-green-500 border-green-700",
    error: "bg-red-500 border-red-700",
    warning: "bg-yellow-500 border-yellow-700",
    info: "bg-blue-500 border-blue-700"
  };

  return (
    <div className="fixed top-24 right-4 z-50 animate-slide-in max-w-md">
      <div className={`rounded-lg shadow-2xl p-4 ${colors[type]} border-l-4 text-white`}>
        <div className="flex items-start gap-3">
          <span className="text-xl">{icons[type]}</span>
          <div className="flex-1">
            <p className="text-sm font-medium">{message}</p>
          </div>
          <button onClick={onClose} className="flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
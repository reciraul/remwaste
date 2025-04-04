import React from 'react';
import { Modal } from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Open Heavy Waste Types
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onContinue={() => {
          console.log('Continuing...');
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}

export default App;
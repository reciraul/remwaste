import React from 'react';
import { AlertTriangle, Info, Check } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

interface WasteType {
  id: string;
  name: string;
  description: string;
}

const wasteTypes: WasteType[] = [
  { id: 'soil', name: 'Soil', description: 'Including topsoil and dirt' },
  { id: 'concrete', name: 'Concrete', description: 'Blocks, slabs, and foundations' },
  { id: 'bricks', name: 'Bricks', description: 'Whole or broken bricks' },
  { id: 'tiles', name: 'Tiles', description: 'Ceramic, porcelain, or stone tiles' },
  { id: 'sand', name: 'Sand', description: 'Building or garden sand' },
  { id: 'gravel', name: 'Gravel', description: 'Stone and aggregate' },
  { id: 'rubble', name: 'Rubble', description: 'Mixed construction debris' },
];

export function Modal({ isOpen, onClose, onContinue }: ModalProps) {
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);

  if (!isOpen) return null;

  const handleCheckboxChange = (id: string) => {
    setSelectedTypes(prev => 
      prev.includes(id) 
        ? prev.filter(type => type !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#0A1929] rounded-2xl max-w-2xl w-full text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Heavy Waste Types</h2>
          
          <div className="bg-[#132F4C] border border-[#F0A500] rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-[#F0A500] w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-[#F0A500]">Important Notice</div>
                <p className="text-gray-300 mt-1">Heavy waste types have specific requirements and restrictions. Some sites may not be available for heavy waste disposal.</p>
              </div>
            </div>
          </div>

          <p className="mb-4 text-gray-200">Please select any heavy waste types you need to dispose of:</p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-6">
            {wasteTypes.map((type) => {
              const isSelected = selectedTypes.includes(type.id);
              return (
                <label
                  key={type.id}
                  className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'bg-[#132F4C] border border-[#2196F3]' 
                      : 'bg-[#0A1929] border border-[#132F4C] hover:border-[#2196F3]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'bg-[#2196F3] text-white' : 'border-2 border-[#2196F3]'
                  }`}>
                    {isSelected && <Check className="w-4 h-4" />}
                  </div>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleCheckboxChange(type.id)}
                    className="sr-only"
                  />
                  <div>
                    <div className="font-medium text-white">{type.name}</div>
                    <div className="text-sm text-gray-400">{type.description}</div>
                  </div>
                </label>
              );
            })}
          </div>

          <div className="bg-[#132F4C] border border-[#2196F3] rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Info className="text-[#2196F3] w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-[#2196F3]">Skip Size Restrictions</div>
                <p className="text-gray-300 mt-1">For safety reasons, heavy waste can only be disposed of in skips up to 8 yards. Larger skips will not be available if heavy waste is selected.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-gray-300 hover:text-white hover:bg-[#132F4C] rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onContinue}
              className="px-6 py-2.5 bg-[#2196F3] text-white rounded-lg hover:bg-[#1976D2] transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
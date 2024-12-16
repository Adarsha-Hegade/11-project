import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  manufacturers: string[];
  selectedManufacturer: string;
  onManufacturerChange: (manufacturer: string) => void;
}

export function Filters({ 
  manufacturers, 
  selectedManufacturer, 
  onManufacturerChange 
}: FiltersProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-gray-500" />
        <span className="text-sm text-gray-700 dark:text-gray-300">Filter by:</span>
      </div>
      <select
        value={selectedManufacturer}
        onChange={(e) => onManufacturerChange(e.target.value)}
        className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg"
      >
        <option value="">All Manufacturers</option>
        {manufacturers.map(manufacturer => (
          <option key={manufacturer} value={manufacturer}>
            {manufacturer}
          </option>
        ))}
      </select>
    </div>
  );
}
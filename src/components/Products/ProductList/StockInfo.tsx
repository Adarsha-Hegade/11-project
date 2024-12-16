import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface StockInfoProps {
  stock: number;
  bookings: number;
}

export function StockInfo({ stock, bookings }: StockInfoProps) {
  const available = stock - bookings;
  const isLowStock = available <= 5;

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {stock} ({bookings} booked)
      </span>
      {isLowStock && (
        <AlertTriangle className="w-4 h-4 text-yellow-500" title="Low stock" />
      )}
    </div>
  );
}
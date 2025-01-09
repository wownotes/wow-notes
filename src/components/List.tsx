'use client';

import React from 'react';

interface ListProps {
  items: string[]; // List of items to display
  onItemClick?: (item: string) => void; // Optional click handler for each item
}

const List: React.FC<ListProps> = ({ items, onItemClick }) => {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <button
            className="w-full px-4 py-2 text-center text-xl text-stone-500 bg-amber-600 hover:bg-amber-700 font-bold rounded-md shadow-sm min-h-16"
            onClick={() => onItemClick && onItemClick(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;

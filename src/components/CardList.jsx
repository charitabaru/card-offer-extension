import React from 'react';

function CardList({ cards, onDeleteCard }) {
  return (
    <div className="space-y-2">
      {cards.map((card, index) => (
        <div 
          key={index}
          className="flex justify-between items-center p-3 bg-gray-50 rounded"
        >
          <div>
            <h3 className="font-medium">{card.cardName}</h3>
            <p className="text-sm text-gray-600">{card.bankName}</p>
          </div>
          <button
            onClick={() => onDeleteCard(index)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardList;
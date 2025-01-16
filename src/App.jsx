import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import AddCardForm from './components/AddCardForm';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Load cards on mount
    chrome.storage.sync.get(['cards'], function(result) {
      setCards(result.cards || []);
    });
  }, []);

  const handleAddCard = (newCard) => {
    const updatedCards = [...cards, newCard];
    chrome.storage.sync.set({ cards: updatedCards }, function() {
      setCards(updatedCards);
    });
  };

  const handleDeleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    chrome.storage.sync.set({ cards: updatedCards }, function() {
      setCards(updatedCards);
    });
  };

  return (
    <div className="w-[400px] min-h-[300px] p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Card Offer Finder</h1>
      <AddCardForm onAddCard={handleAddCard} />
      <CardList cards={cards} onDeleteCard={handleDeleteCard} />
    </div>
  );
}

export default App;
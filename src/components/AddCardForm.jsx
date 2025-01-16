import React, { useState } from 'react';

function AddCardForm({ onAddCard }) {
  const [cardName, setCardName] = useState('');
  const [bankName, setBankName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard({
      cardName,
      bankName,
      dateAdded: new Date().toISOString()
    });
    setCardName('');
    setBankName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        placeholder="Card Name"
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        value={bankName}
        onChange={(e) => setBankName(e.target.value)}
        placeholder="Bank Name"
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <button 
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Card
      </button>
    </form>
  );
}

export default AddCardForm;
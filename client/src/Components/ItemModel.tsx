import React, { useState } from 'react';

interface ItemModelProps {
    closeModal: () => void;
    items: any[]; // Update type according to your item structure
    onAddItem: (newItem: any) => void; // Function to handle new item addition
}

const ItemModel: React.FC<ItemModelProps> = ({ closeModal, items, onAddItem }) => {
    const [newItemName, setNewItemName] = useState('');

    const handleAddItem = async (e: React.FormEvent) => {
        e.preventDefault();
        // Send the new item to the Node.js service
        try {
            const response = await fetch('http://localhost:3001/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newItemName }),
            });
            const newItem = await response.json();
            onAddItem(newItem); // Update items list with the new item
            setNewItemName('');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className="modal">
            <button onClick={closeModal}>Close</button>
            
            <form onSubmit={handleAddItem}>
                <input
                    type="text"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder="New item name"
                />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemModel;

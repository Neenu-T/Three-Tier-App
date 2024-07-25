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
            <div className="modal-content">
                <button className="close-btn" onClick={closeModal}>×</button>
                <h2>List Elements</h2>
                <form onSubmit={handleAddItem}>
                    <div className="form-group">
                        <input
                            type="text"
                            value={newItemName}
                            onChange={(e) => setNewItemName(e.target.value)}
                            placeholder="Add new item"
                        />
                        <button type="submit">Add</button>
                    </div>
                </form>
                <ul className="item-list">
                    {items?.map((item) => (
                        <li key={item.id}>
                            <div className="item-content">{item.name}</div>
                            <div className="item-actions">
                                {/* Add edit and delete buttons here if needed */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ItemModel;




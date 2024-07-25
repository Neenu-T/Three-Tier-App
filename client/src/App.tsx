import React, { useEffect, useState } from 'react';
import './App.css';
import ItemModel from './Components/ItemModel';

const App: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Fetch initial items
        const fetchItems = async () => {
            const response = await fetch('http://localhost:3001/items');
            const data = await response.json();
            setItems(data);
        };
        fetchItems();
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleAddItem = (newItem: any) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={openModal}>Open Item List</button>
                {isModalOpen && <ItemModel closeModal={closeModal} items={items} onAddItem={handleAddItem} />}
            </header>
        </div>
    );
};

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import ItemModel from './Components/ItemModel';


const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001'
const App: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchItems = async () => {
        
        try{
            console.log(BACKEND_URL,"checking update")
            const response = await fetch(`${BACKEND_URL}/items`);
            const data = await response.json();
            setItems(data || []);
            
           
        } catch(err) {
            console.log("Error Fetching Item : ", err);
            
        }
    };

    useEffect(() => {
        // Fetch initial items
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

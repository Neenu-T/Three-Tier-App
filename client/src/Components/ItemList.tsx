import React from 'react';

interface Item {
    id: number;
    name: string;
}

interface ItemListProps {
    items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

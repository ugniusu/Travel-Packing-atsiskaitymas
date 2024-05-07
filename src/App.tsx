import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItems = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleDeleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;

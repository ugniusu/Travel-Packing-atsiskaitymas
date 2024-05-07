import React, { useState } from "react";
import Item from "./Item";

interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface PackingListProps {
  items: Item[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearItems: () => void;
}

const PackingList: React.FC<PackingListProps> = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) => {
  const [sortBy, setSortBy] = useState<string>("input");

  let sortedItems: Item[] = items; // Default value

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;

import React from "react";

interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface StatsProps {
  items: Item[];
}

const Stats: React.FC<StatsProps> = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems: number = items.length;
  const numPacked: number = items.filter((item) => item.packed).length;
  const percentage: number = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `👜You have ${numItems} items on your list and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;

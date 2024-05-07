import React, { useState, ChangeEvent, FormEvent } from "react";

interface Item {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
}

interface Props {
  onAddItems: (newItem: Item) => void;
}

const Form: React.FC<Props> = ({ onAddItems }) => {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description) return;

    const newItem: Item = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select value={quantity} onChange={handleQuantityChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleDescriptionChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;

import { useState } from "react";

export default function Crud() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!input.trim()) return;

    if (editId) {
      // UPDATE
      setItems(items.map(item =>
        item.id === editId ? { ...item, text: input } : item
      ));
      setEditId(null);
    } else {
      // CREATE
      setItems([
        ...items,
        { id: Date.now(), text: input }
      ]);
    }

    setInput("");
  };

  const handleEdit = (item) => {
    setInput(item.text);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-lg">
        
        <h1 className="text-2xl font-bold mb-4 text-center">
          Mini CRUD App
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 px-3 py-2 rounded-lg bg-gray-700 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter something..."
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 px-4 rounded-lg hover:bg-blue-600"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        {/* List */}
        <div className="space-y-2">
          {items.length === 0 && (
            <p className="text-gray-400 text-center">No items yet</p>
          )}

          {items.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-700 px-3 py-2 rounded-lg"
            >
              <span>{item.text}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
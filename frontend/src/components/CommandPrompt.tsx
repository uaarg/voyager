import React, {useEffect, useState} from 'react';
import InstructionButton from './InstructionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CommandPrompt: React.FC = () => {
  const [droppedItems, setDroppedItems] = useState<any[]>([]); // State to hold dropped items
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null); // Track where to drop

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior

    const data = e.dataTransfer.getData('application/json'); // Get the dropped data
    if (data) {
      const buttonData = JSON.parse(data); // Parse the JSON string into an object
      if (highlightIndex !== null) {
        // Insert at the highlighted position
        setDroppedItems((prevItems) => {
          const newItems = [...prevItems];
          newItems.splice(highlightIndex, 0, buttonData); // Insert at the index
          newItems[highlightIndex]['inputValue1'] = buttonData['inputValue1'];
          console.log(newItems)
          return newItems;
        });
      } else {
        setDroppedItems((prevItems) => [...prevItems, buttonData]); // Fallback to appending at the end
      }
    }
    setHighlightIndex(null); // Reset highlight after drop
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault(); // Allow drop
    setHighlightIndex(index); // Set the current hover index
  };

  const handleDragLeave = () => {
    setHighlightIndex(null); // Reset highlight when leaving the target area
  };

  const handleDelete = (index: number) => {
    setDroppedItems((prevItems) => {
      // Create a copy of the current items
      let newItems = [...prevItems];

      // Clear the input values for the item being deleted
      newItems[index].inputValue1 = ''; // Assuming inputValue1 exists
      newItems[index].inputValue2 = ''; // Assuming inputValue2 exists (if applicable)

      // Remove the item from the array
      newItems = newItems.filter((_, i) => i !== index);

      console.log(newItems); // Log the new state of items
      return newItems;
    });
  };

  useEffect(() => {
    console.log('droppedItems updated:', droppedItems);
    // Add any other logic you need to execute after updating droppedItems
  }, [droppedItems]);

  return (
    <section
      className="flex flex-col p-4 h-full w-full border-2 border-gray-500"
      onDrop={handleDrop}
    >
      <h2 className="text-lg font-bold">Command Prompt</h2>
      <div className="flex flex-col gap-2">
        {droppedItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row gap-2 ${highlightIndex === index ? 'border-t-2 border-blue-500' : ''}`} // Highlight if this is the closest drop location
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={handleDragLeave}
          >
            <InstructionButton
              label={item.label}
              label2={item.label2}
              label3={item.label3}
              bgColor={item.bgColor}
              draggable={true}
              maxInput={item.maxInput}
              input1={item.inputValue1}
              input2={item.inputValue2}
            />
            <button className="w-3" onClick={() => handleDelete(index)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        ))}
        {/* Add a final drop zone at the end */}
        <div
          className={`flex flex-row gap-2 ${highlightIndex === droppedItems.length ? 'border-t-2 border-blue-500' : ''}`}
          onDragOver={(e) => handleDragOver(e, droppedItems.length)}
          onDragLeave={handleDragLeave}
        >
          <p>End Program</p>
        </div>
      </div>
    </section>
  );
};

export default CommandPrompt;

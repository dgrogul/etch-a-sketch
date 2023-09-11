// Select the container div and the new grid button
const container = document.getElementById("grid-container");
const newGridButton = document.getElementById("new-grid-button");

// Function to create a new grid
function createNewGrid() {
    // Ask the user for the number of squares per side
    let gridSize = prompt("Enter the number of squares per side (max 100):");
    
    // Validate user input
    gridSize = parseInt(gridSize);
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Clear the existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Calculate the width of each square based on the container's width
    const containerWidth = container.offsetWidth;
    const squareSize = containerWidth / gridSize;

     // Function to generate a random RGB color
     function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Function to darken a color by a certain percentage
    function darkenColor(color, percentage) {
        const [r, g, b] = color
            .match(/\d+/g)
            .map((value) => parseInt(value));

            const newR = Math.max(0, Math.floor(r - (r * percentage) / 100));
            const newG = Math.max(0, Math.floor(g - (g * percentage) / 100));
            const newB = Math.max(0, Math.floor(b - (b * percentage) / 100));
    
            return `rgb(${newR}, ${newG}, ${newB})`;
        }

         // Create a new grid with the specified number of squares per side
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    
        // Add a mouseover event listener to modify the color on hover
        let hoverCount = 0;
        square.addEventListener("mouseover", () => {
            // Generate a random RGB color
            const randomColor = getRandomColor();

            // Darken the color (10% more black)
        const darkerColor = darkenColor(randomColor, hoverCount * 10);

        // Set the background color of the square
        square.style.backgroundColor = darkerColor;

        // Increment the hover count
        hoverCount++;
    });

    }
   
}

// Add a click event listener to the new grid button
newGridButton.addEventListener("click", createNewGrid);

// Initial grid creation (16x16)
createNewGrid();

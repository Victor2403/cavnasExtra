// This file will contain the JavaScript code for handling the file upload, parsing the syllabus, and any other interactions.


document.addEventListener("DOMContentLoaded", function() {
    // Get the form and input elements
    const form = document.getElementById("syllabusForm");
    const fileInput = document.getElementById("syllabusFile");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const file = fileInput.files[0]; // Get the selected file
        if (file) {
            // File is selected, proceed with upload
            uploadSyllabus(file);
        } else {
            alert("Please select a file to upload.");
        }
    });

    // Function to handle syllabus file upload
    function uploadSyllabus(file) {
        const reader = new FileReader(); // Create a new FileReader object

        // Define the onload event handler for the reader
        reader.onload = function(event) {
            const syllabusContent = event.target.result; // Get the contents of the file
            
            // Call the parsing function based on file type
            if (file.type === 'text/plain') {
                const assignments = parseTextSyllabus(syllabusContent);
                console.log("Parsed assignments:", assignments);
                // You can further process the parsed assignments here
            } else if (file.type === 'application/pdf') {
                // Call PDF parsing function (not implemented here)
                console.log("PDF parsing not implemented yet.");
            } else {
                console.log("Unsupported file format:", file.type);
            }
        };

        // Read the uploaded file as text
        reader.readAsText(file);
    }

    // Function to parse text syllabus
    function parseTextSyllabus(text) {
        // Split the text into lines
        const lines = text.split('\n');
        
        // Example parsing logic
        const assignments = [];
        lines.forEach(line => {
            // Example: Extract assignment name and due date
            const match = line.match(/Assignment (\d+): (.+) - Due: (\d{2}\/\d{2}\/\d{4})/);
            if (match) {
                const assignmentNumber = match[1];
                const assignmentName = match[2];
                const dueDate = new Date(match[3]);
                assignments.push({ number: assignmentNumber, name: assignmentName, dueDate: dueDate });
            }
        });

        // Return parsed assignments
        return assignments;
    }
});
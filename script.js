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
                // Generate recommendations based on parsed assignments
                const recommendations = generateRecommendations(assignments);
                // Display recommendations in the chatbot interface
                displayRecommendations(recommendations);
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

    // Function to generate recommendations based on syllabus information
    function generateRecommendations(assignments) {
        const currentDate = new Date(); // Get the current date

        // Filter assignments based on due date (e.g., upcoming assignments)
        const upcomingAssignments = assignments.filter(assignment => {
            return assignment.dueDate && assignment.dueDate > currentDate;
        });

        // Sort upcoming assignments by due date (ascending order)
        upcomingAssignments.sort((a, b) => a.dueDate - b.dueDate);

        // Generate recommendations based on upcoming assignments
        let recommendations = [];
        if (upcomingAssignments.length > 0) {
            recommendations.push("Upcoming Assignments:");
            upcomingAssignments.forEach(assignment => {
                recommendations.push(`- ${assignment.name} (Due: ${assignment.dueDate.toDateString()})`);
            });
        } else {
            recommendations.push("No upcoming assignments. Enjoy your free time!");
        }

        // You can add more recommendation logic here (e.g., study strategies)

        return recommendations;
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
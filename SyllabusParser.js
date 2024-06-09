// Function to parse text syllabus
function parseTextSyllabus(text) {
    // Split the text into lines
    const lines = text.split('\n');
    
    // Define regular expressions for matching assignment names and due dates
    const assignmentRegex = /Assignment (\d+): (.+)/;
    const dueDateRegex = /Due: (\d{2}\/\d{2}\/\d{4})/;

    // Initialize variables to store parsed information
    let currentAssignment = null;
    const assignments = [];

    // Iterate over each line of the syllabus
    lines.forEach(line => {
        // Check if the line matches the assignment name pattern
        const assignmentMatch = line.match(assignmentRegex);
        if (assignmentMatch) {
            // Extract assignment number and name
            const assignmentNumber = assignmentMatch[1];
            const assignmentName = assignmentMatch[2];
            
            // Create a new assignment object
            currentAssignment = { number: assignmentNumber, name: assignmentName, dueDate: null };
        }

        // Check if the line contains a due date
        const dueDateMatch = line.match(dueDateRegex);
        if (dueDateMatch && currentAssignment) {
            // Extract due date and assign it to the current assignment
            const dueDate = new Date(dueDateMatch[1]);
            currentAssignment.dueDate = dueDate;
            // Push the current assignment to the list of assignments
            assignments.push(currentAssignment);
            // Reset currentAssignment to null to prepare for the next assignment
            currentAssignment = null;
        }
    });

    // Return parsed assignments
    return assignments;
}

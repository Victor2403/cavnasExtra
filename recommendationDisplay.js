// Function to display recommendations in the chatbot interface
function displayRecommendations(recommendations) {
    const chatbotContainer = document.getElementById("chatbotContainer");

    // Clear previous recommendations
    chatbotContainer.innerHTML = '';

    // Create a new <ul> element to hold the recommendations
    const recommendationsList = document.createElement("ul");

    // Add each recommendation as a <li> item to the list
    recommendations.forEach(recommendation => {
        const listItem = document.createElement("li");
        listItem.textContent = recommendation;
        recommendationsList.appendChild(listItem);
    });

    // Append the recommendations list to the chatbot container
    chatbotContainer.appendChild(recommendationsList);
}

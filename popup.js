document.addEventListener('DOMContentLoaded', function() {
  // Fetch course information from Canvas API and display it
  fetchCourses();
});

function fetchCourses() {
  // Make API request to fetch course information
  // Replace <your-canvas-api-endpoint> and <your-access-token> with actual values
  fetch('https://loyno.instructure.com/api/v1/courses?access_token=16401~vwAu3Pr4QH8mZB8FQ2VvBraPzCDyfkzWaG6v6wCXGGLe3Zt9MKVZ3T22nRxyMWPx')
    .then(response => response.json())
    .then(courses => {
      displayCourses(courses);
    })
    .catch(error => {
      console.error('Error fetching courses:', error);
    });
}

function displayCourses(courses) {
  const coursesDiv = document.getElementById('courses');
  coursesDiv.innerHTML = '<h2>Courses</h2>';
  const ul = document.createElement('ul');

  courses.forEach(course => {
    const li = document.createElement('li');
    li.textContent = `${course.name} - ${course.course_code}`;
    ul.appendChild(li);
  });

  coursesDiv.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.getElementById('courses-container');

    function fetchCourses() {
        fetch("https://raw.githubusercontent.com/AlainaApolinario/APPDEV1/main/SubjectTaken/courses.json")
            .then(response => response.json())
            .then(data => {
                if (data.courses && Array.isArray(data.courses)) {
                    displayCourses(data.courses); // Extract courses array
                } else {
                    console.error("Error: Unexpected JSON structure", data);
                }
            })
            .catch(error => console.error("Error loading courses:", error));
    }

    function displayCourses(courses) {
        let tableBody = document.getElementById("courses-container");

        if (!tableBody) {
            console.error("Error: Table body element not found.");
            return;
        }

        tableBody.innerHTML = ""; // Clear previous content

        courses.forEach(course => {
            let row = `<tr>
                <td>${course.year_level}</td>
                <td>${course.sem}</td>
                <td>${course.code}</td>
                <td>${course.description}</td>
                <td>${course.credit}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }

    // Initial fetch and display of all courses
    fetchCourses();
});
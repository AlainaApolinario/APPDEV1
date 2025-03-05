document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.getElementById('courses-container');

    if (!coursesContainer) {
        console.error("Error: Table body element with ID 'courses-container' not found.");
        return;
    }

    async function fetchCourses() {
        try {
            const response = await fetch("https://raw.githubusercontent.com/AlainaApolinario/APPDEV1/main/SubjectTaken/courses.json");
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Fetched Data:", data); // Debugging

            if (data.courses && Array.isArray(data.courses)) {
                displayCourses(data.courses);
            } else {
                console.error("Error: Unexpected JSON structure", data);
            }
        } catch (error) {
            console.error("Error loading courses:", error);
        }
    }

    function displayCourses(courses) {
        coursesContainer.innerHTML = ""; // Clear previous content

        courses.forEach(course => {
            let row = `<tr>
                <td>${course.year_level}</td>
                <td>${course.sem}</td>
                <td>${course.code}</td>
                <td>${course.description}</td>
                <td>${course.credit}</td>
            </tr>`;
            coursesContainer.insertAdjacentHTML("beforeend", row);
        });
    }

    // Fetch and display courses on page load
    fetchCourses();
});

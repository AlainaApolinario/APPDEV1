document.addEventListener("DOMContentLoaded", function () {
    fetchCourses();
});

function fetchCourses() {
    fetch("https://raw.githubusercontent.com/AlainaApolinario/APPDEV1/main/SubjectTaken/courses.json") // Corrected URL
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => displayCourses(data))
        .catch(error => console.error("Error loading courses:", error));
}

function displayCourses(data) {
    let tableBody = document.getElementById("courses-container");

    if (!tableBody) {
        console.error("Error: Table body element not found.");
        return;
    }

    tableBody.innerHTML = ""; // Clear previous content

    data.forEach(course => {
        let row = `<tr>
            <td>${course.year}</td>
            <td>${course.semester}</td>
            <td>${course.code}</td>
            <td>${course.title}</td>
            <td>${course.credit}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

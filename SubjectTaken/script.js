fetch('https://raw.githubusercontent.com/AlainaApolinario/APPDEV1/refs/heads/main/SubjectTaken/courses.json')
  .then(response => response.json())
  .then(data => {
      const coursesContainer = document.getElementById('courses-container');
      const searchInput = document.getElementById('search-input');

      function displayCourses(courses) {
          coursesContainer.innerHTML = '';
          courses.forEach(course => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${course.year_level}</td>
                  <td>${course.sem}</td>
                  <td>${course.code}</td>
                  <td>${course.description}</td>
                  <td>${course.credit}</td>
              `;
              coursesContainer.appendChild(row);
          });
      }

      function filterCourses(keyword) {
          const filteredCourses = data.courses.filter(course => 
              course.description.toLowerCase().includes(keyword.toLowerCase())
          );
          displayCourses(filteredCourses);
      }

      searchInput.addEventListener('input', (e) => {
          filterCourses(e.target.value);
      });

      // Initial display of all courses
      displayCourses(data.courses);
  })
  .catch(error => console.error('Error loading courses:', error));
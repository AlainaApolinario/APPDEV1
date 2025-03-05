
fetch('https://raw.githubusercontent.com/AlainaApolinario/APPDEV/refs/heads/main/courses.json')
  .then(response => response.json())
  .then(data => {
      const coursesContainer = document.getElementById('courses-container');

     
      data.courses.forEach(course => {
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
  })
  .catch(error => console.error('Error loading courses:', error));
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description for project one.'
        },
        {
            title: 'Project Two',
            description: 'Description for project two.'
        }
    ];

    const projectSection = document.getElementById('projects');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        projectDiv.appendChild(projectTitle);
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);
        
        projectSection.appendChild(projectDiv);
    });
}); 
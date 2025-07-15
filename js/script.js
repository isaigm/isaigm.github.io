// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Clon de Zeek the Geek',
            description: 'Este proyecto es un clon del primer juego que jugué. Lo desarrollé usando un Entity Component System desde cero con C++ y SFML.',
            media: 'assets/images/zeek-the-geek.png',
            type: 'image',
            link: 'https://github.com/isaigm/zeek-the-geek' 
        },
        {
            title: 'Analizador de espectro',
            description: 'Un simple analizador de espectro hecho con C++, SFML, ImGui y FFTW.',
            media: 'assets/videos/spectrum.mp4',
            type: 'video',
            link: 'https://github.com/isaigm/music-visualizer-sfml' 
        },
        {
            title: 'Implementación de algoritmo C4.5',
            description: 'Este algoritmo lo implementé como parte del proceso de ingreso a la maestría en IA en la Universidad Veracruzana. También redacté un pequeño artículo en LaTeX al respecto.',
            media: 'assets/images/c4_5.png',
            type: 'image',
            link: 'https://github.com/isaigm/decision-tree-from-scratch'
        },
        {
            title: 'Symptom checker',
            description: 'Una página web donde el usuario puede seleccionar distintos síntomas y el sistema predice las tres enfermades más probables que podría tener. El propósito de este proyecto era aprender cómo desplegar modelos de ML a producción.',
            media: 'assets/images/symptom-checker.png',
            type: 'image',
            link: 'https://github.com/isaigm/symptom-checker'
            

        },
        {
            title: 'Implementación del paper ScarNet: Development and Validation of a Novel Deep CNN Model for Acne Scar Classification With a New Dataset.',
            description: 'Enctontré un error dentro de la arquitectura propuesta, por lo que decicidí usar transfer learning obteniendo buenos resultados. 83-87 % de precisión en el dataset original',
            media: 'assets/images/scarnet.jpeg',
            type: 'image',
            link: 'https://github.com/isaigm/scarnet'
            

        },
    ];

    const projectsGrid = document.getElementById('proyectos');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        let mediaElement;
        if (project.type === 'image') {
            mediaElement = document.createElement('img');
            mediaElement.src = project.media;
            mediaElement.alt = project.title;
        } else if (project.type === 'video') {
            mediaElement = document.createElement('video');
            mediaElement.src = project.media;
            mediaElement.controls = true;
            mediaElement.autoplay = false; 
            mediaElement.loop = true;
            mediaElement.muted = true;
        }

        projectCard.innerHTML = `
            ${mediaElement ? mediaElement.outerHTML : ''}
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">Ver proyecto</a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
});

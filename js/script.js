// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Clon de Zeek the Geek',
            description: 'Este proyecto es un clon del primer juego que jugué. Lo desarrollé usando un Entity Component System desde cero con C++ y SFML.',
            media: 'assets/images/zeek-the-geek.png', // Ruta a una imagen de captura de pantalla
            type: 'image',
            link: 'https://github.com/isaigm/zeek-the-geek' // Enlace de ejemplo
        },
        {
            title: 'Analizador de espectro',
            description: 'Un simple analizador de espectro hecho con C++, SFML, ImGui y FFTW.',
            media: 'assets/videos/spectrum.mp4', // Ruta a un video corto del juego
            type: 'video',
            link: 'https://github.com/isaigm/music-visualizer-sfml' // Enlace de ejemplo
        },
        {
            title: 'Implementación de algoritmo C4.5',
            description: 'Este algoritmo lo implementé como parte del proceso de ingreso a la maestría en IA en la Universidad Veracruzana. También redacté un pequeño artículo en LaTeX al respecto.',
            media: 'assets/images/c4_5.png',
            type: 'image',
            link: 'https://github.com/isaigm/decision-tree-from-scratch' // Enlace directo a tu PDF
        },
        {
            title: 'Symptom checker',
            description: 'Una página web donde el usuario puede seleccionar distintos síntomas y el sistema predice las tres enfermades más probables que podría tener. El propósito de este proyecto era aprender cómo desplegar modelos de ML a producción.',
            media: 'assets/images/symptom-checker.png',
            type: 'image',
            link: 'https://github.com/isaigm/symptom-checker' // Enlace de ejemplo
        }
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
            mediaElement.autoplay = false; // No autoplay for better user experience
            mediaElement.loop = true;
            mediaElement.muted = true; // Muted by default
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

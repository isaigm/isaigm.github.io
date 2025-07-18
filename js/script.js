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
    title: 'Análisis Comparativo y Modelo Optimizado para la Clasificación de Cicatrices de Acné',
    description: 'Este proyecto inició como un estudio de replicación del paper "ScarNet". Durante la implementación, se detectaron desafíos metodológicos, incluyendo una arquitectura irreproducible y un alto riesgo de fuga de datos (data leakage) en la estrategia de aumentación propuesta. Como respuesta, se desarrolló y validó un enfoque alternativo basado en Transfer Learning con una ResNet18. La estrategia final, que incluye la fusión de clases visualmente similares (Boxcar y Rolling), aumentos de datos avanzados con RandAugment y un fine-tuning progresivo, alcanzó una precisión final del 84.4% en el dataset completo, demostrando ser una solución más robusta y fiable.',
    media: 'assets/images/scarnet.jpeg',
    type: 'image',
    link: 'https://github.com/isaigm/scarnet'
},
        {
            title: 'Implementación del paper CrimeKGQA: A Crime Investigation System Based on Retrieval-Augmented Generation and Knowledge Graphs',
            description: 'Repliqué completamente el sistema descrito en el artículo, reemplazando GPT-4o por Claude 3.7 como el modelo de lenguaje principal. Combiné RAG y grafos de conocimiento para responder preguntas complejas sobre crímenes cometidos en Manchester.',
            media: 'assets/videos/demo.mp4',
            type: 'video',
            link: 'https://github.com/isaigm/CrimeKGQA'

        },
        {
            title: 'Implementación del paper Imaging time-series to improve classification and imputation',
            description: 'Se reprodujo el enfoque del artículo utilizando el conjunto de datos GunPoint. Se convirtieron las series temporales en imágenes utilizando Gramian Angular Summation Field (GASF), y luego se entrenaron redes neuronales convolucionales (CNN) para la clasificación. El objetivo es determinar si la persona está apuntando con un arma o solo con su dedo.',
            media: 'assets/images/GunPoint.png',
            type: 'image',
            link: 'https://github.com/isaigm/time-series-classifier'

        },
        {
            title: 'Emulador Chip-8 en C++',
            description: 'Desarrollo de un emulador de Chip-8 en C++ utilizando la librería SFML para la gestión de gráficos y entrada. Este proyecto abarca la implementación completa de la arquitectura Chip-8, incluyendo el procesamiento de opcodes, manejo de memoria, registros y la sincronización precisa de la CPU y los temporizadores para una emulación fiel. Se abordaron desafíos clave como la optimización del rendimiento para evitar la ejecución excesivamente rápida o lenta, y la gestión de la entrada del usuario. Adicionalmente, se exploró un prototipo para Raspberry Pi Pico, demostrando adaptabilidad adiferentes plataformas.',
            media: 'assets/images/chip8.png',
            type: 'image',
            link: 'https://github.com/isaigm/chip8-pi-pico'

        },
        {
            title: 'Emulador Intel 8080 en C++',
            description: 'Desarrollo de un emulador del Intel 8080 en C++. Este proyecto fue más complicado que el Chip-8, ya que el Intel 8080 fue un procesador real, tiene muchas más instrucciones, más memoria RAM, más registros, etc.',
            media: 'assets/videos/i8080.mp4',
            type: 'video',
            link: 'https://github.com/isaigm/8080_emu'

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

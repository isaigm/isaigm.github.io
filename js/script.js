// js/script.js

document.addEventListener('DOMContentLoaded', () => {
     const projects = [
        {
            title: 'Zeek the Geek Clone',
            description: 'This project is a clone of the first game I ever played. I developed it using a custom Entity Component System from scratch with C++ and SFML.',
            media: 'assets/images/zeek-the-geek.png',
            type: 'image',
            link: 'https://github.com/isaigm/zeek-the-geek'
        },
        {
            title: 'Spectrum Analyzer',
            description: 'A simple spectrum analyzer built with C++, SFML, ImGui, and FFTW.',
            media: 'assets/videos/spectrum.mp4',
            type: 'video',
            link: 'https://github.com/isaigm/music-visualizer-sfml'
        },
        {
            title: 'C4.5 Algorithm Implementation',
            description: 'I implemented this algorithm as part of the admission process for the M.Sc. in AI at Universidad Veracruzana. I also wrote a short paper about it in LaTeX.',
            media: 'assets/images/c4_5.png',
            type: 'image',
            link: 'https://github.com/isaigm/decision-tree-from-scratch'
        },
        {
            title: 'Symptom Checker',
            description: 'A web application where the user can select different symptoms, and the system predicts the three most likely diseases they might have. The purpose of this project was to learn how to deploy ML models to production.',
            media: 'assets/images/symptom-checker.png',
            type: 'image',
            link: 'https://github.com/isaigm/symptom-checker'
        },
        {
            title: 'Acne Scar Classification: A Rigorous Validation Study',
            description: 'This project began as a replication study of the "ScarNet" paper. After identifying reproducibility challenges, I developed a superior solution with Transfer Learning (ResNet18). To obtain a robust performance measure and eliminate the bias of a "lucky split," I implemented K-Fold Cross-Validation, achieving a final average accuracy of 64.4% ± 5.85%. This result represents an honest and scientifically rigorous evaluation of the model\'s performance on a limited and complex dataset.',
            media: 'assets/images/scarnet.jpeg',
            type: 'image',
            link: 'https://github.com/isaigm/scarnet'
        },
        {
            title: 'Implementation of the paper "CrimeKGQA: A Crime Investigation System..."',
            description: 'I fully replicated the system described in the paper, replacing GPT-4o with Claude 3.7 as the main language model. I combined RAG and knowledge graphs to answer complex questions about crimes committed in Manchester.',
            media: 'assets/videos/demo.mp4',
            type: 'video',
            link: 'https://github.com/isaigm/CrimeKGQA'

        },
        {
            title: 'Implementation of the paper "Imaging time-series to improve classification and imputation"',
            description: 'The paper\'s approach was reproduced using the GunPoint dataset. Time series were converted into images using Gramian Angular Summation Field (GASF), and then Convolutional Neural Networks (CNNs) were trained for classification. The goal is to determine if the person is pointing a gun or just their finger.',
            media: 'assets/images/GunPoint.png',
            type: 'image',
            link: 'https://github.com/isaigm/time-series-classifier'

        },
        {
            title: "Implementation of the paper 'Rediscovering orbital mechanics with machine learning'",
            description: "With the assistance of Gemini 2.5 Pro, I replicated the paper by Lemos, Jeffrey, Cranmer et al., using synthetic data generated from a simulation. The paper's goal was to deduce Newton's law of universal gravitation. More details in the GitHub repository.",
            media: "assets/images/imagen1_comparacion_orbitas.png",
            type: "image",
            link: "https://github.com/isaigm/rediscovering-orbital-mechanics-with-ml"
        },
        {
            title: 'Chip-8 Emulator in C++',
            description: 'Development of a Chip-8 emulator in C++ using the SFML library for graphics and input management. This project covers the full implementation of the Chip-8 architecture, including opcode processing, memory and register handling, and precise CPU and timer synchronization for a faithful emulation. Key challenges such as performance tuning to avoid running too fast or slow and managing user input were addressed. Additionally, a prototype for the Raspberry Pi Pico was explored, demonstrating adaptability to different platforms.',
            media: 'assets/images/chip8.png',
            type: 'image',
            link: 'https://github.com/isaigm/chip8-pi-pico'

        },
        {
            title: 'Intel 8080 Emulator in C++',
            description: 'Development of an Intel 8080 emulator in C++. This project was more complex than the Chip-8, as the Intel 8080 was a real processor with many more instructions, more RAM, more registers, etc.',
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

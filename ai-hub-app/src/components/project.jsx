import React from 'react';
// Import project images from assets (adjust filenames as needed)
//import projectMl from '../assets/project-ml.jpg';
//import projectSignal from '../assets/project-signal.jpg';
//import projectNlp from '../assets/project-nlp.jpg';
//import projectRobotics from '../assets/project-robotics.jpg';
import must from "../assets/MUST.png"

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      category: 'Machine Learning',
      title: 'Intelligent Image Recognition',
      description: 'Advanced computer vision system capable of identifying and classifying objects with 95% accuracy.',
      tags: ['Python', 'TensorFlow', 'CNN'],
      image: must,
      githubUrl: 'https://github.com/yourorg/image-recognition' // replace with actual repo
    },
    {
      id: 2,
      category: 'Signal Processing',
      title: 'Audio Signal Enhancement',
      description: 'Real-time noise reduction and audio quality improvement using advanced DSP algorithms.',
      tags: ['MATLAB', 'DSP', 'FFT'],
      image: must,
      githubUrl: 'https://github.com/yourorg/audio-enhancement'
    },
    {
      id: 3,
      category: 'NLP',
      title: 'Smart Chatbot System',
      description: 'Conversational AI assistant powered by transformer models for natural language understanding.',
      tags: ['Python', 'BERT', 'NLP'],
      image: must,
      githubUrl: 'https://github.com/yourorg/chatbot'
    },
    {
      id: 4,
      category: 'Robotics',
      title: 'Autonomous Navigation',
      description: 'AI-powered robot capable of autonomous navigation and obstacle avoidance in dynamic environments.',
      tags: ['ROS', 'OpenCV', 'RL'],
      image: must,
      githubUrl: 'https://github.com/yourorg/autonomous-nav'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore our innovative projects that showcase the power of AI and
            signal processing in solving complex challenges.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={project.id}
            >
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-overlay">
                  <a
                    href={project.githubUrl}
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
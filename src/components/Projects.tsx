import spotifyWordPic from '../assets/Figure_1(black).png';
import analogClockPic from '../assets/darkmode-analog-clock.png';

const projects = [
  {
    title: 'Spotify-word Cloud',
    image: spotifyWordPic,
    tech: ['Python'],
    projectUrl: 'https://github.com/felicity0000/Spotify-word-cloud.git'
  },
  {
    title: 'Analog Clock',
    image: analogClockPic,
    tech: ['HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://github.com/felicity0000/analog-clock.git'
  }
];

const Projects = () => {
  return (
    <div id="projects" className="py-8">
      <h2 className="text-3xl text-center mb-8 text-white font-poppins py-16 text-gray-800 dark:text-slate-500">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-200 dark:bg-slate-950 shadow-md rounded-lg overflow-hidden hover:-translate-y-2 transform transition">
            <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
            <div className="p-4">
              <h3 className="dark:text-slate-500 text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap mb-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-white dark:bg-slate-500 rounded-full px-2 py-1 text-sm font-semibold dark:text-slate-950 mr-2 mb-2">{tech}</span>
                ))}
              </div>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="block text-center bg-white dark:bg-slate-700 dark:text-slate-950 font-semibold py-2 px-4 rounded">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

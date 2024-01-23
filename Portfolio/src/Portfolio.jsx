// portfolio.jsx

import React from 'react';

const skills = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'];

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col md:flex-row items-center">
      <div className="max-w-2xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Your Name</h1>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            Front-End Developer | MERN Stack Enthusiast
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p className="text-gray-700">
            Hello! I'm a passionate front-end developer with expertise in the MERN (MongoDB, Express.js, React, Node.js)
            stack. I enjoy creating dynamic and responsive web applications.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="text-gray-700">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Projects</h2>
          {/* Add your project details here */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Project Name</h3>
            <p className="text-gray-700">Description of the project goes here.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>

      <div className="md:w-1/3 flex justify-center mt-4 md:mt-0">
        <img
          src="https://w0.peakpx.com/wallpaper/451/359/HD-wallpaper-studying-with-coffee-study-working-hard-calculator-laptop-room-set-up.jpg" // Replace with the actual URL of your image
          alt="Working on laptop"
          className="rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default Portfolio;

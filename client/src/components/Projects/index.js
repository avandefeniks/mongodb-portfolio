import React from 'react';
import projects from "../../projects.json";

function Projects() {

        function ProjectModel(props) {
            return (
            
              <div className="card">
                <div className="img-container">
                  <img alt={props.name} src={props.image} className='card-img-top' width='800px' />
                </div>
                <div className="content">
                  <ul>
                      <li>
                          <p className="project-title">{props.name}</p>
                      </li>
                      <li>
                          <p className="description">{props.description}</p>
                      </li>
                      <li>
                          <div className="icons">
                          <a href={props.github} target="_blank"><img src="https://img.icons8.com/ios/40/000000/github.png" alt="github-icon" id="port-icon"/></a> 
                        <a href={props.url} target="_blank"><img src="https://img.icons8.com/small/32/000000/external-link.png"/></a> 
                          </div>
                      </li>
                      <li>
                          {props.languages}
                      </li>
                  </ul>
                </div>
              </div>
        
            );
          }
          
          function Format(props) {
              return <div className="wrapping">{props.children}</div>
          }
          
              return (
                  <>
                  <div className="project">
                  <h2 className="page-title">Projects</h2>
                  </div>
                  <div className='row col-12 col-md-6 col-lg-12 d-flex flex-row justify-content-around'>
                  {/* <Format> */}
                      {projects.map((project) => (
                          <ProjectModel
                          name={project.name}
                          key={project.id}
                          image={project.image}
                          github={project.github}
                          url={project.url}
                          languages={project.languages}
                          description={project.description}
                          />
                          ))}
                  {/* </Format> */}
                  </div>
                  </>
              );
          


}

export default Projects;
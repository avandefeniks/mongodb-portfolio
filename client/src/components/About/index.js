import React from 'react'
import Angel from '../../assets/images/angel.jpg'

function About() {

    return (
        
        <div className='row d-flex flex-wrap about-me'>
            <h2 className='about-me-text' id='about'>About Me</h2>
            <div className='col-12 col-md-12 col-lg-12 col-xl-1'>
                <img src={Angel} alt='Angel Van de Feniks' height={200} className='angel-image' />
            </div>
            <div className='col-12 col-md-12 col-lg-12 col-xl-11 about-me-text'>
                <p>
                    Passionate and creative Full Stack Web Developer. I have a certificate in Full Stack Web Development from UC Davis. My technical
                    skills include Responsive Design, JavaScript, back-end programming, Sequelize and Mongoose.  Strong communicator with 
                    collaboration and creative problem-solving skills and have demonstrated the ability to meet deadlines consistently.
                </p>
                <p>
                    Excited to work in the role of Full Stack Web Developer because it offers me the ability to design, build and maintain websites 
                    from initial concept to production. My previous positions as an IVR developer and Systems Analyst have helped prepare me for this role as
                    they’ve provided me with experience in working with teams, the application development life cycle and responding to the needs of 
                    the client. I work well in a cross-functional, diverse team-oriented and collaborative environment.
                </p>
            </div>
        </div>

    );
}

export default About;
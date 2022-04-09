import Education from './Education';
import Experience from './Experience';
import Header from './Header';
import Skills from './Skills';

const Resume = () => {
    return (
        <div className="resume">
            <Header />
            <Experience />
            <Skills />
            <Education />
        </div>
    );
};

export default Resume;

import Section from './Section';

const Education = () => {
    return (
        <Section>
            <h2>Education</h2>
            <div className="subsection">
                <div className="company_info split_left_right">
                    <span>
                        <a
                            className="subject"
                            href="http://www.gatech.edu/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Georgia Institute of Technology
                        </a>
                        , College of Computing
                    </span>
                    <span className="location">Atlanta, Georgia</span>
                </div>
                <div className="split_left_right">
                    <span className="title">
                        Bachelor of Science in Computer Science
                    </span>
                    <span className="date">December 2015</span>
                </div>
                <ul>
                    <li>
                        Minor in Computing & Business through the{' '}
                        <a
                            href="http://www.scheller.gatech.edu/centers-initiatives/technology-management-program/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Denning Technology & Management Program
                        </a>
                    </li>
                </ul>
            </div>
        </Section>
    );
};

export default Education;

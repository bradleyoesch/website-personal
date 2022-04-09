import Base from './_Base';

/* eslint-disable jsx-a11y/anchor-has-content */
const Icons = () => {
    return (
        <span className="icons">
            <a
                className="icon-contact icon"
                href="mailto:bradley.oesch@gmail.com"
                target="_blank"
                rel="noreferrer"
            ></a>
            <a
                className="icon-codez icon"
                href="https://github.com/bradleyoesch/"
                target="_blank"
                rel="noreferrer"
            ></a>
            <a
                className="icon-work icon"
                href="https://www.linkedin.com/pub/bradley-oesch/63/a98/45"
                target="_blank"
                rel="noreferrer"
            ></a>
            <a
                className="icon-art icon"
                href="https://dribbble.com/BradleyOesch"
                target="_blank"
                rel="noreferrer"
            ></a>
            {false && (
                <a
                    className="icon-download icon"
                    href="files/Resume - Bradley Oesch.pdf"
                    download
                ></a>
            )}
        </span>
    );
};
/* eslint-enable jsx-a11y/anchor-has-content */

const Resume = () => {
    return (
        <Base description="404: Not Found">
            <div className="resume">
                <div className="header split_left_right">
                    <span>
                        <h1 className="name">
                            <a href="/" target="_blank">
                                Bradley Oesch
                            </a>
                        </h1>
                    </span>
                    <span></span>
                    {false && <Icons />}
                </div>

                <div className="section">
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
                                <div>
                                    <span>
                                        Concentration: Media & Information
                                        Internetworks
                                    </span>
                                </div>
                            </li>
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
                            <li>
                                Eleven-week computer science-oriented study
                                abroad program in Barcelona, Spain in Summer
                                2013
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="section">
                    <h2>Projects</h2>
                    <div className="subsection">
                        <div className="project_info split_left_right">
                            <span>
                                <a
                                    className="subject"
                                    href="https://www.twitter.com/ScraperNews"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Scraper News
                                </a>
                            </span>
                            <span className="date">November 2014</span>
                        </div>
                        <div>
                            <span className="technologies">
                                Python (Scrapy, Twython libraries) • Cron
                            </span>
                        </div>
                        <ul>
                            <li>
                                Scrapes Hacker News using Scrapy library to
                                gather information on posts with at least 70
                                comments
                            </li>
                            <li>
                                Tweets posts that have not already been tweeted
                                using Twython API
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="section">
                    <h2>Experience</h2>
                    <div className="subsection">
                        <div className="company_info split_left_right">
                            <span>
                                <a
                                    className="subject"
                                    href="http://www.indeed.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Indeed
                                </a>
                            </span>
                            <span className="location">Austin, Texas</span>
                        </div>
                        <div className="split_left_right">
                            <span className="title">
                                Software Engineer -{' '}
                                <a
                                    href="https://indeed.com/prime?isid=bradleyoesch_com&ikw=resume_html_exp_title"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Indeed Prime
                                </a>
                            </span>
                            <span className="date">January 2016 – Present</span>
                        </div>
                        <div>
                            <span className="technologies">
                                Java • JavaScript • React.js • MySQL •
                                Elasticsearch • HTML • CSS
                                <span className="slash">/</span>SASS
                            </span>
                        </div>
                        <ul>
                            <li>
                                Helped grow Indeed Prime from 7,000 candidates,
                                2,500 employers, and 4 developers to 480,000
                                candidates, 18,000 employers, and 15 developers
                            </li>
                            <li>
                                Tech lead on payment structure changes,
                                designing the schema, engineering strategy, and
                                epic breakdown, and led development across 10
                                engineers
                            </li>
                            <li>
                                Developed, and helped others plan and develop,
                                countless features
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="section">
                    <h2>Leadership</h2>
                    <div className="subsection">
                        <div className="company_info split_left_right">
                            <span>
                                <a
                                    className="subject"
                                    href="http://www.pikapp.net/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Pi Kappa Phi Fraternity
                                </a>
                            </span>
                            <span className="location">Atlanta, Georgia</span>
                        </div>
                        <div className="split_left_right">
                            <span className="title">
                                President – Iota Chapter
                            </span>
                            <span className="date">
                                January – December 2014
                            </span>
                        </div>
                        <ul>
                            <li>
                                Manage about 100 members through 7 Executive
                                Council (EC) positions and 15 Committee Chairmen
                            </li>
                            <li>
                                Increased initiation numbers by 93% and
                                retention rate by 17% from the prior year
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="section">
                    <h2>
                        Skills <span className="slash">/</span> Interests
                    </h2>
                    <div className="subsection">
                        <table className="skills_table">
                            <tr>
                                <td>Proficient:</td>
                                <td>
                                    Java, JavaScript, React.js, SQL, Google
                                    Protobuf, Spring, CSS
                                    <span className="slash">/</span>SASS, HTML
                                </td>
                            </tr>
                            <tr>
                                <td>Familiar:</td>
                                <td>
                                    MongoDB, Elasticsearch, Python, Django
                                    Framework
                                </td>
                            </tr>
                            <tr>
                                <td>Tools:</td>
                                <td>
                                    IntelliJ, Jenkins, Git, JIRA, Apache Ant,
                                    Photoshop, Illustrator
                                </td>
                            </tr>
                            <tr>
                                <td>Interests:</td>
                                <td>
                                    Stand up comedy, graphic design, skydiving,
                                    soccer
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default Resume;

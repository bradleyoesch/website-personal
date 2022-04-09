import Section from './Section';

const Projects = () => {
    return (
        <Section>
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
                        Scrapes Hacker News using Scrapy library to gather
                        information on posts with at least 70 comments
                    </li>
                    <li>
                        Tweets posts that have not already been tweeted using
                        Twython API
                    </li>
                </ul>
            </div>
        </Section>
    );
};

export default Projects;

import { useContent } from 'radish';

import Base from './_Base';

type ProjectProps = {
    title: string;
    url: string;
    date: string;
    image: string;
    children: React.ReactNode;
}

const Project = ({ title, url, date, image, children }: ProjectProps) => {
    return (
        <div class="project">
            <a href={url} target="_blank">
                <h2>{title}</h2>
            </a>
            <a href={url} target="_blank">
                <img class="screenshot" src={image.src} alt={image.alt} />
            </a>
            <p class="project-info">
                <em>{date}</em>
                <br />
                <a href={url} target="_blank">{url}</a>
            </p>
            {children}
        </div>
    )
};

const Projects = () => {
    const { projects } = useContent();
    return (
        <Base description="Projects for Bradley Oesch">
            <Project
                title="Scraper News"
                url="https://twitter.com/ScraperNews"
                date="November 2014"
                image={{
                    src: 'img/scraper-news-screenshot.jpg',
                    alt: 'Screenshot of Scraper News',
                }}
            >
                <p class="project-details">
                    I realized that when I went to <a class="underline" href="http://news.ycombinator.com/" target="_blank">Hacker News</a> I would scan the page and click on titles I found interesting that also had a lot of comments, because to me that signaled that the content itself generates discussion, rather than the number of votes, which signals an attention-grabbing title. I built a Twitter bot to scrape the front page of Hacker News and tweet out any stories that have at least 70 comments. I now go to Scraper News instead of Hacker News because it condenses the information down to the most talked about articles, plus I can catch up on days I missed.
                </p>
                <p class="project-details">
                    This was built in python, using the <a class="underline" href="http://scrapy.org/" target="_blank">Scrapy</a> and <a class="underline" href="https://twython.readthedocs.org/en/latest/" target="_blank">Twython</a> libraries, and is hosted on this server through <a class="underline" href="https://www.digitalocean.com/" target="_blank">Digital Ocean</a>. The scraper runs every 15 minutes with a cron job.
                </p>
            </Project>

            <hr />

            <Project
                title="Apparel Mockup"
                url="http://apparelmockup.bigcartel.com"
                date="January 2011"
                image={{
                    src: 'mg/mockups-screenshot.jpg',
                    alt: 'Screenshot of Apparel Mockup',
                }}
            >
                <p class="project-details">
                    In high school I spent a lot of time on a now defunct tee design forum (<a class="underline" href="http://www.emptees.com/" target="_blank">Emptees</a> and saw that many designers were either using poorly made or expensive shirt mockups. I decided to make my own high quality mockups with pictures I took, and sold them through an online marketplace. I have enjoyed a small, consistent stream of orders each month that over the last several years has resulted in a nice amount of extra money (that I now throw away on Ubers). Recently I have begun to accept custom mockup orders, where I create a mockup based on a client's own photography for their personal or commercial use.
                </p>
                <p class="project-details">
                    These were made in Photoshop, with pictures taken way back before iPhone cameras were good.
                </p>
            </Project>
        </Base>
    );
}

export default Projects;

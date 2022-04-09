import React from 'react';

import Section from './Section';

type CompanyProps = {
    name: string;
    url: string;
    location: string;
};

const Company = ({ name, url, location }: CompanyProps) => {
    return (
        <div className="company_info split_left_right">
            <span>
                <a
                    className="subject"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {name}
                </a>
            </span>
            <span className="location">{location}</span>
        </div>
    );
};

type RoleProps = {
    title: string;
    team: string;
    url?: string;
    date: string;
    technologies: string;
};

const Role = ({
    title,
    team,
    url,
    date,
    technologies,
    children,
}: RoleProps) => {
    return (
        <div className="subsection">
            <div className="split_left_right">
                <span className="title">
                    {title} -{' '}
                    {url ? (
                        <a href={url} target="_blank" rel="noreferrer">
                            {team}
                        </a>
                    ) : (
                        team
                    )}
                </span>
                <span className="date">{date}</span>
            </div>
            <div>
                <span className="technologies">{technologies}</span>
            </div>
            {children}
        </div>
    );
};

const Indeed = () => {
    return (
        <div className="company-section">
            <Company
                name="Indeed"
                url="http://www.indeed.com/"
                location="Austin, Texas"
            />

            <Role
                title="Tech Lead / Staff Software Engineer"
                team="Indeed Flex"
                url="https://indeedflex.com/"
                date="Oct 2020 - Present"
                technologies="Python • Django • Java • JavaScript • React.js • GraphQL • Reactor • MySQL • AWS RDS • SNS/SQS"
            >
                <ul>
                    <li>
                        Singly implemented Java GraphQL service for one-way
                        emails and two-way SMS messages
                    </li>
                    <ul>
                        <li>
                            Other sub-team did not know java, I switched to that
                            sub-team to help them implement, ended up finishing
                            entire project before rest of team could jump over
                            to help/learn
                        </li>
                        <li>
                            Created GraphQL schema, implemented GraphQL
                            operations with DGS framework
                        </li>
                        <li>
                            Integrated with Indeed-specific email service to
                            send emails
                        </li>
                        <li>
                            Integrated with Twilio to send SMS, implemented
                            webhook to receive inbound SMS messages
                        </li>
                        <li>
                            Implemented database connection with R2DBC, a
                            non-blocking publisher-based library to enable
                            streaming data (e.g. GraphQL subscriptions for
                            real-time chat messaging
                        </li>
                        <li>
                            Wrote all GraphQL unit tests, database integration
                            tests, and extensive documentation on codebase,
                            technologies, and integrations
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li>
                        Architected compliance platform, involving service,
                        webapp, database, and queues
                    </li>
                    <ul>
                        <li>
                            Led architecture design review and API review, led
                            development across a group of six engineers
                        </li>
                        <li>
                            Created new Django microservice and React.js webapp,
                            set up MySQL db via AWS RDS and terraform
                        </li>
                        <li>
                            Drove MySQL schema and GraphQL API designs for
                            initial feature
                        </li>
                        <li>
                            Split initiative into epics and each epic into
                            tickets, prioritizing tickets within epics
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li>
                        Introduced patterns for GraphQL APIs testing, React.js
                        component testing, and cypress integration testing
                    </li>
                    <ul>
                        <li>
                            Became greater team’s common point of contact for
                            questions on these topics
                        </li>
                    </ul>
                </ul>
            </Role>
            <Role
                title="Tech Lead / Senior Software Engineer"
                team="Seen by Indeed"
                url="https://www.indeed.com/lead/expanding-access-tech-talent"
                date="Jan 2019 – Oct 2020"
                technologies="Java • Spring • JavaScript • React.js • MySQL • JOOQ • RabbitMQ • Elasticsearch • Project Management"
            >
                <ul>
                    <li>
                        Tech lead on payment structure changes across 10
                        engineers
                    </li>
                    <ul>
                        <li>
                            Led design review, designed schema and engineering
                            strategy to develop, test and release by deadline
                        </li>
                        <li>
                            Created new microservice, rpcs, introduced JOOQ and
                            flyway for MySQL queries and migrations
                        </li>
                        <li>
                            Split initiative into epics and each epic into
                            tickets, prioritizing tickets within epics
                        </li>
                        <li>
                            Acted as impromptu project manager, tracking ticket
                            release over time compared to deadline
                        </li>
                    </ul>
                </ul>
            </Role>

            <Role
                title="Software Engineer"
                team="Seen by Indeed"
                url="https://www.indeed.com/lead/expanding-access-tech-talent"
                date="Jan 2016 – Jan 2019"
                technologies="Java • Spring • JavaScript • React.js • MySQL • JOOQ • Elasticsearch • HTML • CSS/SASS"
            >
                <ul>
                    <li>
                        Helped grow product from 7,000 candidates, 2,500
                        employers, and 4 developers to over 500,000 candidates,
                        20,000 employers, and 20 developers
                    </li>
                </ul>
            </Role>

            <Role
                title="Software Engineering Intern"
                team="Jobsearch Mobile"
                url="https://indeed.com/m"
                date="Jun 2015 – Aug 2015"
                technologies="Java • JavaScript • React.js • Soy (Closure Templates) • JSP • HTML • CSS • SASS"
            >
                <ul>
                    <li>
                        Added swipe event logging and indexing to help
                        understand user swiping interactions and assumptions
                    </li>
                    <li>
                        Implemented a new toggleable mobile menu with modular
                        code optimized for A/B testing purposes
                    </li>
                    <li>
                        Replicated menu code in React.js to match existing
                        codebase while maintaining identical user experiences
                    </li>
                </ul>
            </Role>
        </div>
    );
};

const Wayfair = () => {
    return (
        <div className="company-section">
            <Company
                name="Wayfair"
                url="http://www.wayfair.com/"
                location="Boston, Massachusetts"
            />

            <Role
                title="Software Engineering Intern"
                team="Storefront Department"
                date="Jun 2014 – Aug 2014"
                technologies="MVC PHP • JavaScript (jQuery, AJAX) • MSSQL • HTML • CSS"
            >
                <ul>
                    <li>
                        Full stack experience creating Digital Asset Manager to
                        upload, search, group, tag, and batch edit photos
                    </li>
                </ul>
            </Role>
        </div>
    );
};

const Experience = () => {
    return (
        <Section>
            <h2>Experience</h2>
            <Indeed />
            <Wayfair />
        </Section>
    );
};

export default Experience;

import Section from './Section';

const Skills = () => {
    return (
        <Section>
            <h2>
                Skills <span className="slash">/</span> Interests
            </h2>
            <div className="subsection">
                <table className="skills_table">
                    <tr>
                        <td>Proficient:</td>
                        <td>
                            Java, JavaScript, React.js, GraphQL, Node.js,
                            Python, Django, Spring, SQL, CSS/SASS, HTML
                        </td>
                    </tr>
                    <tr>
                        <td>Familiar:</td>
                        <td>
                            SNS/SQS, RabbitMQ, AWS Lambdas, Jenkinsfiles, Bash
                        </td>
                    </tr>
                    <tr>
                        <td>Tools:</td>
                        <td>
                            IntelliJ, Jenkins, Git, JIRA, Apache Ant, Gradle,
                            Photoshop, Illustrator
                        </td>
                    </tr>
                    <tr>
                        <td>Interests:</td>
                        <td>
                            Stand up comedy, graphic design, skydiving, soccer
                        </td>
                    </tr>
                </table>
            </div>
        </Section>
    );
};

export default Skills;

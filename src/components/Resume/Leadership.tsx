import Section from './Section';

const Leadership = () => {
    return (
        <Section>
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
                    <span className="title">President – Iota Chapter</span>
                    <span className="date">January – December 2014</span>
                </div>
                <ul>
                    <li>
                        Manage about 100 members through 7 Executive Council
                        (EC) positions and 15 Committee Chairmen
                    </li>
                    <li>
                        Increased initiation numbers by 93% and retention rate
                        by 17% from the prior year
                    </li>
                </ul>
            </div>
        </Section>
    );
};

export default Leadership;

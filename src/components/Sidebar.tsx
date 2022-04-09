const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2>
                <a href="/">Bradley Oesch</a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/resume">Resume</a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/bradleyoesch/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/pub/bradley-oesch/63/a98/45"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://dribbble.com/BradleyOesch"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dribbble
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:bradley.oesch@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;

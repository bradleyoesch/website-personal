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

export default Icons;

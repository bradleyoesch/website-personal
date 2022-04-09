const Header = () => {
    return (
        <div className="header split_left_right">
            <span>
                <h1 className="name">
                    <a href="/" target="_blank">
                        Bradley Oesch
                    </a>
                </h1>
            </span>
            <span></span>
            <span>
                <em>
                    <sup>Last Updated: Mar 2022</sup>
                </em>
            </span>
            {false && <Icons />}
        </div>
    );
};

export default Header;

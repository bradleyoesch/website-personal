const Section = ({ children }: PropsWithChildren<Record<string, never>>) => {
    return <div className="section">{children}</div>;
};

export default Section;

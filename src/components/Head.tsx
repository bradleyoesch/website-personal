import { Head as RadishHead, useContent } from 'radish';

type HeadProps = {
    description: string;
};

const Head = ({
    description = 'Personal website for Bradley Oesch',
}: HeadProps) => {
    const { site } = useContent();

    return (
        <RadishHead>
            <title>{site.title}</title>

            <meta
                name="viewport"
                content="width=device-width, user-scalable=no"
            />
            <meta name="description" content={description} />
            <meta name="keywords" content="bradley, oesch, bradley oesch" />

            {false && (
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="static/images/favicon.ico"
                />
            )}

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
            />
            {false && (
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
            )}
            <link
                href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                rel="stylesheet"
            />
        </RadishHead>
    );
};

export default Head;

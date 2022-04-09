import { PropsWithChildren } from 'react';
import { Head } from 'radish';

import Head from '../components/Head';
import Sidebar from '../components/Sidebar';

type BaseProps = {
    title?: string;
    description: string;
};

const Base = ({
    title,
    description,
    children,
}: PropsWithChildren<BaseProps>) => {
    return (
        <>
            <Head title={title} description={description} />

            <Sidebar />

            <section className="main">
                <div className="main-subsection">{children}</div>
            </section>
        </>
    );
};

export default Base;

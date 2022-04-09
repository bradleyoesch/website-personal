import { PropsWithChildren } from 'react';
import { Head } from 'radish';

import Head from '../components/Head';
import Sidebar from '../components/Sidebar';

type BaseProps = {
    description: string;
};

const Base = ({ description, children }: PropsWithChildren<BaseProps>) => {
    return (
        <>
            <Head description={description} />

            <Sidebar />

            <section className="main">
                <div className="main-subsection">{children}</div>
            </section>
        </>
    );
};

export default Base;

import { Head } from 'radish';

import Head from '../components/Head';
import Sidebar from '../components/Sidebar';

const Base = ({ description, children }) => {
    return (
        <>
            <Head description={description} />

            <Sidebar />

            <section class="main">
                <div class="main-subsection">
                    {children}
                </div>
            </section>
        </>
    );
}

export default Base;

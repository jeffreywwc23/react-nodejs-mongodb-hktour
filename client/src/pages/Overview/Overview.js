import React from 'react';
import './Overview.css';

import CardData from '../../dev-data/data/tours.json';
import OverviewCards from '../../components/OverviewCards/OverviewCards';
import Footer from '../../components/Footer/Footer';

class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tours: CardData,
        }
    }

    render() {
        const { tours } = this.state;

        return (
            <>
                <section className="overview">
                    <main className="main">
                        <h1 className="overview-title">Tours Overview</h1>
                        <div className="card-container">
                            {
                                tours.map(({ ...otherProps }) => {
                                    return <OverviewCards key={otherProps._id} {...otherProps} />
                                })
                            }
                        </div>
                    </main>
                </section>
                <Footer />
            </>
        );
    }
}

export default Overview;


import React from 'react';
import './Overview.css';
import { connect } from 'react-redux';
import OverviewCards from '../../components/OverviewCards/OverviewCards';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';

const Overview = (props) => {
    let { loading, tours } = props
    const toursDataArray = tours.tourState.data;

    return (
        <>
            {
                loading || !toursDataArray ?
                    <Spinner />
                    :
                    <>
                        <section className="overview">
                            <main className="overview-main">
                                <h1 className="overview-title">Tours Overview</h1>
                                <div className="card-container">
                                    {
                                        toursDataArray.map(({ ...otherProps }) => {
                                            return <OverviewCards key={otherProps._id} {...otherProps} />
                                        })
                                    }
                                </div>
                            </main>
                        </section>
                        <Footer />
                    </>
            }

        </>
    );
}


const mapStateToProps = (state) => ({
    tours: state.tourContainer,
});

export default connect(
    mapStateToProps,
)(Overview);


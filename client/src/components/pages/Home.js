import React, { Fragment } from 'react';
import '../../assets/home.css';

const Home = () => {
    const arr1 = [1, 2, 2, 4, 2, 2, 2, 2, 4]
    const mapList = arr1.map((arr, index) => (
        <div className="item" key={index}>
            <div className="item-img">

            </div>
            <div className="item-desc">
                <div className="item-title">
                    <h2> The title of the item</h2>
                </div>
                <p className="item-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, itaque?
                            </p>
            </div>
        </div>
    ))
    return (
        <Fragment>
            <div className="page-header  mb-2">
                <div className="page-header-title">Home</div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="wrap-home">
                <div className="wrap-items">
{mapList    }
                </div>
            </div>
        </Fragment>
    )
}

export default Home;

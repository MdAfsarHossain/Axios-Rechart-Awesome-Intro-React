import PropTypes from 'prop-types';
import React from 'react';
import { TiTick } from "react-icons/ti";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'><TiTick /> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string,
};

export default Feature;
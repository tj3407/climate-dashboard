import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const GlacialMelt = props => {
    return (
        <div>
            <div>
            <iframe 
                src='https://gfycat.com/ifr/MeekActualCygnet' 
                frameborder='0' 
                scrolling='no' 
                allowfullscreen 
                width='100%' 
                height='404'
                title="Glacial Melt"
            />
            </div>
            <Typography variant="h5" className="mt-2">
                Glacial Melt
            </Typography>
            <Typography paragraph className="mt-2">
                Land ice stores nearly 2/3 of the world's freshwater but is shrinking due to higher atmospheric temperatures. Glaciers partially
                melt during the summer and grow again during winter. But due to the rise of temperature, ice growth during the winter is much less 
                than ice melt in the summer resulting in an overall loss of ice sheet.
            </Typography>
        </div>
    );
};

GlacialMelt.propTypes = {
    
};

export default GlacialMelt;
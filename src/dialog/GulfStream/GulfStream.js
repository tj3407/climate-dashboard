import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const GulfStream = props => {
    return (
        <div>
            <div>
                <iframe 
                    src='https://gfycat.com/ifr/DefiantSillyGaur' 
                    frameborder='0' 
                    scrolling='no' 
                    allowfullscreen 
                    width='100%' 
                    height='412'
                    title="Gulf Stream"
                />
            </div>
            <Typography paragraph className="mt-2">
                The Gulf Stream plays a vital role in redistributing heat throughout our planet. Research has shown that
                it has been at its weakest in the past 1600 years and the slowdown is likely linked to human-caused climate change.
                As atmospheric temperatures increase, the enhanced melting of the Greenland Ice Sheet adds fresh water to the surface ocean
                and disturbs the flow of warm water current that moves from the south and cooled down up north. Once the water is cooled down and becomes denser,
                it then sinks to the deeper ocean layers (as denser water is heavier) and starts it journey again back down south. Fresh water reduces the salinity of the ocean
                water and, thus, the density of the water inhibiting the sinking and weakening the flow of the stream.            
            </Typography>
            <Typography paragraph className="mt-2 paragraph bold">So what happens when the Gulf Stream flow is weakened?</Typography>
            <Typography paragraph className="mt-2">
                Researchers in Europe has stated that this could imply that more extreme weather events will come as a result.
                Other studies found that possible consequences can also include extream heat waaves or a decrease in summer rainfall.
            </Typography>
        </div>
    );
};

GulfStream.propTypes = {
    
};

export default GulfStream;
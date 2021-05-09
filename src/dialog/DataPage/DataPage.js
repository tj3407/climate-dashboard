import { Typography } from '@material-ui/core';
import React from 'react';

function DataPage(props) {
    return (
        <div>
            <div>
                <iframe 
                    src='https://gfycat.com/ifr/NaiveParchedCrocodileskink' 
                    frameborder='0' 
                    scrolling='no' 
                    allowfullscreen 
                    width='100%' 
                    height='404'
                    title="Thermal Expansion"
                />
            </div>
            <Typography variant="h5" className="mt-4">
                Thermal Expansion
            </Typography>
            <Typography paragraph className="mt-2">
                Global sea level is rising as a result of global warming. Oceans have absorbed around 85 percent of the excess heat trapped
                by the atmosphere since 1880. As ocean water warms, the water expands due to a process called "thermal expansion." This thermal
                expansion has been the main driver of global sea level rise after the start of the Industrial Revolution. However, in recent years, 
                the share of thermal expansion in global sea level rise has declined as the shrinking of land ice has accelerated.
            </Typography>
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
}

export default DataPage;
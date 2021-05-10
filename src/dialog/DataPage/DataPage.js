import { Link, Typography } from '@material-ui/core';
import React from 'react';

function DataPage(props) {
    return (
        <div>
            <div>
                <iframe
                    src="https://coast.noaa.gov/slr/#/layer/slr"
                    frameborder='0' 
                    scrolling='no' 
                    allowfullscreen 
                    width='100%' 
                    height='404'
                    title="Sea Level Rise Viewer"
                />
            </div>
            <div className="mt-2">
                <Link href="https://coast.noaa.gov/slr/#/layer/slr">Go to NOAA Dashboard</Link>
            </div>
            <Typography paragraph className="mt-2">
                Sea level continues to rise at a rate of about <span className="paragraph bold">1/8</span> of an inch per year.
                With continued ocean and atmospheric warming, sea levels will most likely rise for many centuries at rates higher than
                current levels. 
            </Typography>
        </div>
    );
}

export default DataPage;
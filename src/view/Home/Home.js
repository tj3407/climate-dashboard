import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./Home.scss";
import { Button, Typography, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import DataPage from '../../dialog/DataPage';

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDataModalOpen: false
        }
    }

    handleDataPageClick = () => {
        this.setState({ isDataModalOpen: true })
    }

    renderDataDialog = () => {
        return (
            <Dialog open={this.state.isDataModalOpen} onClose={() => this.setState({ isDataModalOpen: false })} maxWidth="md">
                <DialogTitle onClose={() => this.setState({ isDataModalOpen: false })}>Sea Level Rise</DialogTitle>
                <DialogContent>
                    <DataPage />
                </DialogContent>
            </Dialog>
        )
    }

    render() {
        return (
            <div>
                <main>
                    <article>
                        <section className="section-1">
                            <div className="d-flex direction-column justify-between h-100">
                                <div>
                                    <h3 className="text-white">ENS320 Sea Level Rise</h3>
                                </div>
                                <div>
                                    <h1 className="text-white pb-4 mb-4 w-50">Exploring Sea Level Rise as a result of Climate Change</h1>
                                </div>
                            </div>
                        </section>
                        <section className="section-2">
                            <div className="d-flex mt-4 justify-between">
                                <div className="flex-1">
                                    <h3 className="mb-4">Prior to the 20th century, sea level has risen at an average rate of 0.06 inches per year. Since 1993, however, average sea level has risen at a rate of 0.11 - 0.14 inches per year - roughly a 100% increase</h3>
                                    <Button variant="outlined" size="large" onClick={this.handleDataPageClick}>Learn More</Button>
                                </div>
                                <div className="flex-1 pl-4 ml-4">
                                    <img src="./assets/images/Global_Mean_Sea_Level.png" width="580" height="250" alt="sea level chart" />
                                </div>
                            </div>
                        </section>
                        <section className="section-3">
                            <div className="d-flex mt-4">
                                <div className="flex-1">
                                    <h3>As our ocean warms, sea level rises.</h3>
                                    <p className="mb-4">When heat is absorbed by our oceans, the water expands and the volume is affected immensely. Measurements from Argo profiling floats show that warming of upper ocean surface caused sea level to rise due to thermal expansion (NASA.gov)</p>
                                    <Button variant="outlined" size="large">Learn More</Button>
                                </div>
                                <div className="flex-1 pl-4 ml-4">
                                    <img src="./assets/images/pexels-stijn-dijkstra-2499791.jpg" width="580" height="250" alt="sea level chart" />
                                </div>
                            </div>
                        </section>
                        <section className="section-4">
                            <div className="d-flex mt-4">
                                <div className="flex-1">
                                    <img src="./assets/images/pexels-scott-m-graves-6168279.jpg" width="580" height="250" alt="sea level chart" />
                                </div>
                                <div className="flex-1 pl-4 ml-4">
                                    <h3>Glacial melt contribute a third of sea level rise</h3>
                                    <p className="mb-4">Mountain glaciers contribute roughly a third of measured sea-level rise. Since 1961, glaciers have lost roughly 9,000 billion tons of ice, raising water levels by 27 millimeters. Research has highlighted that many of the world’s glaciers will disappear within the next century! </p>
                                    <Button variant="outlined" size="large">Learn More</Button>
                                </div>
                            </div>
                        </section>
                        <section className="section-5">
                            <div className="d-flex justify-center align-center text-center w-75 m-auto h-100">
                                <h3 className="text-white pl-4 pr-4">Gulf Stream is weakening as a result of global warming. Increased rainfall and melting Greenland ice sheets add fresh water to the ocean surface reducing the salinity and the density of the water. This prevents warmer water coming from the south to sink to the deeper ocean layers that flow back to the south east.</h3>
                            </div>
                        </section>
                        <section className="section-6">
                            <div className="d-flex mt-4">
                                <div className="flex-1">
                                    <img src="./assets/images/florida.png" width="580" height="250" alt="sea level chart" />
                                </div>
                                <div className="flex-1 pl-4 ml-4">
                                    <h3>Sea Level Rise due to weakened Gulf Stream</h3>
                                    <p className="mb-4">A weaker Gulf Stream can result in sea level rise along the east coast of the United States. When the Gulf Stream is strong, water is swept away from the coast more rapidly as it makes its trek up north. But when the Gulf Stream is weak, the water doesn’t get swept away as much resulting in sea level rise along the coast. </p>
                                    <Button variant="outlined" size="large">Learn More</Button>
                                </div>
                            </div>
                        </section>
                    </article>
                </main>
                <footer>
                    <section className="text-white">
                        <Typography paragraph>References:</Typography>
                        <Typography variant="caption" display="block">1. Images obtained from https://pexels.com</Typography>
                        <Typography variant="caption" display="block">2. UCSUSA. Causes of Sea Level Rise. Union of Concerned Scientists. https://www.ucsusa.org/sites/default/files/legacy/assets/documents/global_warming/Causes-of-Sea-Level-Rise.pdf</Typography>
                        <Typography variant="caption" display="block">3. NOAA. Is sea level rising? National Ocean Service Website. https://oceanservice.noaa.gov/facts/sealevel.html</Typography>
                        <Typography variant="caption" display="block">4. Fleshler, David. August 9, 2019. The Gulf Stream is slowing down. That could mean rising seas and a hotter Florida. Phys Org. https://phys.org/news/2019-08-gulf-stream-seas-hotter-florida.html</Typography>
                        <Typography variant="caption" display="block">5. Imster, Eleanor. March 3, 2021. Gulf Stream at its weakest in over 1,000 years. EarthSky. https://earthsky.org/earth/gulf-stream-atlantic-weakest-in-over-1000-years</Typography>
                        <Typography variant="caption" display="block">6. Rubin, Harvey. February 13, 2018. Sea-level rise is a regional threat. It will need a regional game plan to fight it. Miami Herald. https://www.miamiherald.com/opinion/op-ed/article199983139.html</Typography>
                    </section>
                </footer>
                {this.renderDataDialog()}
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/pages/index.module.scss"
import { Tabs,Tab } from "react-bootstrap";

export default function Home(){
    return(
        <Layout>
            <div>
                <div className={styles.videoAndInfo}>
                    <video className={styles.video} loop /*autoPlay*/ muted>
                        <source src="videos/makima.mp4#t=11.8" type="video/mp4"></source>
                    </video>
                    <div className={'container d-flex align-items-center justify-content-center h-100 '+styles.aboveVideo}  style={{gridColumn: 1,gridRow: 1}}>
                        <div className={styles.centerInfoDiv}>
                            <h1>D R U L</h1>
                            <h2>Rhythm game of your dreams</h2>
                            <button>Play now</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2>Download Drul</h2>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" bg="light" >
                        <Tab eventKey={1} title="Windows">
                            <div className="container">
                                <p>Downlo</p>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="Android">
                            <p>Currently unavailable, come back soon!</p>
                        </Tab>
                        <Tab eventKey={3} title="MacOS">
                            <p>Currently unavailable, come back soon!</p>
                        </Tab>
                        <Tab eventKey={4} title="Linux">
                            <p>Currently unavailable, come back soon!</p>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Layout>
    )
}
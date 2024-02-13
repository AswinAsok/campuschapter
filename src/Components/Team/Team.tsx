import styles from "./Team.module.css";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import data from "../../../data.json";

const Team = () => {
    return (
        <div className={styles.teamWrapper} id="team">
            <h1>Our Team</h1>
            <div className={styles.teamBodyWrapper}>
                <div className={styles.teamBgLineWrapper}>
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                </div>
                <div className={styles.teamMembersDetailsWrapper}>
                    <div className={`${styles.team} ${styles.team1}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.staffAdvisor.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.staffAdvisor.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Staff Advisor
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team2}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team3}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.webdevelopmentIGLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.webdevelopmentIGLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Web Development IG Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team4}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.uiuxIGLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team["uiuxIGLead"].name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                UI/UX IG Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team5}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team["ai/mlIGLead"].image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team["ai/mlIGLead"].name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                AI/ML IG Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team6}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team["cybersecurityIGLead"].image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team["cybersecurityIGLead"].name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Media Lead
                            </div>
                        </div>
                    </div>
                    {/* <div className={`${styles.team} ${styles.team7}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.contentLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.contentLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Content Lead
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.team} ${styles.team8}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.operationLead.image}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.operationLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Operation Lead
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Team;

import React from "react";
import Header from "../components/Header";

const Awards = () => {
    return (
        <>
            <div class="container-fluid p-0">
                <Header />
                <section class="resume-section" id="awards">
                    <div class="resume-section-content">
                        <h2 class="mb-5">Awards & Certifications</h2>
                        <ul class="fa-ul mb-0">
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>
                                Google Certification 1
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>
                                Google Certification 2
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>
                                1<sup>st</sup>
                                Place -SGGS - Emerging Tech
                                Competition 2021
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>
                                1<sup>st</sup>
                                Place - WALCHAND - HACKERJAM22

                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>
                                2<sup>nd</sup>
                                Place - SGGS - UMANG
                                Competition 2022
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>
                                1<sup>st</sup>
                                Place - RIT - Hackathon 2022
                            </li>
                            <li>
                                <span class="fa-li">
                                    <i class="fas fa-trophy text-warning"></i>
                                </span>
                                3<sup>rd</sup>
                                Place - SGGS - TRESURE HUNT 2022
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Awards;
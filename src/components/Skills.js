import React from 'react';

import { SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, SiNodeDotJs, SiPostgresql, SiPython } from 'react-icons/si';
import styled from 'styled-components';

import {
    PageSection,
    PageTitle,
    PageTitleBorder
} from '../styles/pageStyles';

const Skills = () => {

    return (
        <PageSection>
            <PageTitle>
                What I Do
            </PageTitle>
            <PageTitleBorder />

            <SkillsContainer>

                <SkillsWrapper>

                    <Skill>
                        <svg width="0" height="0">
                            <linearGradient id="blue-gradient" x1="12.629094%" y1="2.33397313%" x2="117.1836%" y2="130.121595%">
                                <stop stopColor="#9CB3FF" offset="0%" />
                                <stop stopColor="#B0FFE9" offset="100%" />
                            </linearGradient>
                        </svg>
                        <SiHtml5 style={{ fill: "url(#blue-gradient)" }} />
                        <SkillTitle>HTML</SkillTitle>
                    </Skill>

                    <Skill>
                        <svg width="0" height="0">
                            <linearGradient id="purple-gradient" x1="83.6648309%" y1="100%" x2="-20.4912617%" y2="-14.1158266%">
                                <stop stopColor="#E7D1FF" offset="0%" />
                                <stop stopColor="#8383EF" offset="100%" />
                            </linearGradient>
                        </svg>
                        <SiCss3 style={{ fill: "url(#purple-gradient)" }} />
                        <SkillTitle>CSS</SkillTitle>
                    </Skill>

                    <Skill>
                        <svg width="0" height="0">
                            <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="80.2154694%" y2="100%">
                                <stop stopColor="#FF8989" offset="0%" />
                                <stop stopColor="#FFDDC5" offset="100%" />
                            </linearGradient>
                        </svg>
                        <SiJavascript style={{ fill: "url(#orange-gradient)" }} />
                        <SkillTitle>JavaScript</SkillTitle>
                    </Skill>

                    <Skill>
                        <svg width="0" height="0">
                            <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop stopColor="#FFA8E8" offset="0%" />
                                <stop stopColor="#FFE6E6" offset="100%" />
                            </linearGradient>
                        </svg>
                        <SiReact style={{ fill: "url(#pink-gradient)" }} />
                        <SkillTitle>React</SkillTitle>
                    </Skill>

                </SkillsWrapper>

                <SkillsWrapper>

                    <Skill>
                        <svg width="0" height="0">
                            <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="80.2154694%" y2="100%">
                                <stop stopColor="#FF8989" offset="0%" />
                                <stop stopColor="#FFDDC5" offset="100%" />
                            </linearGradient>
                        </svg>
                        <SiRedux style={{ fill: "url(#orange-gradient)" }} />
                        <SkillTitle>Redux</SkillTitle>
                    </Skill>

                    <Skill>
                        <svg width="0" height="0">
                            <linearGradient id="blue-gradient" x1="12.629094%" y1="2.33397313%" x2="117.1836%" y2="130.121595%">
                                <stop stopColor="#9CB3FF" offset="0%" />
                                <stop stopColor="#B0FFE9" offset="100%" />
                            </linearGradient>
                        </svg>
                        <SiNodeDotJs style={{ fill: "url(#blue-gradient)" }} />
                        <SkillTitle>Node</SkillTitle>
                    </Skill>

                    <Skill>
                        <svg width="0" height="0">
                            <linearGradient id="purple-gradient" x1="83.6648309%" y1="100%" x2="-20.4912617%" y2="-14.1158266%">
                                <stop stopColor="#E7D1FF" offset="0%" />
                                <stop stopColor="#8383EF" offset="100%" />
                            </linearGradient>
                        </svg>
                        <SiPostgresql style={{ fill: "url(#purple-gradient)" }} />
                        <SkillTitle>PostgrSQL</SkillTitle>
                    </Skill>

                    <Skill>
                        <svg width="0" height="0">
                            <linearGradient id="green-gradient" x1="1.79567921%" y1="-11.5959074%" x2="100%" y2="100%">
                                <stop stopColor="#59DBB0" offset="0%" />
                                <stop stopColor="#FEFFB5" offset="100%" />
                            </linearGradient>
                        </svg>
                        <SiPython style={{ fill: "url(#green-gradient)" }} />
                        <SkillTitle>Python</SkillTitle>
                    </Skill>

                </SkillsWrapper>

            </SkillsContainer>

        </PageSection>
    );
};

export default Skills;

// STYLED COMPONENTS:

const SkillsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6rem;

    @media (min-width: 768px) {
        flex-direction: column;
    }
`;

const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 66px;
    margin: 2rem;
    transition: scale .3s ease,transform .3s;

    @media (min-width: 768px) {
        font-size: 77px;
    }

    :hover {
        transform: scale(1.2);
    }
`;

const SkillTitle = styled.h3`
    font-size: 1rem;
    line-height: 14px;
    letter-spacing: 1.38px;
    padding-top: 1rem;
    color: #404040;
    font-weight: 400;
`;
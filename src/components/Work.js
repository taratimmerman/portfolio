import React, { useLayoutEffect } from 'react';

import FamilyPromise from '../assets/fp-login.png';
import TicketPunch from '../assets/tp-tickets-mobile.png';
import {
    PageSection,
    PageTitle,
    PageTitleBorder
} from '../styles/pageStyles';
import {
    WorkContainer,
    ProjectWrapper,
    ProjectDetails,
    ProjectText,
    ProjectTitle,
    ProjectRole,
    ProjectButtonWrapper,
    ProjectButton,
    ProjectVisual,
    ProjectImage
} from '../styles/workStyles';

const Work = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <PageSection>

            <PageTitle>
                My Latest Work
            </PageTitle>
            <PageTitleBorder />

            <WorkContainer>

                <ProjectWrapper>
                    <ProjectDetails>
                        <ProjectText>
                            <ProjectTitle>Ticket Punch</ProjectTitle>
                            <ProjectRole>Full Stack Developer</ProjectRole>
                            <ProjectButtonWrapper>
                                <ProjectButton to='/portfolio/ticket-punch' className="ticket-punch">View Project</ProjectButton>
                            </ProjectButtonWrapper>
                        </ProjectText>
                    </ProjectDetails>

                    <ProjectVisual className="ticket-punch">
                        <ProjectImage src={TicketPunch} />
                    </ProjectVisual>
                </ProjectWrapper>

                <ProjectWrapper>
                    <ProjectDetails>
                        <ProjectText>
                            <ProjectTitle>Family Promise Service Tracker</ProjectTitle>
                            <ProjectRole>Backend Developer</ProjectRole>
                            <ProjectButtonWrapper>
                                <ProjectButton to='/portfolio/family-promise' className="family-promise">View Project</ProjectButton>
                            </ProjectButtonWrapper>
                        </ProjectText>
                    </ProjectDetails>

                    <ProjectVisual className="family-promise">
                        <ProjectImage src={FamilyPromise} />
                    </ProjectVisual>
                </ProjectWrapper>

            </WorkContainer>
        </PageSection>
    );
};

export default Work;
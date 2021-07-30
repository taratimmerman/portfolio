import React from 'react';
import {
    WorkSection,
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
} from '../styles/work.styles';
import TicketPunch from '../assets/tp-tickets-mobile.png';
import FamilyPromise from '../assets/fp-login.png';

const Work = () => {
    return (
        <WorkSection>
            <WorkContainer>

                <ProjectWrapper>
                    <ProjectDetails>
                        <ProjectText>
                            <ProjectTitle>Ticket Punch</ProjectTitle>
                            <ProjectRole>Full Stack Developer</ProjectRole>
                            <ProjectButtonWrapper>
                                <ProjectButton to='/ticket-punch' className="ticket-punch">View Project</ProjectButton>
                            </ProjectButtonWrapper>
                        </ProjectText>
                    </ProjectDetails>

                    <ProjectVisual className="ticket-punch">
                        <ProjectImage src={TicketPunch}/>
                    </ProjectVisual>
                </ProjectWrapper>

                <ProjectWrapper>
                    <ProjectDetails>
                        <ProjectText>
                            <ProjectTitle>Family Promise Service Tracker</ProjectTitle>
                            <ProjectRole>Backend Developer</ProjectRole>
                            <ProjectButtonWrapper>
                                <ProjectButton to='/family-promise' className="family-promise">View Project</ProjectButton>
                            </ProjectButtonWrapper>
                        </ProjectText>
                    </ProjectDetails>

                    <ProjectVisual className="family-promise">
                        <ProjectImage src={FamilyPromise}/>
                    </ProjectVisual>
                </ProjectWrapper>

            </WorkContainer>
        </WorkSection>
    );
};

export default Work;
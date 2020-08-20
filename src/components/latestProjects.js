import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`
const latestProjects = () => {
    return (
        <StyledSection id="">
            <h1>This is Latest Projects Section</h1>
        </StyledSection>
    )
}

export default latestProjects
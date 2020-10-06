import React from "react";
import "./App.css";
import styled from "styled-components";

const Button = styled.button`
  color: red;
`;

function App() {
  return (
    <StyledDiv className="App">
      <StyledDiv data-testid="test1">
        First part
        <Button data-testid="button">Red</Button>
      </StyledDiv>
      <StyledDiv2 data-testid="test2">Work god damn it</StyledDiv2>
      <div className="testred" data-testid="testred">
        this one is red
      </div>
      <div>this one is blue</div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  color: red;
  & + div {
    color: blue;
  }
`;

const StyledDiv2 = styled.div``;

export default App;

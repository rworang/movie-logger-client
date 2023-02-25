import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Poster = styled.img`
  width: 162px;
  border-radius: 7px;
  opacity: 0.7;
`;

const Card = () => {
  return (
    <Container>
      <Poster src="http://localhost:5000/buffaloed.jpg" />
    </Container>
  );
};

export default Card;

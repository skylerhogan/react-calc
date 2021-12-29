import React from "react";
import styled from "styled-components";
import Button, { ButtonType } from "./Button";

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: 120px repeat(5, 80px);
  grid-gap: 5px;
`;

const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  background: #fff;
  border-radius: 8px;
  font-size: 48px;
  padding: 0 24px;
  grid-column-end: span 4;
`;

const Calculator: React.FC<{}> = () => {
  return (
    <Container>
      <Grid>
        <Display>42</Display>
        <Button label="AC" position={[1, 2]} width={2} />
        <Button label="Oops" position={[3, 2]} width={2} />
        <Button label="-" position={[4, 3]} />
        <Button label="+" position={[4, 4]} />
        <Button label="=" position={[4, 5]} height={2} />
        <Button type={ButtonType.Number} label="9" position={[3, 3]} />
        <Button type={ButtonType.Number} label="8" position={[2, 3]} />
        <Button type={ButtonType.Number} label="7" position={[1, 3]} />
        <Button type={ButtonType.Number} label="6" position={[3, 4]} />
        <Button type={ButtonType.Number} label="5" position={[2, 4]} />
        <Button type={ButtonType.Number} label="4" position={[1, 4]} />
        <Button type={ButtonType.Number} label="3" position={[3, 5]} />
        <Button type={ButtonType.Number} label="2" position={[2, 5]} />
        <Button type={ButtonType.Number} label="1" position={[1, 5]} />
        <Button
          type={ButtonType.Number}
          label="0"
          position={[1, 6]}
          width={3}
        />
      </Grid>
    </Container>
  );
};

export default Calculator;

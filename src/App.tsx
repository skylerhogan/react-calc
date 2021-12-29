import "./App.css";
import styled from "styled-components";
import Calculator from "./components/Calculator";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #323232;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;

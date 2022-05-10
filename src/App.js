import styled, { css, ThemeProvider } from "styled-components";

// using themes -> import ThemeProvider from styled components
const theme = {
  primary: "blue",
  secondary: "red",
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadingComponent = styled.h1`
  font-family: sans-serif;
`;

const Button = styled.button`
  ${"" /* Passing "isValid" props when calling button component */}
  ${
    "" /* color: ${(props) => (props.isValid ? "white" : "black")};
  background: ${(props) => (props.isValid ? "blue" : "yellow")}; */
  }

  ${
    "" /* You can also do the above in a simpler way instead of checking isValid for each style property. 
    Import css from styled-components */
  }

  ${(props) =>
    props.isValid
      ? css`
          color: white;
          background: blue;
        `
      : css`
          color: black;
          background: yellow;
        `}

  &:hover {
    background: ${(props) => props.theme.secondary};
  }
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  margin: 10px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HeadingComponent>Styled Components</HeadingComponent>
        <Input placeholder="usename" />
        <Input placeholder="password" />
        <Button isValid={true}>Login</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;

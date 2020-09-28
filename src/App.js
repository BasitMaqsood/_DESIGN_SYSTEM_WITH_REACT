import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { PrimaryButton } from './components/Buttons';
import { darkTheme, defaultTheme } from './utils';
import { SignUpModal } from './components';


import './App.css';

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
      </button>
      <PrimaryButton
        style={{ margin: "0 16px" }}
      >
        Show modal
      </PrimaryButton>
      <div style={{
        background: useDarkTheme
          ? defaultTheme.primaryColor
          : darkTheme.primaryColor,
        width: "100vw",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}>
        <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
      </div>
    </ThemeProvider>
  );
}

export default App;

import React, { useReducer, createContext, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { useRouter } from "next/router";
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/layout.css'

export const StateContext = createContext(null);

export const ACTIONS = {
  TOGGLE_STYLE_COLOR: "toggle-style-color",
  ADD_NEW_IMAGE : 'add-new-image'
};

const initialState = {
  section: "introduction",
  renderMode: "preview",
  imageURL:'',
  editing: false,
  options: {
    filters : []
  },
  settings:[]
}

function reducer(state, action) {
  switch (action.type) {
    // Show Sections
    case ACTIONS.ADD_NEW_IMAGE:
      console.log(action.payload);
      return {
        ...state,
        editing: true,
        imageURL: action.payload.value
      };
    // Select Render Mode
    case ACTIONS.SELECT_RENDER_MODE:
      return {
        ...state,
        renderMode: action.payload,
      };
    default:
      throw new Error();
  }
}


function MyApp({ Component, pageProps }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <StateContext.Provider value={{ state, dispatch }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp

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
  ADD_NEW_IMAGE : 'add-new-image',
  EDIT_CONTRAST : 'edit-contrast',
  EDIT_FILTER : 'edit-filter',
  RESET_FILTERS : 'reset-filter',
};

const initialState = {
  imageURL:'',
  editing: false,
  filters:[],
  settings:[],
}

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function reducer(state, action) {
  switch (action.type) {
    // Show Sections
    case ACTIONS.ADD_NEW_IMAGE:
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
    case ACTIONS.EDIT_FILTER:
      let name = action.payload.name
      let newObj = action.payload.value
      return{
        ...state,
        filters:[...state.filters.filter((obj) => obj.name !== newObj.name), {...newObj}]
      }
    default:
      throw new Error();
  }
}


function App({ Component, pageProps }) {

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

export default App

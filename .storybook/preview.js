import "../src/styles/index.scss";
import React from 'react';
import anysort from 'anysort'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}



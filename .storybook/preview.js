// import "../src/styles/index.scss";
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const styles = {
//   textAlign: 'center'
// }
//
// export const decorators = [
//   (Story) => (
//     <div style={styles}>
//       <Story />
//     </div>
//   )
// ]

// import React, { createContext, useState } from 'react';

// // interface initialStateInterface {
// //     activeMegaMenu: number[],
// //     mobileMenuActive: boolean
// // }

// interface ContextType {
//     activeMegaMenu: number[];
//     mobileMenuActive: boolean;
// };

// const initialState = {
//     activeMegaMenu: [1, 2],
//     mobileMenuActive: false
// };

// export const Context = createContext({
//     activeMegaMenu: [1, 2],
//     mobileMenuActive: false
// });

// const Store = ({ children }) => {
//     const [state, setState] = useState(initialState);
//     return (
//         <Context.Provider value={[state, setState]}>{children}</Context.Provider>
//         // { children }
//     )
// }

// export default Store;
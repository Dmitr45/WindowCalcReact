const Context = React.createContext(null);



export const ContextProvider = ({ children, ...props }) => {
    const context = useCreateContext(props);
    return <Context.Provider value={context}>{children}</Context.Provider>;
  };



  export function useAppContext() {
    const context = React.useContext(Context);
    if (!context) throw new Error('Use app context within provider!');
    return context;
  }
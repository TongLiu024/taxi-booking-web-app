import { createContext } from "react";
//Context provides a way to pass data through the component tree without Context provides a way to pass data through the component tree without having to pass props down manually at every level. Here, it's being used to provide the userLocation state and its setter function to any nested components.
export const UserLocationContext = createContext<any>(null);


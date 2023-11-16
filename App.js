/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from "@react-navigation/native";
import { ChatApp, mirrorflyInitialize } from "mirrorfly-uikit-react-native";
import React from "react";
import Wrapper from "./src/components/Wrapper";
const App = () => {
  const API_URL = "***********************";
  const LICENSE_KEY = "***********************";

  React.useEffect(() => {
    (async () => {
      await mirrorflyInitialize({
        apiBaseUrl: API_URL,
        licenseKey: LICENSE_KEY,
        isSandbox: true,
        callBack: (res) => {
          console.log(res);
        },
      });
    })();
  }, []);

  return (
    <NavigationContainer>
      <Wrapper>
        <ChatApp />
      </Wrapper>
    </NavigationContainer>
  );
};

export default App;

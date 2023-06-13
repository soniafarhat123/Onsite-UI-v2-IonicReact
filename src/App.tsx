import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OperationsCard from "./pages/OperationsCard";
import OperationsCardList from "./pages/OperationsCardList";
import OperationsCardListTest from "./pages/OperationsCardListTest";
import Operations from "./pages/Operations";
import FormTabs from "./pages/FormTabs"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import useSwitchDarkMode from "./hooks/useSwitchDarkMode";
import FormList from "./pages/FormList";

setupIonicReact();

const App: React.FC = () => {
  const [darkMode, toggleDarkMode] = useSwitchDarkMode();
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/operationsCard">
            <OperationsCard
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </Route>
          <Route exact path="/operationsCardList">
            <OperationsCardList
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </Route>
          <Route exact path="/operationsCardListTest">
            <OperationsCardListTest
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </Route>
          <Route exact path="/operations">
            <Operations darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </Route>
          <Route exact path="/formTabs">
            <FormTabs />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

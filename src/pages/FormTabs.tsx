import React from "react";
import { createOutline, ellipse, square, triangle } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import "./FormTabs.css";

import FormList from "./FormList";
import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

const FormTabs: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/formTabs">
            <FormList />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="ion-tab-bar">
          <IonTabButton tab="forms" href="/formTabs" layout="icon-end">
            <IonIcon aria-hidden="true" icon={createOutline} size="large" />
          </IonTabButton>
          {/* <IonTabButton tab="tab2" href="#">
            <IonIcon aria-hidden="true" icon={square} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="#">
            <IonIcon aria-hidden="true" icon={triangle} />
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default FormTabs;

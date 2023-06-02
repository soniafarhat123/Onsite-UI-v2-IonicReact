import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import { appsOutline, listOutline, power, sunny, moon } from "ionicons/icons";
import "./OperationsCard.css";

const OperationsCard: React.FC<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon
                slot="icon-only"
                icon={appsOutline}
                color="primary"
                className="toolbar-icon"
              ></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon
                slot="icon-only"
                icon={listOutline}
                color="primary"
                className="toolbar-icon"
              ></IonIcon>
            </IonButton>
            <IonButton onClick={toggleDarkMode}>
              <IonIcon slot="start" icon={darkMode ? sunny : moon} />
            </IonButton>
  
              {/* <IonIcon slot="start" icon={darkMode ? sunny : moon}  onClick={toggleDarkMode}/> */}

          </IonButtons>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon
                slot="icon-only"
                icon={power}
                color="danger"
                className="toolbar-icon"
              ></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="toolbar-title">Opérations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-cards">
          <IonCard className="ion-card">
            <img
              alt="Silhouette of mountains"
              src="https://ionicframework.com/docs/img/demos/card-media.png"
            />
            <IonCardHeader>
              <IonCardTitle>Formulaires</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="ion-card">
            <img
              alt="Silhouette of mountains"
              src="https://ionicframework.com/docs/img/demos/card-media.png"
            />
            <IonCardHeader>
              <IonCardTitle>Opérations de test</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard className="ion-card">
            <img
              alt="Silhouette of mountains"
              src="https://ionicframework.com/docs/img/demos/card-media.png"
            />
            <IonCardHeader>
              <IonCardTitle>Outils de gestions</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default OperationsCard;

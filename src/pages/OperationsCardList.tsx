import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonAvatar,
} from "@ionic/react";
import {
  appsOutline,
  listOutline,
  power,
  sunny,
  moon,
  logOut,
} from "ionicons/icons";
import "./OperationsCard.css";
import IonCardComponent from "../components/IonCardComponent";

const OperationsCardList: React.FC<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
  const listOps = [
    { id: 1, titre: "Formulaires", desc: "..............." },
    { id: 2, titre: "Opération de test", desc: "fffffffffffffff" },
    { id: 3, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 4, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de gestion", desc: "fffffffffffffff" },
  ];
  const [viewMode, setViewMode] = useState("cards");
  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "cards" ? "list" : "cards"));
  };

  //listMock.map((e)=>console.log(e.titre))
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton onClick={toggleViewMode}>
              <IonIcon
                slot="icon-only"
                icon={viewMode === "cards" ? listOutline : appsOutline}
                //color="primary"
                className="toolbar-icon"
              ></IonIcon>
            </IonButton>

            <IonButton onClick={toggleDarkMode}>
              <IonIcon slot="start" icon={darkMode ? sunny : moon} />
            </IonButton>

            {/* <IonIcon slot="start" icon={darkMode ? sunny : moon}  onClick={toggleDarkMode}/> */}
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton href="/Login">
              <IonIcon slot="icon-only" icon={power} color="danger"></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="toolbar-title">Opérations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {viewMode === "cards" ? (
          <div className="ion-cards">
            {listOps.map((e) => (
              <IonCardComponent
                classname="ion-card"
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/card-media.png"
                title={e.titre}
                key={e.id}
              />
            ))}
          </div>
        ) : (
          <IonList inset={true}>
            {listOps.map((e) => (
              <IonItem button lines="full" key={e.id}>
                <IonThumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                  />
                </IonThumbnail>
                {/* <IonAvatar slot="start">
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar> */}
                <IonLabel>{e.titre}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default OperationsCardList;

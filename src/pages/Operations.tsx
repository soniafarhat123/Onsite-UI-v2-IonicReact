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
} from "@ionic/react";
import {
  appsOutline,
  listOutline,
  power,
  sunny,
  moon,
  chevronUp,
} from "ionicons/icons";
import "./OperationsCardTest.css";
import IonCardComponent from "../components/IonCardComponent";
import SearchBar from "../components/SearchBar";

const Operations: React.FC<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
  const listOps = [
    { id: 1, titre: "Formulaires", desc: "...............", href: "/formTabs" },
    { id: 2, titre: "Opération de test", desc: "fffffffffffffff" },
    { id: 3, titre: "Outils de gestion", desc: "fffffffffffffff" },
    { id: 4, titre: "Outils de Formulaire", desc: "fffffffffffffff" },
    { id: 5, titre: "Outils de test", desc: "fffffffffffffff" },
  ];
  const [viewMode, setViewMode] = useState("cards");
  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "cards" ? "list" : "cards"));
  };
  //listMock.map((e)=>console.log(e.titre))

  /// Search ///
  const [results, setResults] = useState<string[]>(listOps.map((e) => e.titre));

  const handleInput = (ev: CustomEvent) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLocaleLowerCase();

    setResults(
      listOps
        .filter((item) => item.titre.toLowerCase().indexOf(query) > -1)
        .map((item) => item.titre)
    );
  };

  const listOfFilters = [
    { id: 1, titre: "Date" },
    { id: 2, titre: "Nom" },
    { id: 3, titre: "Description" },
  ];

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
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton href="/Login">
              <IonIcon slot="icon-only" icon={power} color="danger"></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="toolbar-title">Opérations</IonTitle>
        </IonToolbar>
        <IonToolbar>
          {/* Search Bar */}
          <SearchBar
            handleInput={handleInput}
            listOfFilters={listOfFilters}
            isFilterPage={false}
          />
          {/* End Search Bar */}
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        {/* Cards + List of Operations */}
        {viewMode === "cards" ? (
          <div className="ion-cards">
            {results.map((e) => (
              <IonCardComponent
                classname="ion-card"
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/card-media.png"
                title={e}
                key={e}
              />
            ))}
          </div>
        ) : (
          <IonList inset={true}>
            {results.map((e) => (
              <IonItem button lines="full" key={e} detail={true}>
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
                <IonLabel>{e}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
        {/* End Cards + List of Operations */}
        <IonButton href="/formTabs">Click Me ! </IonButton>
        <IonButton shape="round">
          <IonIcon icon={chevronUp}></IonIcon>
          <IonLabel>|</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Operations;

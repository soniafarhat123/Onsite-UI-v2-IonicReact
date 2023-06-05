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
  IonFab,
  IonFabButton,
  IonPopover,
  IonFabList,
  IonSearchbar,
} from "@ionic/react";
import {
  appsOutline,
  listOutline,
  power,
  sunny,
  moon,
  logOut,
  chevronUp,
  trashBin,
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
    { id: 4, titre: "Outils de Formulaire", desc: "fffffffffffffff" }, 
    { id: 5, titre: "Outils de test", desc: "fffffffffffffff" }, 
    
  ];
  const [viewMode, setViewMode] = useState("cards");
  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "cards" ? "list" : "cards"));
  };
  //listMock.map((e)=>console.log(e.titre))
  /// Modal ///
  const [showPopover, setShowPopover] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const listModal = [
    { id: 1, titre: "Modal 1" },
    { id: 2, titre: "Modal 2" },
    { id: 3, titre: "Modal 3" },
    { id: 4, titre: "Modal 4" },
    { id: 5, titre: "Modal 5" },
  ];

  const handleClickFab = () => {
    setShowPopover(true);
  };
  const handleItemClick = (item: any) => {
    setSelectedItem(item.titre);
    setShowPopover(false);
  };
  /// Search ///
  const [results, setResults] = useState<string[]>(listOps.map((e) => e.titre));

  const handleInput = (ev : CustomEvent) =>{
    let query = '';
    const target = ev.target as HTMLIonSearchbarElement;
    if(target) query = target.value!.toLocaleLowerCase();

    setResults(listOps.filter((item) => item.titre.toLowerCase().indexOf(query) > -1).map((item) => item.titre));
  }
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
        {/* / Search Input/ */}
        <IonSearchbar debounce={1000} clearIcon={trashBin} onIonInput={handleInput}></IonSearchbar>
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* / Select Modal / */}
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonButton>{selectedItem ? selectedItem : "Selected Item"}</IonButton>
          <IonButton id="select-icon" onClick={handleClickFab}>
            <IonIcon icon={chevronUp}></IonIcon>
          </IonButton>
          <IonFabList side="top">
            
            <IonPopover
              isOpen={showPopover}
              onDidDismiss={() => setShowPopover(false)}
              trigger="select-icon"
              side="top"
            >
              <div className="ion-popover">
              <IonList
                className={
                  listModal.length > 11 ? "scrollable-list" : "ion-list-modal"
                }
              >
                {listModal.map((e) => (
                  <IonItem button key={e.id} onClick={() => handleItemClick(e)}>
                    {e.titre}
                  </IonItem>
                ))}
              </IonList>
              </div>
            </IonPopover>

          </IonFabList>
        </IonFab>
        {/* //////////////////////////////////////////////////////////////////////////////// */}
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
              <IonItem button lines="full" key={e}>
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
      </IonContent>
    </IonPage>
  );
};

export default OperationsCardList;

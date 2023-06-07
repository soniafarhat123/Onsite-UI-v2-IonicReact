import React, { useRef, useState } from "react";
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
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
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
  search,
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
  const [selectedItem, setSelectedItem] = useState(null);

  const listModal = [
    { id: 1, titre: "Modal 1" },
    { id: 2, titre: "Modal 2" },
    { id: 3, titre: "Modal 3" },
    { id: 4, titre: "Modal 4" },
    { id: 5, titre: "Modal 5" },
    { id: 6, titre: "Modal 6" },
    { id: 7, titre: "Modal 7" },
    { id: 8, titre: "Modal 8" },
    { id: 9, titre: "Modal 9" },
    { id: 10, titre: "Modal 10" },
    { id: 11, titre: "Modal 11" },
    { id: 12, titre: "Modal 12" },
    { id: 13, titre: "Modal 13" },
    { id: 14, titre: "Modal 14" },

  ];
  const handleItemClick = (item: any) => {
    setSelectedItem(item.titre);
  };
  /// Search ///
  const [results, setResults] = useState<string[]>(listOps.map((e) => e.titre));
  const [showSearchBar, setShowSearchBar] = useState(false);

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

  const handleClickSearch = () => {
    setShowSearchBar(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <div className={"search-bar"}>
              {!showSearchBar ? (
                <IonButton onClick={handleClickSearch} className="search-icon">
                  <IonIcon icon={search}></IonIcon>
                </IonButton>
              ) : (
                <IonSearchbar
                  debounce={1000}
                  clearIcon={trashBin}
                  onIonInput={handleInput}
                ></IonSearchbar>
              )}
            </div>
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
        {/* <IonSearchbar
          debounce={1000}
          clearIcon={trashBin}
          onIonInput={handleInput}
        ></IonSearchbar> */}
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* / Select Modal / */}
        <IonGrid>
          <div className="popover">
            <IonRow>
              <IonCol className="ion-col-item">
                <IonButton>
                  {selectedItem ? selectedItem : "Selected Item"}
                </IonButton>
              </IonCol>
              <IonCol className="ion-col-item">
                <div className="popover-container">
                  <div className="popover-content">
                    <IonList
                      className={
                        listModal.length > 11
                          ? "scrollable-list"
                          : "ion-list-modal"
                      }
                    >
                      {listModal.map((e) => (
                        <IonItem
                          button
                          lines="full"
                          key={e.id}
                          onClick={() => handleItemClick(e)}
                        >
                          {e.titre}
                        </IonItem>
                      ))}
                    </IonList>
                  </div>
                  <div className="button-container">
                    <IonButton>
                      <IonIcon icon={chevronUp}></IonIcon>
                    </IonButton>
                  </div>
                </div>
              </IonCol>
            </IonRow>
          </div>
        </IonGrid>
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

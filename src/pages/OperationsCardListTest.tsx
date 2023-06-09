import React, { useEffect, useRef, useState } from "react";
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
  close,
  filter,
} from "ionicons/icons";
import arrowUpDown from "../icons/arrow-up-down.svg";
import "./OperationsCard.css";
import IonCardComponent from "../components/IonCardComponent";

const OperationsCardListTest: React.FC<{
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
  const [selectedItem, setSelectedItem] = useState("");
  const [showList, setShowList] = useState(false);

  const listModal = [
    {
      id: 1,
      titre: "Modal 1thnhtbhny ,nsqdbnqsbdbndqsnbqsd",
    },
    { id: 2, titre: "Modal 2" },
    { id: 3, titre: "Modal 3" },
    { id: 4, titre: "Modal 4" },
    { id: 5, titre: "Modal 5" },
    { id: 6, titre: "Modal 6" },
    { id: 7, titre: "Modal 7" },
    { id: 8, titre: "Modal 8" },
    { id: 9, titre: "Modal 9" },
  ];
  const handleItemClick = (item: any) => {
    setSelectedItem(item.titre);
    setShowList(false);
  };
  const handleClickList = () => {
    setShowList(!showList);
  };
  const handleClickClose = () => {
    setShowList(false);
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
      <IonContent className="container">
        <div className="search-filter-buttons">
          <div className={"search-bar"}>
            {!showSearchBar ? (
              <IonButton onClick={handleClickSearch} className="button-icon">
                <IonIcon icon={search}  color="dark"></IonIcon>
              </IonButton>
            ) : (
              <IonSearchbar
                debounce={1000}
                clearIcon={trashBin}
                onIonInput={handleInput}
              ></IonSearchbar>
            )}
          </div>

          <IonButton className="button-icon" >
            <IonIcon color="dark" icon={filter}  ></IonIcon>
          </IonButton>

        </div>

        {/* / Search Input/ */}
        {/* <IonSearchbar
          debounce={1000}
          clearIcon={trashBin}
          onIonInput={handleInput}
        ></IonSearchbar> */}
      
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
        {/* //////////////////////////////////////////////////////////////////////// */}
        {/* / Select Modal / */}
        <div className="select-modal">
        <IonGrid>
          <div className="popover">
            <IonRow>
              <IonCol className="ion-col-item">
                <IonButton>
                  {selectedItem
                    ? selectedItem && selectedItem.length > 11
                      ? `${selectedItem.slice(0, 26)}...`
                      : selectedItem
                    : "Selected Item"}
                </IonButton>
              </IonCol>

              <IonCol className="ion-col-item">
                <div className="popover-container">
                  <div className="popover-content">
                    {showList ? (
                      <IonList
                        className={
                          listModal.length > 11
                            ? "scrollable-list"
                            : "ion-list-modal"
                        }
                      >
                        <IonItem lines="full">
                          <IonButton
                            className="close-button"
                            onClick={handleClickClose}
                          >
                            <IonIcon
                              icon={close}
                              color="primary"
                              size="large"
                            ></IonIcon>
                          </IonButton>
                        </IonItem>
                        {listModal.map((e) => (
                          <IonItem
                            button
                            lines="full"
                            key={e.id}
                            onClick={() => handleItemClick(e)}
                          >
                            {e && e.titre && e.titre.length > 34
                              ? `${e.titre.slice(0, 34)} ...`
                              : e.titre}
                          </IonItem>
                        ))}
                      </IonList>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="button-container">
                    <IonButton onClick={handleClickList}>
                      <IonIcon icon={chevronUp}></IonIcon>
                    </IonButton>
                  </div>
                </div>
              </IonCol>
            </IonRow>
          </div>
        </IonGrid>
        </div>
        {/* //////////////////////////////////////////////////////////////////////////////// */}
      </IonContent>
    </IonPage>
  );
};

export default OperationsCardListTest;

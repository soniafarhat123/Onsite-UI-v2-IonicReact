import React, { useState } from "react";
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronUp, close, moon, power, sunny } from "ionicons/icons";
import "./FormList.css";
import SearchBar from "../components/SearchBar";
import FileAddIcon from "../icons/add-file.svg";

const FormList: React.FC<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
  /* Search Bar */
  const listOfFilters = [
    { id: 1, titre: "Date" },
    { id: 2, titre: "Nom" },
    { id: 3, titre: "Description" },
  ];
  /* List of modals */
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
  // hide search bar
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Paramètres</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="menu-content">
          <IonList lines="full">
            <IonListHeader>
              <IonLabel>Listes</IonLabel>
              <IonButton>See All</IonButton>
            </IonListHeader>
            <IonItem button>
              <IonLabel>Param 1</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 2</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 3</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 4</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 5</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={toggleDarkMode}>
                <IonIcon slot="start" icon={darkMode ? sunny : moon} />
              </IonButton>

              <IonButton href="/Login">
                <IonIcon slot="icon-only" icon={power} color="danger"></IonIcon>
              </IonButton>
            </IonButtons>

            <IonButtons slot="start" className="left-buttons">
              <IonMenuToggle>
                <IonAvatar className="avatar">
                  <IonLabel className="avatar-name">SF</IonLabel>
                </IonAvatar>
              </IonMenuToggle>
            </IonButtons>
            <IonTitle>Formulaires</IonTitle>
          </IonToolbar>
          <IonToolbar>
            {/* / Search Bar / */}
            <SearchBar listOfFilters={listOfFilters} />
          </IonToolbar>
        </IonHeader>
        <IonContent className="container" scrollY={true}>
          {/* / List of Forms / */}
          <IonList lines="full">
            <IonItem button detail={true}>
              Item 1
            </IonItem>
            <IonItem button detail={true}>
              Item 2
            </IonItem>
            <IonItem button detail={true}>
              Item 3
            </IonItem>
            <IonItem button detail={true}>
              Item 4
            </IonItem>
            <IonItem button detail={true}>
              Item 5
            </IonItem>
            <IonItem button detail={true}>
              Item 6
            </IonItem>
            <IonItem button detail={true}>
              Item 7
            </IonItem>
            <IonItem button detail={true}>
              Item 8
            </IonItem>
            <IonItem button detail={true}>
              Item 9
            </IonItem>
            <IonItem button detail={true}>
              Item 10
            </IonItem>
            <IonItem button detail={true}>
              Item 11
            </IonItem>
            <IonItem button detail={true}>
              Item 11
            </IonItem>
            <IonItem button detail={true}>
              Item 12
            </IonItem>
            <IonItem button detail={true}>
              Item 13
            </IonItem>
            <IonItem button detail={true}>
              Item 14
            </IonItem>
            <IonItem button detail={true}>
              Item 15
            </IonItem>
            <IonItem button detail={true}>
              Item 16
            </IonItem>
            <IonItem button detail={true}>
              Item 17
            </IonItem>
            <IonItem button detail={true}>
              Item 18
            </IonItem>
            <IonItem button detail={true}>
              Item 19
            </IonItem>
            <IonItem button detail={true}>
              Item 20
            </IonItem>
          </IonList>
          {/* / Select Modal / */}
          <div className="select-modal">
            <IonGrid>
              <div className="popover">
                <IonRow>
                  {/* <IonCol className="ion-col-item">
                  <IonButton>
                    {selectedItem
                      ? selectedItem && selectedItem.length > 11
                        ? `${selectedItem.slice(0, 26)}...`
                        : selectedItem
                      : "Selected Item"}
                    <IonIcon
                      icon={FileAddIcon}
                      color="primary"
                      className="file-add-icon"
                    />
                  </IonButton>
                </IonCol> */}
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
                        {/* <IonButton onClick={handleClickList}>
                        <IonIcon src={chevronUp}></IonIcon>
                      </IonButton> */}
                        <IonButton className="chevron-button">
                          <IonButton
                            style={{ marginLeft: "0.5em" }}
                            className={"button-without-shadow "}
                            onClick={() => console.log("xcvxvcxcv")}
                          >
                            <IonIcon
                              icon={FileAddIcon}
                              className="icon-file-add"
                            ></IonIcon>
                            {!true && <span> Create new form</span>}
                          </IonButton>
                          <div className="separator"></div>
                          <IonButton
                            className={"button-without-shadow "}
                            onClick={handleClickList}
                          >
                            <IonIcon icon={chevronUp} />
                          </IonButton>
                        </IonButton>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </div>
            </IonGrid>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default FormList;

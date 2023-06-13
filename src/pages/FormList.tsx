import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonRow,
} from "@ionic/react";
import { chevronUp, close } from "ionicons/icons";
import "./FormList.css";
import SearchBar from "../components/SearchBar";
import FileAddIcon from "../icons/add-file.svg";

const FormList: React.FC = () => {
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
  return (
    <IonPage>
      <IonContent className="container">
        {/* / Search Bar / */}
        <SearchBar listOfFilters={listOfFilters} />
        {/* / Select Modal / */}
        <div className="select-modal">
          <IonGrid>
            <div className="popover">
              <IonRow>
                <IonCol className="ion-col-item">
                  <IonButton>
                    {/* {selectedItem
                      ? selectedItem && selectedItem.length > 11
                        ? `${selectedItem.slice(0, 26)}...`
                        : selectedItem
                      : "Selected Item"} */}
                    <IonIcon icon={FileAddIcon} color="primary" className="file-add-icon"/>
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
                        <IonIcon src={chevronUp}></IonIcon>
                      </IonButton>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
            </div>
          </IonGrid>
        </div>
        {/* / List of Forms / */}
      </IonContent>
    </IonPage>
  );
};

export default FormList;

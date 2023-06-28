import React, { useRef, useState } from "react";
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonModal,
  IonNote,
  IonPage,
  IonPopover,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import {
  archive,
  caretForwardOutline,
  caretUpSharp,
  chevronUp,
  close,
  ellipsisVertical,
  moon,
  personCircle,
  power,
  qrCodeOutline,
  removeCircleOutline,
  settingsSharp,
  sunny,
  trash,
} from "ionicons/icons";
import "./FormList.css";
import SearchBar from "../components/SearchBar";
import FileAddIcon from "../icons/add-file.svg";

interface ScrollDetail {
  scrollTop: number;
}

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
  // const [selectedItem, setSelectedItem] = useState("");
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
  // const handleItemClick = (item: any) => {
  //   setSelectedItem(item.titre);
  //   setShowList(false);
  // };
  const handleClickList = () => {
    setShowList(!showList);
  };
  const handleClickClose = () => {
    setShowList(false);
  };

  // hide search bar && change Modal button
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = (event: CustomEvent<ScrollDetail>) => {
    const currentScrollTop = event.detail.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      setScrollDirection("down");
    } else if (currentScrollTop < lastScrollTop) {
      setScrollDirection("up");
    }
    console.log(currentScrollTop);

    setLastScrollTop(currentScrollTop);
  };
  // List of forms
  const listOfForms = [
    { id: 0, titre: "Item 1", date: "01/06/2023" },
    { id: 1, titre: "Item 2", date: "02/06/2023" },
    { id: 2, titre: "Item 3", date: "03/06/2023" },
    { id: 3, titre: "Item 4", date: "04/06/2023" },
    { id: 4, titre: "Item 5", date: "06/06/2023" },
    { id: 5, titre: "Item 6", date: "07/06/2023" },
    { id: 6, titre: "Item 7", date: "08/06/2023" },
    { id: 7, titre: "Item 8", date: "09/06/2023" },
    { id: 8, titre: "Item 9", date: "10/06/2023" },
    { id: 9, titre: "Item 10", date: "11/06/2023" },
    { id: 10, titre: "Item 11", date: "12/06/2023" },
    { id: 11, titre: "Item 12", date: "13/06/2023" },
    { id: 12, titre: "Item 13", date: "14/06/2023" },
    { id: 13, titre: "Item 14", date: "15/06/2023" },
    { id: 14, titre: "Item 15", date: "16/06/2023" },
    { id: 15, titre: "Item 16", date: "17/06/2023" },
    { id: 16, titre: "Item 17", date: "18/06/2023" },
    { id: 17, titre: "Item 18", date: "19/06/2023" },
    { id: 18, titre: "Item 19", date: "20/06/2023" },
    { id: 19, titre: "Item 20", date: "21/06/2023" },
    { id: 20, titre: "Item 21", date: "22/06/2023" },
    { id: 21, titre: "Item 22", date: "23/06/2023" },
    { id: 22, titre: "Item 23", date: "24/06/2023" },
  ];
  const [selectedPopoverButton, setSelectedPopoverButton] = useState<
    number | null
  >(null);

  // QR code
  const modal = useRef<HTMLIonModalElement>(null);

  // const dismiss = () => {
  //   modal.current?.dismiss();
  // };

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
            <IonItem>
              <IonIcon slot="start" icon={darkMode ? sunny : moon} />
              <IonLabel>
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </IonLabel>
              <IonToggle
                slot="end"
                name="darkMode"
                checked={darkMode}
                onIonChange={toggleDarkMode}
              />
            </IonItem>
            <IonItem button detail={true} detailIcon={caretForwardOutline}>
              <IonIcon slot="start" icon={settingsSharp} />
              <IonLabel>Réglages</IonLabel>
            </IonItem>
            <IonItem button detail={true} detailIcon={caretForwardOutline}>
              <IonLabel>Param 3</IonLabel>
            </IonItem>
            <IonItem button detail={true} detailIcon={caretForwardOutline}>
              <IonLabel>Param 4</IonLabel>
            </IonItem>
            <IonItem button detail={true} detailIcon={caretForwardOutline}>
              <IonLabel>Param 5</IonLabel>
            </IonItem>
          </IonList>
          <IonItem
            lines="none"
            button
            className="qr-code-icon"
            id="open-QRCode-dialog"
          >
            <IonLabel>QR Code</IonLabel>
            <IonIcon slot="end" icon={qrCodeOutline} color="dark" size="large" />
          </IonItem>
          <IonModal id="qrcode-modal" ref={modal} trigger="open-QRCode-dialog">
            <div className="wrapper">
              <h1>QR Code</h1>

              <IonImg src="/assets/images/QR_Code.png" style={{ width: "350px" , height: "350px" }} ></IonImg>
            </div>
          </IonModal>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader
          className={`form-header ${
            scrollDirection === "down" ? "hide" : "show"
          }`}
        >
          <IonToolbar mode="md">
            <IonButtons slot="end">
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
          <IonToolbar mode="md"
            className={`search-toolbar ${
              scrollDirection === "down" ? "hide" : "show"
            }`}
          >
            {/* / Search Bar / */}
            <SearchBar listOfFilters={listOfFilters} isFilterPage={true} />
          </IonToolbar>
        </IonHeader>
        <IonContent
          className="container"
          scrollEvents={true}
          onIonScroll={handleScroll}
        >
          {/* / List of Forms / */}
          <IonList lines="full" className="list-forms">
            {listOfForms.map((e) => (
              <>
                <IonItem button detail={true} key={e.id}>
                  <IonIcon
                    icon={removeCircleOutline}
                    size="large"
                    slot="start"
                  ></IonIcon>
                  <IonLabel>{e.titre}</IonLabel>
                  <IonNote slot="end" className="note-padding">
                    {e.date}
                  </IonNote>
                  <IonButton
                    className="form-bt"
                    slot="end"
                    id={`popover-button-param-${e.id}`}
                    onClick={() => {
                      setSelectedPopoverButton(e.id);
                      console.log("hello world");
                    }}
                  >
                    <IonIcon slot="icon-only" icon={ellipsisVertical}></IonIcon>
                  </IonButton>
                </IonItem>
                <IonPopover
                  trigger={
                    selectedPopoverButton !== null
                      ? `popover-button-param-${e.id}`
                      : undefined
                  }
                  dismissOnSelect={true}
                  alignment="center"
                  showBackdrop={false}
                  className="pop-width"
                >
                  <IonContent>
                    <IonList lines="full" className="ion-list-padding">
                      <IonItem button>
                        <IonIcon
                          icon={trash}
                          size="small"
                          slot="start"
                        ></IonIcon>
                        Supprimer
                      </IonItem>
                      <IonItem button>
                        <IonIcon
                          icon={archive}
                          size="small"
                          slot="start"
                        ></IonIcon>
                        Archiver
                      </IonItem>
                    </IonList>
                  </IonContent>
                </IonPopover>
              </>
            ))}
          </IonList>

          {/* / Select Modal / */}
          <div className="select-modal">
            <IonGrid className="pop-grid">
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
                            <IonItem lines="full" className="close-item">
                              <IonButton
                                className="close-button"
                                onClick={handleClickClose}
                              >
                                <IonIcon
                                  icon={close}
                                  color="primary"
                                  className="close-icon"
                                ></IonIcon>
                              </IonButton>
                            </IonItem>
                            {listModal.map((e) => (
                              <IonItem
                                button
                                lines="full"
                                key={e.id}
                                // onClick={() => handleItemClick(e)}
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

                        <IonCard
                          className={`ion-card-modal ${
                            lastScrollTop === 0 ? "" : "small-card"
                          }`}
                        >
                          <IonCardContent className="ion-card-buttons">
                            <IonButton
                              style={{ marginLeft: "0.5em" }}
                              className={"button-without-shadow "}
                              onClick={() => console.log("xcvxvcxcv")}
                            >
                              <IonIcon
                                icon={FileAddIcon}
                                className="icon-file-add"
                              ></IonIcon>
                              {lastScrollTop === 0 && (
                                <span> Create new form</span>
                              )}
                            </IonButton>
                            <div className="separator"></div>
                            <IonButton
                              className={"button-without-shadow "}
                              onClick={handleClickList}
                            >
                              <IonIcon icon={chevronUp} />
                            </IonButton>
                          </IonCardContent>
                        </IonCard>

                        {/* <IonButton className="chevron-button">
                          <IonButton
                            style={{ marginLeft: "0.5em" }}
                            className={"button-without-shadow "}
                            onClick={() => console.log("xcvxvcxcv")}
                          >
                            <IonIcon
                              icon={FileAddIcon}
                              className="icon-file-add"
                            ></IonIcon>
                            {lastScrollTop === 0 && (
                              <span> Create new form</span>
                            )}
                          </IonButton>
                          <div className="separator"></div>
                          <IonButton
                            className={"button-without-shadow "}
                            onClick={handleClickList}
                          >
                            <IonIcon icon={chevronUp} />
                          </IonButton>
                        </IonButton> */}
                      </div>
                    </div>
                  </IonCol>
                  {/* <IonCol> <div className="circle" onClick={handleClickList}><IonIcon icon={chevronUp}></IonIcon></div></IonCol> */}
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

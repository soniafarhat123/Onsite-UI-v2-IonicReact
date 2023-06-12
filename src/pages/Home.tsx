import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonPopover,
} from "@ionic/react";
import {
  chevronUp,
  menuOutline,
  navigateOutline,
  searchOutline,
  close,
  filter,
  searchSharp,
  caretUpSharp,
} from "ionicons/icons";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid >
          <div className="popover">
            <IonRow >
              <IonCol className="ion-col-item">
                <IonButton>Selected item </IonButton>
              </IonCol>
              <IonCol className="ion-col-item">
                <div className="popover-container">
                  <div className="popover-content">
                    <IonList>
                      <IonItem button lines="full">
                        Modal 1
                      </IonItem>
                      <IonItem button lines="full">
                        Modal 1
                      </IonItem>
                      <IonItem button lines="full">
                        Modal 1
                      </IonItem>
                      <IonItem button lines="full">
                        Modal 1
                      </IonItem>
                      <IonItem button lines="full">
                        Modal 1
                      </IonItem>
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
      </IonContent> */}
      {/* <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              
              <IonCol>
                <IonInput fill="outline" placeholder="Search">
                  
                </IonInput>
              </IonCol>
              <IonCol size="auto">
                <IonButton fill="clear">
                  <IonIcon slot="icon-only" icon={menuOutline} />
                </IonButton>
              </IonCol>
              <IonCol size="auto">
                <IonButton fill="clear">
                  <IonIcon slot="icon-only" icon={searchOutline} />
                </IonButton>
              </IonCol>
              
              <IonCol size="auto">
                <IonButton color="primary" fill="clear">
                  <IonIcon slot="icon-only" icon={navigateOutline} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage> */}

      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="search-bar-test">
          <IonIcon
            slot="icon-only"
            className="search-icon"
            icon={searchSharp}
            color="primary"
          />

          <IonInput
            placeholder="Search"
            className="input"
            clearInput={true}
          ></IonInput>
          <IonButton fill="clear" className="button-icon" id="popover-button">
            <IonIcon slot="icon-only" icon={filter} />
          </IonButton>
          <IonPopover
            trigger="popover-button"
            dismissOnSelect={true}
            side="bottom"
            alignment="center"
            showBackdrop={false}
          >
            <IonContent>
              <IonList lines="none">
                <IonItem button>
                  <IonIcon icon={caretUpSharp} size="small" className="ion-icon" color="primary"></IonIcon>Date
                </IonItem>
                <IonItem button>
                  {" "}
                  <IonIcon icon={caretUpSharp} size="small" className="ion-icon" color="primary"></IonIcon>Nom
                </IonItem>
                <IonItem button>
                  <IonIcon icon={caretUpSharp} size="small" className="ion-icon" color="primary"></IonIcon>Description
                </IonItem>
              </IonList>
            </IonContent>
          </IonPopover>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

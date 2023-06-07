import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronUp } from "ionicons/icons";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
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
      </IonContent>
    </IonPage>
  );
};

export default Home;

import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonImg,
  IonInput,
  IonPage,
} from "@ionic/react";
import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword] = useState(false);

  return (
    <IonPage>
      <div className="login-page-container">
        <div className="login-card-container">
          <IonImg
            src="/assets/images/logo-OnSite.4873292a.png"
            className="logo-image"
            alt="logo-onsite"
          />
          <IonCard className="login-card">
            <IonCardHeader className="card-header">
              <IonCardSubtitle className="card-subtitle">
                Sign in
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="input-container">
                <IonInput
                  type="text"
                  label="Username *"
                  labelPlacement="stacked"
                  required
                  value={username}
                  placeholder="Enter your username"
                  onIonChange={(e) => setUsername(e.detail.value!)}
                ></IonInput>
              </div>
              <div className="input-container">
                <IonInput
                  label="Password"
                  labelPlacement="stacked"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Enter your password"
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
              </div>

              <IonButton expand="block" type="submit" className="custom-button">
                SIGN IN
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </div>
    </IonPage>
  );
};

export default Login;

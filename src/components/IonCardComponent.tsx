import React from "react";
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";

interface IonCardComponentProps {
  title: string;
  alt: string;
  src: string;
  classname: string;
}

const IonCardComponent: React.FC<IonCardComponentProps> = ({
  title,
  alt,
  src,
  classname,
}) => {
  return (
    <IonCard className={classname}>
      <img alt={alt} src={src} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default IonCardComponent;

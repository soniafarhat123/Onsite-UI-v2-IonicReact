import React from "react";
import { IonCard, IonCardContent, IonLabel } from "@ionic/react";

interface IonCardComponentProps {
  title?: string;
  alt?: string;
  src?: string;
  classname?: string;
  href?: string;
}

const IonCardComponent: React.FC<IonCardComponentProps> = ({
  title,
  alt,
  src,
  classname,
  href,
}) => {
  return (
    <IonCard className={classname} href={href}>
      <img alt={alt} src={src} />
      <IonCardContent>
        <IonLabel color={"dark"}>
          <h2>{title}</h2>
        </IonLabel>
      </IonCardContent>
    </IonCard>
  );
};

export default IonCardComponent;

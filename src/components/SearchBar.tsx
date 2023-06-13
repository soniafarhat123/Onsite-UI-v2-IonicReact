import React from "react";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPopover,
} from "@ionic/react";
import { caretUpSharp, filter, searchSharp } from "ionicons/icons";

interface SearchBarProps {
  handleInput?: (ev: CustomEvent) => void;
  listOfFilters: { id: number; titre: string }[];
}

const SearchBar: React.FC<SearchBarProps> = ({
  handleInput,
  listOfFilters,
}) => {
  return (
    <div className="search-bar">
      <IonIcon
        slot="icon-only"
        className="search-icon"
        icon={searchSharp}
        color="primary"
      />

      <IonInput
        placeholder="Rechercher"
        className="input"
        clearInput={true}
        onIonInput={handleInput}
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
        <IonContent scrollY={true}>
          <IonList lines="none">
            {listOfFilters.map((e) => (
              <IonItem button key={e.id}>
                <IonIcon
                  icon={caretUpSharp}
                  size="small"
                  className="ion-icon"
                  color="primary"
                ></IonIcon>
                {e.titre}
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPopover>
    </div>
  );
};

export default SearchBar;

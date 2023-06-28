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
import "./SearchBar.css";
import {
  caretUpSharp,
  filter,
  funnel,
  funnelOutline,
  funnelSharp,
  searchSharp,
} from "ionicons/icons";

interface SearchBarProps {
  handleInput?: (ev: CustomEvent) => void;
  isFilterPage: boolean;
  onClickFilter?: () => void;
  listOfFilters: { id: number; titre: string }[];
}

const SearchBar: React.FC<SearchBarProps> = ({
  handleInput,
  listOfFilters,
  isFilterPage,
  onClickFilter,
}) => {
  return (
    <div className="search-bar">
      <IonIcon
        slot="icon-only"
        className="search-icon"
        icon={searchSharp}
        color="medium"
      />

      <IonInput
        placeholder="Rechercher"
        className="input"
        clearInput={true}
        onIonInput={handleInput}
      ></IonInput>
      {isFilterPage ? (
        <IonButton fill="clear" className="button-icon" onClick={onClickFilter}>
          <IonIcon slot="icon-only" icon={funnel} />
        </IonButton>
      ) : (
        ""
      )}
      <IonButton fill="clear" className="button-icon" id="popover-button-tri">
        <IonIcon slot="icon-only" icon={filter} />
      </IonButton>

      <IonPopover
        trigger="popover-button-tri"
        dismissOnSelect={false}
        side="bottom"
        alignment="center"
        showBackdrop={false}
        className="pop-width"
      >
        <IonContent scrollY={true}>
          <IonList lines="full" className="ion-list-padding">
            {listOfFilters.map((e) => (
              <IonItem button key={e.id}>
                <IonIcon
                  icon={caretUpSharp}
                  size="small"
                  color="primary"
                  slot="start"
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

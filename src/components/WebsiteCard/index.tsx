import {
  WebsiteCardContainer,
  WsCardHeaderContainer,
  WsCardDescriptionContainer,
} from "./styles";
import { CardInterface } from "../../interface/interfaces";
import { CardHeaderImg } from "./CardImgHeader/styles";
import { WSCardFooterContainer } from "./CardFooterButtons/styles";
import { ArrowSquareOut, GitFork } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export interface WebsiteCardProps {
  cardItem: CardInterface;
}

export function WebsiteCard({ cardItem }: WebsiteCardProps) {
  return (
    <WebsiteCardContainer>
      <WsCardHeaderContainer>
        <h4>{cardItem.name}</h4>
      </WsCardHeaderContainer>
      <CardHeaderImg>
        <img src={cardItem.image} alt={cardItem.image} />
      </CardHeaderImg>

      <WsCardDescriptionContainer>
        <h4>{cardItem.description}</h4>
      </WsCardDescriptionContainer>

      <WSCardFooterContainer>
        <Link to={cardItem.github || ""} target="_blank">
          <span>Source</span>
          <GitFork color="" size={18} />
        </Link>

        <Link to={cardItem.sitelink || ""} target="_blank">
          <span>Preview</span>
          <ArrowSquareOut color="" size={18} />
        </Link>
      </WSCardFooterContainer>
    </WebsiteCardContainer>
  );
}

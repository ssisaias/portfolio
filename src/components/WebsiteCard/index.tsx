import { WebsiteCardContainer, WsCardDescriptionContainer } from "./styles"
import { CardInterface } from "../../interface/interfaces"
import { CardHeaderImg } from "./CardImgHeader/styles"

export interface WebsiteCardProps {
  cardItem: CardInterface
}

export function WebsiteCard({ cardItem }: WebsiteCardProps) {


  return (
    <WebsiteCardContainer>
      <WsCardDescriptionContainer>
        <h4>{cardItem.name}</h4>
      </WsCardDescriptionContainer>
      <CardHeaderImg>
        <img src={cardItem.image} alt={cardItem.image} />
      </CardHeaderImg>

      <WsCardDescriptionContainer>
        <h4>{cardItem.description}</h4>
      </WsCardDescriptionContainer>
    </WebsiteCardContainer>
  )
}
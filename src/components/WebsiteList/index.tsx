import { WebsiteListContainer, WSList } from "./styles";
import websites  from '../../db/sites.json';
import { WebsiteCard } from "../WebsiteCard";


export function WebsiteList() {

  return (
        <WebsiteListContainer>
          {websites.length > 0 ?
          <> 
            <h2>My Portfolio</h2>
            <WSList>
              {websites.map(www => (
                <WebsiteCard key={www.id} cardItem={www}></WebsiteCard>
              ))}
            </WSList>
          </>  :
          <h3>Estamos sem cafeína. Volte mais tarde.</h3> }
        </WebsiteListContainer>
    )
}
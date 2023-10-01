import { IconContext } from "@phosphor-icons/react";
import { WebsiteList } from "../../components/WebsiteList";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <IconContext.Provider
                value={{
                    color: 'white',
                    size: '1rem',
                    weight: "fill",
                }}
            >
                <WebsiteList />
            </IconContext.Provider>
        </HomeContainer>
    )
}
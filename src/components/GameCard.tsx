import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../services/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"

interface Props{
    game: Game
}

function GameCard({game}: Props) {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} ></Image>
        <CardBody>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
            <HStack justifyContent="space-between">
              <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)}></PlatformIconList>
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard
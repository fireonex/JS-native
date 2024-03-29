import {GovernmentBuildingType, HouseType} from "../02/02_02";

export function getStreetsTitlesOfGovernmentBuildings(buildings: Array<GovernmentBuildingType>) {
    return buildings.map( b => b.address.street.title )
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map( b => b.address.street.title)
}

export function createMessages(houses: Array<HouseType>) {

    let callbackfn = (h: HouseType) => `Hello guys from ${h.address.street.title}`
    return houses.map(callbackfn)
}
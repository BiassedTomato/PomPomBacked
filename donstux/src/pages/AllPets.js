import { Footer, Header } from "../components";
import AnimalsFilter from "../components/AnimalsFilter/AnimalsFilter";
import AnimalsList from "../components/AnimalsList/AnimalsList";
import { PageBase } from "./PageBase";

export function AllPets(props) {
    return (
        <PageBase>
            <AnimalsFilter/>
            <AnimalsList />
        </PageBase>
    )
}
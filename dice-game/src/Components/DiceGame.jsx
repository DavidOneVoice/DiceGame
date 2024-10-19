import DieRoll from "../Components/DieRoll"
import "./DiceGame.css";
import DiceRule from "../Components/DiceRule"
import Copyrights from "../Components/Copyrights";
export default function DiceGame(){

    return(
        <div className="DiceGame">
            <DiceRule />
            <DieRoll />
            <Copyrights />
        </div>
    )
}
import { RecipieItem } from "components/RecipieItem/RecipieItem"
import { FaRegClock } from "react-icons/fa";
import { CiBurger } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { PiBowlFoodLight } from "react-icons/pi";

export const RecipieList = (props)=>{
    return <ul>
        {props.recipies.map((recipie)=>{
            return <RecipieItem 
            bowl = {PiBowlFoodLight}
            clock = {FaRegClock}
            burger = {CiBurger}
            star = {CiStar}
            name = {recipie.name}
            time = {recipie.time}
            servings = {recipie.servings}
            calories = {recipie.calories}
            difficulty = {recipie.difficulty}
            image = {recipie.image}
            />
        })}
    </ul>
}

// get list of predefined habits inside the local data files { data folder }
import { SuggestedHabit } from "../Data/SuggestedHabit";

// to render a single list item on the screen
import ListItem from "./ListItem";

// render the suggestion list of habits
const Suggestions = () => {


    return(
        <>  
            {/* navbar showing suggestion heading */}
            <nav className="w-full h-[65px] text-lg text-white 
                            font-semibold shadow-md p-2 flex justify-center 
                            items-center sticky top-0 bg-orange-500" >
                Suggestions
            </nav>

            {/* list container, containing list of the suggested habits */}
            <div className="w-full flex flex-col h-fill p-2 overflow-auto border-2 border-orange-500">

                {/* map over the array of suggested habits to show all items one by one in the list */}
                {SuggestedHabit.map((habit,i) => <ListItem key={i}
                                                    habit={habit} />)} 
            </div>
            
        </>
    )
}

// export the component
export default Suggestions;
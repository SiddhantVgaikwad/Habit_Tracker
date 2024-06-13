
// Homepage

// importing react hooks
import { useEffect, useState } from "react";

// redux hooks
import { useDispatch, useSelector } from "react-redux";

// actions from habitReducer
import { habitSelector, quoteFetchThunk, setSuggestionSelected } from "../Redux/Reducer/habitReducer";

// different Components used in homepage

//for adding a new habit to list 
import AddHabit from "../Component/AddHabit";
// for showing a new quote on each render 
//import Quote from "../Component/Quote";
// for showing list of suggested habits
import Suggestions from "../Component/Suggestions";



// render the homepage 
const Homepage = () => {

    // for calling redux actions
    const dispatch = useDispatch();

    // state variable from habitReducer , to show image on homepage, to know if user clicked on a habit in suggestion list
    const { displayImageUrl,suggestionSelected } = useSelector(habitSelector);

    // whether to show / hide the input section to "Add Habit"
    const [showAddHabit,setShowAddHabit] = useState(false);

    // fetch a quote from api on first render of the page
    useEffect(() => {
        dispatch(quoteFetchThunk());
    },[]);


    // if user click on a suggestion in suggestion list
    // show the "Add Habit" form
    useEffect(() => {
        if(suggestionSelected){
            setShowAddHabit(true);
        }
    },[suggestionSelected]);


    // to show or hide the "Add Habit"
    const toggleAddHabit = (e) => {
        e.preventDefault();
        // toggle the value
        setShowAddHabit((prev) => !prev);

        // if user hide the "Add Habit" form, then reset the value of suggestion selected to null (if there was some value in it)
        if(!showAddHabit){
            // calling the action
            dispatch(setSuggestionSelected(null));
        }
    }


    // render the page
    return(
        // main container of page
        <div className="w-full flex h-full justify-center my-2 overflow-auto bg-fixed ">

        {/* container containing all the differnet section on the home page */}
            <div className="w-[90%] h-fill flex">

               

                {/* container showing quote , "Add Habit" form, and "image" */}
                <div className="w-full h-fit md:w-2/3 flex flex-col items-center justify-between
                                 bg-[#ffffff] md:h-full p-2 mr-1 rounded ">

    <div className="my-10 text-center">
        <h1 className="text-6xl font-serif font-bold ">Build Better Habits,<br></br><span className=" mt-2">Build a Better Life</span>
      </h1>
    </div>

    



                    
                    
                            <div className="w-full h-full flex justify-center">
                                {/* show the "Add Habit" component */}
                                <AddHabit />
                            </div>
                        
                            
                    {/* incase of screen width smaller than 'md' */}
                    {/* show the suggestion list of habits in the same section*/}
                    <div className="md:hidden w-full h-fill rounded bg-[#ffffff]
                                     shadow-md ml-1 bg-fixed overflow-scroll">
                        {/* render the suggestion list */}
                        <Suggestions />
                    </div>
                    
                </div>


                {/* if the screen width is "md and above" */}
                {/* show suggestion list in different section */}
                <div className="hidden md:block w-1/3 h-full rounded bg-[#ffffff]
                                 shadow-md ml-1 bg-fixed overflow-scroll">
                    {/* render the suggestion list */}
                    <Suggestions />
                </div>

            </div>
        </div>            
    )
}

// exporting the homepage for using it outside
export default Homepage;
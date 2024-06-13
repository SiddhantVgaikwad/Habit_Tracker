
// to render the Navbar at the top of the screen 


// react hooks
import { useState } from "react";

// react-router components to navigate to a link or to show children component of page
import { NavLink, Outlet } from "react-router-dom";


// component rendering the Navbar
const Navbar = () => {

    // to show / hide a menu icon on smaller screen, instead of navigating links
    const [showMenu,setShowMenu] = useState(false);


    // toggle the show / hide of menu icon of smaller screen
    const toggleShowMenu = () => {
        setShowMenu((prev) => !prev);
    }


    // render the navbar
    return(
        // main container of the navbar
        <div className="w-screen h-screen overflow-auto flex flex-col flex-nowrap ">

            <div className="w-full  p-3 flex h-17 text-black text-lg 
                    font-semibold justify-center items-center shadow-md z-10 shrink-0 border-b-4  border-blue-500">

                <div className="w-[85%] sm:w-[85%] h-full flex justify-between items-center flex-wrap ">
                    
                    {/* habit tracker logo container with link to homepage */}
                    

                    {/* links to navigate between different pages */}
                    {/* hidden on smaller screen  */}
                    <div className="hidden w-fit h-full sm:flex items-center rounded-2xl bg-sky-500 text-white">
        
                        {/* list of links */}
                        <ul>
                            <li className="inline-block mx-3  ">
                                {/* link for home page */}
                                {/* if link active change the text color */}
                                <button className="">
                                <NavLink style={({ isActive }) => (isActive ? { color: "rgb(255 255 255)" } : undefined)}
                                        to='/'>
                                    🏠Home
                                </NavLink>
                                </button>
                            </li>
                            </ul>

                            </div>


                            <div className="w-fit h-full flex items-center p-1 overflow-hidden ml-2 ">
                        <NavLink to="/">
                            <img src={require('../Assets/logo.png')} alt="logo" className="w-12 mt-1"/>
                            
                        </NavLink>
                        <h1 className="m-2 text-xl font-extrabold ">Habit Tracker</h1>
                        
                            </div>

                            <div className="hidden w-fit h-full sm:flex items-center rounded-2xl bg-sky-500">
                                <ul>

                            <li className="inline-block mx-2  text-white">
                                {/* link for detailsPage (for showing user's habit and their status)  */}
                                {/* if link active change the color */}
                                <NavLink style={({ isActive }) => (isActive ? { color: "rgb(255 255 255)" } : undefined)}
                                        to='/detailspage'>
                                    Your Habits
                                </NavLink>
                            </li>
                        </ul>

                    </div>


                    {/* button to show / hide the menu on smaller screen */}
                    {/* hidden on screen with width medium and above */}
                    <button className="sm:hidden" onClick={toggleShowMenu}>
                        {/* menu icon */}
                        <img src={require('../Assets/menu.png')} alt="menu-icon" 
                                className="w-[25px] h-[25px]" />
                    </button>


                    {/* if the user clicked on menu icon */}
                    {showMenu?
                        // for true status
                        // show the menu containing the list of navigation links to different page
                        <div className="block sm:hid den w-full h-fit bg-white p-1 rounded-b 
                                        shadow-md border-x-2 border-b-2">
                            
                            {/* list of navigation links */}
                            <ul className="mx-0 px-1">

                                {/* link to homepage */}
                                {/* if active change the text color */}
                                <li className="border-b p-1 text-slate-400" onClick={toggleShowMenu}>
                                    <NavLink style={({ isActive }) => (isActive ? { color: "rgb(129 140 248)" } : undefined)}
                                            to='/'>
                                        Home
                                    </NavLink>
                                </li>

                                {/* link to detailspage (to show user's habit and status of habits) */}
                                {/* if active change the text color */}
                                <li className="p-1 text-slate-400" onClick={toggleShowMenu}>
                                    <NavLink style={({ isActive }) => (isActive ? { color: "rgb(129 140 248)" } : undefined)}
                                                to='/detailspage'>
                                        Your Habits
                                    </NavLink>
                                </li>
                                
                            </ul> 

                        </div>    
                        :
                        // for false status of menu icon click
                        // hide the menu
                        null
                    }
                </div>
            </div>

            {/* for render the children route pages */}
            <Outlet />
        </div>
    )
}

// export the navbar component
export default Navbar;
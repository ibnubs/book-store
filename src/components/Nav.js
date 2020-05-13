import React from "react";

// class nav extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Navigation content Component</h1>
//             </div>
//         )
//     }
// }

// export default nav;


// class Nav extends React.Component{
//     state = {
//         name: "Budi",
//         club: "MU"
//     }   
//     render(){
//             return(
//                 <div>
//                     <h1>{this.state.name}</h1>
//                     <h2>{ this.state.club}</h2>
//                 </div>
//             )
//         }
//     }

//     const club = {
//         color: "blue",
//         fontSize: "25px"
//     }

const Nav = () => {
    return (
        <div className="header">
            <div className="header-logo">
                BOOKS-IT
            </div>
            <div className="header-list">
                <ul>
                    <li>Category</li>
                    <li>Rent</li>
                    <li>Buy</li>
                </ul>
            </div>
        </div>
    )
}


export default Nav;
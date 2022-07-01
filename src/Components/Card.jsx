import React from "react";

const Card = ({ pokemon, loading,infoPokemon}) => {
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;


// import React from "react";
// // import React, { Component } from 'react';
// const Card = ({ pokemon, loading }) => {
//   return (
//     <>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         pokemon.map((item) => {
//           return (
//             <>
//               <div className="card">
//                 <h1>{item.id}</h1>
//                 <img src={item.spirites.front_default} alt="" />
//                 <h2>{item.name}</h2>
//                 {/* <div className="abilities">
//                   {data.abilities.map((poke) => {
//                     return (
//                       <>
//                         <div className="group">
//                           <h2>{poke.ability.name}</h2>
//                         </div>
//                       </>
//                     );
//                   })}

//                   {/* <div className="group">
//                     <h2>solar-power</h2>
//                   </div> */}{" "}
                
//                 {/* </div> */}
//                 {/* <div className="base-stat">
//                   {data.stats.map((poke) => {
//                     return (
//                       <>
//                         <h3>
//                           {poke.stat.name}:{poke.base_stat}
//                         </h3>
//                       </>
//                     );
//                   })}
//                   {/* <h3>Hp:30</h3>
//                   <h3>attack:52</h3>
//                   <h3>defence:43</h3>
//                   <h3>special-attack:50</h3>
//                   <h3>speed</h3> */}
//                 {/* </div> */} */ 
//               </div>
//             </>
//           );
//         })
//       )}
//     </>
//   );
// };

// export default Card;

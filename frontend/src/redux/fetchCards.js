/**
 *  * Author: Kevin Carlos
 */

// const fetchFromAPI = () => {
//     console.log("Here");
//     return async(dispatch) => {
//         console.log("Here2");
//         dispatch(fetchCardsLoading());
//         try {
//             const res = await fetch("http://localhost:5000/");
//             const json = await res.json();

//             dispatch(fetchCardsSuccess(json));
//         } catch(e) {
//             dispatch(fetchCardsError(e));
//         }
//     }
// }
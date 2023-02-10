export default function CurrentImage() {
     const time = new Date().getHours();
     console.log(time)
    return (
    time >= 6 && time <= 18
    ? "<Daytime />"
    : "<Nighttime />"
    )
}


// Andere Beispiele:

// function CurrentMessage({day}) {
//         const weekday = (day >= 1 && day <= 5);
//         const weekend = (day >= 6 && day <= 7);
//         let message;
    
//         if (weekday) {
//             message = <Workdays />
//         } else if (weekend) {
//             message = <Weekends />
//         } else {
//             message = <ErrorComponent />
//         }
    
//         return (
//             <div>
//                 {message}
//             </div>
//         )
//    }




// function LogicalAndExample() {
//         const val = prompt('Anything but a 0')   
//         return (
//             <div>
//                 <h1>Please don't type in a zero</h1>
//                 {val &&
//                     <h2>Yay, no 0 was typed in!</h2>
//                 }
//             </div>
//         )
//     }

// To understand what will be output on screen, consider the following example in standard JavaScript:
// true && console.log('This will show')
// false && console.log('This will never show')
// In other words, if a prop gets evaluated to true, using the && operator, you can render whatever JSX elements you want to the right of the && operator.

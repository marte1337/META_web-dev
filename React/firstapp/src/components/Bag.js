// Children-Test + div. Arrow-functions + Names-Exports

// Children:  
// Apples and Pears are props of the Bag component. 
// The Bag component can wrap the Apples / Pears component, 
// or any other component, because of the the {props.children} syntax 
// in the Bag component function declaration. 


// Arrow-functions: Changing a component from a function declaration
// to a function expression doesn't change its behavior
const Bag = (props) => {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "lime",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
  }
  

// Using the parentheses is optional if there's a single parameter that a function accepts.
  const Apples = props => {
      return (
        <div className="promo-section">
            <div>
                <h2>These apples are: {props.color}</h2>
                </div>
                <div>
                <h3>There are {props.number} apples.</h3>
            </div>
        </div>
      )
    }
  

  const Pears = props => <h2>I don't like pears, but my friend, {props.friend}, does</h2>
  // one-liner = implicit return + no curly braces


  export {Bag, Apples, Pears} // = Named-Export: Mehrere Exports möglich
// Note: You can import css as a module. Can reduce use of strings.
import styles from './App.module.css'

// Components
/*
* JS functions that can be sprinkled with markup.
* Must be called through < />, or tags. In JSX, all tags must be closed.
* Props can be used to pass in unique values.
* When nesting Components, the external Component is referred to as the parent.
*
* This one is imported from another file, and receives two props: animal and amount.
*/
import { GetThoughtComponent } from "./ThoughtComponent";

function App() {

  // Variables
  /*   
  * HTML code can also be stored as a variable.
  * Variables are accessed/displayed via curly brackets.
  */
  const greeting = "Greetings!";
  const text = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>;
  const seven = 7;
  const friends = ["Jax", "Cynthia", "Angel"];

  // Ternary Operator
  const isSeven = seven == 7 ? <h2>This is indeed 7.</h2> : <h2>And hence, seven ate nine.</h2>;

  // Empty tags are called Fragments.
  // You can dynamically alter attributes with curly brackets. Objects are also denoted via curly brackets.
  return (
    <>
      <div className={styles.App}>
        <h1 className={styles.greeting} style={{color: "brown"}}>{greeting}</h1>
        {text}
        <GetThoughtComponent animal="horseshoe crabs" amount={1} />
        {isSeven}
        
        {friends.map((name, key) => {
          return <p key={key}>{name}</p>;
        })}
      </div>
    </>
  )
}

export default App

// Miscellaneous
/* 
* JSX is a syntax extension, while React is a JavaScript library. They can function independently of each other.
*/
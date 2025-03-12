// To access a component from another file, simply export it.
export const GetThoughtComponent = (props) => {
  return (
    <h2>Did you know? I like {props.animal}. So far I've seen {props.amount}.</h2>
  );
};
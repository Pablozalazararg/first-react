
function ListComponent (props) {
  const list = props.animales.map((ele)=>{
    return <li key={ele}>{ele}</li>})
  return (
    <ul>
      {list}
    </ul>
    
  )

  
}
export default function App(){
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  return(
    <div>
      <h1>estos son elementos de una lista</h1>
      
      <ListComponent animales={animals}></ListComponent>
      
    </div>
  )

}
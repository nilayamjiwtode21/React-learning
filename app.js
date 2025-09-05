const element = React.createElement("h1",{id:"first", className:"first", style:{backgroundColor:"black",color:"red",fontFamily:"cursive"}},"hello coder army");
const element2 = React.createElement("h2",{id:"second", className:"first", style:{backgroundColor:"blue",color:"white",fontFamily:"cursive"}},"maje me raho");
//{}=> ye hota hai properties dene ke liye
//render issue solve karne ke liye ham ak div banayege and usme sab element dal denge as childern
const div = React.createElement("div",{},[element,element2])

const reactRoot = ReactDOM.createRoot(document.getElementById("root"))

// reactRoot.render(element);
// reactRoot.render(element2);//ham ak baarme ak hi element ko render kar sakte hai REACT me
//jo latest render hua hai vohi hame apne webpage me dikhega,uske pahele jo bhi render hua hai react use chupa denga automatic
//matlb element2 dikhega par element gayab ho jayega 

//issue solve
reactRoot.render(div);
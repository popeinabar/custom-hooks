import Storage from "./Storage"

const Input = ()=> {
    let [userInput, updateInput] = Storage("")

    let showData=()=>{
        let localData=localStorage.getItem("content")
        let sessionData = sessionStorage.getItem("content");

        alert(`SessionStore: ${localData}\n\nLocalStore: ${sessionData}`)
    }

    return(
        <div className="Home">
            <input type="text" onChange={(e)=> updateInput(e.target.value)} value={userInput?userInput:""} placeholder="What's in your storage?!" />
            <div><button onClick={showData}>View Storage</button></div>
        </div>
    )
}

export default Input
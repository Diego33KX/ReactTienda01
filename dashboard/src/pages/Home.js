import { Component } from "react"
import logo from "../components/Logo3.PNG"
class Home extends Component{
    render(){
        return(<div className="home">
            <image>
                <img src={logo}></img>
            </image>
        </div>
        )
    }
}
export default Home
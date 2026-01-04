import "./styles/Notifications.css";
import { useEffect } from "react";
function Notifications({message , onClose , success , popup}){

    useEffect(() => {
        // Set a timer
        const timer = setTimeout(() => {
            onClose(); 
        }, 3000); 

        
        return () => clearTimeout(timer);
    }, []);

    const color = {
        backgroundColor : `${success ? '#10b981' : (popup ? "#8b5cf6" : "#b91010ff") }`
    }

    return(
        <div className="notifications" style={color}>
            <div>
                {message}
            </div>
            <div>
                <button 
                style={{
                    padding : 0 , 
                    marginLeft: "7px" , 
                    backgroundColor :`${success ? '#10b981' : (popup ? "#8b5cf6" : "#b91010ff") }`
                }} 
                className="btn btn-primary" 
                onClick={onClose}>x</button>
            </div> 
        </div>
    )

}

export default Notifications;
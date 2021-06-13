

import {Button, Typography} from '../../App.style'
import './style.css'
function Profile(){
    return <div className="profile">
        <div className="left-side">
            <div className="up-side"><div className="img-profile"><img src="/logo192.png" alt="img profile" /></div>  <Typography fontSize={32} color="#000">Amy Mayer</Typography> </div>
            <div className="down-side">
            <Typography fontSize={24} color="#242424">My Orders</Typography>
            <Typography fontSize={24} color="#242424">Wishlist</Typography>
            <Typography fontSize={24} color="#242424">Notifcations</Typography>
            <Typography fontSize={24} color="#242424">Settings</Typography>
            <hr />
            <Typography>Logout</Typography>
            </div>
            
            
        </div>
        <div className="right-side">
           <div className="first-side flex-col">
              <Typography fontSize={32} color="#242424">My Profile </Typography>
              <div className="flex-row">
              <div className="data flex-col">  
            <Typography fontSize={24} color="#242424">First Name</Typography>
            <Typography fontSize={24} color="#242424">Last Name</Typography>
            <Typography fontSize={24} color="#242424">Email</Typography>
            <Typography fontSize={24} color="#242424">Birthday</Typography>
            <Button> Chaneg Password</Button>
           </div>
            <div className="data  flex-col">
            <Typography fontSize={24} color="#000">Amy</Typography>
            <Typography fontSize={24} color="#000">Mayer</Typography>
            <Typography fontSize={24} color="#000">amymay@gmail.com</Typography>
            <Typography fontSize={24} color="#000">12/04/1991</Typography>
            </div>
              </div>
            
            </div>   
            
            <div className="thered-side">
                <img src="/logo192.png" alt="img profile" />
                <Button>Upload new photo</Button>
            </div>
        </div>
    </div>
}

export default Profile 
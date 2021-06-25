

import {Typography} from '../../../Global.style'
import Button from '../../../components/button/button'
import './style.css'
function Profile(){
    return <div className="profile">
        <div className="left-side">
            <div className="up-side"><div className="img-profile"><img src="/profile.png" alt="img profile" /></div>  <Typography fontSize={32} color="#000">Amy Mayer</Typography> </div>
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
              
              <div className="data flex-col">  
              <div className="flex-row">
                  <Typography fontSize={24} color="#707070">First Name</Typography> 
                  <Typography className="user-data" fontSize={24} color="#000">Amy</Typography>
                </div>
              <div className="flex-row">
                  <Typography fontSize={24} color="#707070">Last Name</Typography> 
                  <Typography fontSize={24} color="#000">Mayer</Typography>
                </div>
              <div className="flex-row">
                  <Typography fontSize={24} color="#707070">Email </Typography> 
                  <Typography fontSize={24} color="#000">amymay@gmail.com</Typography>
                </div>
              <div className="flex-row">
                  <Typography fontSize={24} color="#707070">Birthday </Typography> 
                  <Typography fontSize={24} color="#000">12/04/1991</Typography>
                </div>
            
            <Button width={"153px"} text={'Chaneg Password'} /> 
           
            
              </div>
            
            </div>   
            
            <div className="thered-side">
                <img src="/profile.png" alt="img profile" />
                <Button width={"153px"} text={'Upload new photo'} /> 
            </div>
        </div>
    </div>
}

export default Profile 
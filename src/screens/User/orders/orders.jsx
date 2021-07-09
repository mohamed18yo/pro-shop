

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {SectionRole,Typography,SpinnerContainer,ErrorMsg ,IneerSection} from "../../../Global.style"
import { GetOrders } from "../../../redux/order/orderAction";
import {RowCell} from './orders.style'
 function Orders(){
     const dispatch= useDispatch();
     const state= useSelector(state=>state)
     useEffect(()=>{
        dispatch(GetOrders())
     },[dispatch])
     console.log(state.order.userOrders)

    return  state.order?.userOrders?.isLoading?(<SpinnerContainer />): state.order?.userOrders?.error?
       ( <ErrorMsg>error</ErrorMsg>) :(
            <SectionRole>    
                <IneerSection style={{marginTop:'4rem'}}>
                        <RowCell>   
                        <Typography>User Name</Typography>
                        <Typography>Products</Typography>
                        <Typography>Created At</Typography>
                        <Typography>Payment </Typography>
                        <Typography>total price</Typography>
                    </RowCell>
                        { state.order?.userOrders?.orders.map((order)=>
                            <RowCell>
                                <Typography>{state.userDetailes.user.name}</Typography>
                                <Typography>{order.orderItems.length}</Typography>
                                <Typography>{order.createdAt.substring(0, 10)}</Typography>
                                <Typography  >{order.isPaid?"Paid":"Not Paid"}</Typography>
                                <Typography>{order.totalPrice}</Typography>
                            </RowCell>
                            )}
                     
                    </IneerSection>
            </SectionRole>   
        ) 
  }      
    


export default Orders
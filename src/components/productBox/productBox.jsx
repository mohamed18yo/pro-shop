import { Card } from "./productBox.style";
import { ProductImg, FixedRow } from "../../screens/Gust/home/home.style";
import { Typography} from "../../Global.style";
import Button from "../button/button";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Rating from '@material-ui/lab/Rating';  
import {Link} from 'react-router-dom'
function ProductBox(props) {
  return (
    <Card  height={props.height}>
      <ProductImg src={props.src} width={"420px"}></ProductImg>
      <Typography style={{maxWidth:"420px"}} as={Link} to={`/product/${props.id}/${props.name}`} color={"#242424"} fontSize={24}>
        {props.title}
      </Typography>
      <Rating name="read-only" style={{ marginTop: 20}} value={props.rate} readOnly />
      <Typography style={{ marginTop: 20}} color={"#242424"} fontSize={30}>    
        $ {props.price}
      </Typography>
      <FixedRow style={{ marginTop: 20}}>
        <Button
          isGray={true}
          width={"54px"}
          text={<BookmarkBorderIcon></BookmarkBorderIcon>}
          
        ></Button>
        
        <Button  style={{ marginLeft: 20}}isGray={true} width={"324px"} text={"Add to Cart"}></Button>
      </FixedRow>
    </Card>
  );
}
export default ProductBox;

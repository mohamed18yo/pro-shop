import { Card } from "./productBox.style";
import { ProductImg, FixedRow } from "../../screens/Gust/home/home.style";
import { Typography } from "../../Global.style";
import Button from "../button/button";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCartItem } from "../../redux/Cart/cartAction";
function ProductBox(props) {
  const dispatch= useDispatch()
  return (
    <Card height={props.height}>
      <ProductImg src={props.src} width={"420px"}></ProductImg>
      <Typography
        style={{ maxWidth: "420px" }}
        as={Link}
        to={`/product/${props.id}/${props.name}`}
        color={"#242424"}
        fontSize={24}
      >
        {props.title}
      </Typography>
      <Rating
        name="read-only"
        style={{ marginTop: 20 }}
        value={props.rate}
        readOnly
      />
      <Typography style={{ marginTop: 20 }} color={"#242424"} fontSize={30}>
        $ {props.price}
      </Typography>
      <FixedRow style={{ marginTop: 20 }}>
        <Button
          isGray={true}
          width={"54px"}
          text={<BookmarkBorderIcon></BookmarkBorderIcon>}
        ></Button>

        <Button
          disabled={props.product?.countInStock}
          style={{ marginLeft: 20 }}
          isGray={true}
          width={"324px"}
          text={"Add to Cart"}
          handleClick={()=>{
            if(props.product.countInStock){
              dispatch(AddCartItem(props.product,1))
            }
          }}
        ></Button>
      </FixedRow>
    </Card>
  );
}
export default ProductBox;

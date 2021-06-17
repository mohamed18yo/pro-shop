
import { Card, Box } from "./categoriesCard.style";
import { Typography } from "../../Global.style";
import { ProductImg } from "../../screens/Gust/home/home.style";
function CategoriesCard(props) {
  return (
    <Card>
      <Box>
        <ProductImg src={props.src} width={"290px"} ></ProductImg>
      </Box>
      <Typography color={"#242424"} fontSize={24}>
        {props.title}
      </Typography>
    </Card>
  );
}
export default CategoriesCard;

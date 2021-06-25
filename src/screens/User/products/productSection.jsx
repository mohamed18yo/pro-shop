import {
  ProductBox,
  RowImgs,
  ProductViewBox,
  ProductDisecriptionBox,
  CircleColor,
  SizeField,
} from "./products.style";
import {
  Typography,
  Line,
  FlexRow,
  FlexCol,
  ProductImg,
  Counter,
} from "../../../Global.style";
import Button from "../../../components/button/button";
import BookmarkIcon from "@material-ui/icons/Bookmark";

function ProductSection() {
  return (
    <ProductBox>
      <ProductViewBox>
        <ProductImg src={"/iphone.png"} width={"501px"} />
        <RowImgs>
          <ProductImg style={{cursor: "pointer"}} src={"/iphone.png"} width={"142px"} />
          <ProductImg style={{cursor: "pointer"}} src={"/iphone.png"} width={"142px"} />
          <ProductImg style={{cursor: "pointer"}}src={"/iphone.png"} width={"142px"} />
        </RowImgs>
      </ProductViewBox>
      <ProductDisecriptionBox>
        <FlexRow>
          <Typography fontSize={30} color={"#242424"}>
            Apple iPhone 11 Pro 256GB Memory
          </Typography>
          <Typography fontSize={32} color={"#242424"}>
            $499.99
          </Typography>
        </FlexRow>
        <Counter>
          <Typography style={{ cursor: "pointer" }} fontSize={30}>
            ــ
          </Typography>
          <Typography fontSize={30}> 1</Typography>
          <Typography style={{ cursor: "pointer" }} fontSize={30}>
            +
          </Typography>
        </Counter>
        <FlexRow style={{ justifyContent: "flex-start" }}>
          <Typography color={"#707070"} fontSize={24}>
            Color:{" "}
          </Typography>
          <Typography fontSize={24} color={"#242424"}>
            Silver
          </Typography>
        </FlexRow>
        <FlexRow style={{ justifyContent: "flex-start" }}>
          <CircleColor color={"#FED6BC"}></CircleColor>
          <CircleColor color={"#EDEAE3"}></CircleColor>
          <CircleColor color={"#6B7B73"}></CircleColor>
        </FlexRow>
        <FlexRow style={{ justifyContent: "flex-start" }}>
          <Typography color={"#707070"} fontSize={24}>
            Size:{" "}
          </Typography>
          <Typography fontSize={24} color={"#242424"}>
            256GB
          </Typography>
        </FlexRow>
        <FlexRow>
          <SizeField>64GB</SizeField>
          <SizeField style={{ background: "#000", color: "#fff" }}>
            256GB
          </SizeField>
          <SizeField>512GB</SizeField>
          <FlexRow style={{ justifyContent: "flex-end" }}>
              <Button
                style={{border: "1px solid #FCDD06", marginRight:"1rem"}}
                width={"54px"}
                text={<BookmarkIcon></BookmarkIcon>}
                isGray={true}/>
          
               <Button text={"Add to cart"} />
          </FlexRow>
          
        </FlexRow>
        <Typography fontSize={16}>
          Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex enim
          aperiam consequatur. Est temporibus ab. Pariatur aut ut temporibus
          culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur
          non sunt et neque. Aut dolorem repellat quo architecto sint minima
          doloremque. At quae laborum incidunt vel voluptas dolor similique aut.
          Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo
          animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus
          qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur
          sint porro omnis et facere. Voluptatem vitae quo. Similique atque
          cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias
          quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur
          necessitatibus veritatis voluptatem qui velit repellat numquam
          tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est
          expedita aspernatur non repellendus nihil perferendis. Et deserunt
          doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor
          doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam
          mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro
          rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit
          veritatis dolore assumenda. Aut doloribus unde repellat pariatur
          consequatur. Blanditiis voluptas aut tempora facilis fugi.
        </Typography>
      </ProductDisecriptionBox>
    </ProductBox>
  );
}
export default ProductSection;

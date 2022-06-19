import * as Styled from "./style";
import { Link } from "react-router-dom";

interface ItemProps {
  item: {
    id: number;
    img: string;
    title: string;
    cat: string;
  };
}

export const CategoryItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <Styled.Container>
      <Link to={`/products/${item.cat}`}>
        <Styled.Image src={item.img} />
        <Styled.Info>
          <Styled.Title>{item.title}</Styled.Title>
          <Styled.Button>SHOP NOW</Styled.Button>
        </Styled.Info>
      </Link>
    </Styled.Container>
  );
};

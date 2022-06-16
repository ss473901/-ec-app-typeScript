import * as Styled from "./style";
import { categories } from "../../date";
import { CategoryItem } from "../CategoryItem";

export const Categories: React.FC = () => {
  return (
    <Styled.Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Styled.Container>
  );
};

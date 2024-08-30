import { useEffect } from "react";
import Container from "../../components/Container";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDataByRestId } from "../../redux/actions/productActions";
import ProdDetail from "./ProdDetail";
import RestDetail from "./RestDetail";

const Restaurant = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataByRestId(id));
  }, []);

  return (
    <div>
      <div className="shadow">
        <Container>
          <RestDetail />
        </Container>
      </div>

      <Container>
        <ProdDetail />
      </Container>
    </div>
  );
};

export default Restaurant;

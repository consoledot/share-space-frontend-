import "./spaces.style.scss";
import { useEffect, useState } from "react";
import Card from "../../components/Card/card.component";
import Loading from "../../components/Loading/loading.component";

const Spaces = () => {
  const [state, setState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 3000);
  });
  return (
    <div className="spaces">
      <div className="collection">
        {state ? (
          <Loading />
        ) : (
          <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        )}
      </div>
    </div>
  );
};
export default Spaces;

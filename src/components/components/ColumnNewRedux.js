import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Particle from "../components/Particle";
import * as selectors from "../../store/selectors";
import * as actions from "../../store/actions/thunks";
import { clearNfts } from "../../store/actions";
import NftCard from "./NftCard";
import { shuffleArray } from "../../store/utils";

//react functional component
const ColumnNewRedux = ({ showLoadMore = true, shuffle = false }) => {
  const dispatch = useDispatch();
  const nftsState = useSelector(selectors.nftBreakdownState);
  console.log("nftstate", nftsState);
  const nfts = nftsState.data
    ? shuffle
      ? shuffleArray(nftsState.data)
      : nftsState.data
    : [];

  const [height, setHeight] = useState(0);

  const onImgLoad = ({ target: img }) => {
    let currentHeight = height;
    if (currentHeight < img.offsetHeight) {
      setHeight(img.offsetHeight);
    }
  };

  useEffect(() => {
    dispatch(actions.fetchNftsBreakdown());
  }, [dispatch]);

  //will run when component unmounted
  useEffect(() => {
    return () => {
      dispatch(clearNfts());
    };
  }, [dispatch]);

  const loadMore = () => {
    dispatch(actions.fetchNftsBreakdown());
  };

  return (
    <div className="row" style={{ paddingBottom: "25px" }}>
      <Particle />
      {nfts &&
        nfts.map((nft, index) => (
          <NftCard
            nft={nft}
            key={index}
            onImgLoad={onImgLoad}
            height={height}
          />
        ))}
      {showLoadMore && nfts.length <= 20 && (
        <div className="col-lg-12">
          <div className="spacer-single"></div>
          <span onClick={loadMore} className="btn-main lead m-auto">
            Load More
          </span>
        </div>
      )}
    </div>
  );
};

export default memo(ColumnNewRedux);

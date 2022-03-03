import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions/thunks';
import NftCard from './NftCard';
import { clearNfts } from '../../store/actions';

const ColumnNewThreeColRedux = () => {

    const dispatch = useDispatch();
    const nftsState = useSelector(selectors.nftBreakdownState);
    const nfts = nftsState.data ? nftsState.data : [];

    const [height, setHeight] = useState(0);

    const onImgLoad = ({target:img}) => {
        let currentHeight = height;
        if(currentHeight < img.offsetHeight) {
            setHeight(img.offsetHeight);
        }
    }
    
    useEffect(() => {
        dispatch(actions.fetchNftsBreakdown());
    }, [dispatch]);

    //will run when component unmounted
    useEffect(() => {
        return () => {
            dispatch(clearNfts());
        }
    },[dispatch])
    
    const loadMore = () => {
        dispatch(actions.fetchNftsBreakdown());
    }
    
  return (
    <div className='row'>
        {nfts && nfts.map( (nft, index) => (
                <NftCard nft={nft} key={index} onImgLoad={onImgLoad} height={height} className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4" />
            ))}
        { nfts.length <= 20 &&
            <div className='col-lg-12'>
                <div className="spacer-single"></div>
                <span onClick={loadMore} className="btn-main lead m-auto">Load More</span>
            </div>
        }
    </div>              
    );
}

export default memo(ColumnNewThreeColRedux);
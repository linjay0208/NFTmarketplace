import React, { useState, useEffect } from "react";
import Select from "react-select";
import ColumnNewRedux from "../components/ColumnNewRedux";
import Footer from "../components/footer";
import {  useDispatch } from "react-redux";
// import * as selectors from "../../store/selectors";
import { setFilterInfo, clearFilterInfo } from "../../store/actions/thunks";

// import LuvNFT from "../../abi/LuvNFT.json";
// import Auction from "../../abi/NFTAuction.json";

// const nftContractAddress = process.env.REACT_APP_NFTCONTRACT_ADDERSS;
// const auctionContractAddress = process.env.REACT_APP_AUCTIONCONTRACT_ADDRESS;

const customStyles = {
  option: (base, state) => ({
    ...base,
    background: "#212428",
    color: "#fff",
    borderRadius: state.isFocused ? "0" : 0,
    "&:hover": {
      background: "#16181b",
    },
  }),
  menu: (base) => ({
    ...base,
    background: "#212428 !important",
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  control: (base, state) => ({
    ...base,
    padding: 2,
  }),
};

const options = [
  { value: "all", label: "🍭 All categories" },
  { value: "land", label: "🗺 LAND" },
  { value: "services", label: "💈 SERVICES" },
  { value: "house", label: "🏠 HAUS" },
  { value: "hotel", label: "🏩 HOTEL" },
  { value: "restaurant", label: "🍔 RESTAURANT" },
  { value: "office", label: "🏢 OFFICE" },
  { value: "monument", label: "🗽 MONUMENT" },
  { value: "car", label: "🚗 CAR" },
  { value: "taxi", label: "🚕 TAXI" },
  { value: "stadium", label: "🏟 STADIUM" },
  { value: "bank", label: "🏦 BANK" },
  { value: "store", label: "🏬 STORE" },
  { value: "boat", label: "⛵️ BOAT" },
  { value: "yacht", label: "🛥 YACHT" },
];
const options1 = [
  { value: "all", label: "🎄 All status" },
  { value: "BuyNow", label: "🛒 Buy now" },
  { value: "OnAuction", label: "⏱ On Auction" },
  { value: "HasOffers", label: "👋 Open for offers" },
  { value: "NotForSale", label: "🚫 Not for sale" },
];
const options2 = [
  { value: "RecentlyAdded", label: "Recently added" },
  { value: "LowToHigh", label: "Low to high" },
  { value: "HighToLow", label: "High to low" },
  { value: "EndingSoon", label: "Ending soon" },
];

const Explore = () => {
  const [searchKey, setSearchKey] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999999999);
  const [selectedSearchKey, setSelectedSearchKey] = useState("");
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(9999999999);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const dispatch = useDispatch();
  // const filterInfo = useSelector(selectors.filterStatus);

  useEffect(() => {
    dispatch(
      setFilterInfo({
        selectedSearchKey,
        selectedMinPrice,
        selectedMaxPrice,
        selectedCategory,
        selectedStatus,
        selectedSort,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      setFilterInfo({
        selectedSearchKey,
        selectedMinPrice,
        selectedMaxPrice,
        selectedCategory,
        selectedStatus,
        selectedSort,
      })
    );
  }, [
    selectedSearchKey,
    selectedMinPrice,
    selectedMaxPrice,
    selectedCategory,
    selectedStatus,
    selectedSort,
  ]);

  return (
    <div>
      <section
        className="jumbotron breadcumb no-bg"
        style={{
          fontFamily: "Archivo Black",
          backgroundImage: `url("img/news/news-2.jpg")`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="mainbreadcumb">
          <div className="container">
            <div className="row m-10-hor">
              <div className="col-12">
                <h1 className="text-center">Explore</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          backgroundColor: "darkslategrey",
        }}
      >
        <section className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="items_filter filterNft">
                <form
                  className="row form-dark"
                  id="form_quick_search"
                  name="form_quick_search"
                >
                  <div className="col">
                    <input
                      className="form-control"
                      id="name_1"
                      name="name_1"
                      placeholder="search item here..."
                      type="text"
                      onChange={(e) => setSearchKey(e.target.value)}
                      value={searchKey}
                    />{" "}
                    <button
                      id="btn-submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedSearchKey(searchKey);
                      }}
                    >
                      <i className="fa fa-search bg-color-secondary"></i>
                    </button>
                    <div className="clearfix"></div>
                  </div>
                </form>
                <div className="dropdownSelect three">
                  <div className="priceFilter">
                    <input
                      className="form-control"
                      id="name_1"
                      name="name_1"
                      placeholder="From..."
                      type="number"
                      onChange={(e) => setMinPrice(e.target.value)}
                      value={minPrice}
                    />
                    <div style={{ width: "15px" }} />
                    <input
                      className="form-control"
                      id="name_1"
                      name="name_1"
                      placeholder="To..."
                      type="number"
                      onChange={(e) => setMaxPrice(e.target.value)}
                      value={maxPrice}
                    />
                    <div style={{ width: "15px" }} />
                    <button
                      className="priceBtn"
                      onClick={() => {
                        setSelectedMinPrice(minPrice);
                        setSelectedMaxPrice(maxPrice);
                      }}
                    >
                      OK
                    </button>
                  </div>
                </div>
                <div className="dropdownSelect one">
                  <Select
                    className="select1"
                    styles={customStyles}
                    menuContainerStyle={{ zIndex: 999 }}
                    defaultValue={options[0]}
                    options={options}
                    // value={category}
                    onChange={(e) => {
                      setSelectedCategory(e.value);
                    }}
                  />
                </div>
                <div className="dropdownSelect two">
                  <Select
                    className="select1"
                    styles={customStyles}
                    defaultValue={options1[0]}
                    options={options1}
                    onChange={(e) => setSelectedStatus(e.value)}
                  />
                </div>
                <div className="dropdownSelect three">
                  <Select
                    className="select1"
                    styles={customStyles}
                    defaultValue={options2[0]}
                    options={options2}
                    onChange={(e) => setSelectedSort(e.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <ColumnNewRedux />
        </section>
      </div>

      <Footer />
    </div>
  );
};
export default Explore;

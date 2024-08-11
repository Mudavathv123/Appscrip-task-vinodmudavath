import { useEffect, useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";

import './productsection.css'
import ProductCard from "./ProductCard";
import FilterSection from "../FilterSection/FilterSection";

const constApiStatus = {
    initial: "INITIAL",
    process: "PROCESS",
    sucuss: "SUCUSS",
    failure: "FAILURE"
}

const ProductSection = () => {

    //https://fakestoreapi.com/products

    const [productList, setProductList] = useState([]);
    const [apiStatus, setApiStatus] = useState(constApiStatus.initial);
    const [hideFilter, setHideFilter] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setApiStatus(constApiStatus.process);
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(response);
            console.log(data);
            if (response.ok) {
                setProductList(data);
                setApiStatus(constApiStatus.sucuss);
            } else {
                setApiStatus(constApiStatus.failure);
            }
        }
        fetchData();
    }, [])

    const onClickHideFilter = () => {
        setHideFilter(prev => !prev);
    }

    const filterHeader = () => (
        <div className="filter-header-container">
            <div className="filter-products">
                <span className="filter-head-insmall">FILTER</span>
                <span className="total-products-count">{productList.length} ITEMS</span>
                <span className="filter-btn" onClick={onClickHideFilter}>
                    { hideFilter ? <MdOutlineKeyboardArrowLeft size="24" /> : <MdOutlineKeyboardArrowRight size="24" />  }
                    HIDE FILTER</span>
            </div>
            <select className = "select-container">
                <option name="RECOMMENDED" className="option-tex">RECOMMENDED</option>
                <option name="NEWEST FIRST" className="option-tex">NEWEST FIRST</option>
                <option name="POPULAR" className="option-tex">POPULAR</option>
                <option name="PRICE : HIGH TO LOW" className="option-tex">PRICE : HIGH TO LOW</option>
                <option name= "PRICE : LOW TO LOW" className="option-tex">PRICE : LOW TO LOW</option>
            </select>
        </div>
    )

    const productLoadingView = () => (
        <div className="loading-view-container">
            <ClipLoader
                color="blue"
                loading={true}
                cssOverride=""
                size={36}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )

    const productSuccessView = () => (
        <div className="success-view-container">
            <ul className="product-list-containar">
                {
                    productList.map(eachProduct => <ProductCard key={eachProduct.id} product={eachProduct} />)
                }
            </ul>
        </div>
    )

    const productFailureView = () => (
        <div className="failure-view-container">
            <img src="https://res.cloudinary.com/dnml2vs6t/image/upload/v1723271317/MyMiniProjectsImages/icf1cluyklfhjd69eskk.png" alt="notfound" className="not-found-img" />
            <h1 className="not-found-head">Opps! Some Error</h1>
            <p className="not-description">Please click on retry button to resolve this issue...</p>
            <button className="retry-btn">Retry</button>
        </div>
    )

    const productDisplayView = () => {

        switch (apiStatus) {
            case constApiStatus.process: return productLoadingView();
            case constApiStatus.sucuss: return productSuccessView();
            case constApiStatus.failure: return productFailureView();
            default: return null;
        }
    }

    return <div className="product-section-container">
       <hr/>
       {filterHeader()}
       <hr/>
        <div className = "products-and-filter">
            {hideFilter && <FilterSection /> }
            {productDisplayView()}
        </div>
    </div>
}

export default ProductSection
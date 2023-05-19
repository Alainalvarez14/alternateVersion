import React, { useState, useEffect } from "react";
import JSONData from './data.json'
import './products.css'

const Products = () => {

    const [hideExpired, setHideExpired] = useState(false);
    const [foodArray, setFoodArray] = useState([])
    const [drinkArray, setDrinkArray] = useState([])
    const allProducts = JSONData;

    useEffect(() => {
        setFoodArray(allProducts.filter(product => product.Type === "Food"));
        setDrinkArray(allProducts.filter(product => product.Type === "Drink"));
    }, []);

    useEffect(() => {
        if (hideExpired) {
            setFoodArray(foodArray.filter(product => new Date(product.Expiration) >= new Date()));
            setDrinkArray(drinkArray.filter(product => new Date(product.Expiration) >= new Date()));
        } else {
            setFoodArray(allProducts.filter(product => product.Type === "Food"));
            setDrinkArray(allProducts.filter(product => product.Type === "Drink"));
        }
    }, [hideExpired]);

    const convertDate = (product) => {
        const date = new Date(product.Expiration);
        const formattedDate = date.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        });
        return formattedDate;
    }

    return (
        <div class="main-container">
            <div class="page-title">
                <h1 class="title"><strong>Bon Appétit</strong></h1>
            </div>
            <div class="product-container">
                <div class="form-check form-switch form-check-reverse expired-toggle">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse" onClick={(e) => setHideExpired(e.target.checked)} />
                    <label class="form-check-label" for="flexSwitchCheckReverse">Hide Expired Products</label>
                </div>
                <div class="specific-product-section food-container">
                    <h1 class="product-header">FOOD</h1>
                    {foodArray.length && (
                        <div className="productCardContainer">
                            {foodArray.map(food => {
                                return <div>
                                    <div class="card productCard" style={{ opacity: new Date(food.Expiration) < new Date() ? '0.4' : '', pointerEvents: new Date(food.Expiration) < new Date() ? 'none' : 'cursor' }}>
                                        <img src={`${food.Image}`} class="card-img-top productImage" alt="..." />
                                        <div class="card-body">
                                            <h4 class="card-title">{food.Name}</h4>
                                            <p class="card-text"><strong>Category: </strong>{Object.values(food.Category).join(', ')}</p>
                                            <p class="card-text"><strong>Description: </strong>{food.Description}</p>
                                            <p class="card-text"><strong>Expiration Date: </strong>{convertDate(food)}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    )}
                </div>
                <div class="specific-product-section">
                    <h1 class="product-header">DRINKS</h1>
                    {drinkArray.length && (
                        <div className="productCardContainer">
                            {drinkArray.map(drink => {
                                return <div>
                                    <div class="card productCard" style={{ opacity: new Date(drink.Expiration) < new Date() ? '0.4' : '', pointerEvents: new Date(drink.Expiration) < new Date() ? 'none' : 'cursor' }}>
                                        <img src={`${drink.Image}`} class="card-img-top productImage" alt="..." />
                                        <div class="card-body">
                                            <h4 class="card-title">{drink.Name}</h4>
                                            <p class="card-text"><strong>Category: </strong>{Object.values(drink.Category).join(', ')}</p>
                                            <p class="card-text"><strong>Description: </strong>{drink.Description}</p>
                                            <p class="card-text"><strong>Expiration Date: </strong>{convertDate(drink)}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    )}
                </div>

            </div >
        </div>
    )
}

export default Products;

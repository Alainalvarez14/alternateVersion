import React, { useState } from "react";
import JSONData from './data.json'
import './products.css'

const Products = () => {

    const foodArray = JSONData.filter(product => product.Type === "Food");
    const drinkArray = JSONData.filter(product => product.Type === "Drink");

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
        <div>

            <div class="display-5">Food:</div>
            {foodArray.length && (
                <div className="productCardContainer">
                    {foodArray.map(food => {
                        return <div>
                            <div class="card productCard" style={{ opacity: new Date(food.Expiration) < new Date() ? '0.4' : '' }}>
                                <img src={`${food.Image}`} class="card-img-top productImage" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{food.Name}</h5>
                                    <p class="card-text">{food.Category}</p>
                                    <p class="card-text">{food.Description}</p>
                                    <p class="card-text">{convertDate(food)}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            )}

            <div class="display-5 drinkHeader">Drink:</div>
            {drinkArray.length && (
                <div className="productCardContainer">
                    {drinkArray.map(drink => {
                        return <div>
                            <div class="card productCard" style={{ opacity: new Date(drink.Expiration) < new Date() ? '0.4' : '' }}>
                                <img src={`${drink.Image}`} class="card-img-top productImage" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{drink.Name}</h5>
                                    <p class="card-text">{drink.Category}</p>
                                    <p class="card-text">{drink.Description}</p>
                                    <p class="card-text">{convertDate(drink)}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            )}

        </div>
    )
}

export default Products;

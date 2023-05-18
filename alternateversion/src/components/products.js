import React from "react";
import JSONData from './data.json'

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
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

            {foodArray.length && (
                <div> Food:
                    {foodArray.map(food => {
                        return <div class="card" style={{ width: '18rem', marginTop: '1rem' }}>
                            <img src={`${food.Image}`} class="card-img-top" alt="..." style={{ height: '20rem' }} />
                            <div class="card-body">
                                <h5 class="card-title">{food.Name}</h5>
                                <p class="card-text">{food.Category}</p>
                                <p class="card-text">{food.Description}</p>
                                <p class="card-text">{convertDate(food)}</p>
                            </div>
                        </div>
                    })}
                </div>
            )}

            {drinkArray.length && (
                <div>Drink:
                    {drinkArray.map(drink => {
                        return <div class="card" style={{ width: '18rem', marginTop: '1rem' }}>
                            <img src={`${drink.Image}`} class="card-img-top" alt="..." style={{ height: '20rem' }} />
                            <div class="card-body">
                                <h5 class="card-title">{drink.Name}</h5>
                                <p class="card-text">{drink.Category}</p>
                                <p class="card-text">{drink.Description}</p>
                                <p class="card-text">{convertDate(drink)}</p>
                            </div>
                        </div>
                    })}
                </div>
            )}

        </div>
    )
}

export default Products;


//load jsonData
// map through all products in JsonData and check if they are food or drink
// if Food, display in food column (or row if you want make an accordion one on top of the other)
// if Drink, display in drink column (or row if you want make an accordion one on top of the other)

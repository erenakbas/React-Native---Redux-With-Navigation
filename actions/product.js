// import { API_BASE } from '../config/env';
import axios from 'axios'; 
export var FETCH_PRODUCT_PENDING = "FETCH_PRODUCT_PENDING";
export var FETCH_PRODUCT_FULFILLED = "FETCH_PRODUCT_FULFILLED";
export var FETCH_PRODUCT_REJECTED = "FETCH_PRODUCT_REJECTED";
export function fetchProducts() {
    return function (dispatch) { 
        dispatch({
            type: "FETCH_PRODUCT",
            payload:axios.get("http://erenakbas.com/Best/Login/Book").then(function (result) { 
                return result.data;
            })

        });
    };
}
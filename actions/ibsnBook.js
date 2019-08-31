import axios from 'axios'; 
export var FETCH_BOOK_PENDING = "FETCH_BOOK_PENDING";
export var FETCH_BOOK_FULFILLED = "FETCH_BOOK_FULFILLED";
export var FETCH_BOOK_REJECTED = "FETCH_BOOK_REJECTED";
export function fetchBook(ibsn) {
    return function (dispatch) { 
        dispatch({
            type: "FETCH_BOOK",
            payload:axios.get("https://openlibrary.org/api/books?bibkeys=ISBN:"+ibsn+"&jscmd=data&format=json")
            .then(function (result) { 
                return result.data;
            })

        });
    };
}
    // https://openlibrary.org/api/books?bibkeys=ISBN:9789750719387&jscmd=data&format=json
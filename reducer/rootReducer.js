import { combineReducers } from 'redux';
import product from './product';
import currentBook from './currentBook';
import ibsnBook from './ibsnBook';

export default combineReducers({
    product: product,
    currentBook:currentBook,
    ibsnBook:ibsnBook
});
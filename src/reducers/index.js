import {combineReducers} from 'redux'
import Valuesearch from './ValuesearchReducer'
import dialogModalAuthReducer from './dialogModalAuthReducer'
import thongTinLoginReducer from './thongTinLoginReducer'
const allReducer=combineReducers({
    Valuesearch,
    dialogModalAuthReducer,
    thongTinLoginReducer
})
export default allReducer;
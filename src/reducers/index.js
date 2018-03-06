import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
export default combineReducers({
    //librariesというreducer、arrayをreturnする(LibraryReducerはarray)
    //このlibrariesというキーはreactでLibraryReducerを表示する時に必要となる
    libraries: LibraryReducer,
    selectedLibraryId:SelectionReducer
})
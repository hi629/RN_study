//state, actionの順で引数を入れる
// state undefinedがreturnされるのでnullを入れる
export default (state = null, action) => {
    switch (action.type){
        case 'select_library':
            return action.payload;
        default:
            //初期値がどうなのか必ず返す
            return state;
    }
    // undefinedがreturnされるのでダミーではnullを入れる
    // return null;
}
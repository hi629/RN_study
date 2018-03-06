//actionを内包するfuncitonをaction creatorという
export const selectedLibrary = (libraryId) =>{
    //actionはtypeが入ったobjectをreturnする
    return {
        type:"select_library",
        payload:libraryId
    }
}
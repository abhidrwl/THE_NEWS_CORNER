const reducer= (state,action) =>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true,
            };
        case "GET_STORIES":
            return{
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            };
            case "SEARCH_QUERY":
                return {
                    ...state,
                    query:action.payload,

                };
                case "NEXT_PAGE":
                    let pageNumInc = state.page + 1;

                    if(pageNumInc >= state.nbPages){
                        pageNumInc = 0;
                    }

                    return{
                        ...state,
                        page: state.page + 1,
                    };

                    case "PREV_PAGE":
                        let pageNum= state.page -1;
                        if(pageNum <= 0){
                            pageNum=0;
                        }
                    return{
                        ...state,
                        page: state.page-1,
                    }
    }
    
    return state;

};

export default reducer;
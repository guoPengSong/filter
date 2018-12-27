import Vue from "vue";
import Vuex from 'vuex';
import table from '../data/table';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        showMask: false,
        showMessage: false,

        selectedRows: table.selectedRows,
        rows: table.rows,
        titles: table.titles,
        dict: table.dict,
        shows: table.shows,

        refresh: false
    },
    mutations: {

        setShowMask(state,option){
            if(option.titles){
                if(option.method === 1){ //cancel
                    state.refresh = !state.refresh;
                } else if(option.method === 2){ //save
                    for(let i in table.titles){
                        let titleOrigin = table.titles[i];
                        let titleMenu = option.titles[i];
                        titleOrigin.selected.splice(0, titleOrigin.selected.length);
                        titleMenu.selecting.forEach(p => {
                            titleOrigin.selected.push(p);
                        })
                    }
                    state.refresh = !state.refresh;
                } else if(option.method === 3){
                    for(let i in table.titles){
                        let titleOrigin = table.titles[i];;
                        titleOrigin.selected.splice(0, titleOrigin.selected.length);
                    }
                    state.refresh = !state.refresh;
                }
            }

            state.showMask=option.show;
        },
        setShowMessage(state,val){
            state.showMessage=val;
        }
    }
});
export default store;

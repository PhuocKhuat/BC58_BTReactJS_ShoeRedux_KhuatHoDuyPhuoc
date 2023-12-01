import { shoeArr } from "../data";

//REDUX
const initialState = {
    shoeArr: shoeArr,
    cart: [],
    detail: shoeArr[0],
} 

export let storeReducer = (state = initialState, { type, payload, number }) => {
  switch (type) {
    case "ADD":{
      let cloneCart = [...state.cart];
        let index = cloneCart.findIndex(item => item.id === payload.id);
        //Tìm vị trí của payload (shoe).
        if(index === -1){
          //Chưa tìm thấy vị trí.
            let newShoe = {...payload, soLuong: 1};
            cloneCart.push(newShoe);
        } else{
            cloneCart[index].soLuong++;
        }
        //Update cart rỗng ban đầu gán bằng cloneCart.
        state.cart = cloneCart;
        return {...state};
    }
    case "DELETE":{
      let cloneCart = [...state.cart];
      //Lọc mất là xoá phần tử được ấn và giữ lại các phần tử khác.
      let cartFilter = cloneCart.filter(item => item.id !== payload.id); 
      //Update cart rỗng bằng cart đã được xoá.
      state.cart = cartFilter;
      return {...state};
    }
    case "MINUS":{
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex(item => item.id === payload.id);
        //Tìm vị trí của payload (shoe).
        if(index === -1){
          //Chưa tìm thấy vị trí.
            let newShoe = {...payload, soLuong: 1};
            cloneCart.push(newShoe);
        } else if(cloneCart[index].soLuong > 1){
            cloneCart[index].soLuong--;
        }
        //Update cart rỗng ban đầu gán bằng cloneCart.
        state.cart = cloneCart;
        return {...state};
    }
    case "PLUS":{
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex(item => item.id === payload.id);
      if(index === -1){
        let newShoe = {...payload, soLuong: 1};
        cloneCart.push(newShoe);
      } else{
        cloneCart[index].soLuong++;
      }
      //Mới gán lại bảng chính cart bằng bản copy.
      state.cart = cloneCart;
      //Copy lại bản chính và trả về.
      return {...state};
    }
    case "CHANGEDETAIL":{
      //Update dữ liệu giống setState.
      state.detail = payload;
      return {...state};
    }

  default:
    return state;
  }
}

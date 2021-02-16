import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_FEATURE:
      // console.log("Hello from reducer: ADD_FEATURE with",action.payload)
      // console.log({...state, car: {...state.car, features: [...state.car.features, state.additionalFeatures.filter(x => x.id === action.payload)[0]]}})
      const thisFeature = state.additionalFeatures.filter(x => x.id === action.payload)[0];
      return {
        ...state,
        car: { ...state.car, features: [...state.car.features, thisFeature]},
        additionalPrice: state.additionalPrice + thisFeature.price
      };
    case REMOVE_FEATURE:
      const thisOne = state.additionalFeatures.filter(x => x.id === action.payload)[0];
      return {
        ...state,
        car: { ...state.car, features: state.car.features.filter(x => x !== thisOne)},
        additionalPrice: state.additionalPrice - thisOne.price,
      }
    default:
      return state
  }
}
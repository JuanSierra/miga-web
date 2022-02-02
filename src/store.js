import createStore from "teaful";

export const { useStore } = createStore({
  counter: 0,
  loading: true,
  error: false,
});
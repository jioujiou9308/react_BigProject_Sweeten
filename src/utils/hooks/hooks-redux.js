import { useSelector, useDispatch } from "react-redux";
import { updateCourse, updateProduct } from "../../redux/renderSlice";
import { updateUser, updateCart, updateFavorite } from "../../redux/userSlice";

function hookMaker(sliceName, key, action) {
  return () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state[sliceName][key]);
    const setData = (payload) => {
      dispatch(action(payload));
    };
    return [data, setData];
  };
}

// NOTE render slice
export const useCourseState = hookMaker("render", "courseList", updateCourse);
export const useProductState = hookMaker(
  "render",
  "productList",
  updateProduct
);

//NOTE user slice
export const useUserState = hookMaker("user", "user", updateUser);
export const useCartState = hookMaker("user", "cart", updateCart);
export const useFavoriteState = hookMaker("user", "favorite", updateFavorite);

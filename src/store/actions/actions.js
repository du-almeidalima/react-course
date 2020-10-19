import { addIngredient, removeIngredient, fetchIngredients } from './burger-build.action';
import { purchaseOrder, purchaseOrderInit, fetchOrders } from "./order.action";
import { auth, authLogout, setAuthRedirectPath } from "./auth.action";

export const burgerBuilderActions = { addIngredient, removeIngredient, fetchIngredients};
export const orderActions = { purchaseOrder, purchaseOrderInit, fetchOrders };
export const authActions = { auth, authLogout, setAuthRedirectPath };

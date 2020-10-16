import { addIngredient, removeIngredient, fetchIngredients } from './burger-build.action';
import { purchaseOrder } from "./order.action";

export const burgerBuilderActions = { addIngredient, removeIngredient, fetchIngredients};
export const orderActions = { purchaseOrder };

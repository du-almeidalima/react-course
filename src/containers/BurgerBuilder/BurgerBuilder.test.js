import React from "react";
import { shallow } from 'enzyme';
import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

describe('<BurgerBuilder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <BurgerBuilder onFetchIngredients={() => { }}/> );

  });

  it('should render BuildControls', () => {
    const props = {
      ingredients: { salad: 0 },
      totalPrice: 4
    }

    wrapper.setProps(props);
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});

/*
 * Testing a container that is connected to Redux Store may be tricky, but in the end, the store properties, such as
 * the reducers and state is mapped to the Component Props. So we can rely that the store is working correctly and mock
 * the props. But for doing so, we need to import the component not connected to the store. To do so, we can add a
 * named export for the component with the default export.
 *    "export class BurgerBuilder extends Component { ... }
 */

import React from 'react';
import { shallow } from 'enzyme';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';


describe('<NavigationItems />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('should render two <NavigationItem /> elements if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should render three <NavigationItem /> elements if authenticated', () => {
    // wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({isAuth: true});
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should display an exact logout button', () => {
    wrapper.setProps({isAuth: true});
    expect(wrapper.contains(<NavigationItem link={'/logout'}>Logout</NavigationItem>)).toEqual(true);
  });
});

/*
 * React uses Jest as it test tool by default. But in order to run tests on components we need to import a DOM tool
 * for that we can use Enzyme, but we need to install an extra package according to the React version
 *    npm install --save enzyme react-test-renderer enzyme-adapter-react-16
 *
 * Enzyme will provide tools to work with DOM search for example.
 *
 * Furthermore we need to adjust the setupTests.js file in the root folder as it's right now.
 */

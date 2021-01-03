import React from 'react';
import {shallow} from 'enzyme';
import Login from '../components/Login'

describe('User Login Component',() =>{
    it('should render without throwing an error',() =>{
        expect(shallow(<Login/>).find('form.login').exists())
            .toBe(true)
    })
})

it('renders an email input',() =>{
    expect(shallow(<Login/>).find('#email').length).toEqual(1)
})
it('renders a password input',() =>{
    expect(shallow(<Login/>).find('#password').length).toEqual(1)
})

describe('email input',() =>{
    it('should respond to change event and the state of the login component should update',()=>{

        const wrapper = shallow(<Login/>);
        wrapper.find('#email').simulate('change',{target:{name:'email',value:'mal@gmail.com'}});

        expect(wrapper.state('email')).toEqual('mal@gmail.com')
    })
})

describe('password input',() =>{
    it('should respond to change event and the state of the login component should update',()=>{

        const wrapper = shallow(<Login/>);
        wrapper.find('#password').simulate('change',{target:{name:'password',value:'mal1234'}});

        expect(wrapper.state('password')).toEqual('mal1234')
    })
})
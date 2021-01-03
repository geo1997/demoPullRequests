import React from 'react';
import {shallow} from 'enzyme';
import AddEvent from '../components/addEvents'



describe('Add Event Component',() =>{
    it('should render without throwing an error',() =>{
        expect(shallow(<AddEvent/>).find('form.addEvent').exists())
            .toBe(true)
    })
})

it('renders an text input',() =>{
    expect(shallow(<AddEvent/>).find('#eventName').length).toEqual(1)
})
it('renders a date input',() =>{
    expect(shallow(<AddEvent/>).find('#date').length).toEqual(1)
})

describe('text input',() =>{
    it('should respond to change event and the state of the add Event component',()=>{

        const wrapper = shallow(<AddEvent/>);
        wrapper.find('#eventName').simulate('change',{target:{name:'eventName',value:'Wedding'}});

        expect(wrapper.state('eventName')).toEqual('Wedding')
    })
})



import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Pages/Home/Home';
import Boards from './Pages/Boards/Boards';
import CreateColumnModal from './Pages/Modals/CreateColumnModal/CreateColumnModal';
import CreateCard from './Pages/Modals/CreateCard/CreateCard';

configure({ adapter: new Adapter() });
// Nav Bar testing cases:
// describe("Navbar Testing",()=>{
//   test("should have home as well as createBoard for Navigation",()=>{
//     const wrapper=mount(<App />);
//     expect(wrapper.find("#list1").text()).toBe('Home');
//     expect(wrapper.find("#list2").text()).toBe('Create a Board');
//     expect(wrapper.find("h1").text()).toBe('Pro-Organizer');
//   });
  
// });
// Create board page test cases


  // Home page test cases
  // describe("Home Page",()=>{
  //   test("")
  // })
  //

  // Board page test cases:
//   describe("Add Column testing",()=>{
//     it('Should have column name with id column_name and type text',()=>{
//     const wrapper=mount(<CreateColumnModal/>);
//     expect(wrapper.find("input#column_name")).toHaveLength(1);
//     expect(wrapper.find("#column_name").prop('type')).toEqual("text");
//   })
//   it('Should have button with id CreateColumn',()=>{
//     const wrapper=mount(<CreateColumnModal/>);
//     expect(wrapper.find("button#CreateColumn")).toHaveLength(1);
//     expect(wrapper.find("#CreateColumn").text()).toBe('Add Column');
//    })
// });

// Add a card test case
describe('Add Card testing',()=>{
  // it('Should have Add a card' ,()=>{
  //   const wrapper=mount(<Boards/>);
  //   console.log(wrapper.debug());
  //   expect(wrapper.find("button.addButton").text()).toBe('Add a Card');
    
  // })
  // it('should have Title input as title,Description input as description, input due_date and type date',()=>{
  //   const wrapper=mount(<CreateCard/>);
  //   expect(wrapper.find('input#title').prop('type')).toEqual("text");
  //   expect(wrapper.find('input#description').prop('type')).toEqual("text");
  //   expect(wrapper.find('input#due_date').prop('type')).toEqual("date");

  // })


})

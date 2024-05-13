import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./TodoList";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTaks from "./AddTaks";


class App extends React.Component{
    render(){
      return (
        <section id="todo">
            <BrowserRouter>
                <Routes>
                    <Route path="add-task" element={<AddTaks />} />
                    <Route path="/:filter?" element={<TodoList />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </section>
      )
    }
}

export default App
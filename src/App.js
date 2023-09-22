import React from "react";
import {Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import ExcerciseDetail from "./pages/ExcerciseDetail";
import Footer from "./component/Footer";

const App = () => {

    return (
        <Box width="400px" sx={{width: {xl: '1488px'}}} m='auto'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/excercise/:id" element={<ExcerciseDetail />}/>
            </Routes>
            <Footer />
        </Box>
    )
}
export default App;
import React from 'react';
import Home from './routes/home/home';
import About from './routes/about/about';
import TodoList from './routes/todolist/todolist';
import Coin from './routes/coin/coin';
import Movie from './routes/movie/movie';
import MovieDetail from './routes/movie/movie_detail';
import Movie2 from './routes/movie/movie2';
import MovieDetail2 from './routes/movie/movie_detail2';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function _() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:movie_id" element={<MovieDetail />} />
        <Route path="/movie2" element={<Movie2 />} />
        <Route path="/movie2/:movie_id" element={<MovieDetail2 />} />
        {/* <Route path="*" element={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  )
}
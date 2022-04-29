import React, { useEffect, useState } from 'react';
import { CategoryButton } from '../components/CategoryButton';
import { MovieCard } from '../components/MovieCard';
import popcornImg from '../assets/images/팝콘.jpeg'
import seatsImg from '../assets/images/좌석.jpeg'
import glassesImg from '../assets/images/쓰리디안경.jpeg'
import cokeImg from '../assets/images/콜라.jpeg'

const API_KEY = '38929604d7530eb8740588362b5182d2';

export type Category ={
  id: number;
  label: string;
  url: string;
  image: string;
};

const CATEGORY_LIST = [
  {id: 0, label: '인기영화', url: '/popular', image: popcornImg},
  {id: 1, label: '현재 상영작', url:'/now_playing', image: seatsImg},
  {id: 2, label: '개봉 예정작', url:'/upcoming', image: glassesImg},
  {id: 3, label: '높은 순위', url:'/top_rated', image: cokeImg},
];

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
 };
 

export const HomePage = () => {
 const [isLoading, setIsLoading] = useState(true);
 const [movies, setMovies] = useState<Movie[]>([]);
 const [categoryIndex, setCategoryIndex] = useState(0);

 const setCategory = (index:number) => {
   setCategoryIndex(index);
 }


const getData = async (categoryIndex:number) => {
  const url = `https://api.themoviedb.org/3/movie${CATEGORY_LIST[categoryIndex].url}?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  if (response.status === 200) { 
   const data = await response.json();

   setMovies(data.results);
  } else {
    throw new Error ("데이터를 받아오지 못했습니다.")
  }
  setIsLoading(false);
};

useEffect(()=>{
 getData(categoryIndex);
}, [categoryIndex]);

return (
  <div className="m-4 space-y-10">
    <div className="className=">
      <div className="space-y-4">
        <div className="text-2xl font-bold">New</div>
        <img
          src="https://www.fetv.co.kr/data/photos/20220104/art_16433300722432_d92f2b.jpg"
          alt=""
          className="w-full h-72 object-cover rounded-2xl"
        />
      </div>
    </div>

   
    <div>
        <div className="space-y-4">
          <div className="text-2xl font-bold">Category</div>

        <div className="flex space-x-6">
          {CATEGORY_LIST.map((data) => 
          <CategoryButton key={data.id} category={data} onClick={setCategory} isSelected={data.id === categoryIndex}/>)}
          </div>
        </div>
      </div>

    {!isLoading && movies.map((movie) =>(
        <MovieCard key={movie.id} movie={movie} />
        ))}

        
        <div>
          <div className="text-2xl font-bold mb-4">인기 배우</div>
          <img src="https://image.ytn.co.kr/general/jpg/2022/0112/202201121036214934_d.jpg" 
          alt=""
          className="w-full h-30 object-cover rounded-xl"
          />
          <div className="mt-4">
            <div className="text-lg font-semibold">김태리</div>
            <div className="text-sm text-gray-500">
            승리호 - 장선장(장현숙) 역<br />
            리틀 포레스트 - 혜원 역<br />
            1987 - 연희 역<br />
            아가씨 - 숙희 역 <br />
            
            <div className="m-4">
            <div className="bg-gray-800 rounded-md text-white text-center py-2.5 px-4">자세한 작품 활동 알아보기</div>
            
            </div>
            </div>
            </div></div>
  
</div>
);
};

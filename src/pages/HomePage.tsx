import React from 'react';
import { TextField } from '../components/TextField';

export const HomePage = () => {
  return (
    <div className="m-4 space-y-7">
      <div className="space-y-4">
        <div className="text-2xl font-bold">New</div>
        <img
          src="https://media.istockphoto.com/photos/pancakes-with-berries-and-maple-syrup-picture-id161170090?b=1&k=20&m=161170090&s=170667a&w=0&h=pgtnBdQKLvZz7WOmBcZhY_EXDGeATOS2jc_FJF9GbnE="
          alt=""
          className="w-full h-72 object-cover rounded-2xl"
        />
      </div>

      <div className="space-y-4">
        <div className="text-2xl font-bold">카테고리</div>

        <div className="flex space-x-6">
          <div>
            <img
              src="https://media.istockphoto.com/photos/ramen-asian-noodle-in-broth-with-beef-tongue-meat-mushroom-and-egg-picture-id1135293039?b=1&k=20&m=1135293039&s=170667a&w=0&h=2nXYTz8LZgPUntRvafqWDGgLlhm8TZ8sAzHAGV9K7Qk="
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">일식</div>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/photos/chinese-food-blank-background-picture-id545286388?b=1&k=20&m=545286388&s=170667a&w=0&h=NBSXjfSVP0GdwAOBYELxOFwoYZAXYya1HTGUJYBkh8I="
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">중식</div>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/photos/dolsot-bibimbap-picture-id155385236?b=1&k=20&m=155385236&s=170667a&w=0&h=48cS_TFUhrK1y4sPJ6j57EVLrnE2Bm9JxMhLNmaGplE="
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">한식</div>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/photos/directly-above-view-of-tapas-picture-id1224986732?b=1&k=20&m=1224986732&s=170667a&w=0&h=3LH33ccCkucCXBDrQ_ZuHoeWwmHdQIOi3VzCy-CEb8A="
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">양식</div>
          </div>
          <div>
            <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">디저트</div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-2xl font-bold mb-4">#빠른배달</div>

        <div className="border p-4 rounded-md">
           <div>
            <img
              src="https://blog.kakaocdn.net/dn/FCZXI/btq99nMWgPw/1wTdabKFkvCDELZKWlBCh1/img.png"
              alt=""
              className="w-full h-68 object-cover rounded-xl"
            />
            <div className="text-lg font-semibold mt-2">까이식당(★★★★☆)</div>
              <div className="text-gray-500 mt-2">
              서울 서대문구 이화여대2가길 24 1층 <br/>
              "싱가폴식 치킨라이스를 전문으로 하는 동남아음식점입니다."
              </div>
           <div className="mt-4 flex spce-x-3 justify-end">
            <div className="bg-yellow-500 rounded-md text-white text-center py-2.5 px-4 mr-4">
             주문하기
            </div>
            <div className="bg-yellow-500 rounded-md text-white text-center py-2.5 px-4 mr-4">
             리뷰
            </div>
            <div className="border border-yellow-500 text-yellow-500 rounded-md text-center py-2.5 px-4">
            ★
            </div>
        </div>
        </div>
      </div>
     </div>
    <div className="space-y-4"></div>
     <div className="text-2xl font-bold mb-4">#내주변식당</div>
        <div className="flex">
         <img
          src="https://lh5.googleusercontent.com/p/AF1QipNSEb3NXBUB3-0_cIonQOyhNdqXhWjWUvlHJ_kf=w1080-k-no"
          alt=""
          className="w-60 h-40 object-cover rounded-xl mb-4"/>
         <div className="ml-4 font-semibold text-lg">
           돈천동 식당
           <div className="mt-2 font-normal column text-base">
            최근 리뷰 <br/>
            "맛있어요! 당면 조금 들어가있고 국물이 많은 편은 아닙니당.. 김치랑 먹다가 모자랄 수 있으니 돈까스 소스 담아오시는걸 추천드립미다"
          </div>
           </div>
        </div>

        <div className="border p-4 rounded-md">
        <img
          src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MDNfMTAz%2FMDAxNTIyNzQzNjA0Mzg0.A91B8E_Ce3TRqvGG6HL6qlNOWcsOlCZvqhDvo_0F_1Eg.eMhiji0J1n3jSrUMGgkQnyt5oDJ8ohe4Q3XNJ9i-LfQg.JPEG.desperado960%2F2018-03-28-17-27-40.jpg"
          alt=""
          className="w-full h-68 object-cover rounded-xl"/>

        <div className="mt-4 font-semibold text-lg">이화여대 돈천동</div>
        <div className="text=gray-500 mt-4">
          서울 서대문구 이화여대길 52-39 지하 1층 <br/>
          "이대역 근처, 맛있지만 저렴한 돈천동식당! 김치나베돈까스"
          </div>

        <div className="mt-10">
          <div className="bg-yellow-500 rounded-3xl text-white text-center py-2.5 px-4 mr-4">
           상세 보기
          </div>
        </div>
        </div>
   </div>
  );
};

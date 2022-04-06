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
        <div className="text-2xl font-bold">Category</div>

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
        </div>
      </div>

      <div>
        <div className="text-2xl font-bold mb-4">List</div>

        <div className="border p-4 rounded-md">
           <div>
            <img
              src=""
              alt=""
              className="w-full h-68 object-cover rounded-xl"
            />
            <div className="text-xl mt-10">
              Card Title
              <div className="text-gray-500">
              </div>
            </div>
           <div className="mt-4 flex spce-x-3 justify-end">
            <div className="bg-gray-800 rounded-md text-white text-center py-2.5 px-4">
             Button
            </div>
            <div className="bg-gray-800 rounded-md text-white text-center py-2.5 px-4">
             Button
            </div>
          </div>
        </div>
      </div>
     </div>
   </div>
  
  );
};

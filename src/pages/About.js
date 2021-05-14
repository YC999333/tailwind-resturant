import React from 'react';

function About() {
  return (
    <div className='h-full bg-about-image backdrop-filter backdrop-blur-md'>
      <div className='text-center text-gray-800  mx-auto h-48 text-2xl p-4'>
        <p className='underline text-3xl p-3 mt-5 mb-10'>History</p>
        <p className='p-3'>
          LaVuTa 創立於 2021 年 4 月，創辦人為 Pepsi
          跟踹兔。創立不久，即造成轟動，天天客滿至今
        </p>
        <p className='p-3'>從前菜到甜點，都深受大家喜愛</p>
        <p className='underline text-3xl mt-10'>Management Team</p>
      </div>
      <div className='grid place-items-center p-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-48'>
        <div className='w-10/12 h-4/6 max-w-md p-4 bg-white shadow-lg rounded-lg my-10 transform hover:scale-110'>
          <div className='flex justify-center -mt-16'>
            <img
              className='w-28 h-28  object-cover rounded-full border-2 border-indigo-500'
              src='http://daiduongrestaurant.com/wp-content/uploads/2019/12/BRT00145a.jpg'
            />
          </div>
          <div>
            <h2 className='text-gray-800 text-lg text-center font-semibold p-4'>
              Co-Founder
            </h2>
            <p className='text-gray-600 text-center p-4'>擁有豐富管理經驗</p>
          </div>
        </div>
        <div className='w-10/12 h-4/6 max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transform hover:scale-110'>
          <div className='flex justify-center -mt-16'>
            <img
              className='w-28 h-28 object-cover rounded-full border-2 border-indigo-500'
              src='https://upload.cc/i1/2021/05/10/wGmFIN.jpg'
            />
          </div>
          <div>
            <h2 className='text-gray-800 text-lg text-center font-semibold p-4'>
              Co-Founder & Chef
            </h2>
            <p className='text-gray-600 text-center p-4'>
              擁有多年料理經驗，並在大學任教，受不少女大學生喜愛
            </p>
          </div>
        </div>
        <div className='w-10/12 h-4/6 max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transform hover:scale-110'>
          <div className='flex justify-center -mt-16'>
            <img
              className='w-28 h-28 place-items-center object-cover rounded-full border-2 border-indigo-500'
              src='https://upload.cc/i1/2021/05/14/K98ocl.png'
            />
          </div>
          <div>
            <h2 className='text-gray-800 text-lg text-center font-semibold p-4'>
              總管經理
            </h2>
            <p className='text-gray-600 text-center p-4'>
              擁有多年服務經驗，擅長以"抓馬"吸引客人。來者不拒，很好凹!
            </p>
          </div>
        </div>
        <div className='w-10/12 h-4/6 max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transform hover:scale-110'>
          <div className='flex justify-center -mt-16'>
            <img
              className='w-28 h-28 object-cover rounded-full border-2 border-indigo-500'
              src='https://upload.cc/i1/2021/05/14/CfnypJ.png'
            />
          </div>
          <div>
            <h2 className='text-gray-800 text-lg text-center font-semibold p-4'>
              榮譽顧問
            </h2>
            <p className='text-gray-600 text-center p-4'>
              擅長"創意料理"，並擁有多樣獨門配方跟養蟲經驗
            </p>
          </div>
        </div>
        <div className='w-10/12 h-4/6 max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transform hover:scale-110'>
          <div className='flex justify-center -mt-16'>
            <img
              className='w-28 h-28 object-cover rounded-full border-2 border-indigo-500'
              src='https://upload.cc/i1/2021/05/14/xtQpFO.jpg'
            />
          </div>
          <div>
            <h2 className='text-gray-800 text-lg text-center font-semibold p-4'>
              咖啡調酒師
            </h2>
            <p className='text-gray-600 text-center p-4'>
              咖啡跟調酒高手，擁有一身筋肉，因此有筋肉咖啡師的稱號
            </p>
          </div>
        </div>
        <div className='w-10/12 h-4/6 max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transform hover:scale-110'>
          <div className='flex justify-center -mt-16'>
            <img
              className='w-28 h-28 object-cover rounded-full border-2 border-indigo-500'
              src='https://upload.cc/i1/2021/05/14/YCABqV.jpg'
            />
          </div>
          <div>
            <h2 className='text-gray-800 text-lg text-center font-semibold p-4'>
              最美麗的服務生
            </h2>
            <p className='text-gray-600 text-center p-4'>
              本店受歡迎的原因之一，超級正妹
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

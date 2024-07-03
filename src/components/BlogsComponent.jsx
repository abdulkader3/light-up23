import React from 'react'
import Copyright from './Copyright'

const BlogsComponent = () => {
  return (
    <div>
         <div className="flex justify-center mt-[100px]">
        <div className="w-[1300px] h-full bg-white rounded-[20px] flex flex-col">
          <div className="flex flex items-center gap-[50px] pl-[50px] pt-10">
            <h1 className=" text-[40px] font-roboto font-bold ">Blog</h1>
            <div className=" w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] "></div>
          </div>

          <div className=" w-full h-full flex justify-end ">
            <div className="w-full h-full flex justify-center mt-20">
              <div className="w-full h-full flex justify-between">
                <div className="flex flex-col gap-5">
                  <div className=" w-[350px] flex justify-center items-center h-[350px] rounded-md bg-[#eef5fa] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/1.png"
                      alt="one"
                    />
                  </div>

                  <div className=" w-[350px] flex justify-center items-center h-[350px] rounded-md bg-[#fff4f4] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/4.png"
                      alt="one"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex justify-center mt-20">
              <div className="w-full h-full flex justify-between">
                <div className="flex flex-col gap-5">
                  <div className=" w-[350px] flex justify-center items-center h-[350px] rounded-md bg-[#eef5fa] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/2.png"
                      alt="one"
                    />
                  </div>

                  <div className=" w-[350px] flex justify-center items-center h-[350px] rounded-md bg-[#fff4f4] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/5.png"
                      alt="one"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex justify-center mt-20">
              <div className="w-full h-full flex justify-between">
                <div className="flex flex-col gap-5">
                  <div className=" w-[350px] flex justify-center items-center h-[350px] rounded-md bg-[#eef5fa] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/3.png"
                      alt="one"
                    />
                  </div>

                  <div className=" w-[350px] flex justify-center items-center h-[350px] rounded-md bg-[#fff4f4] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/6.png"
                      alt="one"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Copyright/>
        </div>
      </div>
      
    </div>
  )
}

export default BlogsComponent

import React from 'react'
import Copyright from './Copyright'

const WorksComponent = () => {
  return (
    <>
    <div className="flex justify-center mt-[100px]">
        <div className="w-[1300px] h-full bg-white rounded-[20px] flex flex-col">
          <div className="flex flex items-center gap-[50px] pl-[50px] pt-10">
            <h1 className=" text-[40px] font-roboto font-bold ">Portfolio</h1>
            <div className=" w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] "></div>
          </div>

          <div className="w-full h-full flex justify-center mt-20 ">
            <div className=" w-[1100px] h-full ">
              <div className="flex justify-end gap-[30px] mb-[20px] ">
                <button className=" hover:text-[#DD2476] transition-all ">
                  All
                </button>
                <button className=" hover:text-[#DD2476] transition-all ">
                  Mockup
                </button>
                <button className=" hover:text-[#DD2476] transition-all ">
                  Graphic Design
                </button>
                <button className=" hover:text-[#DD2476] transition-all ">
                  Logo
                </button>
              </div>

              <div className=" w-full h-full flex justify-between ">
                {/* ================== */}

                <div className=" flex flex-col gap-5 ">
                  <div className=" w-[350px] h-[200px] flex justify-center items-center overflow-hidden rounded-md bg-[#fff4f4] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/one.png"
                      alt="one"
                    />
                  </div>
                  <div className=" w-[350px] flex justify-center items-center h-[350px] rounded-md bg-[#fff4f4] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/two.png"
                      alt="one"
                    />
                  </div>
                </div>

                {/* ============================================ */}

                <div className="flex flex-col gap-5">
                  <div className=" w-[350px] flex justify-center items-center h-[350px] rounded-md bg-[#eef5fa] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/three.png"
                      alt="one"
                    />
                  </div>

                  <div className=" w-[350px] flex justify-center items-center h-[350px] rounded-md bg-[#fff4f4] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/four.png"
                      alt="one"
                    />
                  </div>
                </div>

                {/* ========================== */}

                <div className="flex flex-col gap-5">
                  <div className=" w-[350px] flex justify-center items-center h-[350px] rounded-md bg-[#eef5fa] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/five.png"
                      alt="one"
                    />
                  </div>

                  <div className=" w-[350px] flex justify-center items-center h-[200px] rounded-md bg-[#eef5fa] shadow-md ">
                    <img
                      className=" rounded-xl "
                      src="photos/six.png"
                      alt="one"
                    />
                  </div>
                </div>

                {/* ========================== */}
              </div>
            </div>
          </div>
          <Copyright/>
        </div>
      </div>
      
    </>
  )
}

export default WorksComponent

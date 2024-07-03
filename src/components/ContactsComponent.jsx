import React from "react";
import Copyright from "./Copyright";

const ContactsComponent = () => {
  return (
    <>
      <div className="flex justify-center mt-[100px]">
        <div className="w-[1300px] h-full bg-white rounded-[20px] flex flex-col">
          <div className="flex flex items-center gap-[50px] pl-[50px] pt-10">
            <h1 className=" text-[40px] font-roboto font-bold ">Contact</h1>
            <div className=" w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] "></div>
          </div>

          <div className=" w-full h-full justify-center gap-10 mt-20 flex">
            <div className="flex flex-col gap-5">
              <div className=" bg-[#fff4f4] flex flex-col justify-center   w-[350px] h-[180px] rounded-md ">
                <div className=" text-start ">
                  <div className=" flex items-center pl-4 gap-3 ">
                    <img src="photos/phonethelast.png" alt="" />
                    <p className="text-[20px] font-semibold font-poppins">
                      phone
                    </p>
                  </div>
                  <p className=" pl-20">+88 01970713237</p>
                </div>
              </div>

              <div className=" bg-[#eef5fa] flex flex-col justify-center   w-[350px] h-[180px] rounded-md ">
                <div className=" text-start ">
                  <div className=" flex items-center pl-4 gap-3 ">
                    <img src="photos/emailthelast.png" alt="" />
                    <p className="text-[20px] font-semibold font-poppins">
                      Email
                    </p>
                  </div>
                  <p className=" pl-10">abdulkader.wabdeveloper@gmail.com</p>
                </div>
              </div>

              <div className=" bg-[#fff4f4] flex flex-col justify-center   w-[350px] h-[180px] rounded-md ">
                <div className=" text-start">
                  <div className=" flex items-center pl-4 gap-3 ">
                    <img src="photos/map.png" alt="" />
                    <p className="text-[20px] font-semibold font-poppins">
                      Address{" "}
                    </p>
                  </div>
                  <p className=" pl-20">Bangladesh , Dhaka</p>
                </div>
              </div>
            </div>
            <div className="w-[800px] h-[700px] rounded-xl bg-[#f8fbfb] ">
              <div className=" flex flex-col gap-5 pl-10 pt-5 ">
                <p className="text-[25px] font-normal font-poppins text-[#44566c] ">
                  I'm Always Open To Discussing Produuct
                </p>
                <h2 className=" text-[25px] font-bold font-poppins text-[#000] ">
                  design work or partnerships.
                </h2>
              </div>
            </div>
          </div>
          <Copyright/>
        </div>
      </div>
    </>
  );
};

export default ContactsComponent;

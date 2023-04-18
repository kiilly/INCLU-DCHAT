import "../styles/output.css";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlinePaperClip } from "react-icons/ai";
import InputEmoji from "react-input-emoji";

export default function message() {
  return (
    <div className="fixed z-10 mt-[3%]">
      <div className="w-[77.4%] h-[92vh] ml-80 grid grid-rows-4 justify-item-end bg-white shadow-lg rounded-2xl z-100">
        <div className="flex flex-col mt-5">
          <div className="flex justify-end mr-4">
            <div className="mr-2 py-3 px-4 bg-[#adb6fa] rounded-bl-3xl rounded-tl-3xl rounded-br-3xl  text-white">
              Welcome to group everyone !
            </div>
            <img
              src="https://cdna.artstation.com/p/assets/images/images/044/872/734/large/rodion-vlasov-fin1-1.jpg?1641375316"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div className="flex justify-start mb-12 ml-6 w-6/12">
            <img
              src="https://i.pinimg.com/originals/89/5a/09/895a09d473cdaa5af97490098f07ce52.png"
              className="object-cover h-8 w-8 mb-[5%] rounded-full"
              alt=""
            />
            <div className="ml-2 py-3 px-4 bg-[#A46ED3] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl text-white w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              at praesentium, aut ullam delectus odio error sit rem. Architecto
              nulla doloribus laborum illo rem enim dolor odio saepe,
              consequatur quas?
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="flex inputSize justify-between">
          <InputEmoji
            className=""
            value="text"
            onChange="setText"
            cleanOnEnter
            onEnter="handleOnEnter"
            placeholder="Type a message"/>
          <div className="absolute top-24 right-16 hidden group-after:flex  event"></div>

          <div className="w-fit h-fit gap-3 grid grid-cols-2">
            <label className="text-xl">
              <input type="file" className="scale-0 fixed z-0 " />{" "}
              <AiOutlinePaperClip />
            </label>
            <button type="submit" className="text-xl">
              <RiSendPlaneLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

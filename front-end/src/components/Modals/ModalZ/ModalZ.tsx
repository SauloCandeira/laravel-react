import { FormEvent, useState, useEffect }from 'react';
import axios from 'axios';
import Input  from '../Input/Input';
import InputX  from '../InputX/InputX';
import InputY from '../InputY/InputY';
import InputZ from '../InputZ/InputZ';
import InputW from '../InputW/InputW';

export type ModalZProps = {
  visible: Boolean
  onClose: any
}


export default function ModalZ({request, visible, onClose}:ModalZProps) {

  const [selectedOption, setSelectedOption] = useState("");

  const handleOnClose = (e) => {
    if(e.target.id === "container")
    onClose()
  };
  
  if (!visible) return null;

  return (
    <>


      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
        <div
          id="container"
          // className="fixed inset-0 z-10 overflow-y-auto"
          className="w-2/5  h-4/5 rounded-md bg-white"
          onClick={handleOnClose}
        >


          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="mb-6 group">
              <InputZ
                value={selectedOption}
                onChange={setSelectedOption}
                // value={text} 
                // onChange={(option) => setText(option)} 
                options={["Chennai", "Bangalore", "Mumbai"]} 
              />
            </div>
            <div className="mb-6 group">
              <InputZ
                  value={selectedOption}
                  onChange={setSelectedOption}
                  // value={text} 
                  // onChange={(option) => setText(option)} 
                  options={["Chennai", "Bangalore", "Mumbai"]} 
                />
            </div>
          </div>


          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="mb-6 group">
              
                <InputZ 
                  value={selectedOption}
                  onChange={setSelectedOption}
                  // value={text} 
                  // onChange={(option) => setText(option)} 
                  options={["Chennai", "Bangalore", "Mumbai"]} 
                />
              </div>

              <div className="mb-6 group">
                <Input />
              </div>
          </div>


          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="mb-6 group">
              
                <InputZ 
                  value={selectedOption}
                  onChange={setSelectedOption}
                  // value={text} 
                  // onChange={(option) => setText(option)} 
                  options={["Chennai", "Bangalore", "Mumbai"]} 
                />
              </div>

              <div className="mb-6 group">
              <InputZ 
                  value={selectedOption}
                  onChange={setSelectedOption}
                  // value={text} 
                  // onChange={(option) => setText(option)} 
                  options={["Chennai", "Bangalore", "Mumbai"]} 
                />
              </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6 group">
              
                <InputZ 
                  value={selectedOption}
                  onChange={setSelectedOption}
                  // value={text} 
                  // onChange={(option) => setText(option)} 
                  options={["Chennai", "Bangalore", "Mumbai"]} 
                />
              </div>

              <div className="mb-6 group">
              <InputW 
                value={selectedOption}
                onChange={setSelectedOption}
                // value={text} 
                // onChange={(option) => setText(option)} 
                options={["Chennai", "Bangalore", "Mumbai"]} 
              />
              </div>
          </div>


          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6 group">
              
                <InputZ 
                  value={selectedOption}
                  onChange={setSelectedOption}
                  // value={text} 
                  // onChange={(option) => setText(option)} 
                  options={["Chennai", "Bangalore", "Mumbai"]} 
                />
              </div>

              <div className="mb-6 group">
              <InputZ 
                  value={selectedOption}
                  onChange={setSelectedOption}
                  // value={text} 
                  // onChange={(option) => setText(option)} 
                  options={["Chennai", "Bangalore", "Mumbai"]} 
                />
              </div>
          </div>




        </div>
      </div>

    </>
  )
}
import { RxCross2 } from "react-icons/rx";
import { FaQuestionCircle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

interface CreateAccountProps {
  ShowSignup: (value: boolean) => void
  setIsLoggedIn: (value: boolean) => void
}


const CreateAccount = ({ ShowSignup, setIsLoggedIn }: CreateAccountProps) => {
  const handleSignup = () => {
    const user = true
    if (user) {
      setIsLoggedIn(true);
      toast.success("Signup successful")
    } else {
      setIsLoggedIn(false);
      toast.error("Please enter your details")
    }
  }
  return (
    <>
      <Toaster />
      <div className='w-[500px] bg-white mx-auto rounded-md shadow-xl absolute top-6 left-[400px] h-auto'>
        <div className='header flex justify-between items-start p-3 border-b'>
          <div>
            <h2 className=' text-3xl font-bold'>Sign Up</h2>
            <p className='text-gray-700 text-base font-normal'>It's quick and easy.</p>
          </div>
          <button onClick={() => ShowSignup(false)} className='text-3xl text-gray-600 hover:text-gray-400'><RxCross2 /></button>
        </div>
        <div className='body w-full p-3'>
          <form action="" className='space-y-2'>
            <div className='w-full flex gap-2'>
              <input className='w-full p-2 rounded-md border outline-cyan-600 focus:outline outline-[0.5px]' type="text" placeholder='First name' required />
              <input className='w-full p-2 rounded-md border outline-cyan-600 focus:outline outline-[0.5px]' type="text" placeholder='Surname' required />
            </div>
            <input required className=' w-full p-2 border rounded-md outline-cyan-600 focus:outline outline-[0.5px]' type="email" placeholder='Mobile number or email address' />
            <input required className=' w-full p-2 border rounded-md outline-cyan-600 focus:outline outline-[0.5px]' type="password" placeholder='New password' />
            <div>
              <p className=' flex items-center gap-1'>Date of birth <FaQuestionCircle /></p>
              <div className=' flex gap-3 w-full'>
                <select name="" id="" className='cursor-pointer border p-2 rounded-md flex items-center justify-between w-[150px]'>10
                  <option value="1">10</option>
                  <option value="1">11</option>
                  <option value="1">12</option>
                  <option value="1">13</option>
                  <option value="1">14</option>
                  <option value="1">15</option>
                  <option value="1">16</option>
                  <option value="1">17</option>
                  <option value="1">18</option>
                  <option value="1">19</option>
                  <option value="1">20</option>
                  <option value="1">21</option>
                  <option value="1">22</option>
                </select>
                <select className='border cursor-pointer p-2 rounded-md flex items-center justify-between w-[150px]' name="" id="">10
                  <option value="1">Jan</option>
                  <option value="1">Feb</option>
                  <option value="1">Mar</option>
                  <option value="1">April</option>
                  <option value="1">May</option>
                  <option value="1">June</option>
                  <option value="1">July</option>
                  <option value="1">Aug</option>
                  <option value="1">Set</option>
                  <option value="1">Oct</option>
                  <option value="1">Nov</option>
                  <option value="1">Dec</option>
                </select>
                <select className='border cursor-pointer p-2 rounded-md flex items-center justify-between w-[150px]' name="" id="">
                  <option value="1">2022</option>
                  <option value="1">2023</option>
                  <option value="1">2024</option>
                  <option value="1">2025</option>
                  <option value="1">2026</option>
                  <option value="1">2027</option>
                  <option value="1">2028</option>
                  <option value="1">2029</option>
                  <option value="1">2030</option>
                </select>
              </div>
            </div>
            <div>
              <p className='flex items-center gap-1'>Gender <FaQuestionCircle /></p>
              <div className=' flex justify-between gap-3 w-full'>
                <div className='border cursor-pointer p-2 rounded-md flex items-center justify-between w-[150px]'>
                  <input type="radio" id="html" name="fav_language" value="Female" />
                  <label htmlFor="Female">Female</label><br />
                  {/* <label htmlFor="Female">Female</label>
                  <input type="radio" /> */}
                </div>
                <div className='border cursor-pointer p-2 rounded-md flex items-center justify-between w-[150px]'>
                  <label htmlFor="Male">Male</label>
                  <input type="radio" />
                </div>
                <div className='border cursor-pointer p-2 rounded-md flex items-center justify-between w-[150px]'>
                  <label htmlFor="Custom">Custom</label>
                  <input type="radio" />
                </div>
              </div>
            </div>
          </form>
          <p className="text-sm text-gray-600 mt-2">People who use our service may have uploaded your contact information to Facebook. <a className="hover:underline text-blue-500" href="#">Learn more.</a></p>
          <p className="text-sm text-gray-600 mt-2">By clicking Sign Up, you agree to our <a className="hover:underline text-blue-500" href="#">Terms</a>, <a className="hover:underline text-blue-500" href="#">Privacy Policy</a> and <a className="hover:underline text-blue-500" href="#">Cookies Policy.</a> You may receive SMS notifications from us and can opt out at any time.</p>
          <button onClick={handleSignup} className='w-[220px] p-2 flex items-center justify-center text-white font-bold rounded-md  mx-auto bg-green-600 hover:bg-green-700'>Sign Up</button>
        </div>
      </div>
    </>

  )
}

export default CreateAccount
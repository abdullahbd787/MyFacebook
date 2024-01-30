import { FaEarthAmericas } from "react-icons/fa6";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { useEffect, useState } from "react";
import { CiPaperplane } from "react-icons/ci";

import "./post.scss";
import axios from "axios";
const social_icon = [
  {
    id: 1,
    icon: <AiFillLike />,
  },
  {
    id: 2,
    icon: <FcLike />,
  },
  {
    id: 3,
    icon: <SlLike />,
  },
];
interface Comment {
  id: number;
  text: string;
}
const Post = () => {
  const [like, setLike] = useState<number>(0);
  const [reaction, setReaction] = useState<any[]>([]);
  const [comment, setComment] = useState<string>(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const id = comments.length + 1;
      const comment: Comment = {
        id,
        text: newComment,
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };
  const handleComment = () => {
    setComment((comment: any) => !comment);
  };
  const handleReaction = (item: any) => {
    setReaction(() => [item]);
    setLike(1);
  };
  useEffect(() => {
    console.log(reaction);
  }, [reaction]);
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState<string[]>([]);

  function addActivity() {
    // setListData([...listData, activity]);
    // console.log(listData);
    if (activity !== "") {
      setListData((listData) => {
        const updateListData = [...listData, activity];
        console.log(updateListData);
        setActivity("");
        return updateListData;
      });
    } else {
      alert("Please provide something");
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2 bg-[#F0F2F5] mt-[57px]">
        <div className="box bg-white  p-3 border rounded-lg w-[420px] mx-auto mt-3">
          <div className="flex gap-2">
            <img
              src="/public/images/person_4.jpg.webp"
              className="w-11 rounded-full"
              alt=""
            />
            <input
              type="text"
              placeholder="Whats on your mind, Frank?"
              className="outline-none w-full p-2 bg-slate-100 rounded-3xl"
              required
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />{" "}
          </div>
          <br />
          <button
            onClick={addActivity}
            className="w-full p-[6px] rounded-lg bg-[#0861F2] text-base font-semibold text-white tracking-normal	"
          >
            Post
          </button>
        </div>
        {listData.map((data, i) => {
          return (
            <div key={i}>
              <div className="card bg-white p-3 border rounded-lg max-w-[420px] mx-auto">
                <div className="head flex justify-between items-center">
                  <div className="profile flex items-center justify-start gap-3">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="/public/images/person_4.jpg.webp"
                      alt="Profile_img"
                    />
                    <div className="name-">
                      <h6 className="font-semibold text-sm text-blue-500 ">
                        Frank and Marci
                      </h6>
                      <div className="details flex items-center justify-center gap-1">
                        <p className="text-xs font-semibold text-gray-500">
                          Published by Marci.{" "}
                        </p>
                        <span className="text-xs font-semibold text-gray-500">
                          june 25, 2024.
                        </span>
                        <button className="text-xs font-semibold text-gray-500">
                          <FaEarthAmericas />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="text-lg font-semibold text-gray-500">
                    <BsThreeDots />
                  </button>
                </div>
                <div className="body mt-2">
                  <div className="texts text-sm font-medium text-gray-700 mb-1">
                    {data}
                  </div>
                  <img
                    src="/public/images/Vesuvius_from_Pompeii_(hires_version_2_scaled).png"
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center justify-center gap-1">
                    <div className="flex">
                      {/* {reaction.length && reaction.map((item: any) => (
                        <span >{item.icon}</span>
                      ))} */}
                    </div>
                    <p className="text-xs text-gray-500">{like}</p>
                  </div>
                  <div className=" flex text-xs text-gray-500">
                    <p>61 Comments</p>&nbsp;<p>78 Shares</p>&nbsp;
                    <p>55 Views</p>
                  </div>
                </div>
                <div className="relative flex border-t p-2 justify-between items-center mt-2">
                  <div className="like-icon">
                    {/* <ul className="reacttion flex absolute -top-8 left-0  gap-1 items-center justify-center bg-slate-200 p-2 rounded-lg border">
                      {social_icon.map((item, id) => (
                        <li onClick={() => handleReaction(item)} key={id}>{item.icon}</li>
                      ))}
                    </ul> */}
                    <button className="main-like-icon">
                      {like ? (
                        <button onClick={() => setLike(0)}>
                          {" "}
                          <AiFillLike />
                        </button>
                      ) : (
                        <button onClick={() => setLike(1)}>
                          <SlLike />
                        </button>
                      )}
                    </button>
                  </div>
                  <button onClick={handleComment}>
                    <FaRegComment />
                  </button>
                  <button>
                    <IoIosShareAlt />
                  </button>
                </div>
                <div>
                  {comments.map((comment) => (
                    <div key={comment.id}>
                      <p>{comment.text}</p>
                    </div>
                  ))}
                </div>
                {comment && (
                  <div>
                    <input
                      className="outline-none"
                      type="text"
                      value={newComment}
                      onChange={handleInputChange}
                      placeholder="Add a comment..."
                    />
                    <button onClick={handleAddComment}>Add Comment</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="card bg-white p-3 border rounded-lg max-w-[420px] mx-auto">
          <div className="head flex justify-between items-center">
            <div className="profile flex items-center justify-start gap-3">
              <img
                className="h-10 w-10 rounded-full"
                src="/public/images/person_4.jpg.webp"
                alt="Profile_img"
              />
              <div className="name-">
                <h6 className="font-semibold text-sm text-blue-500 ">
                  Frank and Marci
                </h6>
                <div className="details flex items-center justify-center gap-1">
                  <p className="text-xs font-semibold text-gray-500">
                    Published by Marci.{" "}
                  </p>
                  <span className="text-xs font-semibold text-gray-500">
                    june 25, 2024.
                  </span>
                  <button className="text-xs font-semibold text-gray-500">
                    <FaEarthAmericas />
                  </button>
                </div>
              </div>
            </div>
            <button className="text-lg font-semibold text-gray-500">
              <BsThreeDots />
            </button>
          </div>
          <div className="body mt-2">
            <div className="texts text-sm font-medium text-gray-700 mb-1">
              In this age of technological advancement, often we need to cope
              with the rapid changes. Knowing about every single happening makes
              us updated and we consider it as a way to be smart.
            </div>
            <img
              src="/public/images/Vesuvius_from_Pompeii_(hires_version_2_scaled).png"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="flex items-center justify-center gap-1">
              {/* <div className="flex">
                {reaction.length && reaction.map((item: any) => (
                  <span >{item.icon}</span>
                ))}
              </div> */}
              <p className="text-xs text-gray-500">{like}</p>
            </div>
            <div className=" flex text-xs text-gray-500">
              <p>61 Comments</p>&nbsp;<p>78 Shares</p>&nbsp;<p>55 Views</p>
            </div>
          </div>
          <div className="relative flex border-t p-2 justify-between items-center mt-2">
            <div className="like-icon">
              {/* <ul className="reacttion flex absolute -top-8 left-0  gap-1 items-center justify-center bg-slate-200 p-2 rounded-lg border">
                {social_icon.map((item, id) => (
                  <li onClick={() => handleReaction(item)} key={id}>{item.icon}</li>
                ))}
              </ul> */}
              <button className="main-like-icon">
                {like ? (
                  <button onClick={() => setLike(0)}>
                    {" "}
                    <AiFillLike />
                  </button>
                ) : (
                  <button onClick={() => setLike(1)}>
                    <SlLike />
                  </button>
                )}
              </button>
            </div>
            <button onClick={handleComment}>
              <FaRegComment />
            </button>
            <button>
              <IoIosShareAlt />
            </button>
          </div>
          <div>
            {comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
          {comment && (
            <div>
              <input
                className="outline-none"
                type="text"
                value={newComment}
                onChange={handleInputChange}
                placeholder="Add a comment..."
              />
              <button onClick={handleAddComment}>Add Comment</button>
            </div>
          )}
        </div>
        {/* <div className="card p-3 border rounded-lg max-w-[420px] mx-auto">
          <div className="head flex justify-between items-center">
            <div className="profile flex items-center justify-start gap-3">
              <img className="h-10 w-10 rounded-full" src="/public/images/person_4.jpg.webp" alt="Profile_img" />
              <div className="name-">
                <h6 className="font-semibold text-sm text-blue-500 ">Frank and Marci</h6>
                <div className='details flex items-center justify-center gap-1'>
                  <p className="text-xs font-semibold text-gray-500">Published by Marci. </p>
                  <span className="text-xs font-semibold text-gray-500">june 25, 2024.</span>
                  <button className="text-xs font-semibold text-gray-500"><FaEarthAmericas /></button>
                </div>
              </div>
            </div>
            <button className="text-lg font-semibold text-gray-500"><BsThreeDots /></button>
          </div>
          <div className="body mt-2">
            <div className="texts text-sm font-medium text-gray-700 mb-1">
              In this age of technological advancement, often we need to cope with the rapid changes. Knowing about every single happening makes us updated and we consider it as a way to be smart.
            </div>
            <img src="/public/images/Vesuvius_from_Pompeii_(hires_version_2_scaled).png" alt="" />
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="flex items-center justify-center gap-1">
              <div className="flex">
                {reaction.length && reaction.map((item: any) => (
                  <span >{item.icon}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{like}</p>
            </div>
            <div className=" flex text-xs text-gray-500">
              <p>61 Comments</p>&nbsp;<p>78 Shares</p>&nbsp;<p>55 Views</p>
            </div>
          </div>
          <div className="relative flex border-t p-2 justify-between items-center mt-2">
            <div className="like-icon">
              <ul className="reacttion flex absolute -top-8 left-0  gap-1 items-center justify-center bg-slate-200 p-2 rounded-lg border">
                {social_icon.map((item, id) => (
                  <li onClick={() => handleReaction(item)} key={id}>{item.icon}</li>
                ))}
              </ul>
              <button className="main-like-icon">
                {like ? <button onClick={() => setLike(0)}> <AiFillLike /></button> : <button onClick={() => setLike(1)}><SlLike /></button>}
              </button>
            </div>
            <button><FaRegComment /></button>
            <button><IoIosShareAlt /></button>
          </div>
        </div> */}
        {/* <div className="card p-3 border rounded-lg max-w-[420px] mx-auto ">
          <div className="head flex justify-between items-center">
            <div className="profile flex items-center justify-start gap-3">
              <img className="h-10 w-10 rounded-full" src="/public/images/person_4.jpg.webp" alt="Profile_img" />
              <div className="name-">
                <h6 className="font-semibold text-sm text-blue-500 ">Frank and Marci</h6>
                <div className='details flex items-center justify-center gap-1'>
                  <p className="text-xs font-semibold text-gray-500">Published by Marci. </p>
                  <span className="text-xs font-semibold text-gray-500">june 25, 2024.</span>
                  <button className="text-xs font-semibold text-gray-500"><FaEarthAmericas /></button>
                </div>
              </div>
            </div>
            <button className="text-lg font-semibold text-gray-500"><BsThreeDots /></button>
          </div>
          <div className="body mt-2">
            <div className="texts text-sm font-medium text-gray-700 mb-1">
              In this age of technological advancement, often we need to cope with the rapid changes. Knowing about every single happening makes us updated and we consider it as a way to be smart.
            </div>
            <img src="/public/images/Vesuvius_from_Pompeii_(hires_version_2_scaled).png" alt="" />
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="flex items-center justify-center gap-1">
              <div className="flex">
                <AiFillLike />
                <FcLike />
              </div>
              <p className="text-xs text-gray-500">{ }</p>
            </div>
            <div className=" flex text-xs text-gray-500">
              <p>61 Comments</p>&nbsp;<p>78 Shares</p>&nbsp;<p>55 Views</p>
            </div>
          </div>
          <div className=" flex border-t p-2 justify-between items-center mt-2">
            <button ><SlLike /></button>
            <button><FaRegComment /></button>
            <button><IoIosShareAlt /></button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Post;

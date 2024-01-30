
import { sidebar } from '../data'
const Sidebar = () => {
  return (
    <div className="sidebar w-[300px] left-0 fixed pl-2 pb-3">
      <ul className="overflow-scroll h-screen font-semibold pt-2">
        {
          sidebar.map((item, id) => (
            <li key={id} className=""><a href={item.link}> {item.icon} {item.name} </a></li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar
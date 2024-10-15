import axios from 'axios'
import { useEffect, useState } from 'react';

const App = () => {

  const [data, setData] = useState([])
   
  const getData = async () => {
    const res = await axios.get('https://picsum.photos/v2/list')
    setData(res.data);
    console.log(data);
  };

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="w-full min-h-screen bg-zinc-900 p-10">
      <button
        onClick={getData}
        className="bg-blue-400 px-8 py-4 rounded-lg text-slate-100 text-2xl focus:ring-4 focus:outline-none focus:ring-gray-100"
      >
        Get Data
      </button>
      <div className='mt-10 p-5 rounded flex flex-wrap gap-8'>
        {data.map( (elem, idx) => {
          return <div key={idx} className="bg-zinc-800 flex justify-between w-72 p-2 rounded-md mb-3 flex-col">
            <img src={elem.download_url} alt="" />
            <h1 className='text-slate-100 mt-2'>{elem.author}</h1>
          </div>
        })}
      </div>
    </div>
  );
};

export default App;

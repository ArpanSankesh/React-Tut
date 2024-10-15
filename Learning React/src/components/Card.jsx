
const Card = ({name, age, profession, city, img}) => {
    console.log(img);
    
  return (
    <div className="w-80 h-96 bg-zinc-800 rounded-lg text-slate-100 p-5">
            <img src={img} alt=""  className="w-full h-52 rounded-lg"/>
            <h2 className="mt-3">{name}</h2>
            <h2 className="mt-3">{age}</h2>
            <h2 className="mt-3">{profession}</h2>
            <h2 className="mt-3">{city}</h2>

    </div>
  )
}

export default Card
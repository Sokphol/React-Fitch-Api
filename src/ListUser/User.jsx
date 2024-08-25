

const User = (props) => {
    const { img , name , age , id  , getID} = props;
    function handleClick(){
           getID(id);
    }
  return (
    <article>
           <img src={img}  alt="profile" />
           <h2>{name}</h2>
           <h2>{age}</h2>
          <button onClick={handleClick}> Remove </button>
    </article>
  )
}

export default User
function Card(props) {
  return <div className='bg-white rounded-md shadow-md'>
    {props.children}
  </div>;
}

export default Card;

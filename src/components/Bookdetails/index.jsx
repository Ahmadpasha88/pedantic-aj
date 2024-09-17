const Bookdetails = (props) => {
  const { data } = props;
  return (
    <div>
      <img src={data.imageUrl} />
      <p>{data.author}|</p>
    </div>
  );
};

export default Bookdetails;

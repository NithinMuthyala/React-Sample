const JsonItem = (props) => {
  const { eachData } = props;
  //   console.log(eachData);

  const { title, url, thumbnailUrl } = eachData;

  return (
    <div>
      <h1>{title}</h1>
      <a href={url}>
        <img src={thumbnailUrl} alt="nit" />
      </a>
      {/* <img src={url} alt="pro" />
      <img src={thumbnailUrl} alt="opu" /> */}
    </div>
  );
};

export default JsonItem;

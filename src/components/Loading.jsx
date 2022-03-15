import spinner from './assets/spinner.gif';

const Loading = () => {
  return (
    <div className="container">
      <img src={spinner} alt="Loading" className='loading-img' />
    </div>
  );
};

export default Loading;

import Dropdown from '../components/Dropdown'
import Pollchart from '../components/Pollchart';

const Home = () => {
    return (
    <>
      <div className='h-screen p-3 dark:bg-gray-800'>
          <div className='p-4 mb-8'>
            <h5 className="text-2xl mb-2 font-bold tracking-tight text-indigo-900 dark:text-white text-center">
              Hi! Welcome to Planet API.
            </h5>

            <p className="font-light text-2xl text-indigo-700 dark:text-gray-400 text-center">
              A simple and easy-to-use planetary information tool.
            </p>
          </div>

          <div className='flex-col p-4 rounded bg-white dark:bg-transparent'>
            <p className="font-normal text-gray-700 dark:text-gray-100 mb-3">
              1. Select a Planet from the dropdown menu that you want to know about.
            </p>

            <p className="font-normal text-gray-700 dark:text-gray-100">
              2. Tap submit and start learning about the planet of your choice.
            </p>

          
          </div>
          <div className='flex-col py-2'>

          <Dropdown />
          <Pollchart />
          </div>


      </div>
    </>);
  };
  
export default Home;
import Border from '../border/page';
import Wrapper from '../../components/wrapper/page';

export default function Projects() {
  return (
    <Wrapper>
      <h1 className="text-3xl underline font-bold text-center p-5">My-Projects</h1>
      <div className=' text-white bg-slate-700 pt-10 mt-20 border-2 rounded-lg'>
        <h1 className='text-center font-bold text-5xl'>Hackathon-1</h1>

        <p className='text-center  font-bold text-3xl py-5'>Quarter-2</p>
        </div>
        <div className='flex py-12 flex-col md:flex-row space-y-8  md:space-x-2'>
        </div>
        
        
        {/* //every project here */}
        <Border />   
        

    </Wrapper>

  )
}

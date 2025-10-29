
import Border from '../border/page';
// import Wrapper from '@/components/wrapper/page';

export default function Projects() {
  return (
    // <Wrapper>
    <section className="bg-[#0a0909] min-h-screen py-10 px-4">

      {/* <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-4xl mx-auto mb-14 border-t-8 border-[#8D6E63] overflow-hidden transition-transform duration-300 hover:scale-[1.02]"> */}
        {/* Decorative Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f3683a] to-[#8D6E63] rounded-t-2xl"></div>

        <div className="text-center mb-20">
          <h1 className="inline-block bg-[#d64b1f] text-white text-4xl md:text-5xl font-extrabold py-3 px-8 transform -rotate-6 shadow-lg">
            MY PROJECTS
          </h1>
        </div>

      {/* </div> */}

        <Border />
    </section>
    // </Wrapper>
  );
}

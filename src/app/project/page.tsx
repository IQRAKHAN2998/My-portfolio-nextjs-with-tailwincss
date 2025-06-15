
import Border from '../border/page';
import Wrapper from '@/components/wrapper/page';

export default function Projects() {
  return (
    <Wrapper>
      <section className="bg-[#EFEBE9] min-h-screen py-10 px-4">
        {/* <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#5D4037] mb-6 underline decoration-[#8D6E63] underline-offset-4">
          My Projects
        </h1> */}

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto mb-10 border-t-8 border-[#8D6E63]">
          <h2 className="text-3xl font-bold text-center text-[#6D4C41] mb-2">My Project</h2>
          {/* <p className="text-xl font-medium text-center text-[#795548]">My Projects</p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Future projects will be placed here */}
        </div>

        <Border />
      </section>
    </Wrapper>
  );
}

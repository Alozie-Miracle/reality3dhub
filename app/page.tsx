import Hero from "@/components/hero";
import About from "@/components/about";
import Mission from "@/components/mission";
import Company from "@/components/company";

export default function Home() {
  return (
    <div className="relative h-full">
      <Hero />
      <About />
      <Mission />
      <Company />

      <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between p-3 bg-gray-100">
        <p className='text-xl font-bold'>Reality3DHub</p>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between">
          <p>Home</p>
          <p>Service</p>
          <p>Project</p>
          
          <p>About Us</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

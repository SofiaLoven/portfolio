import Heading from "@/components/Heading";
import ProjectList from "@/components/projects/ProjectList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <body>
      <div className="min-h-screen md:p-12 max-w-screen-md min-w-full flex flex-col items-center ">
        <Heading />
        <main className=" max-w-screen-md">
          <ProjectList />
        </main>
        <Footer />
      </div>
    </body>
  );
}

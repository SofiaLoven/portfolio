import Heading from "@/components/Heading";
import ProjectList from "@/components/projects/ProjectList";

export default function Home() {
  return (
    <body className="min-h-screen min-w-full">
      <div className="min-h-screen p-24 md:p-12 max-w-screen-md min-w-full flex flex-col items-center ">
        <Heading />
        <main className=" max-w-screen-md">
          <ProjectList />
        </main>
      </div>
    </body>
  );
}

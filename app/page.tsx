import Heading from "@/components/Heading";
import ProjectList from "@/components/projects/ProjectList";

export default function Home() {
  return (
    <body className="font-mono text-slate-700 flex min-h-screen flex-col items-center justify-between p-8">
      <Heading />
      <main>
        <h2 className=" font-semibold text-lg mb-8">{"> Projects "}</h2>
        <ProjectList />
      </main>
    </body>
  );
}

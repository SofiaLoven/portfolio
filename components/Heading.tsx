import react from "react";

const Heading = () => {
  return (
    <header className="min-h-screen min-w-full flex flex-col justify-center p-24 gap-12">
      <div className="flex flex-col gap-4">
        <h1 className=" text-xl font-semibold"> {"> SOFIA LOVÉN"}</h1>
        <span className="text-md max-w-80">
          {
            "> Hi there! I am a people person, frontend developer and registered nurse. Sounds interesting? Lets talk!"
          }
        </span>
      </div>
      <div>
        <button className="flex gap-4 hover:bg-green-200 bg-green-300 hover:-translate-y-1 hover:shadow-lg rounded-full text-sm px-4 py-2 text-center transition ease-in-out delay-150 duration-300">
          Download resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Heading;

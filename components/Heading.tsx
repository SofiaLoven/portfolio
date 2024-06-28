import Image from "next/image";
import profilePicture from "@/public/images/Profile2.png";

const Heading = () => {
  return (
    <header className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12">
      <Image
        alt="Profile picture"
        src={profilePicture}
        height={240}
        className="md:hidden"
      />
      <div className="flex flex-col justify-center  gap-12">
        <div className="flex flex-col gap-4">
          <h1 className=" text-xl font-semibold"> {"> SOFIA LOVÉN"}</h1>
          <span className="text-md max-w-80">
            {
              "> Hi there! I am a people person, frontend developer and registered nurse. Sounds interesting? Lets talk!"
            }
          </span>
        </div>
        <div>
          <a
            href="/CV_Loven_Sofia.pdf"
            download="CV_Loven_Sofia"
            className="flex gap-1 md:gap-4 items-center hover:bg-green-200 bg-green-300 hover:-translate-y-1 hover:shadow-lg rounded-full text-sm px-4 py-2 text-center transition ease-in-out delay-150 duration-300 size-fit"
          >
            Download resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 md:size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
      </div>
      <Image
        alt="Profile picture"
        src={profilePicture}
        height={300}
        className="hidden md:block"
      />
    </header>
  );
};

export default Heading;

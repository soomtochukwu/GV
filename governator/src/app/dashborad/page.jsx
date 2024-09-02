import Image from "next/image";
import { IoIosNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";

const Dashborad = () => {
  return (
    <div className="p-2 bg-[#010014] space-y-2">
      <section>
        <header className=" flex items-center justify-between rounded-lg border py-2 px-1">
          <div className="inline-flex items-center">
            <Image src="/logo.png" width={60} height={60} />
            <span className=" text-2xl font-bold text-[#fefefe]">
              Governator
            </span>
          </div>
          <nav>
            <ul className=" flex items-center gap-5">
              <li className=" relative">
                <span className="badge badge-error badge-xs absolute left-3"></span>
                <IoIosNotificationsOutline className="text-3xl" />
              </li>
              <li>
                <div className="border inline-flex items-center gap-2 p-2 rounded-[2rem]">
                  <Image src={"/animoji2.png"} width={40} height={50} />
                  <span className="text-lg font-bold text-[#fefefe] capitalize  ">
                    franklivania
                  </span>
                </div>
              </li>
            </ul>
          </nav>
        </header>
      </section>
      <section className=" flex items-center  w-full justify-between ">
        <article className=" border py-2 px-2 w-2/3 rounded-lg">
          <div className=" flex items-center justify-between">
            <p className="border px-1 inline-flex gap-1 rounded-md">
              <small className=" text-[#fefefe]">
                sort by:
                <span className="text-green-400">{`Trending Votes`}</span>
              </small>
              <IoMdArrowDropdown className="text-xl  " />
            </p>
            <p>
              <small className=" text-[#fefefe]">
                Ongoing Voting: <span className="text-green-400">{`24`}</span>
              </small>
            </p>
          </div>
        </article>
        <button className="btn btn-success text-white px-[2.5rem]">
          {" "}
          create vote{" "}
        </button>
      </section>
      <div className="flex justify-between ">
        <section className="w-2/3 border px-4  py-3">
          <article className="flex items-start justify-between ">
            <div>
              <h1 className="mb-2">The All Hacks Hackathon Contest :</h1>
              <p className="text-md mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam dolorum
              </p>
              <p className="first-letter:uppercase text-nowrap text-xs">
                time remaining till end:
                <span className="uppercase text-green-500">
                  {`3`}DAYS
                </span>:{" "}
                <span className="lowercase text-green-500">
                  {`11`}hrs : {`42`}mins
                </span>
              </p>
            </div>
            <p className="text-nowrap space-x-2">
              <span className="badge badge-error">Ongoing</span>
              <span className="badge badge-success"> Trending</span>
            </p>
          </article>
          <article className="flex  items-center justify-between">
            <div className="inline-flex  items-center gap-2">
              <div className="inline-flex ">
                <Image src={`/animoji3.png`} width={30} height={30} />
                <Image src={`/animoji3.png`} width={30} height={30} />
                <Image src={`/animoji3.png`} width={30} height={30} />
                <Image src={`/animoji3.png`} width={30} height={30} />
              </div>
              <p className="text-xs first-letter:capitalize">
                about <span className="text-green-500"> {`120`}k </span>votes
                and counting
              </p>
            </div>
            <button className="btn btn-success px-[2.3rem] "> vote</button>
          </article>
        </section>
        {/* <section className="w-2/5">
          <h1>side section</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in
            neque non ducimus rerum quidem sequi molestiae culpa amet voluptas
            omnis dolorum dignissimos, eveniet velit sint delectus repellat
            expedita? Nostrum.
          </p>
        </section> */}
      </div>
    </div>
  );
};

export default Dashborad;

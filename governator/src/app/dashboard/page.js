import Image from "next/image";
import Link from "next/link";
import {
  IoIosNotificationsOutline,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";

const Dashborad = () => {
  return (
    <div className=" space-y-6 px-3 py-3 bg-[url('/Group.svg')] bg-[#010014]">
      <DashboradHeader
        avatarImage={`/animoji1.png`}
        logo={`/logo.png`}
        avatarName={`franklivani`}
      />
      <DashboradFilter drop={true} />
      <div className="flex justify-between  gap-3 overflow-x-hidden ">
        <section className="w-2/3 border px-4 space-y-4 py-3 transition">
          {/* // Replace the following code with the actual content */}
          <div
            // href="/dashboard/Id"
            className=" hover:border-b-2 shadow-md hover:bg-slate-500 bg-[url('/Frame.svg')]  px-1"
          >
            <DashboradTracker tracker={true} />
            <DashboradVoteCard trend={true} />
          </div>
          <div
            // href="/dashboard/Id"
            className=" hover:border-b-2 shadow-md hover:bg-slate-500 bg-[url('/Frame.svg')]  px-1"
          >
            <DashboradTracker tracker={false} />
            <DashboradVoteCard trend={false} />
          </div>
          <div
            // href="/dashboard/Id"
            className=" hover:border-b-2 shadow-md hover:bg-slate-500 bg-[url('/Frame.svg')]  px-1"
          >
            <DashboradTracker tracker={null} />
            <DashboradVoteCard trend={true} />
          </div>
          <div
            // href="/dashboard/Id"
            className=" hover:border-b-2 shadow-md hover:bg-slate-500 bg-[url('/Frame.svg')]  px-1"
          >
            <DashboradTracker tracker={null} />
            <DashboradVoteCard trend={true} />
          </div>
        </section>
        <section className="w-2/5 border border-green-400 rounded-t-md max-h-fit">
          <h1 className="bg-green-400 mb-3 px-3 py-2 space-y-2">
            Onchain Notification
          </h1>
          <NotificationCard avater={"/animoji3.png"} />
          <NotificationCard avater={"/animoji3.png"} />
          <NotificationCard avater={"/animoji3.png"} />
        </section>
      </div>
    </div>
  );
};

export default Dashborad;

export function DashboradHeader({ logo, avatarName, avatarImage }) {
  return (
    <section>
      <header className=" flex items-center justify-between rounded-lg border px-4  py-3">
        <div className="inline-flex items-center justify-start">
          <Image src={logo} width={60} height={60} />
          <span className=" text-2xl font-bold text-[#fefefe]">Governator</span>
        </div>
        <nav>
          <ul className=" flex items-center gap-5">
            <li className=" relative">
              <span className="badge badge-error badge-xs absolute left-3"></span>
              <IoIosNotificationsOutline className="text-3xl" />
            </li>
            <li>
              <div className="border inline-flex items-center gap-2 p-2 rounded-[2rem]">
                <Image src={avatarImage} width={40} height={50} />
                <span className="text-lg font-bold text-[#fefefe] capitalize  ">
                  {avatarName}
                </span>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}

export function DashboradVoteCard({ trend }) {
  return (
    <article className="md:flex  items-center justify-between pb-1">
      <div className="inline-flex  items-center gap-2">
        <div className="inline-flex ">
          <Image src={`/animoji3.png`} width={30} height={30} />
          <Image src={`/animoji3.png`} width={30} height={30} />
          <Image src={`/animoji3.png`} width={30} height={30} />
          <Image src={`/animoji3.png`} width={30} height={30} />
        </div>
        <p className="text-xs first-letter:capitalize">
          about <span className="text-green-500"> {`120`}k </span>votes and
          counting
        </p>
      </div>
      {trend ? (
        <button className="btn btn-success px-[2.3rem] text-white ">
          {" "}
          vote
        </button>
      ) : (
        <div className=" space-x-4 text-nowrap">
          <button className="btn btn-error px-[2.3rem] text-white ">
            view results
          </button>
          <button className="btn btn-success px-[2.3rem] text-white ">
            {" "}
            vote
          </button>{" "}
        </div>
      )}
    </article>
  );
}

export function DashboradTracker({ tracker }) {
  return (
    <article className="md:flex items-start justify-between ">
      <div>
        <h1 className="mb-2">The All Hacks Hackathon Contest :</h1>
        <p className="text-md mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolorum
        </p>
        <p className="first-letter:uppercase text-nowrap text-xs">
          time remaining till end:
          <span className="uppercase text-green-500">{`3`}DAYS</span>:{" "}
          <span className="lowercase text-green-500">
            {`11`}hrs : {`42`}mins
          </span>
        </p>
      </div>
      {tracker ? (
        <p className="text-nowrap space-x-2">
          <span className="badge badge-error  text-white">Ongoing</span>
          <span className="badge badge-success text-white"> Trending</span>
        </p>
      ) : tracker === null ? (
        <span className="badge badge-success text-white"> Trending</span>
      ) : (
        <p className="text-nowrap space-x-2">
          <span className="badge  text-gray-100">Ended</span>
        </p>
      )}
    </article>
  );
}

export function DashboradFilter({ drop }) {
  return (
    <section className=" flex items-center  w-full justify-between ">
      <article className=" border py-2 px-2 w-2/3 rounded-lg">
        <div className=" flex items-center justify-between">
          <p className="border px-1 inline-flex gap-1 rounded-md">
            <small className=" text-[#fefefe]">
              sort by:
              <span className="text-green-400">{`Trending Votes`}</span>
            </small>
            {drop ? (
              <IoMdArrowDropdown className="text-xl " />
            ) : (
              <IoMdArrowDropup className="text-xl " />
            )}
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
  );
}

export function NotificationCard({ avater, name, purpose, time }) {
  return (
    <div className="px-2 mb-2 ">
      <article className="flex justify-between items-center bg-[#121212] px-2 py-1 rounded-lg">
        <span className="inline-flex items-center gap-1">
          {" "}
          <Image src={avater} width={30} height={30} />
          <span>{name}</span>
          {purpose}
        </span>
        <p>{time}</p>
      </article>
    </div>
  );
}

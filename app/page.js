import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 h-[44vh] text-white">
        <div className="font-bold text-3xl flex justify-center items-center gap-3">Buy me a Chai <span><img src="/tea.gif" alt="tea-gif" width={44} /></span> </div>
        <p>Crowdfunding platform for creators, Start now!</p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>

          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pt-14 pb-20">
        <h2 className="text-3xl font-bold text-center mb-14">Your fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="items space-y-3 flex flex-col justify-center items-center">
            <img className="bg-white rounded-full text-black px-2" src="/man.gif" alt="man-gif" width={68} />
            <p className="font-bold">Fund yourself</p>
            <p className="text-center">your fans wants to help you pay </p>
          </div>
          <div className="items space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full text-black " src="/coin.gif" alt="man-gif" width={68} />
            <p className="font-bold">Fund yourself</p>
            <p className="text-center">your fans wants to help you pay </p>
          </div>
          <div className="items space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full text-black " src="/group.gif" alt="man-gif" width={68} />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">your fans wants to help you pay </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pt-14 pb-20 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YlrmL46QIlc?si=ymM6k0i1aUwwhQaV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}


import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

async function getData() {
  const req = await fetch(
    "https://online-json-server-api.up.railway.app/project/66646c781d2cd3eb11438e3a/data"
  );
  const res = await req.json();
  const respon = res.data;
  return respon;
}
async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="max-w-6xl w-full mx-auto mt-10 grow ">
        <div className="grid-cols-3 grid w-full gap-6 mt-10">
          {data.map((item) => {
            const { postedAt, contract, position, company, location, id } =
              item;
            return (
              <div
                key={item.id}
                className="card w-full bg-base-100 shadow-xl mb-10 p-5 rounded-none"
              >
                <img className="w-12 -mt-12 mb-5" src={item.logo} alt="" />
                <div className="flex gap-3 text-[#6E8098] mb-2">
                  <p>{postedAt}</p> <p>.</p>
                  <p>{contract}</p>
                </div>
                <Link
                  href={`/${id}`}
                  className="text-xl text-[#19202D] font-bold mb-2"
                >
                  {position}
                </Link>
                <p className="text-[#6E8098] mb-10">{company}</p>
                <p className="text-[#5964E0]">{location}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

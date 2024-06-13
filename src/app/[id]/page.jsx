import Navbar from "@/components/Navbar";

async function getData(id) {
  const req = await fetch(
    "https://online-json-server-api.up.railway.app/project/66646c781d2cd3eb11438e3a/data/" +
      id
  );
  const res = await req.json();
  return res;
}

async function Id({ params: { id } }) {
  const data = await getData(id);
  console.log(data);
  const { postedAt, contract, position, company, location, requirements } =
    data;
    const { content } = requirements;
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl w-full mx-auto mt-10 flex items-center flex-col">
        <div className="card w-[730px] bg-base-100 rounded-none p-5 mb-8">
          <div className="flex items-center">
            <img className="w-20 mr-9" src={data.logo} alt="" />
            <p className="text-[#19202D] text-lg mr-auto">{company}</p>
            <button className="btn btn-primary">Company Site</button>
          </div>
        </div>
        <div className="card w-[730px] bg-base-100 rounded-none p-5">
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="flex gap-3 text-[#6E8098] mb-2">
                <p>{postedAt}</p> <p>.</p>
                <p>{contract}</p>
              </div>
              <h2 className="text-xl text-[#19202D] font-bold mb-2">
                {position}
              </h2>
              <p className="text-[#5964E0]">{location}</p>
            </div>
            <button className="btn btn-primary">Apply Now</button>
          </div>
          <p className="text-[#6E8098] mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
            est, vitae luctus metus libero eu augue. Morbi purus libero,
            faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
            Praesent elementum hendrerit tortor. Sed semper lorem at felis.
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <h2 className="text-xl text-[#19202D] font-bold mb-2">
            Requirements
          </h2>
          <p className="text-[#6E8098]">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Id;

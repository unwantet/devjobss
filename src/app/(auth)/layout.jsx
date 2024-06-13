
import ProtectRouter from "@/components/ProtectRouter";

function PagesLayout({ children }) {
    console.log(children);
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto mt-10">
        <ProtectRouter>{children}</ProtectRouter>
      </div>
    </div>
  );
}

export default PagesLayout;

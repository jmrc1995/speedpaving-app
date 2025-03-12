import { Maintenance } from "../../components/organisms/Maintenance";
import "../app/globals.css"
export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="items-center max-w-4xl w-full">
        <Maintenance />
      </div>
    </div>
  );
}

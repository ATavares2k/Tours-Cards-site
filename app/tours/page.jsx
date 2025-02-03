import { Suspense } from "react";
import ToursCards from "../_components/ToursCards";

export default function Tours() {
  return (
    <div className="flex flex-wrap justify-center gap-4 gap-y-10">
      <Suspense fallback={"ola"}>
        <ToursCards />
      </Suspense>
    </div>
  );
}

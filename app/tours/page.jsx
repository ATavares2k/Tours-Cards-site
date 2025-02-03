import { Suspense } from "react";
import ToursCards from "../_components/ToursCards";
import Spinner from "../_components/Spinner";

export default function Tours() {
  return (
    <div className="flex flex-wrap justify-center gap-4 gap-y-10 mt-24">
      <Suspense fallback={<Spinner />}>
        <ToursCards />
      </Suspense>
    </div>
  );
}

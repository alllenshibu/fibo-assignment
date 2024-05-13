import Layout from "@/Layout";
import DailyProgress from "@/components/DailyProgress";

export default function Page1() {
  return (
    <Layout>
      <DailyProgress />
      <div>
        <div className="w-full h-10 py-10 flex flex-row justify-between items-center tracking-wide">
          <h1>Today's Goals</h1>
          <svg
            width="37"
            height="28"
            viewBox="0 0 37 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              x="0.870972"
              width="36.129"
              height="28"
              fill="url(#pattern0_1_696)"
            />
            <defs>
              <pattern
                id="pattern0_1_696"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_1_696"
                  transform="matrix(0.00666667 0 0 0.00860215 0 -0.00944273)"
                />
              </pattern>
              <image
                id="image0_1_696"
                width="150"
                height="150"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
        <div className="tracking-wide">
          <div className="h-16 w-full bg-[#282828] rounded-xl p-4 flex flex-row justify-between items-center gap-4">
            <div>Icond</div>
            <p className="w-full">Workout for 20 mins</p>
            <input type="checkbox" className="accent" />
          </div>
        </div>
      </div>
      <div>Graph</div>
    </Layout>
  );
}

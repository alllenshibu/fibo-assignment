import { useEffect, useState } from "react";

import Layout from "@/Layout";
import DailyProgress from "@/components/DailyProgress";

import { Slider } from "@mui/material";

import { IoIosArrowForward } from "react-icons/io";
import ProgressGraph from "@/components/ProgressGraph";

const goal1Svg = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="6.4" fill="#3D3D3D" />
    <path
      d="M16 10.583C15.001 10.583 14.2 11.269 14.2 12.1246C14.2 12.9801 15.001 13.6661 16 13.6661C16.999 13.6661 17.8 12.9801 17.8 12.1246C17.8 11.269 16.999 10.583 16 10.583ZM25 7.5V11.3538H23.2V9.81229H8.8V11.3538H7V7.5H8.8V9.04152H23.2V7.5H25ZM18.7 15.408V24.4568H16.9V20.603H15.1V24.4568H13.3V15.408C11.437 14.5679 10.15 12.8953 10.15 10.9684V10.583H11.95V10.9684C11.95 12.8953 13.75 14.4369 16 14.4369C18.25 14.4369 20.05 12.8953 20.05 10.9684V10.583H21.85V10.9684C21.85 12.8953 20.563 14.5679 18.7 15.408Z"
      fill="#9E4CB8"
    />
  </svg>
);

const goal2Svg = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="6.4" fill="#3D3D3D" />
    <path
      d="M22.4525 15.7002C22.2084 15.4002 21.9111 15.1402 21.6351 14.8802C20.9239 14.2802 20.1171 13.8502 19.4377 13.2202C17.8559 11.7601 17.5056 9.35005 18.5141 7.5C17.5056 7.73001 16.6245 8.25002 15.8708 8.82004C13.1213 10.9001 12.0385 14.5702 13.3336 17.7203C13.3761 17.8203 13.4185 17.9203 13.4185 18.0503C13.4185 18.2703 13.2593 18.4703 13.047 18.5503C12.8028 18.6503 12.548 18.5903 12.3464 18.4303C12.2827 18.3803 12.2402 18.3303 12.1977 18.2603C10.9982 16.8303 10.8071 14.7802 11.6139 13.1402C9.84104 14.5002 8.87501 16.8003 9.01301 18.9703C9.07671 19.4703 9.1404 19.9704 9.32087 20.4704C9.46949 21.0704 9.75611 21.6704 10.0746 22.2004C11.2211 23.9305 13.2062 25.1705 15.34 25.4205C17.6118 25.6905 20.0428 25.3005 21.7837 23.8205C23.7264 22.1604 24.4058 19.5003 23.4079 17.2203L23.2699 16.9603C23.047 16.5003 22.4525 15.7002 22.4525 15.7002ZM19.098 22.0004C18.8007 22.2404 18.3124 22.5004 17.9302 22.6004C16.7413 23.0004 15.5523 22.4404 14.8517 21.7804C16.1149 21.5004 16.8687 20.6204 17.0916 19.7303C17.272 18.9303 16.9323 18.2703 16.7943 17.5003C16.667 16.7603 16.6882 16.1302 16.9748 15.4402C17.1765 15.8202 17.3888 16.2002 17.6436 16.5003C18.461 17.5003 19.7455 17.9403 20.0215 19.3003C20.064 19.4403 20.0852 19.5803 20.0852 19.7303C20.1171 20.5504 19.7349 21.4504 19.098 22.0004Z"
      fill="#DE6C53"
    />
  </svg>
);

const goal3Svg = (
  <svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.5" width="32" height="32" rx="6.4" fill="#3D3D3D" />
    <path
      d="M15.0853 16.7558C15.5088 17.8642 15.4637 19.0175 14.1932 19.4771C11.5801 20.4412 10.9944 17.9092 10.9583 17.7831L15.0853 16.7558ZM10.5528 16.026L14.4455 15.0618C14.2743 14.1157 14.5356 13.1696 14.5356 12.0522C14.5356 10.5384 13.3372 7.57389 11.4269 8.05146C9.24627 8.59211 8.93089 11.016 9.01199 12.1874C9.12012 13.3588 10.4898 15.8638 10.5528 16.026ZM21.4919 24.0816C21.4649 24.2167 20.8702 26.7397 18.2571 25.7846C16.9955 25.3161 16.9415 24.1627 17.365 23.0544L21.4919 24.0816ZM23.4292 18.4949C23.5193 17.3235 23.213 14.8906 21.0234 14.35C19.1221 13.8544 17.9237 16.8369 17.9237 18.3598C17.9237 19.4681 18.176 20.4142 18.0228 21.3603L21.8974 22.3245C21.9695 22.1623 23.3301 19.6573 23.4292 18.4949Z"
      fill="#81B47D"
    />
  </svg>
);

const goal4Svg = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="6.4" fill="#3D3D3D" />
    <path
      d="M13.3247 9.80127C13.1089 10.4713 12.9993 11.1711 12.9999 11.875C12.9999 15.6029 16.0221 18.625 19.7499 18.625C20.67 18.6261 21.5805 18.4385 22.4252 18.0738C21.5503 20.7876 19.0044 22.75 15.9999 22.75C12.2721 22.75 9.24994 19.7279 9.24994 16C9.24994 13.2224 10.9273 10.837 13.3247 9.80127Z"
      fill="#63A7A7"
      stroke="#63A7A7"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M18.8724 10.75H22.3749L18.6249 13.75H22.3749"
      stroke="#63A7A7"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const goal5Svg = (
  <svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.312988" width="32" height="32" rx="6.4" fill="#3D3D3D" />
    <g clip-path="url(#clip0_1_757)">
      <path
        d="M16.1833 8.31785C16.159 8.12435 15.8413 8.12435 15.8179 8.31785C15.0232 14.7142 10.9597 16.0327 10.9597 20.4787C10.9597 23.2264 13.2673 25.453 16.0006 25.453C18.733 25.453 21.0406 23.2255 21.0406 20.4787C21.0406 16.0327 16.978 14.7142 16.1833 8.31785ZM15.4156 15.3892C15.3625 15.5863 15.3049 15.7888 15.2455 15.9994C14.8846 17.281 14.4751 18.7345 14.4751 20.4148C14.4751 21.3256 13.9369 21.6487 13.4347 21.6487C13.2974 21.6481 13.1617 21.6205 13.0351 21.5674C12.9086 21.5143 12.7937 21.4369 12.6971 21.3394C12.6005 21.242 12.524 21.1265 12.4721 20.9995C12.4201 20.8725 12.3937 20.7365 12.3943 20.5993C12.3943 18.613 13.3501 17.3152 14.1943 16.1713C14.4598 15.8131 14.7091 15.4738 14.9116 15.1363C15.0043 14.9815 15.2536 14.9887 15.367 15.1417C15.4201 15.2137 15.4381 15.3055 15.4156 15.3892Z"
        fill="#5A92CB"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_757">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(7.00049 7.81299)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default function Page1() {
  const [goals, setGoals] = useState([
    {
      title: "Workout for 20 mins",
      svg: goal1Svg,
      accentColor: "#9E4CB8",
      checked: false,
    },
    {
      title: "Read book for 15 mins",
      svg: goal2Svg,
      accentColor: "#DE6C53",
      checked: false,
    },
    {
      title: "30 mins walk",
      svg: goal3Svg,
      accentColor: "#81B47D",
      checked: false,
    },
    {
      title: "Sleep at 11 sharp",
      svg: goal4Svg,
      accentColor: "#63A7A7",
      checked: false,
    },
    {
      title: "Drink 3L water",
      svg: goal5Svg,
      accentColor: "#5A92CB",
      checked: false,
    },
  ]);

  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(goals.length);

  useEffect(() => {
    setCompleted(goals.filter((goal) => goal.checked).length);
  }, [goals]);

  return (
    <Layout>
      <DailyProgress completed={completed} total={total} />
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
          <div className="flex flex-col gap-2">
            {goals.map((goal, index) => (
              <div className="h-16 w-full bg-[#282828] rounded-xl p-4 flex flex-row justify-between items-center gap-4">
                {goal.svg}
                <p className="w-full">{goal.title}</p>
                <input
                  type="checkbox"
                  className={`accent-[${goal.accentColor}]`}
                  checked={goal.checked}
                  onChange={(e) => {
                    const newGoals = [...goals];
                    newGoals[index].checked = e.target.checked;
                    setGoals(newGoals);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="bg-[#D15439] h-12 w-full rounded-3xl p-1 mt-4 relative flex flex-row justify-end items-center">
            <Slider
              className="absolute w-auto left-6 right-6"
              sx={{
                width: "0",
              }}
              onChange={(e, value) => {
                if (value >= 90) {
                  setGoals(
                    goals.map((goal) => ({
                      ...goal,
                      checked: true,
                    }))
                  );
                } else {
                  setGoals(
                    goals.map((goal) => ({
                      ...goal,
                      checked: false,
                    }))
                  );
                }
              }}
            />
            <p className="mr-10">Swipe to track all</p>
            <div className="p-2 flex flex-row">
              <IoIosArrowForward className="opacity-30" />
              <IoIosArrowForward className="opacity-60" />
              <IoIosArrowForward className="opacity-100" />
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        {goals.length > 0 ? (
          <ProgressGraph data={goals} />
        ) : (
          <div className="w-full h-96 flex flex-row justify-center items-center">
            <p>No data available</p>
          </div>
        )}
      </div>
      */}
    </Layout>
  );
}

import { ComponentProps } from "react";

export function SiteLogo(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 170 61" width="170px" height="61px" {...props}>
      <path
        fillRule="evenodd"
        fill="black"
        d="M14.959,59.996 L7.050,50.543 L5.742,50.543 L5.742,60.004 L0.001,60.004 L0.001,38.907 L5.141,32.341 L11.488,32.341 C13.715,32.341 15.740,32.999 17.346,34.267 C18.928,35.514 20.048,37.304 20.501,39.587 C20.841,41.305 20.739,43.079 20.178,44.682 C19.621,46.273 18.632,47.699 17.196,48.758 L17.193,48.753 C16.386,49.357 15.482,49.809 14.511,50.106 C14.425,50.132 14.338,50.156 14.250,50.180 L22.463,59.996 L14.959,59.996 ZM60.938,59.996 L54.403,41.742 L47.719,59.996 L41.608,59.996 L51.737,32.328 L57.120,32.352 L67.017,59.996 L60.938,59.996 ZM39.473,59.996 L24.161,59.996 L24.141,39.082 L29.282,32.340 L40.017,32.340 L40.017,38.158 L32.080,38.158 L29.862,41.065 L29.864,43.516 L39.473,43.516 L39.473,49.334 L29.869,49.334 L29.874,54.177 L39.473,54.177 L39.473,59.996 ZM151.154,32.349 L141.283,60.001 L135.901,60.001 L126.063,32.349 L132.138,32.349 L138.596,50.502 L145.076,32.349 L151.154,32.349 ZM99.694,59.994 L99.694,38.144 L91.008,38.144 L91.008,32.340 L114.121,32.340 L114.121,38.144 L105.436,38.144 L105.436,59.994 L99.694,59.994 ZM117.375,59.992 L117.375,32.341 L123.117,32.341 L123.117,59.992 L117.375,59.992 ZM169.446,59.999 L151.752,59.999 L151.732,39.079 L156.899,32.340 L169.994,32.340 L169.994,38.128 L159.696,38.128 L157.453,41.054 L157.456,43.532 L169.446,43.532 L169.446,49.320 L157.461,49.320 L157.466,54.210 L169.446,54.210 L169.446,59.999 ZM115.889,5.979 L107.795,5.979 C106.298,5.979 103.601,6.732 103.620,8.593 C103.645,11.060 106.281,11.082 108.192,11.275 C109.686,11.427 111.464,11.623 113.132,12.294 C115.245,13.145 116.982,14.627 117.576,17.321 C118.274,20.479 117.264,23.409 114.756,25.464 C112.847,27.029 110.255,27.845 107.860,27.845 L99.766,27.845 L99.766,22.061 L107.860,22.061 C109.308,22.061 111.747,21.551 112.021,19.650 C112.128,18.909 111.908,18.013 111.002,17.649 C110.058,17.269 108.743,17.126 107.631,17.015 C104.104,16.657 100.180,15.881 98.570,12.249 C97.799,10.512 97.684,8.261 98.231,6.441 C99.476,2.308 103.736,0.196 107.795,0.196 L115.889,0.196 L115.889,5.979 ZM79.119,0.190 L79.120,18.940 C79.120,19.797 79.508,20.465 80.090,20.938 C81.007,21.683 82.350,22.058 83.655,22.058 L83.655,22.068 L89.336,22.067 L89.336,0.190 L95.077,0.190 L95.077,27.846 L83.655,27.850 L83.655,27.861 C81.159,27.861 78.478,27.056 76.502,25.450 C74.630,23.928 73.379,21.757 73.379,18.940 L73.379,0.190 L79.119,0.190 ZM0.000,27.846 L0.000,6.892 L5.273,0.190 L16.235,0.190 L16.235,6.001 L8.026,6.001 L5.741,8.905 L5.741,11.640 L14.981,11.640 L14.981,17.445 L5.741,17.445 L5.741,27.846 L0.000,27.846 ZM37.817,8.272 C36.360,6.798 34.346,5.887 32.122,5.887 C31.434,5.887 30.792,5.964 30.202,6.109 C29.773,6.214 29.346,6.363 28.927,6.549 L24.193,12.559 C24.108,13.074 24.068,13.494 24.068,14.029 C24.068,16.278 24.970,18.313 26.427,19.786 C27.884,21.258 29.898,22.170 32.122,22.170 C34.346,22.170 36.360,21.258 37.817,19.786 C39.275,18.313 40.176,16.277 40.176,14.029 C40.176,11.780 39.275,9.744 37.817,8.272 ZM32.122,-0.015 C35.958,-0.015 39.431,1.558 41.944,4.099 C44.458,6.640 46.014,10.151 46.014,14.029 C46.014,17.906 44.458,21.417 41.944,23.958 C39.431,26.499 35.958,28.072 32.122,28.072 C28.287,28.072 24.813,26.499 22.300,23.958 C18.427,20.043 17.520,15.093 18.838,9.903 L25.182,1.849 C26.408,1.204 27.471,0.728 28.834,0.392 C29.912,0.126 31.015,-0.015 32.122,-0.015 ZM70.110,27.844 C67.384,27.844 64.562,27.902 61.861,27.839 C58.215,27.753 54.921,26.222 52.518,23.792 C50.042,21.290 48.511,17.833 48.511,14.016 C48.511,10.198 50.042,6.741 52.518,4.237 C54.993,1.736 58.412,0.188 62.189,0.188 L70.110,0.188 L70.110,5.992 L62.189,5.992 C59.997,5.992 58.013,6.890 56.576,8.341 C55.141,9.793 54.252,11.800 54.252,14.016 C54.252,16.232 55.141,18.237 56.576,19.690 C57.675,20.799 59.094,21.585 60.681,21.895 C61.842,22.119 63.215,22.051 64.391,22.050 L70.109,22.050 L70.110,27.844 ZM87.754,59.997 C85.028,59.997 82.207,60.055 79.506,59.991 C75.859,59.906 72.565,58.375 70.162,55.945 C67.686,53.442 66.156,49.984 66.156,46.168 C66.156,42.350 67.686,38.892 70.162,36.390 C72.637,33.888 76.056,32.340 79.833,32.340 L87.754,32.340 L87.754,38.144 L79.833,38.144 C77.641,38.144 75.657,39.041 74.221,40.494 C72.785,41.945 71.897,43.951 71.897,46.168 C71.897,48.383 72.785,50.390 74.221,51.842 C75.319,52.951 76.738,53.738 78.325,54.046 C79.486,54.271 80.860,54.203 82.036,54.203 L87.754,54.202 L87.754,59.997 ZM5.742,44.703 L11.495,44.703 C12.004,44.703 12.468,44.641 12.874,44.518 C13.235,44.406 13.551,44.253 13.810,44.058 L13.832,44.036 C14.283,43.703 14.596,43.250 14.773,42.743 C14.992,42.118 15.030,41.414 14.894,40.727 C14.730,39.899 14.359,39.277 13.847,38.874 C13.268,38.417 12.452,38.181 11.488,38.181 L7.894,38.181 L5.742,40.929 L5.742,44.703 Z"
      ></path>
    </svg>
  );
}
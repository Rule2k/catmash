// imports
import React from 'react';

const Logo = () => (
  <div id="logo">
    <svg viewBox='0 0 489 112' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd'
clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'>
    <path d='M495,163L518,163L527,177L540,201L539,215L536,226L512,258L512,263L489,264L479,259L465,264L460,267L439,265L432,260L413,265L410,269L394,266L386,258L364,266L359,268L335,260L321,258L316,260L296,263L283,264L275,260L261,258L251,261L246,257L238,252L232,248L229,245L228,237L231,231L227,222L226,213L234,207C234,207 235.524,201.289 243,199C250.476,196.711 251,194 251,194L255.967,189.033L254.404,191.068L253.23,192.44C251.894,195.58 249.094,203.3 246,210C241.958,218.754 238.167,224.496 238,230C237.535,245.372 240.917,246.246 245,248C249.083,249.754 251.917,242.496 252,240C252.083,237.504 255,235 255,235C253.708,231.379 259,227 259,227C258.083,220.504 264,214 264,214C268.833,222.129 269.792,223.496 279,225C288.208,226.504 305.292,213.746 307,212C308.708,210.254 311.292,210.746 310,213C308.708,215.254 306.667,224.496 306,231C305.333,237.504 307.292,245.246 311,245C314.708,244.754 318,242 318,242C327.208,224.879 325,216 325,216C327.458,212.629 327,203 327,203C329.333,198.504 328,195 328,195L330,194C327.958,191.004 329,189 329,189C325.958,188.629 326,185 326,185C320.583,182.879 322,181 322,181C322,181 320.042,179.246 316,179C311.958,178.754 310.792,183.871 307,188C303.208,192.129 295.417,199.371 293,200C290.583,200.629 289.917,204.496 285,204C280.083,203.504 281.042,199.246 281,197C280.958,194.754 281,195 281,195C281,195 281.292,194.121 281,191C280.708,187.879 279.042,183.371 276,182C272.958,180.629 271.667,180.746 271,179C270.333,177.254 269.667,175.871 267,176C264.066,176.141 260.611,181.403 258.627,184.911L261,177L267,168L275,163L279,167L295,169L316,165L335,161L357,162L357,167L373,165L384,164L399,159L464,161L475,157L495,163ZM458,185C458,185 461.293,179.166 464,179C464,179 467.538,186.973 473,193C473,193 473.648,197.989 472,205C470.352,212.011 468.699,216.016 471,216C473.301,215.984 482.308,214.931 487,213C491.692,211.069 494,210 494,210C494,210 495.072,193.288 495,192L497,190C497,190 494.442,178.082 503,176C503,176 506.79,187.356 512,191C512,191 512.21,200.822 512,204C511.79,207.178 509.377,216.677 509,219C508.623,221.323 508.217,224.233 507,226C507,226 505.255,228.301 505,230C504.745,231.699 504.927,233.529 505,236C505.073,238.471 504.914,239.904 503,242C501.086,244.096 496.342,247.282 495,247C493.658,246.718 490.622,244.512 489,241C487.378,237.488 486.731,237.755 487,235C487.269,232.245 487.639,228.997 488,228C488,228 484.712,226.881 479,230C473.288,233.119 470.283,233.331 469,235C467.717,236.669 467.396,240.45 466,242C464.604,243.55 463.56,243.828 464,245C464,245 460.155,248.081 457,248C453.845,247.919 454.012,247.937 453,247C451.988,246.063 451.398,244.723 450,244C448.602,243.277 448.558,242.197 450,242C450,242 448.49,241.331 448,239C447.51,236.669 447.507,236.498 448,235C448.493,233.502 447.561,233.973 448,233C448.439,232.027 448.742,231.284 449,231C449.258,230.716 448.906,231.031 449,230C449.094,228.969 449,228 449,228C449,228 450.667,226.022 451,224C451.333,221.978 451.465,219.101 452,218C452.535,216.899 453.936,214.999 454,213C454.064,211.001 454,208 454,208C454,208 456.298,208.515 456,207C455.702,205.485 457,195 457,195C457,195 453.527,193.602 450,194C446.473,194.398 445.064,194.312 442,194C438.936,193.688 438.034,193.82 436,194C433.966,194.18 435.038,194.946 433,195C430.962,195.054 430.041,194.619 429,195C427.959,195.381 425.994,195.308 424,196C422.006,196.692 421.844,198.25 424,199C426.156,199.75 429.038,200.099 430,202C430.962,203.901 432.505,202.078 434,204C435.495,205.922 435.774,210.89 437,211C438.226,211.11 440.006,214.828 441,216C441.994,217.172 443.392,223.755 441,228C438.608,232.245 436.09,237.555 427,242C417.91,246.445 412.295,248.538 413,247C413,247 411.921,248.026 410,248C408.079,247.974 404.474,248.866 403,247C401.526,245.134 400.693,243.979 401,243C401.307,242.021 399.348,241.89 400,241C400.652,240.11 399.075,236.498 400,235C400.925,233.502 400.938,233.099 405,233C409.062,232.901 418.444,229.291 422,227C425.556,224.709 425.802,225.442 428,223C430.198,220.558 430.983,220.446 431,219C431.017,217.554 431.243,216.794 429,216C426.757,215.206 421.981,213.415 420,213C418.019,212.585 416.064,211.798 413,212C409.936,212.202 400.386,210.331 400,209C399.614,207.669 397.751,208.385 398,208C398.249,207.615 395.663,204.918 396,204C396.337,203.082 396.099,201.976 396,201C395.901,200.024 396.352,197.022 397,195C397.648,192.978 400.399,189.882 402,189C403.601,188.118 406.915,186.402 417,183C427.085,179.598 437.028,177 445,177C452.972,177 454.618,177.349 458,185ZM384.333,212C384.333,212 386.612,213.056 389.333,211C389.333,211 388.852,213.572 391.333,214C393.815,214.428 391.972,213.892 393.333,215C394.695,216.108 395.953,216.148 396.333,217C396.333,217 395.812,219.652 393.333,222C390.855,224.348 388.333,225 388.333,225C388.333,225 389.252,231.412 389.333,235C389.415,238.588 382.839,247.556 376.333,248C373.575,248.188 373.892,246.372 372.333,246C370.775,245.628 370.052,244.532 370.333,243C370.615,241.468 365.333,237 365.333,237C365.333,237 373.71,236.694 373.333,232C373.175,230.028 372.212,229.652 370.333,230C368.455,230.348 365.012,231.812 361.333,232C357.655,232.188 355.252,233.652 353.333,231C351.415,228.348 351.572,228.692 351.333,227C351.095,225.308 350.333,224 350.333,224C350.333,224 350.292,227.492 349.333,228C348.375,228.508 347.333,229 347.333,229C347.333,229 346.772,231.092 346.333,232C345.895,232.908 346.052,234.052 345.333,235C344.615,235.948 343.252,240.052 343.333,241C343.415,241.948 343.652,243.172 342.333,244C341.015,244.828 338.703,245.407 339.333,247C339.333,247 337.092,248.132 335.333,248C333.575,247.868 332.532,247.492 331.333,246C330.135,244.508 328.052,242.052 328.333,241C328.615,239.948 328.212,237.892 327.333,238C327.333,238 327.972,237.092 328.333,235C328.695,232.908 333.492,223.172 336.333,217C339.175,210.828 341.42,207.749 341.333,205C341.333,205 342.852,202.372 344.333,199C345.815,195.628 346.932,192.612 349.333,191C351.735,189.388 352.452,189.012 354.333,189C356.215,188.988 364.692,178.772 365.333,178C365.975,177.228 366.333,177 366.333,177C366.333,177 366.292,178.212 369.333,179C372.375,179.788 374.452,179.892 376.333,181C378.215,182.108 378.852,183.172 379.333,187C379.815,190.828 380.612,201.092 384.333,212ZM369.333,216C369.333,216 357.972,217.732 354.333,218C354.333,218 361.332,204.692 365.333,202L369.333,216Z'
    fill='#fff' transform='translate(-51.442 -157)' />
    <path d='M180,239C180,239 182.279,240.056 185,238C185,238 184.518,240.572 187,241C189.482,241.428 187.638,240.892 189,242C190.362,243.108 191.62,243.148 192,244C192,244 191.478,246.652 189,249C186.522,251.348 184,252 184,252C184,252 184.918,258.412 185,262C185.082,265.588 178.506,274.556 172,275C169.242,275.188 169.558,273.372 168,273C166.442,272.628 165.718,271.532 166,270C166.282,268.468 161,264 161,264C161,264 169.377,263.694 169,259C168.842,257.028 167.878,256.652 166,257C164.122,257.348 160.678,258.812 157,259C153.322,259.188 150.918,260.652 149,258C147.082,255.348 147.238,255.692 147,254C146.762,252.308 146,251 146,251C146,251 145.958,254.492 145,255C144.042,255.508 143,256 143,256C143,256 142.438,258.092 142,259C141.562,259.908 141.718,261.052 141,262C140.282,262.948 138.918,267.052 139,268C139.082,268.948 139.318,270.172 138,271C136.682,271.828 134.37,272.407 135,274C135,274 132.758,275.132 131,275C129.242,274.868 128.198,274.492 127,273C125.802,271.508 123.718,269.052 124,268C124.282,266.948 123.878,264.892 123,265C123,265 123.638,264.092 124,262C124.362,259.908 129.158,250.172 132,244C134.842,237.828 137.087,234.749 137,232C137,232 138.518,229.372 140,226C141.482,222.628 142.598,219.612 145,218C147.402,216.388 148.118,216.012 150,216C151.882,215.988 160.358,205.772 161,205C161.642,204.228 162,204 162,204C162,204 161.958,205.212 165,206C168.042,206.788 170.118,206.892 172,208C173.882,209.108 174.518,210.172 175,214C175.482,217.828 176.278,228.092 180,239ZM165,243C165,243 153.638,244.732 150,245C150,245 156.998,231.692 161,229L165,243Z'
    fill='#fff' transform='translate(-55.442 -184)' />
    <path d='M257.231,112.437C257.633,111.475 257.902,110.942 258,111C258.417,111.246 255.083,110.254 253,112C253,112 241.583,112.879 238,114C234.417,115.121 229,114 229,114C229,114 226.083,124.754 223,130C219.917,135.246 220.833,135.129 220,137C219.167,138.871 217.708,140.629 217,143C216.292,145.371 216.333,145.629 215,150C213.667,154.371 211.708,154.879 214,158C216.292,161.121 218.333,160.504 218,163C218,163 216.833,169 212,169C207.167,169 205.708,165.629 203,165C203,165 200,158.379 200,153C200,147.621 201.583,139.379 206,130C210.417,120.621 212.083,116.629 212,117C211.917,117.371 203.333,118 197,118C190.667,118 189.208,116.004 188,114C186.792,111.996 185.708,109.254 186,107C186.292,104.746 188,102 188,102C188,102 199.333,103.129 207,102C214.667,100.871 216,100 216,100C216,100 216.583,97.879 219,98C221.417,98.121 223,100 223,100C223,100 233.458,98.629 239,98C244.542,97.371 251.583,96.379 254,98C256.417,99.621 260,105 260,105L260.923,107.769L257.231,112.437Z'
    fill='#fff' transform='translate(-55.442 -77)' />
    <path d='M70,106C70,106 69.079,104.793 71,104C72.921,103.207 73.413,103.127 75,102C76.587,100.873 77,99 77,99C77,99 78.913,99.627 84,96C89.087,92.373 91.413,91.793 93,91C94.587,90.207 95,91 95,91C95,91 95.579,89.46 99,88C102.421,86.54 102.746,86.127 104,85C105.254,83.873 105,84 105,84C105,84 105.447,83.981 107,84C108.553,84.019 109.719,83.069 110,83C110.281,82.931 111.095,84.957 112,85C112.905,85.043 113,84 113,84C113,84 112.199,85.997 113,86C113.801,86.003 116.295,86.781 117,87C117.705,87.219 116.295,88.669 117,89C117.705,89.331 123,91.581 123,95C123,98.419 122.391,101.469 118,105C113.609,108.531 103.783,108.877 99,112C94.217,115.123 94.519,115.869 92,117C89.481,118.131 84.711,119.981 83,122C81.289,124.019 74.903,129.213 74,131C73.097,132.787 73.927,132.653 73,134C72.073,135.347 71.543,136.429 72,138C72.457,139.571 73.447,142.525 75,143C76.553,143.475 98.039,146.877 104,147C109.961,147.123 113,147 113,147C113,147 118.247,150.845 119,155C119.753,159.155 119.751,159.069 117,161C114.249,162.931 112.103,165.933 111,166C109.897,166.067 103.735,165.741 100,166C96.265,166.259 84.919,165.453 80,164C75.081,162.547 73.463,162.141 72,161C70.537,159.859 68.919,157.277 68,157C67.081,156.723 60.887,154.909 58,145C55.113,135.091 54.103,125.437 58,119C61.897,112.563 67.415,106.413 70,106Z'
    fill='#fff' transform='translate(-55.442 -77)' />
</svg>
  </div>
);

export default Logo;

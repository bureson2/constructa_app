import {SvgXml} from "react-native-svg";

const users = `
<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M38 896v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358 636q62 0 120 14t131 46q32 14 50.5 42.5T678 802v94H38Zm700 0v-94q0-63-32-103.5T622 633q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519 568q24-25 36.5-61.5T568 425q0-45-12.5-79.5T519 282q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98 836h520v-34q0-16-9.5-31T585 750q-72-32-121-43t-106-11q-57 0-106.5 11T130 750q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448 425q0-39-25.5-64.5T358 335q-39 0-64.5 25.5T268 425q0 39 25.5 64.5T358 515Zm0 321Zm0-411Z" fill="#3C3939" /></svg>`;

const usersFocused = `
<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M38 896v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358 636q62 0 120 14t131 46q32 14 50.5 42.5T678 802v94H38Zm700 0v-94q0-63-32-103.5T622 633q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519 568q24-25 36.5-61.5T568 425q0-45-12.5-79.5T519 282q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98 836h520v-34q0-16-9.5-31T585 750q-72-32-121-43t-106-11q-57 0-106.5 11T130 750q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448 425q0-39-25.5-64.5T358 335q-39 0-64.5 25.5T268 425q0 39 25.5 64.5T358 515Zm0 321Zm0-411Z" fill="#114FBA" /></svg>`;

const tasks = `
<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M222 842 80 700l42-42 100 99 179-179 42 43-221 221Zm0-320L80 380l42-42 100 99 179-179 42 43-221 221Zm298 244v-60h360v60H520Zm0-320v-60h360v60H520Z" fill="#3C3939" /></svg>`;

const tasksFocused = `
<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M222 842 80 700l42-42 100 99 179-179 42 43-221 221Zm0-320L80 380l42-42 100 99 179-179 42 43-221 221Zm298 244v-60h360v60H520Zm0-320v-60h360v60H520Z" fill="#114FBA" /></svg>`;

const reports = `
<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M320 566v-60h320v60H320Zm0-160v-60h320v60H320ZM220 666h320q26.43 0 49.215 12Q612 690 628 710l112 146V236H220v430Zm0 250h490L581 747q-7.565-9.882-18.283-15.441Q552 726 540 726H220v190Zm520 60H220q-24 0-42-18t-18-42V236q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18Zm-520-60V236v680Zm0-190v-60 60Z" fill="#3C3939" /></svg>`;

const reportsFocused = `
<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M320 566v-60h320v60H320Zm0-160v-60h320v60H320ZM220 666h320q26.43 0 49.215 12Q612 690 628 710l112 146V236H220v430Zm0 250h490L581 747q-7.565-9.882-18.283-15.441Q552 726 540 726H220v190Zm520 60H220q-24 0-42-18t-18-42V236q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18Zm-520-60V236v680Zm0-190v-60 60Z" fill="#114FBA"/></svg>`;

const home = `
<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z" fill="#3C3939"/></svg>`;

const homeFocused = `
    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z" fill="#114FBA"/></svg>`;

export const usersIcon = () => <SvgXml xml={users} />;
export const usersFocusedIcon = () => <SvgXml xml={usersFocused} />;
export const tasksIcon = () => <SvgXml xml={tasks} />;
export const tasksFocusedIcon = () => <SvgXml xml={tasksFocused} />;
export const reportsIcon = () => <SvgXml xml={reports} />;
export const reportsFocusedIcon = () => <SvgXml xml={reportsFocused} />;
export const homeIcon = () => <SvgXml xml={home} />;
export const homeFocusedIcon = () => <SvgXml xml={homeFocused} />;

const ICONS = {
    plane: "M350 976v-42l80-60V623L80 726v-58l350-206V226q0-21 14.5-35.5T480 176q21 0 35.5 14.5T530 226v236l350 206v58L530 623v251l80 60v42l-130-37-130 37Z",
    create: "M445.935 860.065v-250h-250v-68.13h250v-250h68.13v250h250v68.13h-250v250h-68.13Z",
    back: "M480 898.63 157.37 576 480 253.37l47.978 47.739-240.586 240.826H802.63v68.13H287.392l240.586 240.587L480 898.63Z",
    dropdown: "M480 701.739 270.195 492.935h419.61L480 701.739Z",
    check: "M378 815.739 148.261 586l48.978-48.978L378 717.782l383.761-383.76L810.739 383 378 815.739Z",
    close: "M249 854.739 201.261 807l231-231-231-231L249 297.261l231 231 231-231L758.739 345l-231 231 231 231L711 854.739l-231-231-231 231Z",
    delete: "M259.087 941.978q-28.448 0-48.409-19.89-19.961-19.891-19.961-48.24V307.913h-45.065v-68.131h198.283v-34.304h271.891v34.304h198.522v68.131h-45.065v565.935q0 27.599-20.336 47.865-20.336 20.265-48.034 20.265H259.087Zm441.826-634.065H259.087v565.935h441.826V307.913ZM363.891 789.761h64.066v-399h-64.066v399Zm168.152 0h64.305v-399h-64.305v399ZM259.087 307.913v565.935-565.935Z",
    illnes: "M483 779 303 958q-17 19-43 19t-43-19L98 839q-19-17-18.5-42.5T98 753l178-179L98 394q-17-17-19.5-40.5T93 313l124-124q17.573-18 42.786-18Q285 171 303 189l180 180 179-180q18-18 43-17.5t43 17.5l119 119q17 18 17.5 43T867 394L688 574l179 179q18 17.573 18 42.786Q885 821 867 839L743 963q-17 17-40.5 14.5T662 958L483 779Zm0-240q16.575 0 27.788-11.213Q522 516.575 522 500t-11.212-27.787Q499.575 461 483 461q-16.575 0-27.788 11.213Q444 483.425 444 500t11.212 27.787Q466.425 539 483 539Zm-168-4 127-126-180-179-124 124 177 181Zm94 77q16.575 0 27.788-11.213Q448 589.575 448 573t-11.212-27.787Q425.575 534 409 534q-16.575 0-27.788 11.213Q370 556.425 370 573t11.212 27.787Q392.425 612 409 612Zm74 74q16.575 0 27.788-11.213Q522 663.575 522 647t-11.212-27.787Q499.575 608 483 608q-16.575 0-27.788 11.213Q444 630.425 444 647t11.212 27.787Q466.425 686 483 686Zm73-74q16.575 0 27.787-11.213Q595 589.575 595 573t-11.213-27.787Q572.575 534 556 534t-27.787 11.213Q517 556.425 517 573t11.213 27.787Q539.425 612 556 612Zm-34 126 180 180 124-124-179-179-125 123ZM358 450Zm248 248Z",
    cars: "M224.118 895Q175 895 140.5 860.583 106 826.167 106 777H40V316q0-24 18-42t42-18h579v167h105l136 181v173h-71q0 49.167-34.382 83.583Q780.235 895 731.118 895 682 895 647.5 860.583 613 826.167 613 777H342q0 49-34.382 83.5-34.383 34.5-83.5 34.5ZM224 835q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17ZM100 717h22q17-27 43.041-43 26.041-16 58-16t58.459 16.5Q308 691 325 717h294V316H100v401Zm631 118q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm-52-204h186L754 483h-75v148ZM360 527Z",
    logout: "M179.761 941.978q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865V278.152q0-27.697 20.336-48.033 20.336-20.337 48.034-20.337h292.674v68.37H179.761v595.696h292.674v68.13H179.761Zm486.478-182.369-48.978-48.5 101.043-101.044H371.891v-68.13h344.413L615.261 440.891l48.978-48.5L848.609 577l-182.37 182.609Z",
    pause: "M524.761 867V285H771v582H524.761ZM189 867V285h246.239v582H189Zm404.131-68.37H702.63V353.37H593.131v445.26Zm-335.761 0h109.499V353.37H257.37v445.26Zm0-445.26v445.26-445.26Zm335.761 0v445.26-445.26Z",
    play: "M314.022 864V282l457.217 291-457.217 291Zm68.13-291Zm0 166.935L644.935 573 382.152 406.065v333.87Z",
    stop: "M302.152 398.152v355.696-355.696Zm-68.13 423.826V329.782h492.196v492.196H234.022Zm68.13-68.13h355.696V398.152H302.152v355.696Z",
    work: "M140 936q-24 0-42-18t-18-42V396q0-24 18-42t42-18h180V236q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680V396H140v480Zm240-540h200V236H380v100ZM140 876V396v480Z",
    ing: "M42 936v-92q0-34 16-56.5t45-36.5q54-26 115.5-43T358 691q78 0 139.5 17T613 751q29 14 45 36.5t16 56.5v92H42Zm60-60h512v-32q0-15-8.5-24.5T585 805q-43-19-96-36.5T358 751q-78 0-131 17.5T131 805q-12 5-20.5 14.5T102 844v32Zm256-245q-66 0-108-43t-42-107h-10q-8 0-14-6t-6-14q0-8 6-14t14-6h10q0-40 20-72t52-52v39q0 6 4.5 10.5T295 371q7 0 11-4.5t4-10.5v-52q8-2 22-3.5t27-1.5q13 0 27 1.5t22 3.5v52q0 6 4 10.5t11 4.5q6 0 10.5-4.5T438 356v-39q32 20 51 52t19 72h10q8 0 14 6t6 14q0 8-6 14t-14 6h-10q0 64-42 107t-108 43Zm0-60q42 0 66-25t24-65H268q0 40 24 65t66 25Zm302 124-2-29q-7-4-14.5-9T630 647l-26 14-22-32 26-19q-2-4-2-7.5v-15q0-3.5 2-7.5l-26-19 22-32 26 14 14-10q7-5 14-9l2-29h40l2 29q7 4 14 9l14 10 26-14 22 32-26 19q2 4 2 7.5v15q0 3.5-2 7.5l26 19-22 32-26-14q-6 5-13.5 10t-14.5 9l-2 29h-40Zm20-62q16 0 27-11t11-27q0-16-11-27t-27-11q-16 0-27 11t-11 27q0 16 11 27t27 11Zm88-155-9-35q-10-4-20.5-11T721 417l-44 16-20-35 35-28q-2-5-3.5-11t-1.5-12q0-6 1.5-12t3.5-11l-35-28 20-35 44 16q7-8 17.5-15.5T759 251l9-35h38l9 35q10 3 20.5 10.5T853 277l44-16 20 35-35 28q2 5 3.5 11t1.5 12q0 6-1.5 12t-3.5 11l35 28-20 35-44-16q-7 8-17.5 15T815 443l-9 35h-38Zm19-73q25 0 41.5-16.5T845 347q0-25-16.5-41.5T787 289q-25 0-41.5 16.5T729 347q0 25 16.5 41.5T787 405ZM102 876h512-512Z",
    eye: "M480.118 726Q551 726 600.5 676.382q49.5-49.617 49.5-120.5Q650 485 600.382 435.5q-49.617-49.5-120.5-49.5Q409 386 359.5 435.618q-49.5 49.617-49.5 120.5Q310 627 359.618 676.5q49.617 49.5 120.5 49.5Zm-.353-58Q433 668 400.5 635.265q-32.5-32.736-32.5-79.5Q368 509 400.735 476.5q32.736-32.5 79.5-32.5Q527 444 559.5 476.735q32.5 32.736 32.5 79.5Q592 603 559.265 635.5q-32.736 32.5-79.5 32.5ZM480 856q-146 0-264-83T40 556q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.169 240Q601 796 702.5 730.5 804 665 857 556q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359 316 257.5 381.5 156 447 102 556q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z",
    phone: "M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z",
    mail: "M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z",

};

export { ICONS };

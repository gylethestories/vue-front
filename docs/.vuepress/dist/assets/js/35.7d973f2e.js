(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{517:function(s,t,a){"use strict";a.r(t);var e=a(20),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"flex布局语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex布局语法"}},[s._v("#")]),s._v(" flex布局语法")]),s._v(" "),a("h2",{attrs:{id:"一、flex-布局是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、flex-布局是什么"}},[s._v("#")]),s._v(" 一、flex 布局是什么？")]),s._v(" "),a("p",[s._v('Flex是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。')]),s._v(" "),a("p",[a("strong",[s._v("任何一个容器")]),s._v(" 都可以指定为 Flex 布局。\n")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("行内元素")]),s._v(" 也可以使用 Flex 布局。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Webkit 内核的浏览器，必须加上"),a("code",[s._v("-webkit")]),s._v("前缀。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Safari */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("注意")]),s._v("，设为 Flex 布局以后，子元素的"),a("code",[s._v("float")]),s._v("、"),a("code",[s._v("clear")]),s._v("和"),a("code",[s._v("vertical-align")]),s._v("属性将失效。")]),s._v(" "),a("h2",{attrs:{id:"二、基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[s._v("#")]),s._v(" 二、基本概念")]),s._v(" "),a("p",[s._v('采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。')]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png",alt:"img"}})]),s._v(" "),a("p",[s._v("容器默认存在两根轴：水平的主轴（或x轴）（main axis）和垂直的交叉轴（或y轴）（cross axis）。主轴的开始位置（与边框的交叉点）叫做"),a("code",[s._v("main start")]),s._v("，结束位置叫做"),a("code",[s._v("main end")]),s._v("；交叉轴的开始位置叫做"),a("code",[s._v("cross start")]),s._v("，结束位置叫做"),a("code",[s._v("cross end")]),s._v("。")]),s._v(" "),a("p",[s._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做"),a("code",[s._v("main size")]),s._v("，占据的交叉轴空间叫做"),a("code",[s._v("cross size")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"三、容器的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、容器的属性"}},[s._v("#")]),s._v(" 三、容器的属性")]),s._v(" "),a("p",[s._v("以下6个属性设置在容器上。(即设置在 display: flex; 的元素上)")]),s._v(" "),a("blockquote",[a("ul",[a("li",[a("p",[s._v("flex-direction      方向     决定项目的排列方向")])]),s._v(" "),a("li",[a("p",[s._v("flex-wrap             换行")])]),s._v(" "),a("li",[a("p",[s._v("flex-flow              方向和换行的简写")])]),s._v(" "),a("li",[a("p",[s._v("justify-content    主轴对齐方式")])]),s._v(" "),a("li",[a("p",[s._v("align-items          交叉轴对齐方式")])]),s._v(" "),a("li",[a("p",[s._v("align-content      多轴线的对齐方式")])])])]),s._v(" "),a("h3",{attrs:{id:"_3-1-flex-direction属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-flex-direction属性"}},[s._v("#")]),s._v(" 3.1 flex-direction属性")]),s._v(" "),a("p",[a("code",[s._v("flex-direction")]),s._v("属性决定主轴的方向（即项目的排列方向）。")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row | row-reverse | column | column-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png",alt:"img"}})]),s._v(" "),a("p",[s._v("它可能有4个值。")]),s._v(" "),a("blockquote",[a("ul",[a("li",[a("code",[s._v("row")]),s._v("（默认值）：主轴为水平方向，起点在左端。")]),s._v(" "),a("li",[a("code",[s._v("row-reverse")]),s._v("：主轴为水平方向，起点在右端。")]),s._v(" "),a("li",[a("code",[s._v("column")]),s._v("：主轴为垂直方向，起点在上沿。")]),s._v(" "),a("li",[a("code",[s._v("column-reverse")]),s._v("：主轴为垂直方向，起点在下沿。")])])]),s._v(" "),a("h3",{attrs:{id:"_3-2-flex-wrap属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-flex-wrap属性"}},[s._v("#")]),s._v(" 3.2 flex-wrap属性")]),s._v(" "),a("p",[s._v('默认情况下，项目都排在一条线（又称"轴线"）上。'),a("code",[s._v("flex-wrap")]),s._v("属性定义，如果一条轴线排不下，如何换行。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png",alt:"img"}})]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap | wrap | wrap-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[s._v("它可能取三个值。")]),s._v(" "),a("p",[s._v("（1）"),a("code",[s._v("nowrap")]),s._v("（默认）：不换行。会压缩项目的宽度")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png",alt:"img"}})]),s._v(" "),a("p",[s._v("（2）"),a("code",[s._v("wrap")]),s._v("：换行，第一行在上方。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("（3）"),a("code",[s._v("wrap-reverse")]),s._v("：换行，第一行在下方。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"_3-3-flex-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-flex-flow"}},[s._v("#")]),s._v(" 3.3 flex-flow")]),s._v(" "),a("p",[a("code",[s._v("flex-flow")]),s._v("属性是"),a("code",[s._v("flex-direction")]),s._v("属性和"),a("code",[s._v("flex-wrap")]),s._v("属性的简写形式，默认值为"),a("code",[s._v("row nowrap")]),s._v("。")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <flex-direction> || <flex-wrap>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("h3",{attrs:{id:"_3-4-justify-content属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-justify-content属性"}},[s._v("#")]),s._v(" 3.4 justify-content属性")]),s._v(" "),a("p",[a("code",[s._v("justify-content")]),s._v("属性定义了项目在主轴上的对齐方式。")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png",alt:"img"}})]),s._v(" "),a("p",[s._v("它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。")]),s._v(" "),a("blockquote",[a("ul",[a("li",[a("code",[s._v("flex-start")]),s._v("（默认值）：左对齐")]),s._v(" "),a("li",[a("code",[s._v("flex-end")]),s._v("：右对齐")]),s._v(" "),a("li",[a("code",[s._v("center")]),s._v("： 居中")]),s._v(" "),a("li",[a("code",[s._v("space-between")]),s._v("：两端对齐，项目之间的间隔都相等。")]),s._v(" "),a("li",[a("code",[s._v("space-around")]),s._v("：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。")])])]),s._v(" "),a("h3",{attrs:{id:"_3-5-align-items属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-align-items属性"}},[s._v("#")]),s._v(" 3.5 align-items属性")]),s._v(" "),a("p",[a("code",[s._v("align-items")]),s._v("属性定义项目在交叉轴上如何对齐。")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | baseline | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png",alt:"img"}})]),s._v(" "),a("p",[s._v("它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。")]),s._v(" "),a("blockquote",[a("ul",[a("li",[a("code",[s._v("flex-start")]),s._v("：交叉轴的起点对齐。")]),s._v(" "),a("li",[a("code",[s._v("flex-end")]),s._v("：交叉轴的终点对齐。")]),s._v(" "),a("li",[a("code",[s._v("center")]),s._v("：交叉轴的中点对齐。")]),s._v(" "),a("li",[a("code",[s._v("baseline")]),s._v(": 项目的第一行文字的基线对齐。")]),s._v(" "),a("li",[a("code",[s._v("stretch")]),s._v("（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。")])])]),s._v(" "),a("h3",{attrs:{id:"_3-6-align-content属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-align-content属性"}},[s._v("#")]),s._v(" 3.6 align-content属性")]),s._v(" "),a("p",[a("code",[s._v("align-content")]),s._v("属性定义了多根轴线的对齐方式（"),a("strong",[s._v("一排项目为一根轴线")]),s._v("）。如果项目只有一根轴线，该属性不起作用。")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png",alt:"img"}})]),s._v(" "),a("p",[s._v("该属性可能取6个值。")]),s._v(" "),a("blockquote",[a("ul",[a("li",[a("code",[s._v("flex-start")]),s._v("：与交叉轴的起点对齐。")]),s._v(" "),a("li",[a("code",[s._v("flex-end")]),s._v("：与交叉轴的终点对齐。")]),s._v(" "),a("li",[a("code",[s._v("center")]),s._v("：与交叉轴的中点对齐。")]),s._v(" "),a("li",[a("code",[s._v("space-between")]),s._v("：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),s._v(" "),a("li",[a("code",[s._v("space-around")]),s._v("：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),s._v(" "),a("li",[a("code",[s._v("stretch")]),s._v("（默认值）：轴线占满整个交叉轴。")])])]),s._v(" "),a("h2",{attrs:{id:"四、项目的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、项目的属性"}},[s._v("#")]),s._v(" 四、项目的属性")]),s._v(" "),a("p",[s._v("以下6个属性设置在项目上。")]),s._v(" "),a("blockquote",[a("ul",[a("li",[a("code",[s._v("order")])]),s._v(" "),a("li",[a("code",[s._v("flex-grow")])]),s._v(" "),a("li",[a("code",[s._v("flex-shrink")])]),s._v(" "),a("li",[a("code",[s._v("flex-basis")])]),s._v(" "),a("li",[a("code",[s._v("flex")]),s._v(" "),a("code",[s._v("flex-grow")]),s._v(", "),a("code",[s._v("flex-shrink")]),s._v(" 和 "),a("code",[s._v("flex-basis")]),s._v("的简写")]),s._v(" "),a("li",[a("code",[s._v("align-self")])])])]),s._v(" "),a("h3",{attrs:{id:"_4-1-order属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-order属性"}},[s._v("#")]),s._v(" 4.1 order属性")]),s._v(" "),a("p",[a("code",[s._v("order")]),s._v("属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <integer>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png",alt:"img"}})]),s._v(" "),a("h3",{attrs:{id:"_4-2-flex-grow属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-flex-grow属性"}},[s._v("#")]),s._v(" 4.2 flex-grow属性")]),s._v(" "),a("p",[a("code",[s._v("flex-grow")]),s._v("属性定义项目的放大比例，默认为"),a("code",[s._v("0")]),s._v("，即如果存在剩余空间，也不放大。")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 0 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png",alt:"img"}})]),s._v(" "),a("p",[s._v("如果所有项目的"),a("code",[s._v("flex-grow")]),s._v("属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的"),a("code",[s._v("flex-grow")]),s._v("属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。")]),s._v(" "),a("h3",{attrs:{id:"_4-3-flex-shrink属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-flex-shrink属性"}},[s._v("#")]),s._v(" 4.3 flex-shrink属性")]),s._v(" "),a("p",[a("code",[s._v("flex-shrink")]),s._v("属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 1 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("如果所有项目的"),a("code",[s._v("flex-shrink")]),s._v("属性都为1，当空间不足时，都将等比例缩小。如果一个项目的"),a("code",[s._v("flex-shrink")]),s._v("属性为0，其他项目都为1，则空间不足时，前者不缩小。")]),s._v(" "),a("p",[s._v("负值对该属性无效。")]),s._v(" "),a("h3",{attrs:{id:"_4-4-flex-basis属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-flex-basis属性"}},[s._v("#")]),s._v(" 4.4 flex-basis属性")]),s._v(" "),a("p",[a("code",[s._v("flex-basis")]),s._v("属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为"),a("code",[s._v("auto")]),s._v("，即项目的本来大小。")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <length> | auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default auto */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[s._v("它可以设为跟"),a("code",[s._v("width")]),s._v("或"),a("code",[s._v("height")]),s._v("属性一样的值（比如350px），则项目将占据固定空间。")]),s._v(" "),a("h3",{attrs:{id:"_4-5-flex属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-flex属性"}},[s._v("#")]),s._v(" 4.5 flex属性")]),s._v(" "),a("p",[a("code",[s._v("flex")]),s._v("属性是"),a("code",[s._v("flex-grow")]),s._v(", "),a("code",[s._v("flex-shrink")]),s._v(" 和 "),a("code",[s._v("flex-basis")]),s._v("的简写，默认值为"),a("code",[s._v("0 1 auto")]),s._v("。后两个属性可选。")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none | [ <"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-grow'")]),s._v("> <"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-shrink'")]),s._v(">? || <"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-basis'")]),s._v("> ]\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[s._v("该属性有两个快捷值："),a("code",[s._v("auto")]),s._v(" ("),a("code",[s._v("1 1 auto")]),s._v(") 和 none ("),a("code",[s._v("0 0 auto")]),s._v(")。")]),s._v(" "),a("p",[a("strong",[s._v("建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")])]),s._v(" "),a("h3",{attrs:{id:"_4-6-align-self属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-align-self属性"}},[s._v("#")]),s._v(" 4.6 align-self属性")]),s._v(" "),a("p",[a("code",[s._v("align-self")]),s._v("属性允许单个项目有与其他项目不一样的对齐方式，可覆盖"),a("code",[s._v("align-items")]),s._v("属性。默认值为"),a("code",[s._v("auto")]),s._v("，表示继承父元素的"),a("code",[s._v("align-items")]),s._v("属性，如果没有父元素，则等同于"),a("code",[s._v("stretch")]),s._v("。")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto | flex-start | flex-end | center | baseline | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png",alt:"img"}})]),s._v(" "),a("p",[s._v("该属性可能取6个值，除了auto，其他都与align-items属性完全一致。")]),s._v(" "),a("p",[s._v("（完）")]),s._v(" "),a("blockquote",[a("p",[s._v("来源：")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.ruanyifeng.com/blog/2015/07/flex-examples.html"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("​")])])}),[],!1,null,null,null);t.default=n.exports}}]);
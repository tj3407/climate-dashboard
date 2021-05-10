(this["webpackJsonpclimate-dashboard"]=this["webpackJsonpclimate-dashboard"]||[]).push([[0],{69:function(e,a,t){},70:function(e,a,t){},76:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(12),r=t.n(i),l=(t(69),t(70),t(40)),c=t(9),o=t(113),h=t(44),d=t(100),j=t(54),m=t(102),u=t(103),b=t(104),f=t(115),p=t(105),g=t(106),O=t(114),x=t(2);var v=function(e){var a=n.a.useState([]),t=Object(j.a)(a,2),s=t[0],i=t[1];return n.a.useEffect((function(){e.url&&fetch(e.url,{method:"GET",headers:{token:"wYkAieXfqbXfuNdTiNWEhodKuEVdtUkT"}}).then((function(e){return e.json()})).then((function(e){return i(e.results)}))}),[]),Object(x.jsx)(d.a,{item:!0,xs:3,children:Object(x.jsx)(m.a,{elevation:0,style:{border:"1px solid gray"},children:Object(x.jsxs)(u.a,{style:{textAlign:"left",height:200,overflow:"auto",padding:0},children:[Object(x.jsx)(b.a,{position:"sticky",style:{padding:10},elevation:0,color:"secondary",children:e.label}),Object(x.jsx)(f.a,{component:"fieldset",style:{padding:10},children:Object(x.jsx)(p.a,{children:s&&s.map((function(e){return Object(x.jsx)(g.a,{control:Object(x.jsx)(O.a,{name:e.id}),label:e.name},e.uid)}))})})]})})})};var w=function(e){return Object(x.jsxs)(o.a,{padding:4,children:[Object(x.jsx)(h.a,{variant:"h3",children:"Climate Dashboard"}),Object(x.jsx)(d.a,{container:!0,spacing:4,direction:"column",children:Object(x.jsx)(v,{label:"Datasets",url:"https://www.ncdc.noaa.gov/cdo-web/api/v2/locations?locationcategoryid=CITY&name=san"})})]})},y=t(51),S=t(52),k=t(55),N=t(53),G=(t(76),t(112)),C=t(108),M=t(109),D=t(110),A=t(107);var W=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("iframe",{src:"https://coast.noaa.gov/slr/#/layer/slr",frameborder:"0",scrolling:"no",allowfullscreen:!0,width:"100%",height:"404",title:"Sea Level Rise Viewer"})}),Object(x.jsxs)("div",{className:"mt-2",children:[Object(x.jsx)("p",{className:"inline paragraph bold",children:"Enter an address above or "}),Object(x.jsx)(A.a,{href:"https://coast.noaa.gov/slr/#/layer/slr",target:"_blank",children:"Go to NOAA Dashboard"})]}),Object(x.jsxs)(h.a,{paragraph:!0,className:"mt-2",children:["Sea level continues to rise at a rate of about ",Object(x.jsx)("span",{className:"paragraph bold",children:"1/8"})," of an inch per year. With continued ocean and atmospheric warming, sea levels will most likely rise for many centuries at rates higher than current levels."]})]})};var L=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("iframe",{src:"https://gfycat.com/ifr/NaiveParchedCrocodileskink",frameborder:"0",scrolling:"no",allowfullscreen:!0,width:"100%",height:"404",title:"Thermal Expansion"})}),Object(x.jsx)(h.a,{variant:"h5",className:"mt-4",children:"Thermal Expansion"}),Object(x.jsx)(h.a,{paragraph:!0,className:"mt-2",children:'Global sea level is rising as a result of global warming. Oceans have absorbed around 85 percent of the excess heat trapped by the atmosphere since 1880. As ocean water warms, the water expands due to a process called "thermal expansion." This thermal expansion has been the main driver of global sea level rise after the start of the Industrial Revolution. However, in recent years, the share of thermal expansion in global sea level rise has declined as the shrinking of land ice has accelerated.'})]})},E=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("iframe",{src:"https://gfycat.com/ifr/MeekActualCygnet",frameborder:"0",scrolling:"no",allowfullscreen:!0,width:"100%",height:"404",title:"Glacial Melt"})}),Object(x.jsx)(h.a,{variant:"h5",className:"mt-2",children:"Glacial Melt"}),Object(x.jsx)(h.a,{paragraph:!0,className:"mt-2",children:"Land ice stores nearly 2/3 of the world's freshwater but is shrinking due to higher atmospheric temperatures. Glaciers partially melt during the summer and grow again during winter. But due to the rise of temperature, ice growth during the winter is much less than ice melt in the summer resulting in an overall loss of ice sheet."})]})},R=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("iframe",{src:"https://gfycat.com/ifr/DefiantSillyGaur",frameborder:"0",scrolling:"no",allowfullscreen:!0,width:"100%",height:"412",title:"Gulf Stream"})}),Object(x.jsx)(h.a,{paragraph:!0,className:"mt-2",children:"The Gulf Stream plays a vital role in redistributing heat throughout our planet. Research has shown that it has been at its weakest in the past 1600 years and the slowdown is likely linked to human-caused climate change. As atmospheric temperatures increase, the enhanced melting of the Greenland Ice Sheet adds fresh water to the surface ocean and disturbs the flow of warm water current that moves from the south and cooled down up north. Once the water is cooled down and becomes denser, it then sinks to the deeper ocean layers (as denser water is heavier) and starts it journey again back down south. Fresh water reduces the salinity of the ocean water and, thus, the density of the water inhibiting the sinking and weakening the flow of the stream."}),Object(x.jsx)(h.a,{paragraph:!0,className:"mt-2 paragraph bold",children:"So what happens when the Gulf Stream flow is weakened?"}),Object(x.jsx)(h.a,{paragraph:!0,className:"mt-2",children:"Researchers in Europe has stated that this could imply that more extreme weather events will come as a result. Other studies found that possible consequences can also include extream heat waaves or a decrease in summer rainfall."})]})},T=function(e){Object(k.a)(t,e);var a=Object(N.a)(t);function t(e){var s;return Object(y.a)(this,t),(s=a.call(this,e)).handleDataPageClick=function(){s.setState({isDataModalOpen:!0})},s.handleOceanWarmingClick=function(){s.setState({isOceanWarmingModalOpen:!0})},s.handleGlacialClick=function(){s.setState({isGlacialModalOpen:!0})},s.handleGulfStreamClick=function(){s.setState({isGulfStreamModalOpen:!0})},s.renderDataDialog=function(){return Object(x.jsxs)(G.a,{open:s.state.isDataModalOpen,onClose:function(){return s.setState({isDataModalOpen:!1})},maxWidth:"md",children:[Object(x.jsx)(C.a,{onClose:function(){return s.setState({isDataModalOpen:!1})},children:"NOAA Sea Level Rise Viewer "}),Object(x.jsx)(M.a,{children:Object(x.jsx)(W,{})})]})},s.renderOceanWarmingDialog=function(){return Object(x.jsxs)(G.a,{open:s.state.isOceanWarmingModalOpen,onClose:function(){return s.setState({isOceanWarmingModalOpen:!1})},maxWidth:"md",children:[Object(x.jsx)(C.a,{onClose:function(){return s.setState({isOceanWarmingModalOpen:!1})},children:"Ocean Warming"}),Object(x.jsx)(M.a,{children:Object(x.jsx)(L,{})})]})},s.renderGlacialDialog=function(){return Object(x.jsxs)(G.a,{open:s.state.isGlacialModalOpen,onClose:function(){return s.setState({isGlacialModalOpen:!1})},maxWidth:"md",children:[Object(x.jsx)(C.a,{onClose:function(){return s.setState({isGlacialModalOpen:!1})},children:"Glacial Melting"}),Object(x.jsx)(M.a,{children:Object(x.jsx)(E,{})})]})},s.renderGulfStreamDialog=function(){return Object(x.jsxs)(G.a,{open:s.state.isGulfStreamModalOpen,onClose:function(){return s.setState({isGulfStreamModalOpen:!1})},maxWidth:"md",children:[Object(x.jsx)(C.a,{onClose:function(){return s.setState({isGulfStreamModalOpen:!1})},children:"Gulf Stream"}),Object(x.jsx)(M.a,{children:Object(x.jsx)(R,{})})]})},s.state={isDataModalOpen:!1,isOceanWarmingModalOpen:!1,isGlacialModalOpen:!1,isGulfStreamModalOpen:!1},s}return Object(S.a)(t,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("main",{children:Object(x.jsxs)("article",{children:[Object(x.jsx)("section",{className:"section-1",children:Object(x.jsxs)("div",{className:"d-flex direction-column justify-between h-100",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h3",{className:"text-white",children:"ENS320 Sea Level Rise"})}),Object(x.jsx)("div",{children:Object(x.jsx)("h1",{className:"text-white pb-4 mb-4 w-50",children:"Exploring Sea Level Rise as a result of Climate Change"})})]})}),Object(x.jsx)("section",{className:"section-2",children:Object(x.jsxs)("div",{className:"d-flex mt-4 justify-between",children:[Object(x.jsxs)("div",{className:"flex-1",children:[Object(x.jsx)("h3",{className:"mb-4",children:"Prior to the 20th century, sea level has risen at an average rate of 0.06 inches per year. Since 1993, however, average sea level has risen at a rate of 0.11 - 0.14 inches per year - roughly a 100% increase"}),Object(x.jsx)(D.a,{variant:"outlined",size:"large",onClick:this.handleDataPageClick,children:"Learn More"})]}),Object(x.jsx)("div",{className:"flex-1 pl-4 ml-4",children:Object(x.jsx)("img",{src:"./assets/images/Global_Mean_Sea_Level.png",width:"580",height:"250",alt:"sea level chart"})})]})}),Object(x.jsx)("section",{className:"section-3",children:Object(x.jsxs)("div",{className:"d-flex mt-4",children:[Object(x.jsxs)("div",{className:"flex-1",children:[Object(x.jsx)("h3",{children:"As our ocean warms, sea level rises."}),Object(x.jsx)("p",{className:"mb-4",children:"When heat is absorbed by our oceans, the water expands and the volume is affected immensely. Measurements from Argo profiling floats show that warming of upper ocean surface caused sea level to rise due to thermal expansion (NASA.gov)"}),Object(x.jsx)(D.a,{variant:"outlined",size:"large",onClick:this.handleOceanWarmingClick,children:"Learn More"})]}),Object(x.jsx)("div",{className:"flex-1 pl-4 ml-4",children:Object(x.jsx)("img",{src:"./assets/images/pexels-stijn-dijkstra-2499791.jpg",width:"580",height:"250",alt:"sea level chart"})})]})}),Object(x.jsx)("section",{className:"section-4",children:Object(x.jsxs)("div",{className:"d-flex mt-4",children:[Object(x.jsx)("div",{className:"flex-1",children:Object(x.jsx)("img",{src:"./assets/images/pexels-scott-m-graves-6168279.jpg",width:"580",height:"250",alt:"sea level chart"})}),Object(x.jsxs)("div",{className:"flex-1 pl-4 ml-4",children:[Object(x.jsx)("h3",{children:"Glacial melt contribute a third of sea level rise"}),Object(x.jsx)("p",{className:"mb-4",children:"Mountain glaciers contribute roughly a third of measured sea-level rise. Since 1961, glaciers have lost roughly 9,000 billion tons of ice, raising water levels by 27 millimeters. Research has highlighted that many of the world\u2019s glaciers will disappear within the next century! "}),Object(x.jsx)(D.a,{variant:"outlined",size:"large",onClick:this.handleGlacialClick,children:"Learn More"})]})]})}),Object(x.jsx)("section",{className:"section-5",children:Object(x.jsx)("div",{className:"d-flex justify-center align-center text-center w-75 m-auto h-100",children:Object(x.jsx)("h3",{className:"text-white pl-4 pr-4",children:"Gulf Stream is weakening as a result of global warming. Increased rainfall and melting Greenland ice sheets add fresh water to the ocean surface reducing the salinity and the density of the water. This prevents warmer water coming from the south to sink to the deeper ocean layers that flow back to the south east."})})}),Object(x.jsx)("section",{className:"section-6",children:Object(x.jsxs)("div",{className:"d-flex mt-4",children:[Object(x.jsx)("div",{className:"flex-1",children:Object(x.jsx)("img",{src:"./assets/images/florida.png",width:"580",height:"250",alt:"sea level chart"})}),Object(x.jsxs)("div",{className:"flex-1 pl-4 ml-4",children:[Object(x.jsx)("h3",{children:"Sea Level Rise due to weakened Gulf Stream"}),Object(x.jsx)("p",{className:"mb-4",children:"A weaker Gulf Stream can result in sea level rise along the east coast of the United States. When the Gulf Stream is strong, water is swept away from the coast more rapidly as it makes its trek up north. But when the Gulf Stream is weak, the water doesn\u2019t get swept away as much resulting in sea level rise along the coast. "}),Object(x.jsx)(D.a,{variant:"outlined",size:"large",onClick:this.handleGulfStreamClick,children:"Learn More"})]})]})})]})}),Object(x.jsx)("footer",{children:Object(x.jsxs)("section",{className:"text-white",children:[Object(x.jsx)(h.a,{paragraph:!0,children:"References:"}),Object(x.jsx)(h.a,{variant:"caption",display:"block",children:"1. Images obtained from https://pexels.com"}),Object(x.jsx)(h.a,{variant:"caption",display:"block",children:"2. UCSUSA. Causes of Sea Level Rise. Union of Concerned Scientists. https://www.ucsusa.org/sites/default/files/legacy/assets/documents/global_warming/Causes-of-Sea-Level-Rise.pdf"}),Object(x.jsx)(h.a,{variant:"caption",display:"block",children:"3. NOAA. Is sea level rising? National Ocean Service Website. https://oceanservice.noaa.gov/facts/sealevel.html"}),Object(x.jsx)(h.a,{variant:"caption",display:"block",children:"4. Fleshler, David. August 9, 2019. The Gulf Stream is slowing down. That could mean rising seas and a hotter Florida. Phys Org. https://phys.org/news/2019-08-gulf-stream-seas-hotter-florida.html"}),Object(x.jsx)(h.a,{variant:"caption",display:"block",children:"5. Imster, Eleanor. March 3, 2021. Gulf Stream at its weakest in over 1,000 years. EarthSky. https://earthsky.org/earth/gulf-stream-atlantic-weakest-in-over-1000-years"}),Object(x.jsx)(h.a,{variant:"caption",display:"block",children:"6. Rubin, Harvey. February 13, 2018. Sea-level rise is a regional threat. It will need a regional game plan to fight it. Miami Herald. https://www.miamiherald.com/opinion/op-ed/article199983139.html"}),Object(x.jsx)(h.a,{variant:"caption",display:"block",children:"7. Gifs obtained from https://gfycat.com"})]})}),this.renderDataDialog(),this.renderOceanWarmingDialog(),this.renderGlacialDialog(),this.renderGulfStreamDialog()]})}}]),t}(s.PureComponent);var I=function(){return Object(x.jsx)(l.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(c.a,{path:"/dashboard",children:Object(x.jsx)(w,{})}),Object(x.jsx)(c.a,{path:"/",children:Object(x.jsx)(T,{})})]})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,118)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,i=a.getLCP,r=a.getTTFB;t(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),F()}},[[81,1,2]]]);
//# sourceMappingURL=main.2081f406.chunk.js.map
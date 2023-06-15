import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const [searchOpen,setSearchOpen]=useState(false)
  useEffect(()=>{
  AOS.init();
},[])
const [count,setCount]=useState("1");
function search(){
  setSearchOpen(!searchOpen)
}
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  beforeChange: (current, next) => {
    setCount(next+1);
    
  }

};

  return (
    <>
    <div style={{overflowX:"clip",paddingBottom:"150px",position:"relative"}}>
      <div className='header flex items-center gap-5 text-center justify-center mt-12'>
        <div className=''>
<Link href="/"><img src="/logo.svg" style={{width:"150px !important",height:"80px !important",maxWidth:"150px !important"}} /></Link>
</div>
<div className='flex gap-5 ml-10'>
  <Link href="/" className='header-items text-[#999FAE] hover:text-black' >Features</Link>
  <Link href="/" className='header-items text-[#999FAE] hover:text-black'>Pricing</Link>
  <Link href="/" className='header-items text-[#999FAE] hover:text-black'>Tours</Link>
  <Link href="/" className='header-items text-[#999FAE] hover:text-black'>Explore <i className='fa fa-angle-down'></i></Link>
</div>
<div style={{zIndex:"9999"}} className='ml-56 flex relative'>
<input className='focus:outline-none' type="text" placeholder='Search...'style={{position:"absolute", backgroundColor:searchOpen && "white",padding:"5px",borderRadius:"5px 0px 0px 5px",right:"25px",boxShadow:searchOpen &&"0px 1px 1px rgba(0,0,0,0.2)",display:searchOpen ? "block" : "none"}}></input>
  <button className='focus:outline-none'  style={{backgroundColor:searchOpen && "white",padding:"7px",borderRadius:"0px 5px 5px 0px",boxShadow:searchOpen &&"1px 1px 1px 1px rgba(0,0,0,0.2)"}}>
<i className="fa fa-search" onClick={search} style={{color:searchOpen==true ? "#2522BA":"white",float:"right",marginTop:"4px"}}></i>
</button>
</div>
<div  style={{zIndex:"9999"}}>
  <button className='font-semibold hover:-translate-y-1' style={{transition:"all .45s",color:"#2522BA",backgroundColor:"#FAB8C4",height:"70px",width:"178px",borderRadius:"15px"}}>Get Started</button>
</div>
      </div>
      <div className='flex justify-center' style={{ position:"relative",maxWidth:"1800px", margin:"100px auto 0px"}} >
        <div style={{width:"400px",marginLeft:"150px",marginRight:"100px"}}>
        <h1 className='font-[500]' style={{fontSize:"85px",fontFamily: "'DM Sans', sans-serif !important"}}><span>Create</span><br/><span className='con'>Like</span><br/>
        <span >Never</span><br/><span className='con2'>Before</span></h1>
        <p style={{color:"#999fae"}}>Create, build, collaborate and ship products faster. Good bye code! 👋</p>
        <div data-AOS="fade-up" style={{display:"flex",alignItems:"center",marginTop:"50px"}}>
          <button className='font-semibold hover:-translate-y-1' style={{transition:"all .45s",color:"#FFFFFF",backgroundColor:"#5956E9",height:"70px",width:"178px",borderRadius:"15px"}}>Get Started</button>
        <Link href="/"style={{display:"flex",marginLeft:"30px"}}><img src="/play.svg" width={"20px"}></img><p style={{color:"#999fae",marginTop:"5px",marginLeft:"15px"}}>See It In Action!</p></Link>
        </div>
        <div data-AOS="fade-up" className='mt-12'>
        <Link href="/"style={{display:"flex"}}><img src="/scroll.svg" width={"20px"}></img><p style={{color:"#999fae",marginTop:"5px",marginLeft:"15px"}}>Scroll to Explore</p></Link>
        </div>
        </div>
        <div style={{alignItems:"center",position:"relative",textAlign:"center",zIndex:"2"}}>
          <div ><img src="/main-pic-3.png" style={{width:"755px !important",height:"555px !important"}} /></div>
          <img src="/main-2.png"  style={{willChange:"transform",transform: "translate3d(0px, -18px, 0px)",position:"absolute",width:"200px !important",height:"120px !important",maxWidth:"250px !important",left:"0",bottom:"250px"}} />
          <img src="/access-1.png" style={{willChange:"transform",transform: "translate3d(0px, 49px, 0px)",position:"absolute",width:"350px !important",height:"350px !important",maxWidth:"350px !important",bottom:"380px",right:'0'}} />
         <img src="/mouse.png" style={{position:"absolute",width:"100px !important",height:"40px !important",maxWidth:"100px !important",bottom:"108px",right:'150px'}}></img>
          </div>
         <div style={{position:"absolute", backgroundColor:"#5956E9",width:"1250px",height:"1250px",borderRadius:"50%",top:"-350px",zIndex:"1",right:"-500px"}}></div>
         <div style={{transform: "translate3d(0px, -36px, 0px)",position:"absolute", backgroundColor:"#FFDC60",width:"120px",height:"120px",borderRadius:"50%",top:"40px",zIndex:"1",left:"750px"}}></div>
         <div style={{transform:"translate3d(0px, -61px, 0px)",position:"absolute", backgroundColor:"#FAB8C4",width:"50px",height:"50px",borderRadius:"50%",top:"285px",zIndex:"1",left:"150px"}}></div>
         <div style={{transform:"translate3d(0px, -61px, 0px)",position:"absolute", backgroundColor:"#FFFFFF",width:"100px",height:"100px",borderRadius:"50%",top:"420px",zIndex:"1",right:"180px"}}></div>      
         <div style={{transform:"translate3d(0px, -61px, 0px)",position:"absolute", backgroundColor:"#5956E9",width:"30px",height:"30px",borderRadius:"50%",top:"540px",zIndex:"1",right:"750px"}}></div>      
         <div style={{transform:"translate3d(0px, -61px, 0px)",position:"absolute", backgroundColor:"#FAB8C4",width:"180px",height:"180px",borderRadius:"50%",bottom:"-300px",zIndex:"1",right:"550px"}}></div>      
      </div>
      <div style={{position:"absolute", backgroundColor:"#FFDC60",width:"500px",height:"500px",borderRadius:"50%",top:"-250px",zIndex:"-1",left:"-240px"}}></div>
    </div>
<div className='' style={{backgroundColor:"#27272E"}}>
  <div style={{display:"flex",position:"relative",maxWidth:"1800px", margin:"auto",padding:"150px 0px 100px",justifyContent:"center",overflow:"hidden"}}>
<div style={{display:"flex",gap:"6rem",color:"white",zIndex:"9999"}}><div data-AOS="zoom-out-up" style={{fontSize:"20px",fontWeight:"bold"}}><p>Features</p></div><div style={{width:"750px"}}><div data-AOS="zoom-out-up" ><h1 className='text-7xl '>The world's most powerful design tool.</h1><p style={{width:"450px",color:"rgba(255,255,255,0.5)",marginTop:"25px",fontSize:"20px"}}>Simultaneously design, code and collaborate with your team all from one place.</p></div>
<div style={{color:"white",width:"800px",margin:"250px auto 0px",maxWidth:"1000px", position:"relative"}}> 
<div className='flex absolute -left-48  top-56'><p className='counts'>0{count}</p><p className='ml-24'>05</p></div>
        <Slider {...settings}>
        <div data-AOS="zoom-out" style={{margin:"5px"}}>
          <img style={{margin:"0px 0px 30px"}} src="/camera.png"></img>
          <p style={{margin:"30px 0px",fontSize:"20px",fontWeight:"semibold"}}>Import Photos & Videos</p>
          <p style={{margin:"30px 0px",color:"rgba(255,255,255,0.5)"}} >Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
          <Link className="slickItems text-[rgba(255,255,255,0.5)] hover:text-white hover:pl-16" href="#" style={{margin:"30px 0px"}} >Find out more</Link>
        </div>
        <div data-AOS="zoom-out" style={{margin:"5px"}}>
        <img style={{margin:"0px 0px 30px",height:"120px"}} src="/calendar.png"></img>
        <p style={{margin:"30px 0px",fontSize:"20px",fontWeight:"semibold"}}>Calendar API Built-In</p>
        <p style={{margin:"30px 0px",color:"rgba(255,255,255,0.5)"}} >Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</p>
        <Link className="slickItems text-[rgba(255,255,255,0.5)] hover:text-white hover:pl-16" href="#" style={{margin:"30px 0px"}} >Find out more</Link>
        </div>
        <div style={{margin:"5px"}}>
        <img style={{margin:"0px 0px 30px"}} src="/camera.png"></img>
        <p style={{margin:"30px 0px",fontSize:"20px",fontWeight:"semibold"}}>Import Photos & Videos</p>
        <p style={{margin:"30px 0px",color:"rgba(255,255,255,0.5)"}} >Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
        <Link href="#" style={{margin:"30px 0px"}} className="text-[rgba(255,255,255,0.5)] hover:pl-16 hover:text-white slickItems" >Find out more</Link>
        </div>
        <div style={{margin:"5px"}}>
        <img style={{margin:"0px 0px 30px",height:"120px"}} src="/calendar.png"></img>
        <p style={{margin:"30px 0px",fontSize:"20px",fontWeight:"semibold"}}>Calendar API Built-In</p>
        <p style={{margin:"30px 0px",color:"rgba(255,255,255,0.5)"}} >Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</p>
        <Link href="#" style={{margin:"30px 0px"}}className="text-[rgba(255,255,255,0.5)] hover:text-white hover:pl-16 slickItems" >Find out more</Link>
        </div>
        <div style={{margin:"5px"}}>
        <img style={{margin:"0px 0px 30px"}} src="/camera.png"></img>
        <p style={{margin:"30px 0px",fontSize:"20px",fontWeight:"semibold"}}>Import Photos & Videos</p>
        <p style={{margin:"30px 0px",color:"rgba(255,255,255,0.5)"}} >Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
        <Link href="#" style={{margin:"30px 0px"}}className="text-[rgba(255,255,255,0.5)] hover:text-white hover:pl-16 slickItems" >Find out more</Link>
        </div>
      </Slider>
      </div>

</div></div>
<div data-aos="rotate-c" data-aos-duration="1000"  style={{position:"absolute",left:"-450px",top:"0px"}}><img style={{height:"1250px"}} src='/features-pic-1.svg'></img></div>
<div style={{position:"absolute",width:"260px",height:"260px",backgroundColor:"#525260",borderRadius:"50%",right:"300px",top:"100px"}}></div>
<p style={{width:"1200px",position:"absolute",height:"1px",backgroundColor:"#FFBABA",right:"-500px",top:"500px"}}></p>
</div>

</div>
    <div  className='container-fluid' style={{paddingTop:"40px",paddingBottom:"90px",position:"relative",textAlign:"center",alignItems:"center",backgroundColor:"#ecf2f6"}}>
<div className='fig' style={{height:"750px",width:"750px",backgroundColor:"rgba(255,255,255,0.5)",borderRadius:"60%",display:"flex",margin:"auto"}}>
<div data-AOS="zoom-in" style={{width:"80%",backgroundColor:"rgba(255,255,255,0.8)",borderRadius:"50%",height:"80%",margin:"auto",padding:"60px"}}>
<div  style={{backgroundColor:"#5956E9",borderRadius:"50%",height:"100%",width:"100%",margin:"auto"}}>
<img data-AOS="fade-up" data-aos-delay="300" className='access2' src="/access-2.png" alt="" style={{display:"initial",width:"120%",height:"105%",margin:"33px 79px"}} />
<img data-AOS="fade-down-left"data-aos-delay="400" className='access1' src="/access-1.png" alt="" style={{display:"initial",marginTop:"-912px",marginLeft:"302px",width:"300px",height:"280px",willChange: "transform", transform: "translate3d(0px, -21px, 0px)"}} />
  <img data-AOS="fade-right" data-aos-delay="400" className='main2' src="/main-2.png" alt="" style={{width:"220px",height:"120px", willChange: "transform",marginTop:"-380px",marginLeft:"-36px", transform: "translate3d(0px, -3px, 0px)"}} />
   <img className='cloud1' src="/cloud.png" alt="" style={{width:"137px",height:"89px", willChange: "transform",marginLeft:"543px", transform: "translate3d(0px, -3px, 0px)"}} />
  <div style={{width:"12rem",height:"8rem",marginTop:"-27rem",marginLeft:"-12rem"}}><img className="access__pic js-parallax" src="/cloud.png" alt=""  /></div>
  <div style={{backgroundColor:"#FFDC60",width:"90px",height:"90px",borderRadius:"50%",marginLeft:"-326px",marginTop:"250px",display:"inherit"}}></div>
  <div className='dot' style={{backgroundColor:"#5956E9",width:"45px",height:"45px",borderRadius:"50%",marginLeft:"606px",marginTop:"-472px",display:"inherit"}}></div>
  <div className='media' style={{backgroundColor:"#FAB8C4",width:"80px",height:"80px",borderRadius:"50%",display:"inherit",marginLeft:"808px",marginTop:"180px"}}></div>
</div>
</div>
</div>
<div data-AOS="fade-up" className='mt-20 font-semibold text-xl relative  w-fit mx-auto'>
  <p>Ready to get started?</p>
  <p>Sign up with your email</p>
  <div className='bg-white p-2 absolute rounded-xl -left-20 top-24 flex gap-3 items-center text-sm justify-center'><div className='flex gap-3'><img src="/sending-mail.svg"></img><input className='font-normal focus:outline-none' placeholder='Email address'></input></div><div><button className='font-semibold hover:-translate-y-1' style={{transition:"all .45s",color:"#FFFFFF",backgroundColor:"#5956E9",height:"70px",width:"178px",borderRadius:"15px"}}>Get Started</button></div></div>
</div>
</div>
<div  className='flex container-fluid py-48' style={{zIndex:"-1",position:"relative",alignItems:"center",justifyContent:"center",backgroundColor:"#FFFFFF"}}>
  <div data-AOS="fade-up" style={{maxWidth:"500px"}}>
    <p className='text-[#5956E9] font-semibold text-[20px]'>Auto Adaptive layouts</p>
    <h1 className='dna text-black mt-6 text-7xl'>Responsive DNA</h1>
    <p data-AOS="fade-up" className='text-[#999FAE] mt-12 font-normal text-[18px] w-96'>Easily create truly responsive components while deploying production-ready code.</p>
    <div data-AOS="fade-up" style={{display:"flex",alignItems:"center",gap:"2rem",fontSize:"20px",margin:"25px 0px"}}><img src="/layout-1.svg" /><span>Advance pinning</span></div>
    <div data-AOS="fade-up" style={{display:"flex",alignItems:"center",gap:"2rem",fontSize:"20px",margin:"25px 0px"}}><img src="/layout-2.svg" /><span>Relative positioning with containers</span></div>
    <div data-AOS="fade-up" style={{display:"flex",alignItems:"center",gap:"2rem",fontSize:"20px",margin:"25px 0px"}}><img src="/layout-3.svg" /><span>Percentage-based geometry</span></div>
  </div>
    <div style={{display:"flex",maxWidth:"800px"}}>
    <div data-AOS="fade-right" data-aos-delay="400" style={{maxWidth:"180px",marginTop:"181px",zIndex:"999"}} ><img src="/layouts-pic-4.png" ></img></div>
      <div data-AOS="fade-up" data-aos-delay="300" style={{maxWidth:"786px",marginLeft:"-330px"}} ><img src="/layouts-pic-1.png" ></img></div>
      <div data-AOS="fade-down-left" data-aos-delay="500" style={{maxWidth:"250px",zIndex:"999",marginLeft:"-380px",marginTop:"-56px"}}><img src="/layouts-pic-2.png"></img></div>
      <div data-AOS="fade-left" data-aos-delay="400" style={{maxWidth:"46px",marginLeft:"-120px",marginTop:"248px"}} ><img src="/layouts-pic-3.png" ></img></div>
      <div data-AOS="fade-up-left" data-aos-delay="400"style={{maxWidth:"346px",marginLeft:"-450px",marginTop:"-148px",zIndex:'999'}} ><img src="/layouts-pic-5.png" ></img></div>
    
    </div>
</div>
<div className='flex container-fluid pl-20 py-20' style={{position:"relative", display:"flex",flexDirection:"row-reverse",background:"#fff -webkit-gradient(linear, left top, right top, from(#ECF2F6), color-stop(70.31%, rgba(236, 242, 246, 0)))",backgroundColor:"#ecf2f6",maxWidth:"1240px",borderRadius:"40px",border:"1px solid #F1F5F8",margin:"auto"}}>
<div style={{maxWidth:"840px",marginTop:"50px",overflow:"hidden",paddingLeft:"200px",zIndex:"9999"}}>
    <img data-aos="rotate-c" ata-aos-duration="1000" src='/hand-1.png' style={{width:"840px"}}></img>
  </div>
  <div style={{maxWidth:"400px",marginTop:"50px"}}><h1 data-AOS="fade-right" className='pro mb-6 text-7xl'>Native-like Prototying</h1>
  <p style={{margin:"20px 0"}} data-AOS="fade-right">With Collab Smart Prototype you create your interactions and animations once and store as presets in the cloud for future use.</p>
  <p className='mb-12' data-AOS="fade-right">Use the Collab App to test in real-time.</p>
  <div data-AOS="fade-right" ><button className='sample '  style={{transition:"all .45s",color:"#FFFFFF",backgroundColor:"#5956E9",height:"70px",width:"238px",borderRadius:"15px"}}>See Sample Prototype</button></div>
  </div>
<div style={{position:"absolute" ,width:"90px",height:"90px",borderRadius:"50%",backgroundColor:"#5956E9",top:"-50px",right:"160px"}}></div>
<div style={{position:"absolute" ,width:"420px",height:"420px",borderRadius:"50%",backgroundColor:"#FAB8C4",top:"150px",right:"150px",zIndex:'1'}}></div>
<div style={{position:"absolute" ,width:"80px",height:"80px",borderRadius:"50%",backgroundColor:"#FAB8C4",top:"150px",right:"650px",zIndex:'1'}}></div>
<div style={{position:"absolute" ,width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"#FAB8C4",top:"250px",right:"50px",zIndex:'1'}}></div>
<div style={{position:"absolute" ,width:"130px",height:"130px",borderRadius:"50%",backgroundColor:"#FFDC60",bottom:"-50px",left:"150px",zIndex:'1'}}></div>

</div>
<div  className='flex container-fluid py-48' style={{zIndex:"-1",position:"relative",alignItems:"center",justifyContent:"center",backgroundColor:"#FFFFFF"}}>
 <div className='text-center'> <p className='font-bold mb-3'>Join The Revolution</p>
  <h1 className='text-7xl'>Find the <span className='text-[#5956E9]'>Right Plan.</span></h1>
  <p className='text-[#999FAE]'>Flexible pricing options for freelancers and design teams.</p>
</div>
</div>
</>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ['latin'] })
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1
};

export default function Home() {
const [searchOpen,setSearchOpen]=useState(false)
  useEffect(()=>{
  AOS.init();
},[])
function search(){
  setSearchOpen(!searchOpen)
}

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
        <h1 className='font-semibold' style={{fontSize:"85px"}}><span>Create</span><br/><span className='con'>Like</span><br/>
        <span>Never</span><br/><span className='con2'>Before</span></h1>
        <p style={{color:"#999fae"}}>Create, build, collaborate and ship products faster. Good bye code! 👋</p>
        <div style={{display:"flex",alignItems:"center",marginTop:"50px"}}>
          <button className='font-semibold hover:-translate-y-1' style={{transition:"all .45s",color:"#FFFFFF",backgroundColor:"#5956E9",height:"70px",width:"178px",borderRadius:"15px"}}>Get Started</button>
        <Link href="/"style={{display:"flex",marginLeft:"30px"}}><img src="/play.svg" width={"20px"}></img><p style={{color:"#999fae",marginTop:"5px",marginLeft:"15px"}}>See It In Action!</p></Link>
        </div>
        <div className='mt-12'>
        <Link href="/"style={{display:"flex"}}><img src="/scroll.svg" width={"20px"}></img><p style={{color:"#999fae",marginTop:"5px",marginLeft:"15px"}}>Scroll to Explore</p></Link>
        </div>
        </div>
        <div style={{alignItems:"center",position:"relative",textAlign:"center",zIndex:"2"}}>
          <img src="/main-pic-3.png" style={{width:"755px !important",height:"555px !important"}} />
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
  <div style={{display:"flex",position:"relative",maxWidth:"1800px", margin:"auto",padding:"150px 0px",justifyContent:"center",overflow:"hidden"}}>
<div style={{display:"flex",gap:"8rem",color:"white",zIndex:"9999"}}><div style={{fontSize:"20px",fontWeight:"bold"}}><p>Features</p></div><div style={{width:"750px"}}><h1 className='text-7xl font-semibold'>The world's most powerful design tool.</h1><p style={{width:"450px",color:"rgba(255,255,255,0.5)",marginTop:"25px",fontSize:"20px"}}>Simultaneously design, code and collaborate with your team all from one place.</p></div></div>
<div style={{position:"absolute",left:"-200px",top:"0px"}}><img style={{height:"1000px"}} src='/features-pic-1.svg'></img></div>
<div style={{position:"absolute",width:"260px",height:"260px",backgroundColor:"#525260",borderRadius:"50%",right:"300px",top:"100px"}}></div>
<p style={{width:"1200px",position:"absolute",height:"1px",backgroundColor:"#FFBABA",right:"-500px",top:"500px"}}></p>
</div>
<div style={{color:"white",width:"800px",margin:"auto",maxWidth:"1000px"}}> 
        <Slider {...settings}>
        <div style={{margin:"5px"}}>
          <img src="/camera.png"></img>
          <p style={{fontSize:"20px",fontWeight:"semibold"}}>Import Photos & Videos</p>
          <p style={{color:"rgba(255,255,255,0.5)"}} >Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
          <p style={{color:"rgba(255,255,255,0.5)"}} >Find out more</p>
        </div>
        <div style={{margin:"5px"}}>
        <img style={{height:"120px"}} src="/calendar.png"></img>
        <p style={{fontSize:"20px",fontWeight:"semibold"}}>Calendar API Built-In</p>
        <p style={{color:"rgba(255,255,255,0.5)"}} >Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</p>
        <p style={{color:"rgba(255,255,255,0.5)"}} >Find out more</p>
        </div>
        <div style={{margin:"5px"}}>
        <img src="/camera.png"></img>
        <p style={{fontSize:"20px",fontWeight:"semibold"}}>Import Photos & Videos</p>
        <p style={{color:"rgba(255,255,255,0.5)"}} >Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
        <p style={{color:"rgba(255,255,255,0.5)"}} >Find out more</p>
        </div>
        <div style={{margin:"5px"}}>
        <img style={{height:"120px"}} src="/calendar.png"></img>
        <p style={{fontSize:"20px",fontWeight:"semibold"}}>Calendar API Built-In</p>
        <p style={{color:"rgba(255,255,255,0.5)"}} >Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</p>
        <p style={{color:"rgba(255,255,255,0.5)"}} >Find out more</p>
        </div>
        <div style={{margin:"5px"}}>
        <img src="/camera.png"></img>
        <p style={{fontSize:"20px",fontWeight:"semibold"}}>Import Photos & Videos</p>
        <p style={{color:"rgba(255,255,255,0.5)"}} >Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
        <p style={{color:"rgba(255,255,255,0.5)"}} >Find out more</p>
        </div>
      </Slider></div>

</div>
    <div  className='container-fluid' style={{position:"relative",display:"flex",textAlign:"center",alignItems:"center",backgroundColor:"#ecf2f6"}}>
<div className='fig' style={{height:"750px",width:"750px",backgroundColor:"rgba(255,255,255,0.5)",borderRadius:"60%",display:"flex",margin:"auto"}}>
<div style={{width:"80%",backgroundColor:"rgba(255,255,255,0.8)",borderRadius:"50%",height:"80%",margin:"auto",padding:"60px"}}>
<div style={{backgroundColor:"#5956E9",borderRadius:"50%",height:"100%",width:"100%",margin:"auto"}}>
<img className='access2' src="/access-2.png" alt="" style={{display:"initial",width:"120%",height:"105%",margin:"33px 79px"}} />
<img className='access1' src="/access-1.png" alt="" style={{display:"initial",marginTop:"-912px",marginLeft:"302px",width:"300px",height:"280px",willChange: "transform", transform: "translate3d(0px, -21px, 0px)"}} />
  <img className='main2' src="/main-2.png" alt="" style={{width:"220px",height:"120px", willChange: "transform",marginTop:"-380px",marginLeft:"-36px", transform: "translate3d(0px, -3px, 0px)"}} />
   <img className='cloud1' src="/cloud.png" alt="" style={{width:"137px",height:"89px", willChange: "transform",marginLeft:"543px", transform: "translate3d(0px, -3px, 0px)"}} />
  <div style={{width:"12rem",height:"8rem",marginTop:"-27rem",marginLeft:"-12rem"}}><img className="access__pic js-parallax" src="/cloud.png" alt=""  /></div>
  <div style={{backgroundColor:"#FFDC60",width:"90px",height:"90px",borderRadius:"50%",marginLeft:"-326px",marginTop:"250px",display:"inherit"}}></div>
  <div className='dot' style={{backgroundColor:"#5956E9",width:"45px",height:"45px",borderRadius:"50%",marginLeft:"606px",marginTop:"-472px",display:"inherit"}}></div>
  <div className='media' style={{backgroundColor:"#FAB8C4",width:"80px",height:"80px",borderRadius:"50%",display:"inherit",marginLeft:"808px",marginTop:"180px"}}></div>
</div>
</div>
</div>
</div>

</>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AOS from 'aos'
const inter = Inter({ subsets: ['latin'] })

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
    <div className='' style={{overflow:"hidden"}}>
      <div className='header flex items-center gap-5 text-center justify-center mt-12'>
        <div className=''>
<Link href="/"><Image src="/logo.svg" width={150} height={80} /></Link>
</div>
<div className='flex gap-5 ml-12'>
  <Link href="/">Features</Link>
  <Link href="/">Pricing</Link>
  <Link href="/">Tours</Link>
  <Link href="/">Explore <i className='fa fa-angle-down'></i></Link>
</div>
<div className='ml-24'>
  <button className='focus:outline-none'  style={{backgroundColor:searchOpen && "white",padding:"5px",borderRadius:"5px",boxShadow:searchOpen &&"1px 1px 1px 1px rgba(0,0,0,0.2)"}}>
  <input className='focus:outline-none' type="text" placeholder='Search...'style={{backgroundColor:"transparent"}}></input>
<i className="fa fa-search" onClick={search} style={{color:searchOpen==true ? "#2522BA":"white",float:"right",marginTop:"4px"}}></i>
</button>
</div>
<div >
  <button className='font-medium' style={{color:"#2522BA",backgroundColor:"#FAB8C4",height:"70px",width:"178px",borderRadius:"15px"}}>Get Started</button>
</div>
      </div>
<div style={{backgroundColor:"#5956E9",width:"900px",height:"900px",borderRadius:"50%",marginLeft:"950px",marginTop:"-200px"}}></div>
      <div className='px-48 flex' style={{margin:"-600px auto 0px"}} >
        <div>
        <h1 className='font-semibold' style={{fontSize:"85px"}}><span>Create</span><br/><span className='con'>Like</span><br/>
        <span>Never</span><br/><span className='con2'>Before</span></h1>
        <p style={{color:"#999fae"}}>Create, build, collaborate and ship products faster. Good bye code! 👋</p>
        </div>
        <div style={{position:"relative"}}>
          <Image src="/main-2.png" width={255} height={255} style={{marginTop:"300px",zIndex:"9999",position:"absolute"}} />
          <Image src="/main-pic-3.png" width={755} height={755}  />
          <Image src="/access-1.png" width={355} height={355} style={{zIndex:"9999",position:"absolute",marginTop:"-575px",marginLeft:"432px"}}></Image>
          </div>
      </div>
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
  <div className='media'data-aos="ease-in-out" style={{backgroundColor:"#FAB8C4",width:"80px",height:"80px",borderRadius:"50%",display:"inherit",marginLeft:"808px",marginTop:"180px"}}></div>
</div>
</div>
</div>
</div>

</>
  )
}

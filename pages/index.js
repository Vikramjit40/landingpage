import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container' style={{position:"relative",display:"flex",textAlign:"center",alignItems:"center"}}>

<div style={{height:"750px",width:"750px",backgroundColor:"rgba(255,255,255,0.5)",borderRadius:"60%",display:"flex",margin:"auto"}}>
<div style={{width:"80%",backgroundColor:"rgba(255,255,255,0.8)",borderRadius:"50%",height:"80%",margin:"auto",padding:"60px"}}>
<div style={{backgroundColor:"#5956E9",borderRadius:"50%",height:"100%",width:"100%",margin:"auto"}}>
<img src="/access-2.png" alt="" style={{display:"initial",width:"120%",height:"105%",margin:"33px 79px"}} />
<img src="/access-1.png" alt="" style={{display:"initial",marginTop:"-912px",marginLeft:"302px",width:"300px",height:"280px",willChange: "transform", transform: "translate3d(0px, -21px, 0px)"}} />
  <img  src="/main-2.png" alt="" style={{width:"220px",height:"120px", willChange: "transform",marginTop:"-380px",marginLeft:"-36px", transform: "translate3d(0px, -3px, 0px)"}} />
   <img src="/cloud.png" alt="" style={{width:"137px",height:"89px", willChange: "transform",marginLeft:"543px", transform: "translate3d(0px, -3px, 0px)"}} />
  <div style={{width:"12rem",height:"8rem",marginTop:"-27rem",marginLeft:"-12rem"}}><img className="access__pic js-parallax" src="/cloud.png" alt=""  /></div>
  <div style={{backgroundColor:"#FFDC60",width:"90px",height:"90px",borderRadius:"50%",marginLeft:"-326px",marginTop:"250px",display:"inherit"}}></div>
  <div style={{backgroundColor:"#5956E9",width:"45px",height:"45px",borderRadius:"50%",marginLeft:"606px",marginTop:"-472px",display:"inherit"}}></div>
  <div className='media' style={{backgroundColor:"#FAB8C4",width:"80px",height:"80px",borderRadius:"50%",display:"inherit",marginLeft:"808px",marginTop:"180px"}}></div>
</div>




</div>
</div>
</div>
  )
}

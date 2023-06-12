import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{position:"relative"}}>
      <span style={{position:"absolute",backgroundColor:"#5956E9",width:"45px",height:"45px",borderRadius:"50%",right:"300px",top:"120px"}}></span>
<span style={{position:"absolute",backgroundColor:"#FFDC60",width:"90px",height:"90px",borderRadius:"50%",left:"-10px",bottom:"240px"}}></span>
<span style={{backgroundColor:"#FAB8C4",width:"80px",height:"80px",borderRadius:"50%",position:"absolute",right:"35px",bottom:"400px"}}></span>
<div className='container h-screen'style={{width:"50%",backgroundColor:"rgba(255,255,255,0.5)",borderRadius:"60%",display:"flex"}}>
<div className='row'style={{position:"relative",width:"80%",backgroundColor:"rgba(255,255,255,0.8)",borderRadius:"50%",height:"80%",margin:"auto",display:"flex"}}>
<div style={{width:"75%",backgroundColor:"#5956E9",borderRadius:"50%",height:"75%",margin:"auto",textAlign:"center",alignItems:"center"}}>
<img class="access__pic" src="/access-2.png" alt="" style={{height:"470px",width:"720px",margin:"30px 75px"}} />
 
  <img class="access__pic js-parallax" data-scale="1.5" data-orientation="down" src="/main-2.png" alt="" style={{width:"220px",height:"120px", willChange: "transform",marginTop:"-330px",marginLeft:"-55px", transform: "translate3d(0px, -3px, 0px)"}} />
 
  <img class="access__pic js-parallax" data-scale="1.5" data-orientation="down" src="/cloud.png" alt="" style={{width:"130px",height:"100px", willChange: "transform",marginTop:"-10px",marginLeft:"550px", transform: "translate3d(0px, -3px, 0px)"}} />
  
  <img class="access__pic js-parallax" data-scale="1.5" data-orientation="up" src="/access-1.png" alt="" style={{marginTop:"-455px",marginLeft:"280px",width:"300px",height:"280px",willChange: "transform", transform: "translate3d(0px, -21px, 0px)"}} />
  
</div>

<div style={{position:"absolute",width:"12rem",height:"8rem",left:"-145px",top:"50px"}}><img className="access__pic js-parallax" data-scale="1.5" data-orientation="left" src="/cloud.png" alt=""  /></div>


</div>
</div>
</div>
  )
}

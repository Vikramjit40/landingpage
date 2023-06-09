import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{position:"relative"}}>
      <span style={{position:"absolute",backgroundColor:"rgba(0,0,245,0.6)",width:"50px",height:"50px",borderRadius:"50%",right:"100px",top:"120px"}}></span>
<span style={{position:"absolute",backgroundColor:"rgba(250,218,94,1)",width:"90px",height:"90px",borderRadius:"50%",left:"-10px",bottom:"240px"}}></span>

<div className='container h-screen'style={{width:"50%",backgroundColor:"rgba(255,255,255,0.5)",borderRadius:"60%",display:"flex"}}>
<div className='row'style={{position:"relative",width:"80%",backgroundColor:"rgba(255,255,255,0.8)",borderRadius:"50%",height:"80%",margin:"auto",display:"flex"}}>
<div style={{width:"80%",backgroundColor:"rgba(0,0,245,0.6)",borderRadius:"50%",height:"80%",margin:"auto"}}></div>
<span style={{position:"absolute",background: "radial-gradient(circle at 30% 30%,#ffc0cb, #ff0000)",zIndex:"9",boxShadow:"1px 1px 1px 1px grey",width:"90px",height:"90px",borderRadius:"50%",right:"30px",top:"310px"}}></span>
</div>
</div>
</div>
  )
}

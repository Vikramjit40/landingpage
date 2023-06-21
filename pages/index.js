import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import Slider from "react-slick";
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [check, setCheck] = useState(true)
  const [modal1, setModal1] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [checkAcc, setCheckAcc] = useState(true);
  function accor() {
    setCheckAcc(!checkAcc)
  }
  useEffect(() => {
    AOS.init();
  }, [])
  const [count, setCount] = useState("1");
  function search() {
    setSearchOpen(!searchOpen)
  }
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCount(next + 1);
    }
  };

  var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  var setting4 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  var setting5 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    verticalSwiping: true

  };
  var sett = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 800,
  }
  function handleChange() {
    setCheck(!check)
  }
  function toggle1() {
    setModal1(!modal1)
  }
  return (
    <>
      <div style={{ overflowX: "clip", paddingBottom: "150px", position: "relative" }}>
        <div className='header flex items-center gap-5 text-center justify-center mt-12'>
          <div className=''>
            <Link href="/"><img src="/logo.svg" style={{ width: "150px !important", height: "80px !important", maxWidth: "150px !important" }} /></Link>
          </div>
          <div className='flex gap-5 ml-10'>
            <Link href="/" className='header-items text-[#999FAE] hover:text-black' >Features</Link>
            <Link href="/" className='header-items text-[#999FAE] hover:text-black'>Pricing</Link>
            <Link href="/" className='header-items text-[#999FAE] hover:text-black'>Tours</Link>
            <Link href="/" className='header-items text-[#999FAE] hover:text-black'>Explore <i className='fa fa-angle-down'></i></Link>
          </div>
          <div style={{ zIndex: "9999" }} className='ml-56 flex relative'>
            <input className='focus:outline-none' type="text" placeholder='Search...' style={{ position: "absolute", backgroundColor: searchOpen && "white", padding: "5px", borderRadius: "5px 0px 0px 5px", right: "25px", boxShadow: searchOpen && "0px 1px 1px rgba(0,0,0,0.2)", display: searchOpen ? "block" : "none" }}></input>
            <button className='focus:outline-none' style={{ backgroundColor: searchOpen && "white", padding: "7px", borderRadius: "0px 5px 5px 0px", boxShadow: searchOpen && "1px 1px 1px 1px rgba(0,0,0,0.2)" }}>
              <i className="fa fa-search" onClick={search} style={{ color: searchOpen == true ? "#2522BA" : "white", float: "right", marginTop: "4px" }}></i>
            </button>
          </div>
          <div style={{ zIndex: "9999" }}>
            <button className='font-semibold hover:-translate-y-1' style={{ transition: "all .45s", color: "#2522BA", backgroundColor: "#FAB8C4", height: "70px", width: "178px", borderRadius: "15px" }}>Get Started</button>
          </div>
        </div>
        <div className='flex justify-center' style={{ position: "relative", maxWidth: "1800px", margin: "100px auto 0px" }} >
          <div style={{ width: "400px", marginLeft: "150px", marginRight: "100px" }}>
            <h1 className='font-[500]' style={{ fontSize: "85px", fontFamily: "'DM Sans', sans-serif !important" }}><span>Create</span><br /><span className='con'>Like</span><br />
              <span >Never</span><br /><span className='con2'>Before</span></h1>
            <p style={{ color: "#999fae" }}>Create, build, collaborate and ship products faster. Good bye code! 👋</p>
            <div data-AOS="fade-up" style={{ display: "flex", alignItems: "center", marginTop: "50px" }}>
              <button className='font-semibold hover:-translate-y-1' style={{ transition: "all .45s", color: "#FFFFFF", backgroundColor: "#5956E9", height: "70px", width: "178px", borderRadius: "15px" }}>Get Started</button>
              <Link href="/" style={{ display: "flex", marginLeft: "30px" }}><img src="/play.svg" width={"20px"}></img><p style={{ color: "#999fae", marginTop: "5px", marginLeft: "15px" }}>See It In Action!</p></Link>
            </div>
            <div data-AOS="fade-up" className='mt-12'>
              <Link href="/" style={{ display: "flex" }}><img src="/scroll.svg" width={"20px"}></img><p style={{ color: "#999fae", marginTop: "5px", marginLeft: "15px" }}>Scroll to Explore</p></Link>
            </div>
          </div>
          <div style={{ alignItems: "center", position: "relative", textAlign: "center", zIndex: "2" }}>
            <div ><img src="/main-pic-3.png" style={{ width: "755px !important", height: "555px !important" }} /></div>
            <img src="/main-2.png" style={{ willChange: "transform", transform: "translate3d(0px, -18px, 0px)", position: "absolute", width: "200px !important", height: "120px !important", maxWidth: "250px !important", left: "0", bottom: "250px" }} />
            <img src="/access-1.png" style={{ willChange: "transform", transform: "translate3d(0px, 49px, 0px)", position: "absolute", width: "350px !important", height: "350px !important", maxWidth: "350px !important", bottom: "380px", right: '0' }} />
            <img src="/mouse.png" style={{ position: "absolute", width: "100px !important", height: "40px !important", maxWidth: "100px !important", bottom: "108px", right: '150px' }}></img>
          </div>
          <div style={{ position: "absolute", backgroundColor: "#5956E9", width: "1250px", height: "1250px", borderRadius: "50%", top: "-350px", zIndex: "1", right: "-500px" }}></div>
          <div style={{ transform: "translate3d(0px, -36px, 0px)", position: "absolute", backgroundColor: "#FFDC60", width: "120px", height: "120px", borderRadius: "50%", top: "40px", zIndex: "1", left: "750px" }}></div>
          <div style={{ transform: "translate3d(0px, -61px, 0px)", position: "absolute", backgroundColor: "#FAB8C4", width: "50px", height: "50px", borderRadius: "50%", top: "285px", zIndex: "1", left: "150px" }}></div>
          <div style={{ transform: "translate3d(0px, -61px, 0px)", position: "absolute", backgroundColor: "#FFFFFF", width: "100px", height: "100px", borderRadius: "50%", top: "420px", zIndex: "1", right: "180px" }}></div>
          <div style={{ transform: "translate3d(0px, -61px, 0px)", position: "absolute", backgroundColor: "#5956E9", width: "30px", height: "30px", borderRadius: "50%", top: "540px", zIndex: "1", right: "750px" }}></div>
          <div style={{ transform: "translate3d(0px, -61px, 0px)", position: "absolute", backgroundColor: "#FAB8C4", width: "180px", height: "180px", borderRadius: "50%", bottom: "-300px", zIndex: "1", right: "550px" }}></div>
        </div>
        <div style={{ position: "absolute", backgroundColor: "#FFDC60", width: "500px", height: "500px", borderRadius: "50%", top: "-250px", zIndex: "-1", left: "-240px" }}></div>
      </div>
      <div className='' style={{ backgroundColor: "#27272E" }}>
        <div style={{ display: "flex", position: "relative", maxWidth: "1800px", margin: "auto", padding: "150px 0px 100px", justifyContent: "center", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "6rem", color: "white", zIndex: "9999" }}><div data-AOS="zoom-out-up" style={{ fontSize: "20px", fontWeight: "bold" }}><p>Features</p></div><div style={{ width: "750px" }}><div data-AOS="zoom-out-up" ><h1 className='text-7xl '>The world's most powerful design tool.</h1><p style={{ width: "450px", color: "rgba(255,255,255,0.5)", marginTop: "25px", fontSize: "20px" }}>Simultaneously design, code and collaborate with your team all from one place.</p></div>
            <div style={{ color: "white", width: "800px", margin: "250px auto 0px", maxWidth: "1000px", position: "relative" }}>
              <div className='flex absolute -left-48  top-56'><p className='counts'>0{count}</p><p className='ml-24'>05</p></div>
              <Slider {...settings}>
                <div data-AOS="zoom-out" style={{ margin: "5px" }}>
                  <img style={{ margin: "0px 0px 30px" }} src="/camera.png"></img>
                  <p style={{ margin: "30px 0px", fontSize: "20px", fontWeight: "semibold" }}>Import Photos & Videos</p>
                  <p style={{ margin: "30px 0px", color: "rgba(255,255,255,0.5)" }} >Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
                  <Link className="slickItems text-[rgba(255,255,255,0.5)] hover:text-white hover:pl-16" href="#" style={{ margin: "30px 0px" }} >Find out more</Link>
                </div>
                <div data-AOS="zoom-out" style={{ margin: "5px" }}>
                  <img style={{ margin: "0px 0px 30px", height: "120px" }} src="/calendar.png"></img>
                  <p style={{ margin: "30px 0px", fontSize: "20px", fontWeight: "semibold" }}>Calendar API Built-In</p>
                  <p style={{ margin: "30px 0px", color: "rgba(255,255,255,0.5)" }} >Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</p>
                  <Link className="slickItems text-[rgba(255,255,255,0.5)] hover:text-white hover:pl-16" href="#" style={{ margin: "30px 0px" }} >Find out more</Link>
                </div>
                <div style={{ margin: "5px" }}>
                  <img style={{ margin: "0px 0px 30px" }} src="/camera.png"></img>
                  <p style={{ margin: "30px 0px", fontSize: "20px", fontWeight: "semibold" }}>Import Photos & Videos</p>
                  <p style={{ margin: "30px 0px", color: "rgba(255,255,255,0.5)" }} >Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
                  <Link href="#" style={{ margin: "30px 0px" }} className="text-[rgba(255,255,255,0.5)] hover:pl-16 hover:text-white slickItems" >Find out more</Link>
                </div>
                <div style={{ margin: "5px" }}>
                  <img style={{ margin: "0px 0px 30px", height: "120px" }} src="/calendar.png"></img>
                  <p style={{ margin: "30px 0px", fontSize: "20px", fontWeight: "semibold" }}>Calendar API Built-In</p>
                  <p style={{ margin: "30px 0px", color: "rgba(255,255,255,0.5)" }} >Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</p>
                  <Link href="#" style={{ margin: "30px 0px" }} className="text-[rgba(255,255,255,0.5)] hover:text-white hover:pl-16 slickItems" >Find out more</Link>
                </div>
                <div style={{ margin: "5px" }}>
                  <img style={{ margin: "0px 0px 30px" }} src="/camera.png"></img>
                  <p style={{ margin: "30px 0px", fontSize: "20px", fontWeight: "semibold" }}>Import Photos & Videos</p>
                  <p style={{ margin: "30px 0px", color: "rgba(255,255,255,0.5)" }} >Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
                  <Link href="#" style={{ margin: "30px 0px" }} className="text-[rgba(255,255,255,0.5)] hover:text-white hover:pl-16 slickItems" >Find out more</Link>
                </div>
              </Slider>
            </div>

          </div></div>
          <div data-aos="rotate-c" data-aos-duration="1000" style={{ position: "absolute", left: "-450px", top: "0px" }}><img style={{ height: "1250px" }} src='/features-pic-1.svg'></img></div>
          <div style={{ position: "absolute", width: "260px", height: "260px", backgroundColor: "#525260", borderRadius: "50%", right: "300px", top: "100px" }}></div>
          <p style={{ width: "1200px", position: "absolute", height: "1px", backgroundColor: "#FFBABA", right: "-500px", top: "500px" }}></p>
        </div>

      </div>
      <div className='container-fluid' style={{ paddingTop: "40px", paddingBottom: "90px", position: "relative", textAlign: "center", alignItems: "center", backgroundColor: "#ecf2f6" }}>
        <div className='fig' style={{ height: "750px", width: "750px", backgroundColor: "rgba(255,255,255,0.5)", borderRadius: "60%", display: "flex", margin: "auto" }}>
          <div data-AOS="zoom-in" style={{ width: "80%", backgroundColor: "rgba(255,255,255,0.8)", borderRadius: "50%", height: "80%", margin: "auto", padding: "60px" }}>
            <div style={{ backgroundColor: "#5956E9", borderRadius: "50%", height: "100%", width: "100%", margin: "auto" }}>
              <img data-AOS="fade-up" data-aos-delay="300" className='access2' src="/access-2.png" alt="" style={{ display: "initial", width: "120%", height: "105%", margin: "33px 79px" }} />
              <img data-AOS="fade-down-left" data-aos-delay="400" className='access1' src="/access-1.png" alt="" style={{ display: "initial", marginTop: "-912px", marginLeft: "302px", width: "300px", height: "280px", willChange: "transform", transform: "translate3d(0px, -21px, 0px)" }} />
              <img data-AOS="fade-right" data-aos-delay="400" className='main2' src="/main-2.png" alt="" style={{ width: "220px", height: "120px", willChange: "transform", marginTop: "-380px", marginLeft: "-36px", transform: "translate3d(0px, -3px, 0px)" }} />
              <img className='cloud1' src="/cloud.png" alt="" style={{ width: "137px", height: "89px", willChange: "transform", marginLeft: "543px", transform: "translate3d(0px, -3px, 0px)" }} />
              <div style={{ width: "12rem", height: "8rem", marginTop: "-27rem", marginLeft: "-12rem" }}><img className="access__pic js-parallax" src="/cloud.png" alt="" /></div>
              <div style={{ backgroundColor: "#FFDC60", width: "90px", height: "90px", borderRadius: "50%", marginLeft: "-326px", marginTop: "250px", display: "inherit" }}></div>
              <div className='dot' style={{ backgroundColor: "#5956E9", width: "45px", height: "45px", borderRadius: "50%", marginLeft: "606px", marginTop: "-472px", display: "inherit" }}></div>
              <div className='media' style={{ backgroundColor: "#FAB8C4", width: "80px", height: "80px", borderRadius: "50%", display: "inherit", marginLeft: "808px", marginTop: "180px" }}></div>
            </div>
          </div>
        </div>
        <div data-AOS="fade-up" className='mt-20 font-semibold text-xl relative  w-fit mx-auto'>
          <p>Ready to get started?</p>
          <p>Sign up with your email</p>
          <div className='bg-white p-2 absolute rounded-xl -left-20 top-24 flex gap-3 items-center text-sm justify-center'><div className='flex gap-3'><img src="/sending-mail.svg"></img><input className='font-normal focus:outline-none' placeholder='Email address'></input></div><div><button className='font-semibold hover:-translate-y-1' style={{ transition: "all .45s", color: "#FFFFFF", backgroundColor: "#5956E9", height: "70px", width: "178px", borderRadius: "15px" }}>Get Started</button></div></div>
        </div>
      </div>
      <div className='flex container-fluid py-48' style={{ zIndex: "-1", position: "relative", alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF" }}>
        <div data-AOS="fade-up" style={{ maxWidth: "500px" }}>
          <p className='text-[#5956E9] font-semibold text-[20px]'>Auto Adaptive layouts</p>
          <h1 className='dna text-black mt-6 text-7xl'>Responsive DNA</h1>
          <p data-AOS="fade-up" className='text-[#999FAE] mt-12 font-normal text-[18px] w-96'>Easily create truly responsive components while deploying production-ready code.</p>
          <div data-AOS="fade-up" style={{ display: "flex", alignItems: "center", gap: "2rem", fontSize: "20px", margin: "25px 0px" }}><img src="/layout-1.svg" /><span>Advance pinning</span></div>
          <div data-AOS="fade-up" style={{ display: "flex", alignItems: "center", gap: "2rem", fontSize: "20px", margin: "25px 0px" }}><img src="/layout-2.svg" /><span>Relative positioning with containers</span></div>
          <div data-AOS="fade-up" style={{ display: "flex", alignItems: "center", gap: "2rem", fontSize: "20px", margin: "25px 0px" }}><img src="/layout-3.svg" /><span>Percentage-based geometry</span></div>
        </div>
        <div style={{ display: "flex", maxWidth: "800px" }}>
          <div data-AOS="fade-right" data-aos-delay="400" style={{ maxWidth: "180px", marginTop: "181px", zIndex: "999" }} ><img src="/layouts-pic-4.png" ></img></div>
          <div data-AOS="fade-up" data-aos-delay="300" style={{ maxWidth: "786px", marginLeft: "-330px" }} ><img src="/layouts-pic-1.png" ></img></div>
          <div data-AOS="fade-down-left" data-aos-delay="500" style={{ maxWidth: "250px", zIndex: "999", marginLeft: "-380px", marginTop: "-56px" }}><img src="/layouts-pic-2.png"></img></div>
          <div data-AOS="fade-left" data-aos-delay="400" style={{ maxWidth: "46px", marginLeft: "-120px", marginTop: "248px" }} ><img src="/layouts-pic-3.png" ></img></div>
          <div data-AOS="fade-up-left" data-aos-delay="400" style={{ maxWidth: "346px", marginLeft: "-450px", marginTop: "-148px", zIndex: '999' }} ><img src="/layouts-pic-5.png" ></img></div>

        </div>
      </div>
      <div className='flex container-fluid pl-20 py-20' style={{ position: "relative", display: "flex", flexDirection: "row-reverse", background: "#fff -webkit-gradient(linear, left top, right top, from(#ecf2f6), color-stop(70.31%, rgba(236, 242, 246, 0)))", maxWidth: "1240px", borderRadius: "40px", border: "1px solid #F1F5F8", margin: "auto" }}>
        <div style={{ maxWidth: "840px", marginTop: "50px", overflow: "hidden", paddingLeft: "200px", zIndex: "9999" }}>
          <img data-aos="rotate-c" ata-aos-duration="1000" src='/hand-1.png' style={{ width: "840px" }}></img>
        </div>
        <div style={{ maxWidth: "400px", marginTop: "50px" }}><h1 data-AOS="fade-right" className='pro mb-6 text-7xl'>Native-like Prototying</h1>
          <p style={{ margin: "20px 0" }} data-AOS="fade-right">With Collab Smart Prototype you create your interactions and animations once and store as presets in the cloud for future use.</p>
          <p className='mb-12' data-AOS="fade-right">Use the Collab App to test in real-time.</p>
          <div data-AOS="fade-right" ><button className='sample ' style={{ transition: "all .45s", color: "#FFFFFF", backgroundColor: "#5956E9", height: "70px", width: "238px", borderRadius: "15px" }}>See Sample Prototype</button></div>
        </div>
        <div style={{ position: "absolute", width: "90px", height: "90px", borderRadius: "50%", backgroundColor: "#5956E9", top: "-50px", right: "160px" }}></div>
        <div style={{ position: "absolute", width: "420px", height: "420px", borderRadius: "50%", backgroundColor: "#FAB8C4", top: "150px", right: "150px", zIndex: '1' }}></div>
        <div style={{ position: "absolute", width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "#FAB8C4", top: "150px", right: "650px", zIndex: '1' }}></div>
        <div style={{ position: "absolute", width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#FAB8C4", top: "250px", right: "50px", zIndex: '1' }}></div>
        <div style={{ position: "absolute", width: "130px", height: "130px", borderRadius: "50%", backgroundColor: "#FFDC60", bottom: "-50px", left: "150px", zIndex: '1' }}></div>

      </div>
      <div className=' container-fluid py-48' style={{ maxWidth: "1240px", zIndex: "0", position: "relative", alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF" }}>
        <div data-AOS="fade-up" className='text-center'> <p className='font-bold mb-3 text-xl'>Join The Revolution</p>
          <h1 className='text-7xl'>Find the <span className='text-[#5956E9]'>Right Plan.</span></h1>
          <p className='text-[#999FAE] w-[300px] mt-8 mx-auto'>Flexible pricing options for freelancers and design teams.</p>
          <div className='flex items-center justify-center mt-8 gap-5 hover:opacity-90'><p className='font-[600]' style={{ color: check ? "#999FAE" : "#5956E9" }}>Billed Yearly</p> <label for="switch" className="switch" >
            <input id='switch' type="checkbox" onChange={handleChange} checked={check} />
            <span className="slider round"></span>
          </label>
            <p style={{ color: check ? "#5956E9" : "#999FAE" }} className='font-[600]'>Billed Monthly</p>
          </div>
        </div>
        <div className='flex mt-24 mx-auto gap-28 '>
          <div data-AOS="fade-up" className='w-80 bg-[#5956E9] pl-8 pt-2 pr-2 pb-12 rounded-3xl text-white'>
            <div className="float-right bg-[#FFDC60] h-12 w-12 rounded-full items-center justify-center flex"><span className='fa fa-star' style={{ color: "#5956E9" }}></span></div>
            <p className="flex mt-8"> <img src="/smile-1.svg"></img>Individual</p>
            <h3 className='mt-1 text-4xl'>Professional</h3>
            <p className='mt-3 text-xl'>$19.99 <span className='text-lg text-[#999FAE]'>/month</span></p>
            <ul className='mt-5 text-lg'>
              <li className='firs'>1 user</li>
              <li className='firs'>2 TB of secure storage</li>
              <li className='firs' >Premium productivity features and simple, secure file sharing</li>
            </ul>
            <button className='font-normal hover:-translate-y-1 mt-4 focus:outline-none' style={{ transition: "all .45s", color: "#2522BA", backgroundColor: "#FFFFFF", height: "70px", width: "260px", borderRadius: "15px" }}>Try free for 30 days</button>
          </div>
          <div data-AOS="fade-up" data-aos-delay="300" className='w-80 bg-[#FFFFFF] pl-8 pt-2 pr-2 pb-12 rounded-3xl text-black'>
            <p className="flex mt-8 font-light" > <img src="/smile-2.svg"></img>Small Team</p>
            <h3 className='mt-1 text-4xl'>Standard</h3>
            <p className='mt-3 text-xl font-[500] text-[#5956E9]'>$29.99 <span className='text-lg text-[#999FAE]'>/month</span></p>
            <ul className='mt-5 text-lg text-[#999FAE]'>
              <li className='sec'>3+ user</li>
              <li className='sec'>5 TB of secure storage</li>
              <li className='sec' >Premium productivity features and simple, secure file sharing</li>
            </ul>
            <button className='font-normal hover:-translate-y-1 mt-4 focus:outline-none' style={{ transition: "all .45s", color: "#292930", backgroundColor: "#FAB8C4", height: "70px", width: "260px", borderRadius: "15px" }}>Try free for 30 days</button>
          </div>
          <div data-AOS="fade-up" data-aos-delay="500" className='w-80 bg-[#FFFFFF] pl-8 pt-2 pr-2 pb-12 rounded-3xl text-black border-1'>
            <p className="flex mt-8 font-light" > <img src="/smile-2.svg"></img>Large Team</p>
            <h3 className='mt-1 text-4xl'>Ultimate</h3>
            <p className='mt-3 text-xl font-[500] text-[#5956E9]'>$99.99 <span className='text-lg text-[#999FAE]'>/month</span></p>
            <ul className='mt-5 text-lg text-[#999FAE]'>
              <li className='sec'>10+ user</li>
              <li className='sec'>10 TB of secure storage</li>
              <li className='sec' >Premium productivity features and simple, secure file sharing</li>
            </ul>
            <button onClick={toggle1} className='font-normal hover:-translate-y-1 mt-4 focus:outline-none' style={{ transition: "all .45s", color: "#FFFFFF", backgroundColor: "#5956E9", height: "70px", width: "260px", borderRadius: "15px" }}>Try free for 30 days</button>
          </div>
        </div>
        <div className='w-12 h-12 bg-[#FAB8C4] rounded-full absolute top-80 right-32'></div>

      </div>
      <div className='relative' style={{ backgroundColor: "#FAB8C4" }}>
        <div style={{ position: "relative", maxWidth: "1240px", margin: "auto", zIndex: "1", padding: "150px 172px 100px" }}>
          <p className='col text-[#C75C6F]'>Collaboration Redefined</p>
          <h1 className='text-[#3A38BF] text-9xl font-semibold'>Get Work Done <span className='text-[#FFFFFF]'>together</span></h1>
          <img data-AOS="fade-down-left" style={{ position: "absolute", width: "900px", height: "900px", top: "0", right: "0", zIndex: "-1" }} src="/work-pic.png" ></img>
          <img data-AOS="fade-up-left" src="/cursor.png" style={{ margin: "50px auto" }}></img>
          <div style={{ backgroundColor: "#5956E9", width: "200px", height: "200px", borderRadius: "50%", zIndex: "-1", margin: "-350px 35% 0px" }}></div>
          <div style={{ backgroundColor: "#FFFFFF", width: "80px", height: "80px", borderRadius: "50%", marginLeft: "180px" }}></div>
          <div style={{ backgroundColor: "#FFFFFF", width: "40px", height: "40px", borderRadius: "50%", marginLeft: "0px", marginTop: "60px" }}></div>
          <div style={{ backgroundColor: "#FFFFFF", width: "60px", height: "60px", borderRadius: "50%", marginLeft: "280px", marginTop: "60px" }}></div>
          <div data-AOS="fade-up" data-aos-duration='1000' style={{ padding: "100px 80px", position: "absolute", bottom: "-150px", right: "100px", backgroundColor: "#5956E9", width: "450px", height: "450px", borderRadius: "50%", alignItems: "center", justifyContent: "center" }}>
            <img src="layout-1.svg" style={{ width: "40px" }}></img>
            <p className='text-white mt-8 text-2xl'>Let your personalized Collab assistant do the heavy lifting while you focus on creating.</p>
            <Link className="slickItems text-[rgba(255,255,255,0.5)] hover:text-white hover:pl-16" href="#" style={{ margin: "30px 0px" }} >Find out more</Link>
          </div>
        </div>

        <img style={{ position: "absolute", bottom: "-75px", zIndex: "0" }} src="/wave.svg" width={"100%"}></img>
        <img data-aos="rotate-d" style={{ position: "absolute", bottom: "-375px", zIndex: "1" }} src="/hand-2.png"></img>
        <div style={{ position: "absolute", bottom: "-575px", zIndex: "1", right: "0", overflow: "hidden" }}>
          <img data-aos="rotate-f" style={{ width: "524px" }} src="/hand-3.png"></img>
        </div>
      </div>
      <div className='relative' style={{ padding: "250px 72px 150px", maxWidth: "1240px", margin: "auto", alignItems: "center", justifyContent: "center" }}>
        <p data-AOS="fade-up" style={{ color: "#C75C6F", fontWeight: "bold", fontSize: "20px" }}>Team Collaboration Redefined</p>
        <h1 data-AOS="fade-up" className='pin text-7xl mt-3'>Helping world-class teams design faster together<span className='text-[#3A38BF]'>.</span></h1>
        <div className='flex gap-8'>
          <h1 data-AOS="fade-down" className='text-4xl w-60 pt-28'>What others are saying</h1>
          <div className='sli' style={{ width: "800px", fontSize: "25px", paddingTop: "120px" }}>
            <Slider {...setting}>
              <div data-AOS="fade-up" style={{ margin: "5px 25px" }} className='px-4'>
                <div data-AOS="zoom-in" data-aos-delay="300" style={{ width: "100%", height: "2px", backgroundColor: "#5956E9", marginBottom: "52px" }}></div>
                <p className='mb-6 text-[#C75C6F]'>UI8</p>
                <p>“ Collab is fast. Files are always up to date. </p>
                <p>It’s easy to share designs across the organization, so collaboration is easy ”</p>
                <div className='flex mt-8 gap-3'><img src="/ui8.png" style={{ width: "70px" }}></img>
                  <div className='text-base'><p >Dash</p>
                    <p className='text-[#999FAE]'>Founder @UI8</p></div></div>
              </div>
              <div data-AOS="fade-up" data-aos-delay="300" style={{ margin: "5px" }} className='px-4'>
                <div data-AOS="zoom-in" data-aos-delay="500" style={{ width: "100%", height: "2px", backgroundColor: "#FAB8C4", marginBottom: "52px" }}></div>
                <p className='mb-6 text-[#5956E9]'>Bento</p>
                <p>“ Collab is fast. Files are always up to date. </p>
                <p>It’s easy to share designs across the organization, so collaboration is easy ”</p>
                <div className='flex mt-8 gap-3'><img src="/ava-1.png" style={{ width: "60px" }}></img>
                  <div className='text-base'><p >Emily</p>
                    <p className='text-[#999FAE]'>Founder @Bento</p></div></div>
              </div>
              <div style={{ margin: "5px" }} className='px-4'>
                <div style={{ width: "100%", height: "2px", backgroundColor: "#5956E9", marginBottom: "52px" }}></div>
                <p className='mb-6 text-[#C75C6F]'>UI8</p>
                <p>“ Collab is fast. Files are always up to date. </p>
                <p>It’s easy to share designs across the organization, so collaboration is easy ”</p>
                <div className='flex mt-8 gap-3'><img src="/ui8.png" style={{ width: "70px" }}></img>
                  <div className='text-base'><p >Dash</p>
                    <p className='text-[#999FAE]'>Founder @UI8</p></div></div>
              </div>
              <div style={{ margin: "5px" }} className='px-4'>
                <div style={{ width: "100%", height: "2px", backgroundColor: "#FAB8C4", marginBottom: "52px" }}></div>
                <p className='mb-6 text-[#5956E9]'>Bento</p>
                <p>“ Collab is fast. Files are always up to date. </p>
                <p>It’s easy to share designs across the organization, so collaboration is easy ”</p>
                <div className='flex mt-8 gap-3'><img src="/ava-1.png" style={{ width: "60px" }}></img>
                  <div className='text-base'><p >Emily</p>
                    <p className='text-[#999FAE]'>Founder @Bento</p></div></div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className='relative' style={{ padding: "0px 72px", maxWidth: "1240px", margin: "auto", display: "flex" }}>
        <div data-AOS="fade-zoom-in" style={{ width: "320px" }}><h1 className='text-[#A4B16E] text-lg font-semibold'>Collab is fast, super fast.</h1>
          <h1 className='you text-6xl mt-6'>Speed up your workflow<span className='text-[#5956E9]'>.</span></h1>
          <p className='mt-12'>Essentially no lag, no matter the size of the file, even on mobile devices.</p>
          <p data-AOS="fade-up" className="text-[250px] font-medium">8.1<span className="text-[60px]">x</span></p>
        </div>
        <div style={{ width: "100%", position: "relative" }} ><img className='m-auto' data-AOS="fade-down" data-aos-delay="400" style={{ zIndex: "2", position: "inherit" }} src="graphic.png" width={"350px"} height={"600px"} ></img>
          <div data-AOS="fade-zoom-in" className='rounded-full bg-[#5956E9] absolute top-24 left-32' style={{ width: "510px", height: "510px", zIndex: "-1" }}></div>
          <img data-AOS="fade-left" data-aos-delay="400" className='absolute' style={{ bottom: "128px", right: "-69px" }} width={"350px"} src="plant.png"></img>
        </div>
        <div className='absolute top-28 left-1' style={{ zIndex: "1" }}><img src="line.svg"></img></div>
      </div>
      <div className='relative bor ' style={{ padding: "0px 92px", maxWidth: "1240px", margin: "80px auto", display: "flex", backgroundColor: "#FFD3DB", borderRadius: "50px" }}>
        <div className='sli3' style={{ width: "100%", fontSize: "25px", paddingTop: "100px", paddingBottom: "40px", zIndex: "2", position: "inherit" }}>
          <Slider {...sett}>
            <div>
              <div style={{ display: "flex !important" }}>
                <div data-AOS="fade-right" data-aos-delay="300" className='w-96 bg-[#ffffff] pl-8 pt-2 pr-8 pb-16 rounded-3xl text-black'>
                  <p className="flex mt-8 font-light text-xs items-center gap-3" > <img src="/smile-2.svg"></img>Awesome feature</p>
                  <h3 className='mt-1 text-4xl'>Ultimate features</h3>
                  <p className='mt-3 text-base w-72 font-[400] text-[#999FAE]'>It’s easy to share designs across the organization, so team collaboration is fast and easy.</p>
                  <ul className='mt-5 mb-7 text-base'>
                    <li className='awe hover:opacity-80 cursor-pointer flex items-center'><img src="layout-1.svg"></img><span className='pl-4'> Awesome website </span><span className='text-5xl font-[300] pl-16'> &gt; </span></li>
                    <li className='stu hover:opacity-80 cursor-pointer flex mt-8 items-center'><img src="layout-3.svg"></img> <span className='pl-4'>Stunning interface</span> <span className='text-5xl font-[300] pl-16'> &gt; </span></li>
                  </ul>
                  <button className='text-base hover:-translate-y-1 mt-4 focus:outline-none' style={{ transition: "all .45s", color: "#FFFFFF", backgroundColor: "#5956E9", height: "70px", width: "160px", borderRadius: "15px", float: "right" }}>Get Started</button>
                </div>
                <div style={{ paddingLeft: "65px", paddingTop: "85px" }}>
                  <img src="laptop.png" style={{ margin: "auto" }} width={"600px"}></img>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex !important" }}>
                <div data-AOS="fade-right" data-aos-delay="300" className='w-96 bg-[#ffffff] pl-8 pt-2 pr-8 pb-16 rounded-3xl text-black'>
                  <p className="flex mt-8 font-light text-xs items-center gap-3" > <img src="/smile-2.svg"></img>Awesome feature</p>
                  <h3 className='mt-1 text-4xl'>Standard features</h3>
                  <p className='mt-3 text-base w-72 font-[400] text-[#999FAE]'>It’s easy to share designs across the organization, so team collaboration is fast and easy.</p>
                  <ul className='mt-5 mb-7 text-base'>
                    <li className='awe hover:opacity-80 cursor-pointer flex items-center'><img src="layout-1.svg"></img><span className='pl-4'> Awesome website </span><span className='text-5xl font-[300] pl-16'> &gt; </span></li>
                    <li className='stu hover:opacity-80 cursor-pointer flex mt-8 items-center'><img src="layout-3.svg"></img> <span className='pl-4'>Stunning interface</span> <span className='text-5xl font-[300] pl-16'> &gt; </span></li>
                  </ul>
                  <button className='text-base hover:-translate-y-1 mt-4 focus:outline-none' style={{ transition: "all .45s", color: "#FFFFFF", backgroundColor: "#5956E9", height: "70px", width: "160px", borderRadius: "15px", float: "right" }}>Get Started</button>
                </div>
                <div style={{ paddingLeft: "65px", paddingTop: "85px" }}>
                  <img src="laptop.png" style={{ margin: "auto" }} width={"600px"}></img>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex !important' }}>
                <div data-AOS="fade-right" data-aos-delay="300" className='w-96 bg-[#ffffff] pl-8 pt-2 pr-8 pb-16 rounded-3xl text-black'>
                  <p className="flex mt-8 font-light text-xs items-center gap-3" > <img src="/smile-2.svg"></img>Awesome feature</p>
                  <h3 className='mt-1 text-4xl'>Ultimate features</h3>
                  <p className='mt-3 text-base w-72 font-[400] text-[#999FAE]'>It’s easy to share designs across the organization, so team collaboration is fast and easy.</p>
                  <ul className='mt-5 mb-7 text-base'>
                    <li className='awe hover:opacity-80 cursor-pointer flex items-center'><img src="layout-1.svg"></img><span className='pl-4'> Awesome website </span><span className='text-5xl font-[300] pl-16'> &gt; </span></li>
                    <li className='stu hover:opacity-80 cursor-pointer flex mt-8 items-center'><img src="layout-3.svg"></img> <span className='pl-4'>Stunning interface</span> <span className='text-5xl font-[300] pl-16'> &gt; </span></li>
                  </ul>
                  <button className='text-base hover:-translate-y-1 mt-4 focus:outline-none' style={{ transition: "all .45s", color: "#FFFFFF", backgroundColor: "#5956E9", height: "70px", width: "160px", borderRadius: "15px", float: "right" }}>Get Started</button>
                </div>
                <div style={{ paddingLeft: "65px", paddingTop: "85px" }}>
                  <img src="laptop.png" style={{ margin: "auto" }} width={"600px"}></img>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex !important' }}>
                <div data-AOS="fade-right" data-aos-delay="300" className='w-96 bg-[#ffffff] pl-8 pt-2 pr-8 pb-16 rounded-3xl text-black'>
                  <p className="flex mt-8 font-light text-xs items-center gap-3" > <img src="/smile-2.svg"></img>Awesome feature</p>
                  <h3 className='mt-1 text-4xl'>Standard features</h3>
                  <p className='mt-3 text-base w-72 font-[400] text-[#999FAE]'>It’s easy to share designs across the organization, so team collaboration is fast and easy.</p>
                  <ul className='mt-5 mb-7 text-base'>
                    <li className='awe hover:opacity-80 cursor-pointer flex items-center'><img src="layout-1.svg"></img><span className='pl-4'> Awesome website </span><span className='text-5xl font-[300] pl-16'> &gt; </span></li>
                    <li className='stu hover:opacity-80 cursor-pointer flex mt-8 items-center'><img src="layout-3.svg"></img> <span className='pl-4'>Stunning interface</span> <span className='text-5xl font-[300] pl-16'> &gt; </span></li>
                  </ul>
                  <button className='text-base hover:-translate-y-1 mt-4 focus:outline-none' style={{ transition: "all .45s", color: "#FFFFFF", backgroundColor: "#5956E9", height: "70px", width: "160px", borderRadius: "15px", float: "right" }}>Get Started</button>
                </div>
                <div style={{ paddingLeft: "65px", paddingTop: "85px" }}>
                  <img src="laptop.png" style={{ margin: "auto" }} width={"600px"}></img>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <img style={{ position: "absolute", top: "-106px", left: "-152px", maxWidth: "150% !important", zIndex: "1" }} src="line-1.svg" width={"120%"} />
        <div style={{ position: "absolute", zIndex: "0", overflow: "hidden", top: "0px", left: "0px", width: "500px", height: "500px", borderRadius: "50px" }}><div data-AOS="fade-down-right" data-aos-duration="300" style={{ marginLeft: "-140px", marginTop: "-120px", backgroundColor: "#5956E9", width: "500px", height: "500px", borderRadius: "50%" }}></div></div>
        <div style={{ backgroundColor: "#5956E9", width: "210px", height: "210px", borderRadius: "50%", position: "absolute", zIndex: "0", bottom: "-60px", left: "360px", alignItems: "center", display: "flex" }}><div className='cir'></div></div>
        <div className='w-12 h-12 bg-white absolute rounded-full top-24 right-96'></div>
      </div>
      <div className='relative' style={{ padding: "70px 92px", maxWidth: "1240px", margin: "80px auto", backgroundColor: "#FFFFFF", borderRadius: "50px" }}>
        <div data-AOS="fade-up" className='text-center w-96 m-auto'><p style={{ fontSize: "50px" }}>🔥</p>
          <p className='w-96 font-thin mt-4' style={{ fontFamily: "'DM Sans', sans-serif !important", fontSize: "22px" }}>We offer flexible pricing options for freelancers and design teams.</p>
        </div>
        <div className='flex mt-24 mx-auto gap-24'>
          <div data-AOS="fade-up" className='w-[28rem] bg-[#FFFFFF] p-16 rounded-3xl text-black border-1'>
            <h1 className='text-6xl'>Schedule Product Demo</h1>
            <h3 className='mt-12 text-[#999FAE] text-xl'>Still not sure? Schedule a demo to see how Collab can help you get more done.</h3>
            <button className='font-medium hover:-translate-y-1 mt-24 focus:outline-none' style={{ transition: "all .45s", fontFamily: "'DM Sans', sans-serif !important", color: "#FFFFFF", backgroundColor: "#5956E9", height: "70px", width: "320px", borderRadius: "15px" }}>Schedule a Demo</button>
          </div>
          <div data-AOS="fade-up" data-aos-delay="300" className='w-[28rem] bg-[#5956E9] p-16 rounded-3xl text-white'>
            <h1 className='text-6xl'>Get Started Now</h1>
            <h3 className='mt-12 text-[#FFFFFF] text-xl'>Ready to revolutionize your design workflow? Try Collab for free for 30 days.</h3>
            <button className='font-medium hover:-translate-y-1 mt-24 focus:outline-none' style={{ fontFamily: "'DM Sans', sans-serif !important", transition: "all .45s", color: "#2522BA", boxShadow: "0px 20px 20px rgba(0,0,0,0.2)", backgroundColor: "#FFFFFF", height: "70px", width: "320px", borderRadius: "15px" }}>Try free for 30 days</button>
          </div>
        </div>
        <div className='absolute w-16 h-16 rounded-full bg-[#5956E9] right-56 -bottom-5'  ></div>
      </div>
      <div className='relative' style={{ backgroundColor: "#FFFFFF", overflow: "hidden" }}>
        <div className='relative' style={{ padding: "70px 92px", maxWidth: "1240px", margin: "80px auto", backgroundColor: "#FFFFFF", borderRadius: "50px" }}>
          <div className='w-24 h-24 bg-[#FFDC60] rounded-full absolute top-4 left-64'></div>
          <div className='w-8 h-8 bg-[#FFDC60] rounded-full absolute top-0 right-[38rem]'></div>
          <div className='mt-32 flex gap-28'>
            <div data-AOS="fade-up" className='w-96'><h1 className='text-[#C75C6F] font-semibold text-xl' >Design accordlogy</h1>
              <h1 className='text-7xl mt-4 mb-12'>Enrich your design workflow<span className='text-[#5956E9]'>.</span></h1>
              <p className='text-lg text-[#999FAE]'>Design anything from simple icons to fully featured websites and applications.</p>
            </div>
            <div data-AOS="fade-up" data-aos-delay="300" style={{ zIndex: "1 " }} className='pl-16'><img src="design-pic.png" width={"290px"} height={"290px"} /></div>
          </div>
          <Link href="/" style={{ display: "flex" }}><img src="/scroll.svg" width={"20px"}></img><p style={{ color: "#999fae", marginTop: "5px", marginLeft: "15px" }}>Using Collab</p></Link>
          <div className='sli4 mt-24'>
            <Slider {...setting4}>

              <div data-AOS="fade-up" className='px-3 w-80 rounded-3xl pt-8 pb-3 bg-[#FFEDDC]'>
                <div className='bg-[#FAB8C4] rounded-full w-48 h-48 m-auto'><img style={{ marginLeft: "10px", width: "350px", maxWidth: "350px !important" }} src="design-pic-1.png"></img></div>
                <div className='mt-12 bg-white px-8 py-12 rounded-3xl'>
                  <h1>Design</h1>
                  <h1 className='text-3xl mt-4'>Automation Color Picker</h1>
                  <p className="mt-4 text-[#999FAE]">Use the smart color picker to easily select and apply colors.</p>
                  <p className='mt-4 font-[600] started cursor-pointer'>Get started</p>
                </div>
              </div>

              <div data-AOS="fade-up" data-aos-delay="300" className='mr-3 px-3 w-80 rounded-3xl pt-8 pb-3 bg-[#DBDEFF]'>
                <div className='bg-[#5956E9] rounded-full pt-[35px] w-48 h-48 m-auto'><img style={{ marginLeft: "30px", width: "150px", maxWidth: "150px !important" }} src="design-pic-2.png"></img></div>
                <div className='mt-12 bg-white px-8 py-12 rounded-3xl'>
                  <h1>Build</h1>
                  <h1 className='text-3xl mt-4'>Component Builder Guide</h1>
                  <p className="mt-4 text-[#999FAE]">Using the Component Builder with your projects.</p>
                  <p className='mt-4 font-[600] startedbl cursor-pointer text-[#5956E9]'>Get started</p>
                </div>
              </div>
              <div data-AOS="fade-up" data-aos-delay="400" className='px-3 w-80 mr-3 rounded-3xl pt-8 pb-3 bg-[#DBF8FF]'>
                <div className='bg-[#90C8FC] rounded-full w-48 h-48 m-auto pt-[35px]'><img style={{ marginLeft: "20px", width: "140px", maxWidth: "140px !important" }} src="design-pic-3.png"></img></div>
                <div className='mt-12 bg-white px-8 py-12 rounded-3xl'>
                  <h1>Ship</h1>
                  <h1 className='text-3xl mt-4'>Cross-platform Deployment</h1>
                  <p className="mt-4 text-[#999FAE]">Deploy your projects more efficiently for web & mobile.</p>
                  <p className='mt-4 font-[600] started cursor-pointer'>Get started</p>
                </div>
              </div>
              <div data-AOS="fade-up" data-aos-delay="300" style={{ margin: "5px 25px" }} className='px-3 w-80 rounded-3xl pt-8 pb-3 bg-[#FFEDDC]'>
                <div className='bg-[#FAB8C4] rounded-full w-48 h-48 m-auto'><img style={{ marginLeft: "10px", width: "350px", maxWidth: "350px !important" }} src="design-pic-1.png"></img></div>
                <div className='mt-12 bg-white px-8 py-12 rounded-3xl'>
                  <h1>Design</h1>
                  <h1 className='text-3xl mt-4'>Automation Color Picker</h1>
                  <p className="mt-4 text-[#999FAE]">Use the smart color picker to easily select and apply colors.</p>
                  <p className='mt-4 font-[600] started cursor-pointer'>Get started</p>
                </div>
              </div>
              <div data-AOS="fade-up" data-aos-delay="300" style={{ margin: "5px 25px" }} className='px-3 w-80 rounded-3xl pt-8 pb-3 bg-[#DBDEFF]'>
                <div className='bg-[#5956E9] rounded-full pt-[35px] w-48 h-48 m-auto'><img style={{ marginLeft: "30px", width: "150px", maxWidth: "150px !important" }} src="design-pic-2.png"></img></div>
                <div className='mt-12 bg-white px-8 py-12 rounded-3xl'>
                  <h1>Build</h1>
                  <h1 className='text-3xl mt-4'>Component Builder Guide</h1>
                  <p className="mt-4 text-[#999FAE]">Using the Component Builder with your projects.</p>
                  <p className='mt-4 font-[600] startedbl cursor-pointer text-[#5956E9]'>Get started</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div data-aos="rotate-e" data-aos-duration="700" className='absolute right-0 top-24 w-[40rem]' style={{ zIndex: "0" }}><img src="hand-4.png"></img></div>
      </div>

      <div className='relative' style={{ backgroundColor: "#FFFFFF" }}>
        <div className='relative' style={{ padding: "20px 92px", maxWidth: "1240px", margin: "20px auto", backgroundColor: "#FFFFFF", borderRadius: "50px" }}>
          <div data-AOS="fade-up">
            <h1 className='text-7xl'>Research & <br />background, summary<span className='text-[#5956E9]'>.</span></h1>
            <p className='mt-4'>Collab is fast. Files are always up to date and ready for production</p>
          </div>
          <div className='sli5 mt-24 pl-24 flex gap-12 relative'>
            <Slider {...setting5}>

              <div data-AOS="fade-up">
                <p className="text-[250px] font-medium">16<span className="text-[60px] font-semibold">m</span></p>
                <p className='w-64'>It’s easy to share designs across the organization, so collaboration is easy.</p>
                <div className='flex items-center mt-5'><p className='bg-[#5956E9]  w-24 h-24 rounded-full items-center justify-center flex text-white cursor-pointer hover:opacity-90'>Play</p><p className='find hover:opacity-90 cursor-pointer font-semibold ml-28'>Find out more</p></div>
              </div>
              <div data-AOS="fade-up" >
                <p className="text-[250px] font-medium">16<span className="text-[60px]  font-semibold">m</span></p>
                <p className='w-64'>It’s easy to share designs across the organization, so collaboration is easy.</p>
                <div className='flex items-center mt-5'><p className='bg-[#5956E9] hover:opacity-90 w-24 h-24 rounded-full items-center justify-center flex text-white cursor-pointer'>Play</p><p className='find hover:opacity-90 font-semibold ml-28 cursor-pointer'>Find out more</p></div>
              </div>
              <div data-AOS="fade-up" >
                <p className="text-[250px] font-medium">16<span className="text-[60px] font-semibold">m</span></p>
                <p className='w-64'>It’s easy to share designs across the organization, so collaboration is easy.</p>
                <div className='flex items-center mt-5'><p className='bg-[#5956E9]  w-24 h-24 rounded-full items-center justify-center flex text-white cursor-pointer hover:opacity-90'>Play</p><p className='find font-semibold cursor-pointer ml-28 hover:opacity-90'>Find out more</p></div>
              </div>
              <div data-AOS="fade-up" >
                <p className="text-[250px] font-medium">16<span className="text-[60px]  font-semibold">m</span></p>
                <p className='w-64'>It’s easy to share designs across the organization, so collaboration is easy.</p>
                <div className='flex items-center mt-5'><p className='bg-[#5956E9]  w-24 h-24 rounded-full items-center justify-center flex text-white cursor-pointer hover:opacity-90'>Play</p><p className='find hover:opacity-90 cursor-pointer font-semibold ml-28'>Find out more</p></div>
              </div>

            </Slider>
            <div className='relative' style={{ width: "50%" }}>
              <img src="mobile.svg" style={{ width: "85% !important", height: "85% !important", zIndex: "1", position: "inherit" }}></img>
              <div style={{ overflow: "hidden", zIndex: "1" }} className='chart absolute top-56 left-24' >
                <img data-aos="slide-up" src="chart.svg"  ></img>
              </div>
              <div className='absolute top-24 right-0 bg-[#FAB8C4] rounded-full w-56 h-56 ' style={{ zIndex: "0" }}></div>
            </div>
            <div className='absolute bottom-24 left-0 bg-[#FAB8C4] rounded-full w-12 h-12 ' style={{ zIndex: "0" }}></div>
          </div>
        </div>
        <img src="line-2.svg" className='absolute bottom-32' style={{ zIndex: "9999", width: "100%" }}></img>
      </div>
      <div className='relative' style={{ backgroundColor: "#FFFFFF" }}>
        <div className='relative text-white ' style={{ padding: "120px 322px 120px 120px", maxWidth: "1240px", margin: "40px auto", backgroundColor: "#5956E9", borderRadius: "50px" }}>
          <h1 className='text-7xl' data-AOS="fade-up">Ready to use the smartest design tool?</h1>
          <div data-AOS="fade-up">
            <p className='mt-4'>We offer flexible pricing options for freelancers and design teams.</p>
            <button className='font-normal hover:-translate-y-1 mt-5 focus:outline-none' style={{ transition: "all .45s", color: "#2522BA", backgroundColor: "#FFFFFF", height: "70px", width: "230px", borderRadius: "15px", boxShadow: "0px 48px 48px rgba(0, 0, 0, 0.12), 0px 14px 20px rgba(35, 34, 87, 0.4)" }}>Try free for 30 days</button>
          </div>
          <img className='absolute -bottom-12 left-96 w-40' src="cloud.png"></img>
        </div>
        <div className='relative flex' style={{ padding: "50px 22px 50px 120px", maxWidth: "1240px", margin: "40px auto", backgroundColor: "#FFF", borderRadius: "50px" }}>
          <div data-AOS="fade-up" style={{ position: "relative", maxWidth: "500px", marginTop: "50px", zIndex: "1" }}><h1 className='text-[#FAB8C4]'>Roadmap</h1>
            <h1 className='text-7xl mt-8 ' style={{ zIndex: "9999", position: "relative" }}>All systems are a go<span className='text-[#5956E9]'>.</span></h1>
            <p className='max-w-xs text-[#999FAE] mt-12'>Find out where we are on the path to achieving the ultimate design tool.</p>
          </div>
          <p className='absolute top-32 w-44 h-44 bg-[#FFDC60]' style={{ left: "450px", width: "8rem", height: "8rem", borderRadius: "50%", zIndex: "0" }}></p>
          <div style={{ width: "50%", overflow: "hidden", position: "relative" }}>
            <img src="roadmap-pic.png" data-AOS="fade-left" style={{ width: "750px", maxWidth: "800px !important", height: "450px !important" }}></img>
            <img src="roadmap-pic-1.png" style={{ position: "absolute", zIndex: "1", top: "50px", left: "110px", width: "80%" }}></img>
          </div>
        </div>
        <div className='relative text-black' style={{ maxWidth: "1240px", padding: "0px 22px 120px 120px", margin: "20px auto", backgroundColor: "#FFFFFF", borderRadius: "50px" }}>
          <div className='flex gap-28 relative'>
            <p style={{ fontSize: "12px", color: "#999FAE" }}>Earlier</p>
            <div className='verticalline relative' >
              <p style={{ fontSize: "12px", color: "#999FAE" }}>Q2</p>
              <p style={{ fontSize: "24px" }}>2020</p>
              <div className='absolute top-24 left-6'>
                <div className="bg-[rgba(137,107,167,0.1)] h-12 items-center flex" style={{ width: "510px", overflow: "hidden" }}><p data-AOS="slide-right" className='bg-[#896BA7] text-white h-full items-center flex pl-5' style={{ width: "342px" }}>Collab Community</p></div>
              </div>
              <div className='absolute left-6' style={{ top: "250px" }}>
                <div className="bg-[rgba(137,107,167,0.1)] h-12 items-center flex" style={{ width: "510px", overflow: "hidden" }}><p data-AOS="slide-right" data-aos-delay="400" className='bg-[#896BA7] text-white h-full items-center flex pl-5' style={{ width: "342px" }}>Collab Cloud</p></div>
              </div>
            </div>
            <div className='verticalline relative' >
              <p style={{ fontSize: "12px", color: "#999FAE" }}>Q3</p>
              <p style={{ fontSize: "24px" }}>2020</p>
              <div className='absolute left-6' style={{ top: "175px" }}>
                <div className="bg-[rgba(137,107,167,0.1)] h-12 items-center flex" style={{ width: "340px", overflow: "hidden" }}><p data-AOS="slide-right" data-aos-delay="300" className='bg-[#896BA7] text-white h-full items-center flex pl-5' style={{ width: "171px" }}>Collab Market</p></div>
              </div>
            </div>
            <div className='verticalline' >
              <p style={{ fontSize: "12px", color: "#999FAE" }}>Q4</p>
              <p style={{ fontSize: "24px" }}>2020</p>
            </div>
            <div className='verticalline' >
              <p style={{ fontSize: "12px", color: "#999FAE" }}>Q1</p>
              <p style={{ fontSize: "24px" }}>2021</p>
            </div>
            <p style={{ fontSize: "12px", color: "#999FAE" }}>Later</p>
            <div className=' absolute w-20 h-20 rounded-full top-28 -left-12' style={{ backgroundColor: "rgba(250, 184, 196, 0.5)" }}></div>
          </div>
          <img data-aos="rotate-g" data-aos-duration="1000" data-aos-delay="300" style={{ position: "absolute", top: "-80px", right: "-20px", width: "580px", maxWidth: "600px !important" }} src="roadmap-pic-2.svg"></img>
        </div>
        <div className='absolute right-0 -top-72 handbef'><img src="hand-5.png" style={{ width: "700px !important", maxWidth: "1000px !important", zIndex: "9999", position: "relative" }}></img></div>
      </div>
      <div className='relative flex' style={{ padding: "50px 22px 20px 120px", maxWidth: "1240px", margin: "340px auto 0px", backgroundColor: "#FFFFFF", borderRadius: "50px" }}>
        <div data-AOS="fade-up"><h1 className='text-5xl text-#292930 '>Technological maturity.</h1>
          <p className='text-[#999FAE] max-w-xs mt-4'>Collab is fast. Files are always up to date and ready for production.</p>
          <ul className='lis mt-5 pl-8 leading-10' data-AOS="fade-up" data-aos-duration="1000">
            <li>Collab Cloud</li>
            <li>Collab Design</li>
            <li>Collab Share</li>
            <li>Collab Code</li>
          </ul>
        </div>
        <div>
          <div data-AOS="fade-up" className="wrap-collabsible" style={{ width: "598px" }}>
            <input id="collapsible1" className="toggle" type="checkbox" checked={checkAcc} onClick={accor} />
            <label for="collapsible1" className="lbl-toggle"><div className='flex gap-4 items-center '><img style={{ width: "30px" }} src="layout-3.svg"></img>In research</div></label>
            <div className="collapsible-content">
              <div className="content-inner">
                <div style={{ padding: ".2rem 1rem", borderRadius: "10px" }} className="decorated_box">
                  <ul className='w-56 mt-12 ml-56'>
                    <li className='sec'>3+ user</li>
                    <li className='sec'>5 TB of secure storage</li>
                    <li className='sec' >Premium productivity features and simple, secure file sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div data-AOS="fade-up" className="wrap-collabsible" style={{ width: "598px" }}>
            <input id="collapsible2" className="toggle" type="checkbox" />
            <label for="collapsible2" className="lbl-toggle"><div className='flex gap-4 items-center '><img style={{ width: "30px" }} src="layout-3.svg"></img>Drafted</div></label>
            <div className="collapsible-content">
              <div className="content-inner">
                <div style={{ padding: ".2rem 1rem", borderRadius: "10px" }} className="decorated_box">
                  <ul className='w-56 mt-12 ml-56'>
                    <li className='sec'>3+ user</li>
                    <li className='sec'>5 TB of secure storage</li>
                    <li className='sec' >Premium productivity features and simple, secure file sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div data-AOS="fade-up" className="wrap-collabsible" style={{ width: "598px" }}>
            <input id="collapsible3" className="toggle" type="checkbox" />
            <label for="collapsible3" className="lbl-toggle"><div className='flex gap-4 items-center '><img style={{ width: "30px" }} src="layout-3.svg"></img>In development</div></label>
            <div className="collapsible-content">
              <div className="content-inner">
                <div style={{ padding: ".2rem 1rem", borderRadius: "10px" }} className="decorated_box">
                  <ul className='w-56 mt-12 ml-56'>
                    <li className='sec'>3+ user</li>
                    <li className='sec'>5 TB of secure storage</li>
                    <li className='sec' >Premium productivity features and simple, secure file sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div data-AOS="fade-up" className="wrap-collabsible" style={{ width: "598px" }}>
            <input id="collapsible4" className="toggle" type="checkbox" />
            <label for="collapsible4" className="lbl-toggle"><div className='flex gap-4 items-center '><img style={{ width: "30px" }} src="layout-3.svg"></img>Proposed</div></label>
            <div className="collapsible-content">
              <div className="content-inner">
                <div style={{ padding: ".2rem 1rem", borderRadius: "10px" }} className="decorated_box">
                  <ul className='w-56 mt-12 ml-56'>
                    <li className='sec'>3+ user</li>
                    <li className='sec'>5 TB of secure storage</li>
                    <li className='sec' >Premium productivity features and simple, secure file sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div data-AOS="fade-up" className="wrap-collabsible" style={{ width: "598px" }}>
            <input id="collapsible5" className="toggle" type="checkbox" />
            <label for="collapsible5" className="lbl-toggle"><div className='flex gap-4 items-center '><img style={{ width: "30px" }} src="layout-3.svg"></img>Completed</div></label>
            <div className="collapsible-content">
              <div className="content-inner">
                <div style={{ padding: ".2rem 1rem", borderRadius: "10px" }} className="decorated_box">
                  <ul className='w-56 mt-12 ml-56'>
                    <li className='sec'>3+ user</li>
                    <li className='sec'>5 TB of secure storage</li>
                    <li className='sec' >Premium productivity features and simple, secure file sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='' style={{ backgroundColor: "#27272E",paddingBottom:"50px", overflow: "hidden" }}>
        <div style={{ display: "flex", position: "relative", maxWidth: "1800px", margin: "auto", padding: "150px 0px 100px", justifyContent: "center" }}>
          <div style={{ display: "flex", gap: "6rem", color: "white", zIndex: "9999" }}><div data-AOS="zoom-out-up" style={{ fontSize: "20px", fontWeight: "bold" }}><p>Clients</p></div><div style={{ width: "750px" }}><div data-AOS="zoom-out" data-aos-duration="1000" ><h1 className='text-7xl '>More than 68,219 designers use Collab.</h1><p style={{ width: "450px", color: "rgba(255,255,255,0.5)", marginTop: "25px", fontSize: "20px" }}>Design anything from simple icons to fully featured websites and applications.</p></div></div></div>
          <div data-aos="rotate-c" data-aos-duration="1000" style={{ position: "absolute", left: "-320px", top: "0px", zIndex: "0" }}><img style={{ height: "1150px" }} src='/features-pic-1.svg'></img></div>
        </div>
        <div style={{gap:"8rem", maxWidth: "1000px", margin: "30px auto", justifyContent: "center", display: "flex",flexWrap:"wrap", zIndex: "9999", position: "inherit" }}>
          <div><img className='grsc' src="waves.svg"></img></div>
          <div><img className='grsc' src="goldlines.svg"></img></div>
          <div><img className='grsc' src="oliver.svg"></img></div>
          <div><img className='grsc' src="duotrip.svg"></img></div>
          <div><img className='grsc' src="rota-show.svg"></img></div>
          <div><img className='grsc' src="travelers.svg"></img></div>
          <div><img className='grsc' src="velocity-9.svg"></img></div>
          <div><img className='grsc' src="foxds.svg"></img></div>
        </div>
      </div>
      <div style={{ display: "flex", position: "relative", maxWidth: "1800px", margin: "auto", padding: "320px 250px 100px" }}>
          <div style={{maxWidth:"1200px",position:"relative"}}><h1 data-AOS="fade-up" className='effort text-[#C75C6F]'>Effortless</h1>
          <h1 data-AOS="fade-up"  className='text-7xl mt-4' style={{maxWidth:"700px"}}>Go from ideation to design and done<span className='text-[#5956E9]'>.</span></h1>
          <p data-AOS="fade-up" className='text-[#999FAE] mt-8' style={{maxWidth:"410px"}}>Easily create truly responsive components while deploying production-ready code.</p>
          <img className='absolute -top-48 ' style={{width:"450px",right:"-500px"}} data-aos="lamp-anim" src="lamp.png"></img>
          </div>
          <img src="line-3.svg" className='absolute bottom-0 right-96' style={{zIndex:"-1",width:"1000px !important",maxWidth:"1200px !important"}}></img>
          </div>
      <div style={{ display: "flex",flexWrap:"wrap", position: "relative", margin: "auto",borderTop:"1px solid #e3e6e9"}}>
          <div style={{width:"50%",borderRight:"1px solid #e3e6e9",padding:"120px 0px 100px",borderBottom:"1px solid #e3e6e9"}}>
            <div data-AOS="fade-right" style={{position:"relative", marginLeft:"auto",marginRight:"100px",maxWidth:"420px"}}>
              <img className='absolute w-80 -left-12' src="camera-big.png"></img>
              <div className='ml-40'>
                <h1 style={{fontSize:"24px"}}>Assets Library</h1>
                <p className='mt-4 text-[#999FAE]'>Get access to huge library of ready-made components and illustrations, free to use on all your projects.</p>
                <p className='mt-4 font-[500] started cursor-pointer'>Learn more</p>        
              </div>
              </div>
          </div>
          <div style={{width:"50%",padding:"120px 0px 100px",borderBottom:"1px solid #e3e6e9"}}>
            <div data-AOS="fade-left" data-aos-delay="200" style={{position:"relative", marginLeft:"100px",marginRight:"auto",maxWidth:"420px"}}>
              <img className='absolute w-64 -left-16' src="clock-big.png"></img>
              <div className='ml-48'>
                <h1 style={{fontSize:"24px"}}>Save Time</h1>
                <p className='mt-4 text-[#999FAE]'>Save tons of time by eliminating repetitive day-to-day tasks and slow load times. </p>
                <p className='mt-4 font-[500] startedbl cursor-pointer text-[#5956E9]'>Learn more</p>        
              </div>
              </div>
          </div>
          <div style={{width:"50%",borderRight:"1px solid #e3e6e9",padding:"120px 0px 100px",borderBottom:"1px solid #e3e6e9"}}>
            <div data-AOS="fade-right" style={{position:"relative", marginLeft:"auto",marginRight:"100px",maxWidth:"420px"}}>
              <img className='absolute w-56 -left-16' src="cup-big.png"></img>
              <div className='ml-40'>
                <h1 style={{fontSize:"24px"}}>Relax</h1>
                <p className='mt-4 text-[#999FAE]'>Let your personalized Collab assistant do the heavy lifting while you focus on creating.Say good bye to code 👋</p>
                <p className='mt-4 font-[500] started cursor-pointer'>Learn more</p>        
              </div>
              </div>
          </div>
          <div style={{width:"50%",padding:"120px 0px 100px",borderBottom:"1px solid #e3e6e9"}}>
            <div data-AOS="fade-left" data-aos-delay="200" style={{position:"relative", marginLeft:"100px",marginRight:"auto",maxWidth:"420px"}}>
              <img className='absolute w-80 -left-32' src="chatbox-big.png"></img>
              <div className='ml-48'>
                <h1 style={{fontSize:"24px"}}>Support</h1>
                <p className='mt-4 text-[#999FAE]'>Got stuck or need any help? Our support team is online 24/7 to help assist you with any issues. </p>
                <p className='mt-4 font-[500] started cursor-pointer'>Learn more</p>        
              </div>
              </div>
          </div>
      </div>
    </>
  )
}

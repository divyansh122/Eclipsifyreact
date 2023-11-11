import './main.css'
import Spline from '@splinetool/react-spline'
export default function Solareclipse() {
  return (
    <div>
      <section class="impo1">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 mb-4">
                    <h1 class="h1heading" data-aos="fade-up">Solar Eclipse occuring on the Earth</h1>
                    <h4 data-aos="fade-up" data-aos-duration="2000" class="h1heading4">See the live 3d illustrations showing how solar eclipse occurs</h4>
                </div>
                <div class="col-sm-8 mb-8">
                <Spline className='h-[40%] mr-190' scene="https://prod.spline.design/MTDoa9epV9kNRPv6/scene.splinecode" />
                </div>
            </div>
        </div>
        <div class="buttons">
            <a href="index.html" class="hello1" data-aos="zoom-out" data-aos-duration="3000"><button class="button-87" role="button" >Home</button></a>
            <a href="lunar eclipse.html" class="hello1" data-aos="zoom-out" data-aos-duration="3000"><button class="button-87" role="button" data-aos="zoom-out" data-aos-duration="3000">Lunar Eclipse</button></a>
        </div>
        
    </section>
    </div>
  )
}

import './main.css'
import Spline from '@splinetool/react-spline'
export default function MarsEclipse() {
  return (
    <div>
       <section class="impo1">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 mb-4">
                    <h1 class="h1heading" data-aos="fade-up">Solar Eclipse occuring on the Mars</h1>
                    <h4 data-aos="fade-up" data-aos-duration="2000" class="h1heading4">See the live 3d illustrations showing how Solar Eclipse occurs on the Mars</h4>
                </div>
                <div class="col-sm-8 mb-8">
                <Spline  scene="https://prod.spline.design/mDUCkRCmhPak8ZJe/scene.splinecode" />
                </div>
            </div>
        </div>
        <div class="buttons">
            <a href="index.html" class="hello1" data-aos="zoom-out" data-aos-duration="3000"><button class="button-87" role="button" >Home</button></a>
            <a href="jupiter.html" class="hello1" data-aos="zoom-out" data-aos-duration="3000"><button class="button-87" role="button" data-aos="zoom-out" data-aos-duration="3000">Eclipse on Jupiter</button></a>
        </div>
        
    </section>
    </div>
  )
}

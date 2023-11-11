import './main.css'
export default function Lunareclipse() {
  return (
    <div>
      <section class="impo1">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 mb-4">
                    <h1 class="h1heading" data-aos="fade-up">Lunar Eclipse occuring on the Moon</h1>
                    <h4 data-aos="fade-up" data-aos-duration="2000" class="h1heading4">See the live 3d illustrations showing how Lunar Eclipse occurs</h4>
                </div>
                <div class="col-sm-8 mb-8">
                    <spline-viewer url="https://prod.spline.design/MTDoa9epV9kNRPv6/scene.splinecode" background="transparent" margin-top="30px"></spline-viewer>
                </div>
            </div>
        </div>
        <div class="buttons">
            <a href="index.html" class="hello1" data-aos="zoom-out" data-aos-duration="3000"><button class="button-87" role="button" >Home</button></a>
            <a href="mars eclipse.html" class="hello1" data-aos="zoom-out" data-aos-duration="3000"><button class="button-87" role="button" data-aos="zoom-out" data-aos-duration="3000">Eclipse on mars</button></a>
        </div>
        
    </section>
    </div>
  )
}

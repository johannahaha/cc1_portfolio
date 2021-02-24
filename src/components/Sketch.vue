<template>
    <!-- <div id="p5sketch"></div>   -->
    <div>
        <ClientOnly>
        <div id="canvas"></div>
        <!-- <vue-p5 
            :additional-events="['windowresized']"
            @windowresized="windowresized"
            @setup="setup"
            @draw="draw">
        </vue-p5>  -->
        </ClientOnly>
    </div>
</template>

<script>


export default {
    components: {
        // VueP5: () =>
        //     import('vue-p5')
        //     .then(m => {
        //         m.VueP5;
        //         console.log("mounted vue p5",m.VueP5);
        //         })
        //     .catch()
        //"vue-p5": VueP5
    },
    // data: () => ({
    //     width: 300,
    //     height: 300,
    //     t: 0,
    //     mouseXLast: 300,
    //     mouseYLast: 300,
    //     hello: "hello Johanna"
    // }),
    mounted() {
        let sketch = function(s){
            let width = 300;
            let height= 300;
            let t= 0;
            let mouseXLast= 300;
            let mouseYLast= 300;
            let hello= "hello Johanna";
            s.setup = () => {  
                if (process.isClient){
                    console.log("doing setup");
                    // console.log(this.hello);
                    // this.t=0;
                    // this.width =  window.innerWidth,
                    // this.height = window.innerHeight,
                    // this.mouseXLast= window.innerWidth/2,
                    // this.mouseYLast= window.innerHeight/2,
                    // s.createCanvas(this.width,this.height);

                    console.log(hello);
                    t=0;
                    width =  window.innerWidth,
                    height = window.innerHeight,
                    mouseXLast= window.innerWidth/2,
                    mouseYLast= window.innerHeight/2,
                    s.createCanvas(width,height);
                    
                    s.background(255,255,255);
                    let c = s.color(217,164,4,10)
                    s.stroke(c);
                    s.noFill();
                }

                // document.addEventListener('resize', () => {
                //     console.log("resizing");
                //     s.resizeCanvas(window.innerWidth, window.innerHeight);
                // });
                
            },

            s.draw = () => { 
                if (process.isClient){
                    console.log("drawing");
                    // let x1 = this.width * s.noise(this.t + 10);
                    // let y1 = this.height * s.noise(this.t - 10);
                    // let x2 = this.width * s.noise(this.t + 20);
                    // let y2 = this.height * s.noise(this.t - 20);
                    // let x3 = this.width * s.noise(this.t + 30);
                    // let y3 = this.height * s.noise(this.t - 30);
                    // let x4 = this.height* s.noise(this.t+100);
                    // let y4 = this.width* s.noise(this.t+100);
                    // let x5 = this.width * s.noise(this.mouseXLast-s.mouseX);
                    // let y5 = this.height * s.noise(this.mouseYLast-s.mouseY);

                    // s.bezier(s.mouseX,s.mouseY,x1, y1, x3, y3, x2, y2,x5,y5);

                    // this.t += 0.003;
                    // this.mouseXLast = s.mouseX;
                    // this.mouseYLast = s.mouseY;

                    // if (this.t >= 100){
                    //     s.background(255,255,255);
                    //     this.t=0;
                    // }
                    let x1 = width * s.noise(t + 10);
                    let y1 = height * s.noise(t - 10);
                    let x2 = width * s.noise(t + 20);
                    let y2 = height * s.noise(t - 20);
                    let x3 = width * s.noise(t + 30);
                    let y3 = height * s.noise(t - 30);
                    let x4 = height* s.noise(t+100);
                    let y4 = width* s.noise(t+100);
                    let x5 = width * s.noise(mouseXLast-s.mouseX);
                    let y5 = height * s.noise(mouseYLast-s.mouseY);

                    s.bezier(s.mouseX,s.mouseY,x1, y1, x3, y3, x2, y2,x5,y5);

                    t += 0.003;
                    mouseXLast = s.mouseX;
                    mouseYLast = s.mouseY;

                    if (t >= 100){
                        s.background(255,255,255);
                        t=0;
                    }
                }
            },

            s.windowresized = () => { 
                if (process.isClient){
                    s.resizeCanvas(window.innerWidth, window.innerHeight);
                }
            }
        //let myp5 = new P5(sketch, document.getElementById('p5sketch'));
        }
        const P5 = require("p5");
        new P5(sketch,'canvas');
    // render(h) {
    //     return h(VueP5, {on: this});
    //}    
    }
}
</script>
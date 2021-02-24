<template>
    <!-- <div id="p5sketch"></div>   -->
    <vue-p5 
        :additional-events="['windowresized']"
        @windowresized="windowresized"
        @setup="setup"
        @draw="draw">
    </vue-p5> 
</template>

<script>
import P5 from 'p5';
import VueP5 from 'vue-p5';


export default {
    components: {
        "vue-p5": VueP5
    },
    data: () => ({
        width: window.innerWidth,
        height: window.innerHeight,
        t: 0,
        mouseXLast: window.innerWidth/2,
        mouseYLast: window.innerHeight/2,

    }),
    methods: {
        setup(s){
            s.createCanvas(this.width,this.height);
            
            s.background(255,255,255);
            let c = s.color(217,164,4,10)
            s.stroke(c);
            s.noFill();

            // document.addEventListener('resize', () => {
            //     console.log("resizing");
            //     s.resizeCanvas(window.innerWidth, window.innerHeight);
            // });
            
        },

        draw(s){

            let x1 = this.width * s.noise(this.t + 10);
            let y1 = this.height * s.noise(this.t - 10);
            let x2 = this.width * s.noise(this.t + 20);
            let y2 = this.height * s.noise(this.t - 20);
            let x3 = this.width * s.noise(this.t + 30);
            let y3 = this.height * s.noise(this.t - 30);
            let x4 = this.height* s.noise(this.t+100);
            let y4 = this.width* s.noise(this.t+100);
            let x5 = this.width * s.noise(this.mouseXLast-s.mouseX);
            let y5 = this.height * s.noise(this.mouseYLast-s.mouseY);

            s.bezier(s.mouseX,s.mouseY,x1, y1, x3, y3, x2, y2,x5,y5);

            this.t += 0.003;
            this.mouseXLast = s.mouseX;
            this.mouseYLast = s.mouseY;

            if (this.t >= 100){
                s.background(255,255,255);
                this.t=0;
            }
        },

        windowresized(s){
            s.resizeCanvas(window.innerWidth, window.innerHeight);
        }
        //let myp5 = new P5(sketch, document.getElementById('p5sketch'));
    },
    // render(h) {
    //     return h(VueP5, {on: this});
    //}    
}
</script>
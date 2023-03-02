const canvasE1 = document.querySelector("canvas"),
         canvasCtx = canvasE1.getContext("2d")
         gapX = 10

        const lineWidth = 15

        //desenha o campo
        const field = {
            w: window.innerWidth,
            h: window.innerHeight,
            draw: function () {
            canvasCtx.fillStyle = "#286047"
            canvasCtx.fillRect(0, 0, this.w, this.h)
            },
        }

        //desenha a linha central
        const line = {
            w: 15,
            h: field.h,
            draw: function () {
            canvasCtx.fillStyle = "#ffffff"
            canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h)
            },
        }

        //desenha a raquete esquerda
        const leftPaddle = {
            x: gapX,
            y: 100,
            w: line.w,
            h: 200,
            draw() {
            canvasCtx.fillStyle = "#ffffff"
            canvasCtx.fillRect(this.x, this.y, this.w, this.h)
            },
        }

        //desenha a raquete direita
        const rightPaddle = {
            x: field.w - line.w - gapX,
            y: 100,
            w: line.w,
            h: 200,
            draw() {
            canvasCtx.fillStyle = "#ffffff"
            canvasCtx.fillRect(this.x, this.y, this.w, this.h)
            },
        }

        //desenha o placar
        const score = {
            human: 1,
            computer: 2,
            draw: function () {
            canvasCtx.font = "bold 72px Arial"
            canvasCtx.textAlign  = "center"
            canvasCtx.textBaseline = "top"
            canvasCtx.fillStyle = "#01341D"
            canvasCtx.fillText(this.human, field.w / 4, 50)
            canvasCtx.fillText(this.computer, field.w / 4 + field.w / 2, 50)
            },
        }

        //desenha a bolinha
        const ball = {
            x: 300,
            y: 200,
            r: 20,
            draw: function() {
            canvasCtx.fillStyle = "#ffffff"
            canvasCtx.beginPath()
            canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
            canvasCtx.fill()
            },
        }

        function setup () {
            canvasE1.width = canvasCtx.width = field.w
            canvasE1.height = canvasCtx.height = field.h
        }

        function draw () {
            field.draw()
            line.draw()

            leftPaddle.draw()
            rightPaddle.draw()
            
            score.draw()
            ball.draw()
    
        }
        setup()
        draw()
var app = new Vue({
    el: '#app',
    data: {
      contador: 0,
      clicks: 0,
    },
    methods: {
        contadorUp() {
            this.clicks++;
            this.contador++;
        },
        contadorDown() {
            this.clicks++;
            if (this.contador != 0) {
                this.contador--;
            }
        },
    },
    computed: {
        calcPotencia: function () {
            return this.contador * this.contador;
        }
    }
  })
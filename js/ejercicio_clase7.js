const count = {
    dec: function () {
      this.valorActual--;
    },
    inc: function () {
      this.valorActual++;
    },
    valorActual: 0,
    getValorActual: function () {
      return this.valorActual;
    },
    setValorActual: function (newValue) {
      this.valorActual = newValue;
    },
    reset: function () {
      this.valorActual = 0;
    }
  };
  
  count.setValorActual(10);
  count.inc();
  count.inc();
  count.dec();
  count.inc();
  count.getValorActual();
  console.log(count.getValorActual());
  count.reset();
  console.log(count.getValorActual());
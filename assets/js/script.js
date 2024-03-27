class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => _url;
  }
  get url() {
    return this.getUrl();
  }
  setInicio() {
    return console.log('Este método es para realizar un cambio en la URL del video');
  }
}

let modulo = (() => {

  function funcionPrivada(url, id) {
    id.setAttribute("src", url)
  }
  return {
    funcionPublica: (url, id) => { funcionPrivada(url, id) }
  }
})()

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;
    this.getId = () => _id;
  }
  playMultimedia() {
    modulo.funcionPublica(this.url, this.getId())
  }
  setInicio(tiempo) {
    this.getId().setAttribute("src", `${this.url}?start=${tiempo}`)
  }
}

let musicaReproductor = new Reproductor('https://www.youtube.com/embed/5CcZ4ULT1Eo', musica);
let peliculaReproductor = new Reproductor('https://www.youtube.com/embed/YXzupDwm9fE', peliculas);
let serieReproductor = new Reproductor('https://www.youtube.com/embed/gZbybAkuPJg', series);

musicaReproductor.playMultimedia()
peliculaReproductor.playMultimedia()
serieReproductor.playMultimedia()
musicaReproductor.setInicio(37)
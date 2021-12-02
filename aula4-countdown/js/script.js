import Countdown from './modules/countdown.js'

const tempoParaNatal = new Countdown('24 December 2021 23:59:59 GMT-0300')
const tempoParaAnoNovo = new Countdown('31 December 2021 23:59:59 GMT-0300')
const body = document.querySelector('body')

setInterval(() => {
	body.innerHTML = `
    <h1>${tempoParaNatal.total.days}: ${tempoParaNatal.total.hours}: ${tempoParaNatal.total.seconds}</h1>
    <h1>${tempoParaAnoNovo.total.days}: ${tempoParaAnoNovo.total.hours}: ${tempoParaAnoNovo.total.seconds}</h1>
  `
}, 1000)

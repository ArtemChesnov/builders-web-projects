import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'

const form = document.getElementById('datecalc');


form.onsubmit = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const firstInput = formData.get('firstDate')
  const secondInput = formData.get('secondDate')

  const dateDiff = getDateDiff(firstInput, secondInput)

  if (!firstInput || !secondInput) {
    printError('Please, enter date!');
  } else {
    printResult(dateDiff)
  }
}
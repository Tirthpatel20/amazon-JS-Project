import {formatCurrency} from '../scriptss/utils/money.js'

console.log('Test suite : formatCurrency')
console.log('Test 1')
if(formatCurrency(2095) === '20.95')
    console.log('passed')
else
console.log('failed')

console.log('Test 2')
if(formatCurrency(0) === '0.00')
    console.log('passed')
else
console.log('failed')

console.log('Test 3')
if(formatCurrency(2000.5) === '20.01')
    console.log('passed')
else
console.log('failed')

console.log('Test 4')
if(formatCurrency(2000.4) === '20.00')
    console.log('passed')
else
    console.log('failed')

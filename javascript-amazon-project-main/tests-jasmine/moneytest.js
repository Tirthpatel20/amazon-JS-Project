import {formatCurrency} from '../scriptss/utils/money.js'

describe('Test suite : formatCurrency', () => {
    it('Converts cents in dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00')
    })

    it('rounds number ending with 5', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01')
    })
})
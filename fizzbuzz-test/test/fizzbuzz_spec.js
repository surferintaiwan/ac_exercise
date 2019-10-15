const should = chai.should()
describe('FizzBuzz Function Test', function(){
	it('if input can be divided by 3', function(){
		let result = fizzBuzz(9)
		result.should.be.equal('Fizz')
	})

	it('if input can be divided by 5', function(){
		let result = fizzBuzz(10)
		result.should.be.equal('Buzz')
	})

	it('if input can be divided by 3 and 5', function(){
		let result = fizzBuzz(15)
		result.should.be.equal('FizzBuzz')
	})

	it('if input cannot be divided by 3 and 5', function(){
		let result = fizzBuzz(7)
		result.should.be.equal(7)
	})
})
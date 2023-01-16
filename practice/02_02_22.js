
			var d = 15;
			const outerfun = (a) =>{
				let b = 10;
				const innerfun = () =>{
					let sum = a+b+d;
					console.log(`the sum of two value ${sum}`)
				}
				 return innerfun;
			}
			let inner = outerfun(5);
			console.dir(inner);
			inner();
	
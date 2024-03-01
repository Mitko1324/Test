const getData = () => {
	return new Promise((resolve, reject) => {
		resolve(1);
	});
};

const fun = async () => {
  const num = await getData();
  return num;
}

const fun1 = async () => {
  let num = await fun();
  console.log(num + 2);
}

fun1()

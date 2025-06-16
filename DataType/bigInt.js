const value1 = 978654567876543n;

// adding 2 big int
const result1 = value1 + 1n;
console.log(result1);

const value2 = 876543234567876543n;

// error, bigint and bumber cannot be added
const result2 = value2 + 1;
console.log(result2);
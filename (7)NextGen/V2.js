// ================
// Blocks & IIFEs
// ================

{
  const a = 1;
  let b = 2;
  var c = 3;
}

// // These 2 won't work, as both LET and CONST create Block Scoped Variables. So we just have to do this, to create private data and variables.
// console.log(a);
// console.log(b);

// // This would work, because variables defined using VAR are function scoped.
// console.log(c);
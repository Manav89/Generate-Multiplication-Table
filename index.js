function ans() {
  let a = parseInt(document.getElementById("tbl").value);

  for (let b = 1; b <= 10; b++) {
    document.getElementById("txt").innerHTML +=
      a + " * " + b + " = " + a * b + "<br>";
  }
  return null;
}

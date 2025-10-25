function generatePattern() {
  const patternType = document.getElementById("pattern").value;
  const rows = parseInt(document.getElementById("rows").value);
  let pattern = "";

  switch(patternType) {
    case "simpleIncreasing":
      for (let i=1;i<=rows;i++){
        for(let j=1;j<=i;j++) pattern += j;
        pattern += "\n";
      }
      break;

    case "rightAligned":
      for (let i=1;i<=rows;i++){
        pattern += " ".repeat(rows-i);
        for(let j=1;j<=i;j++) pattern += j;
        pattern += "\n";
      }
      break;

    case "pyramid":
      for (let i=1;i<=rows;i++){
        pattern += " ".repeat(rows-i);
        for(let j=1;j<=i;j++) pattern += j;
        for(let j=i-1;j>=1;j--) pattern += j;
        pattern += "\n";
      }
      break;

    case "square":
      for(let i=0;i<rows;i++){
        for(let j=1;j<=rows;j++) pattern += j;
        pattern += "\n";
      }
      break;

    case "fibonacci":
      let a=0,b=1;
      for(let i=1;i<=rows;i++){
        let line = "";
        for(let j=0;j<i;j++){
          line += b + " ";
          [a,b] = [b,a+b];
        }
        pattern += line.trim() + "\n";
      }
      break;

    case "reverseTriangle":
      for(let i=rows;i>=1;i--){
        for(let j=1;j<=i;j++) pattern += j;
        pattern += "\n";
      }
      break;

    case "diamond":
      for(let i=1;i<=rows;i++){
        pattern += " ".repeat(rows-i);
        for(let j=1;j<=i;j++) pattern += "*";
        pattern += "\n";
      }
      for(let i=rows-1;i>=1;i--){
        pattern += " ".repeat(rows-i);
        for(let j=1;j<=i;j++) pattern += "*";
        pattern += "\n";
      }
      break;

    case "zigzag":
      for(let i=1;i<=rows;i++){
        let line = "";
        for(let j=1;j<=i;j++){
          line += (j%2===0 ? j : "*");
        }
        pattern += line + "\n";
      }
      break;

    case "oddEvenTriangle":
      for(let i=1;i<=rows;i++){
        let line = "";
        for(let j=1;j<=i;j++){
          line += j%2===0 ? "E" : "O";
        }
        pattern += line + "\n";
      }
      break;

    case "multiplicationTriangle":
      for(let i=1;i<=rows;i++){
        let line = "";
        for(let j=1;j<=i;j++){
          line += (i*j) + " ";
        }
        pattern += line.trim() + "\n";
      }
      break;

    default:
      pattern = "Pattern not found!";
  }

  document.getElementById("output").textContent = pattern;
}

function savePattern() {
  const text = document.getElementById("output").textContent;
  if(!text) {
    alert("No pattern to save!");
    return;
  }
  const blob = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "pattern.txt";
  a.click();
}

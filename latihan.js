var tkj1 = ["didi", "dedi", "andi", "gilang", "dapis"];

function showNama() {
  var daftarNama = document.getElementById("daftar-nama");
  daftarNama.innerHTML = "";
  for (var a = 0; a < tkj1.length; a++) {
    var btnedit = '<a href="#" onclick="edit(' + a + ')">edit</a>';
    daftarNama.innerHTML += "<li>" + tkj1[a] + " " + btnedit + "</li>";
  }
}

function tambahMember() {
  var input = document.querySelector("input[name=button]");
  tkj1.push(input.value);
  showNama();
}
function edit(id) {
  var editnama = prompt("nama baru", tkj1[id]);
  tkj1[id] = editnama;
  showNama();
}

showNama();

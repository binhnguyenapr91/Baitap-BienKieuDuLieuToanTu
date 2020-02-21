function bai1() {
    let dVatLy;
    let dHoaHoc;
    let dSinhHoc;

    dVatLy=document.getElementById("diemVatly").value;
    dVL = parseInt(dVatLy);

    dHoaHoc = document.getElementById("diemHoaHoc").value;
    dHH = parseInt(dHoaHoc);

    dSinhHoc = document.getElementById("diemSinhHoc").value;
    dSH = parseInt(dSinhHoc);

    diemTong = dVL + dHH + dSH;
    diemTrungbinh = diemTong/3;

    alert("Tong diem: " + diemTong)
    alert("Diem trung binh: " + diemTrungbinh);
}

function bai2() {
    let inputDoC;
    let outputDoF;

    inputDoC =document.getElementById("doC").value;
    doC = parseInt(inputDoC);

    outputDoF = (1.8*doC) + 32;
    alert("Do F: " + outputDoF);
}

function bai3() {
    let inputR;

    inputR = document.getElementById("bankinhBt3").value;
    r = parseInt(inputR);
    dientich = r*r*3.14;

    alert("Dien tich hinh tron: "+ dientich);
}

function bai4() {
    let inputR;

    inputR = document.getElementById("bankinhBt4").value;
    r = parseInt(inputR);
    chuvi = r*2 * 3.14;

    alert("Chu vi hinh tron: " + chuvi);
}
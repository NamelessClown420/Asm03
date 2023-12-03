//Chức năng hiện nút khi di chuột đến
function MOver(a){
    document.getElementById(String(`${a}Vm`)).classList.remove('hidden');
    document.getElementById(String(`${a}Vm`)).addEventListener('click',function(){
        document.getElementById(String(`${a}Vm`)).style.display='none';
    });
};

//Chức năng ẩn nút khi di chuột đến
function MOut(b){
    document.getElementById(String(`${b}Vm`)).classList.add('hidden');
};

//Chức năng hiện nội dung
function Show(c){
    document.getElementById(String(`${c}Vm`)).classList.add('hidden');
    document.getElementById(String(`${c}Vl`)).classList.remove('hidden');
    for(i=1;i<=4;i++){
        const sth = document.getElementById(String(`${c}-${i}`)).classList.remove('hidden');
    };
};

//Chức năng ẩn nội dung
function Hide(d){
    document.getElementById(String(`${d}Vm`)).style.display='inline-block';
    document.getElementById(String(`${d}Vl`)).classList.add('hidden');
    for(i=1;i<=4;i++){
        document.getElementById(String(`${d}-${i}`)).classList.add('hidden');
    };
};
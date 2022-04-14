$(document).ready(function() {
    var i = 1;

    function kiemTraTen(){
        var mauKT= /([A-Z]{1}[a-z]+)$/;
        if ($("#Name").val()==""){
            $("#tbName").html("* Không được để trống");
            return false;
       }
        if(!mauKT.test($("#Name").val())){
           $("#tbName").html("Mỗi kí tự đầu tiên phải viết hoa, không chứa số");
           return false;
       }
       $("#tbName").html("*");
       return true;
    }
    $("#Name").blur(kiemTraTen);


    function kiemTraSDT(){
        var mauKT= /^0\d{9}$/;
        if($("#SDT").val()== "") {
            $("#tbSDT").html("* Không được để trống");
            return false;
        }
        if(!mauKT.test($("#SDT").val())){
            $("#tbSDT").html("* Số điện thoại 10 số và bắt đầu bằng số 0");
            return false;
    }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    function kiemTraEmail(){
        var mauKT=  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if($("#Email").val()==""){
            $("#tbEmail").html("* Không được để trống");
            return false;
        }
        else if(!mauKT.test($("#Email").val())){
            $("#tbEmail").html("Nhập sai định dạng Email");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
      }
    
      $("#Email").blur(kiemTraEmail);
      
    function kiemTraPassword(){
        var mauKT = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if($("#mk").val()==""){
            $("#tbMK").html("* Không được để trống");
            return false;
        }
        else if(!mauKT.test($("#mk").val())){
            $("#tbMK").html("*Mật khẩu tối thiểu 8 kí tự, ít nhất 1 số và 1 chữ cái");
            return false;
        }
        $("#tbMK").html("*");
        return true;  
    }
    $("#mk").blur(kiemTraPassword);

    function kiemTraXNMK(){
        if($("#XNMK").val()==""){
            $("#tbXNMK").html("* Không được để trống");
            return false;
        }
        if ($("#XNMK").val()!= $("#mk").val()){
            $("#tbXNMK").html("* Mật khẩu không trùng");
            return false;
        }
        $("#tbXNMK").html("*");

    }
    $("#XNMK").blur(kiemTraXNMK);

    function kiemTraDiaChi (){
        var mauKT= /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#DC").val()==""){
            $("#tbDC").html("Khong duoc de trong");
            return false;
        }
        if(!mauKT.test($("#DC").val())){
            $("#tbDC").html("Moi ky tu dau viet hoa, khong su dung so");
            return true;
        }
        $("#tbDC").html("*");
        return true;
    }
    $("#DC").blur(kiemTraDiaChi);

    $("#send-btn").click(function(event){
        var modal = $("#myModal");
        if(kiemTraTen()== true && kiemTraEmail()== true && kiemTraSDT()== true){
          modal.modal('show');
        } 
        else 
        {
            confirm("Vui lòng nhập đúng");
        }
    })
     
})

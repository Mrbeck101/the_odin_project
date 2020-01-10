var btns = document.querySelectorAll('button');
let temp2 = null;
let oper = null;


btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        let val = button.id;
        let txtbx = document.getElementById("inp");
        let temp = document.getElementById("inp").value;
        
        if (txtbx.value == "0"){
            txtbx.value = " ";
            temp = txtbx.value;
        }

        if (val == 1){
            temp = temp.concat('1');
            txtbx.value = temp;
        }
        else if (val == 2){
            temp = temp.concat('2'); 
            txtbx.value = temp;
        }
        else if (val == 3){
            temp = temp.concat('3');
            txtbx.value = temp;
        }
        else if (val == 4){
            temp = temp.concat('4');
            txtbx.value = temp;
        }
        else if (val == 5){
            temp = temp.concat('5');
            txtbx.value = temp;
        }
        else if (val == 6){
            temp = temp.concat('6');
            txtbx.value = temp;
        }
        else if (val == 7){
            temp = temp.concat('7');
            txtbx.value = temp;
        }
        else if (val == 8){
            temp = temp.concat('8');
            txtbx.value = temp;
        }
        else if (val == 9){
            temp = temp.concat('9');
            txtbx.value = temp;
        }
        else if (val == 0){
            temp = temp.concat('0');
            txtbx.value = temp;
        }
        else if (val == "Clear"){
            txtbx.value = "0";
            temp2 = null;
            oper = null;
        }
        else {
            if (temp2 == null){
                temp2 = temp;
                oper = val;
                txtbx.value = "0";
            }
            else {
                if (oper == "+"){
                    temp = (parseInt(temp) + parseInt(temp2));
                    txtbx.value = temp;
                    temp2 = null;
                    oper = null;
                }
                else if (oper == "-"){
                    temp = (parseInt(temp2) - parseInt(temp));
                    txtbx.value = temp;
                    temp2 = null;
                    oper = null;
                }
                else if (oper == "*"){
                    temp = (parseInt(temp) * parseInt(temp2));
                    txtbx.value = temp;
                    temp2 = null;
                    oper = null;
                }
                else if (oper == "/"){
                    temp = (parseFloat(temp2) / parseFloat(temp));
                    txtbx.value = temp;
                    temp2 = null;
                    oper = null;
                }
            } 
        }
    })
})

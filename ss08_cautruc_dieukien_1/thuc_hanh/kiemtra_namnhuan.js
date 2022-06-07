let year = parseFloat(prompt('Nhập vào năm:'));
if(year % 4 ==0){
    if(year % 100 ==0){
        if(year % 400 ==0){
            document.write(year + ' là năm nhuận')
        }
        else{
            document.write(year + ' không phải là năm nhuận')
        }
    }
    else {
        document.write( year + ' không phải là năm nhuận'); // không chia hết cho 100
    }
}
else{
    document.write( year + ' không phải là năm nhuận'); // không chia hết cho 4
}



//Xử lý số
// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu. 
 function tinhthetich(r) {
 	var bankinh = (4/3)*3.14159*r*r*r
return bankinh ;
 }
//Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.
function tinhtong(a,b) {
	var tong= 0;
	for (var i = a + 1; i < b; i++){
		tong += i;
	}
		return tong;
}
// Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false
 function songuyento(n){
 	var thu = true;
 	if( n < 2){
 		thu = false;
 	}
 	else if ( n === 2||) {
 		thu = true;
 	}
 	else if(n % 2 == 0) {
 		thu =false;
 	}
 	else {
 		for (i = 3; i < Math.sqrt(n); i+=2) 
 		{
 			if (n % i ==0) {
 				thu = false;
 				break;
 			}
 		}
 	}
 	if ( thu == true) {
 		return true;
 	}
 	else{
 		return false;
 	}
 }
 //Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào
 function tinhso(q){
	var tong = 0;
for(var i = 0; i <= q; i++) {
	var check = false;
	if(i == 2)
		tong += i;
	else if(i < 2 || i%2 == 0)
		check = false;
	else
		
		for(var x = 3; x <= Math.sqrt(i); x += 2) {
			if(i%x == 0) {
				check = true;
				break;
			}
		}
		 tong += i
}
console.log(tong)
}
 // Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó. 
 function uoc(w) {
	var khongten= 0;
	for ( i = 0; i < w; i++){
		if (w % i == 0 ) {
			khongten+=i;
		}
	}
		return khongten;
}
// Bài 6: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số chẵn thuộc dãy Fibonacci 


// Xử Lý chuỗi
// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ
function viethoa(str) {
   var xulymang = str.toLowerCase().split(' ');
   for (var i = 0; i < xulymang.length; i++) {
       xulymang[i] = xulymang[i].charAt(0).toUpperCase() + xulymang[i].substring(1);     
   }
   return xulymang.join(' '); 
}
// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. 
function viethoa(str) {
   var xuly = str.toLowerCase().split(' ');
   for (var i = 0; i < xuly.length; i++) {
       xuly[i] = xuly[i].substring();     
   }
   return xuly.join('-'); 
}
// Bài 3: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không 
function nhap(str) {
   var tach = str.toLowerCase().split(',');
   tach[0]= str.toLowerCase().split('');
   tach[1]= str.toLowerCase().split('');
   for ( i = 0; i < tach[0].length; i++) {
 			for (j = 0; j < tach[1].length; j++) {
 				if(x[i] == x[j]){
 					return true;
 				}
 			}
 		}
 		return false;
 }



//Bài 4: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. 
 function kiemtra(chuoi){
 	var xu = chuoi.toLowerCase().split(' ');
 	for (j = xu[1].length, i = 0; i < j; i++ , j--) {
 		if (xu[0].substring(i) != xu[1].substring(j)) {
 			return false;
 		}
 		else{
 			return true;
 		}
 	}
 }


///Xử lý mảng
// Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''. 
function loaibo(string){
	string.splice(string.indexOf('false'),1);
	string.splice(string.indexOf('null'),1);
	string.splice(string.indexOf('undefined'),1);
	string.splice(string.indexOf('NaN'),1);
	string.splice(string.indexOf('0'),1);
	string.splice(string.indexOf(''),1);
console.log( string );
}


// Bài 1: Cho 2 số a và b. Viết hàm giải phương trình bậc nhất dạng ax + b = 0
function giaipt(a, b)
{
    if (a == 0 && b == 0){
        return('Phương trình vô số nghiệm');
    }
    else if (a != 0 && b == 0){
        return('Phương trình có nghiệm x = 0');
    }
    else if (a == 0 && b != 0){
        return("Phương trình vô nghiệm");
    }
    else {
       return('Phương trình có nghiệm x = ' + (-b/a));
    }
}

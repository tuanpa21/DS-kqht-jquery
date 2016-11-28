// Empty JS for your own code to be here
function productUpdate() {
    		if ($("#Ho-ten").val() == null ||
    			$("#Ho-ten").val() == '') {
    			alert("Họ tên chưa được nhập!");
    			return false;
    			$("#Ho-ten").focus();
    		}
    		else if ($("#Lop").val() == null ||
    				$("#Lop").val() == '') {
    				alert("Lớp học chưa được nhập!");
    			return false;
    				$("#Lop").focus();
    		}
    		else if ($("#Toan").val() == null ||
    				$("#Toan").val() == '') {
    				alert("Điểm Toán chưa được nhập!");
    			return false;
    				$("#Toan").focus();
    		}
    		else if ($("#Toan").val() < 0 || $("#Toan").val() >10 )  {
    				alert("Điểm Toán nhập sai!");
    			return false;
    				$("#Toan").focus();
    		}
    		else if ($("#Ly").val() == null ||
    				$("#Ly").val() == '') {
    				alert("Điểm Lý chưa được nhập!");
    			return false;
    				$("#Ly").focus();
    		}
    		else if ($("#Ly").val() < 0 || $("#Ly").val() >10 )  {
    				alert("Điểm Lý nhập sai!");
    			return false;
    				$("#Ly").focus();
    		}
    		else if ($("#Hoa").val() == null ||
    				$("#Hoa").val() == '') {
    				alert("Điểm Hóa chưa được nhập!");
    			return false;
    				$("#Hoa").focus();
    		}
    		else if ($("#Hoa").val() < 0 || $("#Hoa").val() >10 )  {
    				alert("Điểm Hóa nhập sai!");
    			return false;
    				$("#Hoa").focus();
    		}
    		else {
    			//Thêm thông tin vào bảng
    			
    			productAddToTable();

    			//Clear data from fields
    			formClear();

    			$("#Ho-ten").focus();
    		}
    	}

    	
    	function productAddToTable() {
    		//First check if a <tbody> tag exists, add one if not
    		/* var avg = ( parseInt($("#Toan").val()) + parseInt($("#Ly").val()) + parseInt($("#Hoa").val()) ) / 3 ; */
    		if ($("#productTable tbody").length == 0) {
    			$("#productTable").append("<tbody></tbody>");
    		}

    		//Thêm thông tin vào bảng:
    		$("#productTable tbody").append(
    			"<tr>" + "<td>" + "1" + "</td>" +
    			"<td>" + $("#Ho-ten").val() + "</td>" +
    			"<td>" + $("#Lop").val() + "</td>" +
    			"<td>" + $("#Toan").val() + "</td>" +
    			"<td>" + $("#Ly").val() + "</td>" +
    			"<td>" + $("#Hoa").val() + "</td>" + "<td>" + "?" + "</td>"
    			+ "</tr>"
    			);
    		var index = 1;
    		$('td:first-child').each(function() {
    			$(this).text(index);
    			index++;
    		})
    		/*$('#trungbinh').click(function() {
    			$('td:last-child').text(avg);
    		})*/
    		
    		
    	}
    	function trungbinh() {
    		$('tr').each(function() {
    			var td4 = $(this).find('td').eq(3).text();
    			
    			var td5 = $(this).find('td').eq(4).text();
    			var td6 = $(this).find('td').eq(5).text();
    			var avg = (parseInt(td4) + parseInt(td5) + parseInt(td6)) / 3;
    		$(this).find('td').eq(6).text(avg);	
    		})
    	}

    	function hsg() {
    		$('tr').each(function() {
    			var tb = $(this).find('td').eq(6).text();
    			if (parseInt(tb) >= 8 ) {
    				$(this).css('color','red');
    			}
    		})
    	}

    	//Clear from fields
    	function formClear() {
    		$("#Ho-ten").val("");
    		$("#Lop").val("");
    		$("#Toan").val("");
    		$("#Ly").val("");
    		$("#Hoa").val("");
    	}
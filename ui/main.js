var num,base;
		
		function valid()
		{
			alert("valid funciton caled");
			 num=document.getElementById("que").value;
			 base=document.getElementById("base").value;
		//	var ck=isNaN(num);
		//	var ck1=isNaN(base);
			if(isNaN(num) || isNaN(base))
			{
				alert("please provide only numbers");
				
			}
			if(base>26)
				{
					alert("Sorry it work's up to base 26!");
				}
			else
			{
				convert();
			}
		}
		function convert()
		{
			alert("convert function called");
			var a=[];
			var i,j=0,k,q,r;
			for(i=num;num>=base;)
			{
				alert("for loop");
				r=num%base;
				num=num/base;
				num=parseInt(num);
				
				if(r>9)
				{
					var m=r-9;
					if(m<=26)
					{
						a[j]=String.fromCharCode(64+m);
						j++;
					}
				}
				else
				{
					a[j]=r;
					j++;
				}
			}
			if(num<base)
			{
				if(num>9)
				{
					var re=num-9;
					if(re<=26)
					{
						var f=64+re;
						f=String.fromCharCode(f);
						a[j]=f;
						j++;
					}
				}
				else
				{
					a[j]=num;
					j++;
				}
			}
			a=a.reverse();
			var res=a.join("");
			//alert(res);
			document.getElementById("ans").value=res;
			
		}
		
			
	
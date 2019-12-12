class Till{
	public static void main(String xyz  []){
		int Bill,Paid,Balance,Remainder;
		Bill = 1;
		Paid = 50;
		Balance = Paid-Bill; 
		if(Balance/40>0)System.out.println("40:"+Balance/40);{
			Balance=Balance-40;
		}
		System.out.println(Balance);
		if(Balance/30>0)System.out.println("30:"+Balance/30);{
			Balance=Balance-30;}
		if(Balance/20>0)System.out.println("20:"+Balance/20);{
			Balance=Balance-20;}
		if(Balance/10>0)System.out.println("10:"+Balance/10);{
			Balance=Balance-10;}
		if(Balance/5>0)System.out.println("5:"+Balance/5);{
			Balance=Balance-5;}
		if(Balance/2>0)System.out.println("2:"+Balance/2);{
			Balance=Balance-2;}
		if(Balance/1>0)System.out.println("1:"+Balance/1);{
			Balance=Balance-1;}
			}
		}
	
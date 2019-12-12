class Accounts1{
	public void Tax(){
			System.out.println("Tax Rate:"+21);
	}
	public void Tax(int salary){
		float T=(float)salary * 21/100;
			System.out.println("Tax Rate:"+T);
}
public void Tax(int sal,int Rate){
		float T=(float)sal * Rate/100;
			System.out.println("Your Tax is:"+T);
		}
	}
	class Raccount{
	public static void main(String xyz  []){
	Accounts1 AC=new Accounts1();
		AC.Tax();
		AC.Tax(2000);
		AC.Tax(3000,15);
		}
	}
class Salary{
		public static void main(String [] xyz) {
			String Name = "Peter";
			float Salary=2000F;
			
			float Tax = 0;
			float Net;
			if(Salary>=2000) System.out.println(Tax=Salary*21/100);
			if(Salary<2000) System.out.println(Tax=Salary*15/100);
			Net=Salary-Tax;
			System.out.println("Name: "+Name);
			System.out.println("Tax: "+"\u00a3"+Tax);
		}
}
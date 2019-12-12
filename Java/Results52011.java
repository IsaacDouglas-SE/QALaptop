class School1{
		private int phy,che,mat;

	public void physics(int A){
		if(A>=0 & A<=150){
			phy=A;
		}
		else{
			System.out.println("invalid physics marks");
	}
}
	public void chemistry(int B){
		if(B>=0 & B<=150){
			che=B;
		}
		else{
			System.out.println("invalid chemistry marks");
	}
}
	public void maths(int C){
		if(C>=0 & C<=150){
			mat=C;
		}
		else{
			System.out.println("invalid maths marks");
		}
	}
	public void ShowResults(){
	System.out.println("Physics: "+phy);
	System.out.println("Chemistry: "+che);
	System.out.println("Maths: "+mat);
	System.out.println("Total: "+(phy+che+mat));
}
}
class Results52011{
	public static void main(String xyz  []){
	School1 james;
	james = new School1();
		james.physics(70);
		james.chemistry(170);
		james.maths(100);
		james.ShowResults();
		}
	}
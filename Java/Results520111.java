class School11{
		private int phy,che,mat,invalid,pass;

	public void physics(int A){
		if(A>=0 & A<=150){
			if(A<60){
				pass+=1;
			}
			phy=A;
		}
		else{
			System.out.println("invalid physics marks");
			invalid=1;
	}
}
	public void chemistry(int B){
		if(B>=0 & B<=150){
			if(B<60){
				pass+=1;
			}
			che=B;
		}
		else{
			System.out.println("invalid chemistry marks");
			invalid=1;
	}
}
	public void maths(int C){
		if(C>=0 & C<=150){
			if(C<60){
				pass+=1;
			}
			mat=C;
		}
		else{
			System.out.println("invalid maths marks");
			invalid=1;
		}
	}
public void pass(){
	if(pass==0){
			// System.out.println("Physics: "+phy);
			// System.out.println("Chemistry: "+che);
			// System.out.println("Maths: "+mat);
			// System.out.println("Total: "+(phy+che+mat));
			System.out.println("You have passed the exam");
		}
		else{
			if(pass==1){System.out.println("Retake the exam");}
			if(pass==2){System.out.println("Repeat the course");}
			if(pass==3){System.out.println("Go home");}
}
}
	public void ShowResults(){
		int Total=0;
		float Per=0;
		if(invalid==0){
			System.out.println("Physics: "+phy);
			System.out.println("Chemistry: "+che);
			System.out.println("Maths: "+mat);
			System.out.println("Total: "+(phy+che+mat));
			// System.out.println("You have passed the exam");
			pass();
		}
		else{
			if(invalid==1){System.out.println("Retake the exam");}
			if(invalid==2){System.out.println("Repeat the course");}
			if(invalid==3){System.out.println("Go home");}
			
		}

}
}
class Results520111{
	public static void main(String xyz  []){
	School11 james;
	james = new School11();
		james.physics(60);
		james.chemistry(60);
		james.maths(60);
		james.ShowResults();
		}
	}
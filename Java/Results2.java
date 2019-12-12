class Results{
		int phy;
		int che;
		int mat;
	public void ShowResults(){
		int Total;
		Total=phy+che+mat;
		System.out.println("The result is: "+Total);
	}
}
class Results2{
	public static void main(String xyz  []){
	Results Peter,Smith;
	Peter = new Results();
	Smith = new Results();
		Peter.phy=100;
		Peter.che=50;
		Peter.mat=100;
		Peter.ShowResults();
	 	Smith.phy=50;
		Smith.che=50;
		Smith.mat=100;
		Smith.ShowResults();
		}
	}
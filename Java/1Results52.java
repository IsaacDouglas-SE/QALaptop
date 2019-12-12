class Results201{
		int phy;
		int che;
		int mat;
 	private float Total,Per;
	private void docalculations(){
		Total=phy+che+mat;
		Per=Total*100/150;
	}
	public void ShowResults(){
		docalculations();
		System.out.println("Total marks: "+Total);
		System.out.println("Percentage: "+Per);
	}
}
class Results5201{
	public static void main(String xyz  []){
	Results201 Ref;
	Ref = new Results201();
		Ref.phy=100;
		Ref.che=50;
		Ref.mat=100;
		Ref.ShowResults();
	 	Ref.docalculations();
		Ref.ShowResults();
		Ref.Total = 375;
		Ref.Per=92;
		}
	}
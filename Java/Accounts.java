class Accounts{
	public void TaxCalculations(int salary){
		float Tax;
			Tax=salary*21/100;
			System.out.println("Your Tax is"+Tax);
		}
public float Tax(int salary){
	float T = salary*21/100;
	return T;
}
Account AC=new Account();
String Name;
int salary;
float Tax,Net;
Name="James";
Salary=1000;
Net=salary-AC.Tax(salary);
System.out.println(Net);
	}

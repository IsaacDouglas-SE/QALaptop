class QAMaths{
	public static void main(String XYZ[]){
	int No1,No2;
	float Result=0;
	String Sign;
	try{
		No1=Integer.parseInt(XYZ[0]);
		No2=Integer.parseInt(XYZ[2]);
		Sign=XYZ[1];
		if(Sign.equals("+")){
			Result=No1+No2;
		}
		System.out.println("Result: "+Result);
		
		if(Sign.equals("+")){
			Result=No1+No2;
		}
		System.out.println("Result: "+Result);
		
		if(Sign.equals("-")){
			Result=No1-No2;
		}
		System.out.println("Result: "+Result);
		
		if(Sign.equals("/")){
			Result=No1/No2;
		}
		System.out.println("Result: "+Result);
		
		if(Sign.equals("x")){
			Result=No1*No2;
		}
		System.out.println("Result: "+Result);
}
catch(ArrayIndexOutOfBoundsException x){
	System.out.println("Please send 3 values");
}
catch(ArithmeticException x){
System.out.println("Please don't divide by zero");
}
catch(NumberFormatException x){
System.out.println("Please use numbers, not characters");
}
}
}
	

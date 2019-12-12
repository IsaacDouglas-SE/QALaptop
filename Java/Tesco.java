class Tesco{
		public static void main(String [] xyz) {
			int Quantity;
			Float Price,Amount;
			String Product;
			Product="Coke";
			Quantity=15;
			Price=2.25F;
			Amount=Quantity*Price;
			System.out.println("Product:"+Product);
			System.out.println("Quantity:"+Quantity);
			System.out.println("Unit Price: "+"\u00a3"+Price);
			System.out.println("Amount: "+"\u00a3"+Amount);
			System.out.println("VAT: "+"\u00a3"+((Amount*20)/100));
			System.out.println("------------------");
			System.out.println("Net Amount: "+"\u00a3"+(Amount-(Amount*20/100)));
		    System.out.println("------------------");
		}
}
namespace IMC.Models
{
    public class User
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public double Imc { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }
        public string Status { get; set; }

        public static double CalculateIMC (double height, double weight)
        {
            double imc = System.Math.Round(weight / System.Math.Pow(height, 2), 3);
            return imc;
        }

        public static string CalculateStatus(double imc)
        {
            if (imc < 17) {
                return "Muito Abaixo do Peso";
            } else if (imc >= 17 && imc <= 18.49) {
                return "Abaixo do Peso";
            } else if (imc >= 18.5 && imc <= 24.99) {
                return "Peso Normal";
            } else if (imc >= 25 && imc <= 29.99) {
                return "Acima do Peso";
            } else if (imc >= 30 && imc <= 34.99) {
                return "Obesidade I";
            } else if (imc >= 35 && imc <= 39.99) {
                return "Obesidade II (severo)";
            } else if (imc >= 40) {
                return "Obesidade III (mórbido)";
            } else {
                return "";
            }
        }
    }
}
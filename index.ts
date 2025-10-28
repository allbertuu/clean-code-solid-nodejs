/*
 * SRP - Single Responsibility Principle
 * Uma classe/função deve ter apenas um motivo para mudar, ou seja,
 * deve ter apenas uma responsabilidade.
 *
 * Nesse caso, a função CreateOrder tem a única responsabilidade de criar um pedido.
 * Nada mais.
 *
 * DIP - Dependency Inversion Principle
 * A função CreateOrder passa como argumento as dependências
 * que CalculateOrderDiscount precisa. Assim como ela mesma precisa que uma função
 * acima dela passe os argumentos necessários.
 * Dessa forma, CreateOrder não depende de uma implementação "escondida"
 * de CalculateOrderDiscount, tornando-a dependente de CalculateOrderDiscount.
 * Usando argumentos, fica mais flexível e fácil de testar.
 */
function CreateOrder(paymentMethod: "credit" | "debit", amount: number) {
  const discount = CalculateOrderDiscount(paymentMethod, amount);

  console.log("Pedido criado com sucesso!");
}

// SRP - somente calcula o desconto sobre o total (e o retorna)
function CalculateOrderDiscount(
  paymentMethod: "credit" | "debit",
  amount: number
) {
  if (paymentMethod === "credit") {
    return amount * 0.1;
  }

  if (paymentMethod === "debit") {
    return amount * 0.05;
  }

  return amount;
}

function calcularEmissoes() {
    // Coletando os valores dos inputs
    const energia = parseFloat(document.getElementById('energia').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
    const carro = parseFloat(document.getElementById('carro').value);
    const alimentacao = parseFloat(document.getElementById('alimentacao').value);

    // Cálculo das emissões de carbono
    const emissoesEnergia = energia * 0.0038; // Cada kWh de energia gera 0.0038 kg de CO2
    const emissoesCarro = (distancia / carro) * 2.31; // Cada litro de combustível gera 2.31 kg de CO2
    const emissoesAlimentacao = alimentacao; // Emissões de CO2 fornecidas diretamente pelo usuário

    // Atualizando os resultados na página
    document.getElementById('resultado-energia').textContent = emissoesEnergia.toFixed(2);
    document.getElementById('resultado-carro').textContent = emissoesCarro.toFixed(2);
    document.getElementById('resultado-alimentacao').textContent = emissoesAlimentacao.toFixed(2);

    // Cálculo do total de emissões
    const totalEmissoes = emissoesEnergia + emissoesCarro + emissoesAlimentacao;
    document.getElementById('total').textContent = `Total: ${totalEmissoes.toFixed(2)} kg/mês`;
}

import service from "./service";

export const processarNota = async (idNota, selectedButtons) => {
    try {
      const response = await fetch(`http://localhost:5000/processar/${idNota}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lojas_selecionadas: {
            l1: selectedButtons.l1,
            l2: selectedButtons.l2,
            l3: selectedButtons.l3,
            l4: selectedButtons.l4,
            l5: selectedButtons.l5,
            l6: selectedButtons.l6,
            l7: selectedButtons.l7,
            l8: selectedButtons.l8,
          }
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao processar a nota fiscal');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Erro ao processar nota:', error);
      throw error;
    }
  };
  
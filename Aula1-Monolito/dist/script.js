console.log("hello world log");

async function loadEquipments(){
    const response = await 
        fetch('/api/equipments');
    const equipments = await response.json();
    
    console.log("equipments response: ", equipments.response);  
    
    const table = document.querySelector('#equipment-table');

    let tableContent = `
        <tr>
            <td>id</td>
            <td>Nome Equipamento</td>
            <td>Ano</td>
        </tr> 
    `;
    for(let i=0;i<equipments.response.length;i++) {
        const equip = equipments.response[i];
        tableContent += `
        <tr>
            <td>${equip.id}</td>
            <td>${equip.nome}</td>
            <td>${equip.ano}</td>
        </tr>`;
    }
    table.innerHTML = tableContent;
}

loadEquipments();
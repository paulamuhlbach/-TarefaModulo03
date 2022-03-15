const badgeType = ['badge-primary','badge-secondary', 'badge-success', 'badge-danger', 'badge-warning', 'badge-info', 'badge-light', 'badge-dark'];
const texto = $('#texto');
const strings = texto[0].value.split(';');


    function criarTabela() {
        const itens = [];
        const tab = $('#tarefas')[0];
        for (let index = 0; index < strings.length; index++) {
            const element = strings[index];
            const campos = element.split(',');

            let badgeTypeValue = campos[3];
                if(campos[3] === 'Em andamento'){
                        badgeTypeValue = badgeType[0];
                }else if(campos[3] === 'Sprint'){
                        badgeTypeValue = badgeType[7];
                }else if(campos[3] === 'Homologada'){
                        badgeTypeValue = badgeType[2];
                }else if(campos[3] === 'Não homologada'){
                        badgeTypeValue = badgeType[4];
                }else if(campos[3] === 'Teste'){
                        badgeTypeValue = badgeType[5];
                }else{
                        badgeTypeValue = badgeType[1];
                }

            const tr = $('<tr><td>'+ campos[0] +'</td>'+'<td>'+ campos[1] + '</td><td>' + campos[2] + '</td><td><span class="badge badge-pill '+ badgeTypeValue + ' ">'+ campos[3] +'</span></td></tr>')[0];

             ;

            tab.appendChild(tr);




        }

        $(button).on("click", function(){
          $(this).hide();
        });



  }





// Avaliação TI - JAVA
// Requisitos para a criação do sistema:
// 1)	Desenvolvimento Java Web;*
// 2)	Banco de dados MySql ou PostgreSQL;
// 3)	Utilização do padrão MVC;
// 4)	Utilização de Javascript;

// * Pode ser utilizado Servlet, JSP e JDBC ou quaisquer frameworks que se aplicam a essas camadas, como: Struts, JSF, Hibernate, Spring.

// Criar um CRUD para cadastro de clientes. As 4 ações do CRUD deverão ser implementadas conforme descrito abaixo.
// 1)	Criar tela de cadastro;
// 1.1)	 A tela de cadastro deve conter um formulário com os campos abaixo;
// •	CPF;
// •	Nome;
// •	E-mail;
// •	Data de nascimento;
// •	Sexo;
// •	Estado civil;
// •	Ativo

// Observações:
// •	Todos os campos são de preenchimento obrigatórios e devem ser validados via javascript;
// •	Os campos CPF, Nome, E-mail e Data de nascimento devem ser do tipo Text; 
// •	O campo Sexo deve ser do tipo Radio;
// •	O campo Estado civil deve ser do tipo Select;
// •	O campo Ativo deve ser do tipo Checkbox;

// 1.2)	 Ao clicar no botão “Cadastrar” os dados devem ser inseridos no banco de dados;

// 2)	Criar tela de pesquisa;
// 1.1)	 A tela deve conter filtro por CPF e Nome;
// Observações
// •	A busca por CPF deve ser realizada pelo operador “Igual”;
// •	A busca por Nome deve ser realizada pelo operado “Like”;
// •	O resultado da tela de pesquisa deve trazer os registros do banco e serem exibidas no formato de tabela;
// •	Para cada registro retornado, deve ser exibido links para excluir e alterar;

// 3)	Criar tela de alteração;
// 1.1)A tela de alteração deve conter todos os campos da tela de cadastro
// Observações
// •	Todos os campos devem vir preenchidos com o valor do banco e permitir a alteração dos mesmos;
// •	Ao clicar no botão “Alterar” os dados dever ser persistidos no banco;

// 4)	Ação de excluir;
// 1.1)Ao clicar no botão excluir citado no item 2, o registro deve ser deletado do banco
// Observações
// •	Implementar ação de excluir em lote; 

// O projeto deverá ser realizado em até 3 dias. Para a disponibilização, você deverá escolher uma plataforma de versionamento em formato Git e enviar o Link para: Juliane.alves@daniel-ip.com, para que possamos baixar o projeto.

// Banco de dados
// Estrutura das Tabelas:

// PESSOA
// ID	NAME	AGE	STATUS	CREATED_AT	DELETED_ON
// 1	JOSE	60	ATIVO	2017/11/01	
// 2	MARIA	56	INATIVO	2014/09/11	2014/09/12
// 3	TEREZA	80	INATIVO	2018/03/04	2018/04/04
// 4	JOAQUIM	67	ATIVO	2016/12/25	
// 5	PEDRO	38	ATIVO	2019/01/01	
// 6	KATRINA	19	INATIVO	2019/05/12	2019/06/12


// ENDERECO	
// ID	ID_PESSOA	LOGRADOURO	NUMERO	CIDADE	TIPO	CREATED_AT
// 1	1	RUA DA ASSEMBLEIA	10	RIO DE JANEIRO	RESIDENCIAL	2017/11/01
// 2	1	RUA DA CARIOCA	256	RIO DE JANEIRO	COMERCIAL	2014/09/11
// 3	3	AV. DAS AMERICAS	8000	RIO DE JANEIRO	COMERCIAL	2018/03/04
// 4	4	AV. PAULISTA	400	SÃO PAULO	COMERCIAL	2016/12/25
// 5	5	BRIGADEIRO FARIA LIMA	5855	SÃO PAULO	COMERCIAL	2019/01/01
// 6	7	RUA DO IPIRANGA	55	SÃO PAULO	RESIDENCIAL	2019/05/12

// Dada a estrutura acima das tabelas, crie os seguintes comandos SQL
// 1)	Um SQL capaz de identificar todas as “PESSOAS” sem endereço cadastrado na tabela “ENDERECO”
// 2)	Um sql retornando as pessoas que possuem mais de um ender

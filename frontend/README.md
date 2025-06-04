
Health Earn - Frontend
Este projeto é o frontend da plataforma Health Earn, onde usuários são recompensados por hábitos saudáveis.
Abaixo, você encontra uma breve descrição de cada página principal do sistema.

Páginas
Home (Home.tsx) - (Em progresso)
Página inicial da plataforma.
Apresenta o propósito do Health Earn, convidando o usuário a conhecer e participar do projeto.
Aqui, o usuário encontra informações introdutórias e pode iniciar o processo de conexão com a carteira.

Overview (OverviewPage.tsx)
Painel principal do usuário logado.
Nela possui uma condição caso seja a primeira vez que o usuário entra no sistema, irá redirecionar para um formulário de cadastro com informações básicas como:
nome ou apelido, idade, e-mail, altura e peso.
Caso não seja a primeira vez, exibe informações resumidas como saldo de tokens, histórico de atividade, lista de amigos, atividades recentes dos amigos e atalhos para outras funcionalidades.
É a página de entrada após o login bem-sucedido.

Profile (ProfilePage.tsx)
Página de perfil do usuário.
Mostra dados pessoais como nome, idade e endereço da carteira conectada.
Permite ao usuário visualizar suas informações de cadastro e caso queira edita-las terá um link para redirecionar a página de edição.

Settings (SettingsPage.tsx)
Página de configurações.
Aqui o usuário pode ajustar preferências da conta e editar algumas informações relacionadas ao seu perfil.

Help Chat (HelpChatPage.tsx)
Página de suporte via chat.
O usuário pode enviar perguntas e receber respostas automáticas de uma IA personalizada, tirando dúvidas sobre a plataforma e recebendo dicas de saúde.

Menu (Menu.tsx)
Componente de navegação lateral.
Permite acesso rápido às principais páginas do sistema: Overview, Profile, Settings, Help Chat e Logout.

Header (Header.tsx)
Barra superior da aplicação.
Exibe o nome do projeto, opções de login/logout e informações rápidas do usuário conectado.

Observações
O projeto utiliza React, React Router e Context API para gerenciamento de estado e rotas.
A navegação entre páginas é feita sem recarregar a página, proporcionando uma experiência fluida ao usuário.
Sinta-se à vontade para contribuir ou sugerir melhorias!
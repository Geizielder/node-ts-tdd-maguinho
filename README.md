<!-- 
    Crie uma chave ssh com nome persinalizado
    ssh-keygen -t rsa -b 2048 -f ~/.ssh/minha_chave_customizada
 -->

:bulb: Exitem  três níveis de configuração do git:

    git config --system // configurações globais do sistema
    git config --global // configurações globais do usuário
    git config --local // configurações locais do repositório

### Git configuration essentials

    git config --global --list // mostra configurações globais
    git config --global user.name "Seu nome"
    git config --global user.email "seuemail@.com"
    git config --global core.editor "code --wait" //editor favorito vscode
    git config --global init.defaultBranch main

### Git configuration essentials aliases

    s = !git status -s
	c = !git add -A && git commit -m
	l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn %C(green)%cr'
 
> [!NOTE]
> Farei um alteração por conta no projeto tentarei usar a biblioteca eslint-config-love no lugar da bilioteca eslint-config-standard-with-typescript que nessa momento foi descontinuada.



> [!NOTE]
> Até o momento a substitiçao da biblioteca eslint-config-standard-with-typescript por eslint-config-love funcionou perfeitamente.

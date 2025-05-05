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

    git config --global alias.s status -s
    git config --global alias.c commit
    git config --global alias.lg "log --oneline --decorate --all --graph"



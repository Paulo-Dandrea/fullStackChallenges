#/bin/bash

echo "Qual é o caminho do diretório?"
read caminho    

if [ -d $caminho ]
    then
        echo "É um diretório"
  elif [ -f $caminho ]
    then
        echo "É um arquiovo"
  else
            echo "É uma outra coisa que eu nem sei o que é e nem quero saber"
fi
ls -l $caminho
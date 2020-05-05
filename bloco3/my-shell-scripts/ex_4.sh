#!/bin/bash

filePath="/home/paulo/Desktop/"
if [ -e "$filePath" ]
  then
     echo "O caminho $filePath está habilitado!"
fi
if [ -w "$filePath" ]
  then
    echo "Você tem permissão para editar $filePath"
  else
    echo "Você NÃO foi autorizado a editar $filePath"
fi
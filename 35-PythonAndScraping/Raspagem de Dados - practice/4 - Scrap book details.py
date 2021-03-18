import requests
from parsel import Selector

response = requests.get('http://books.toscrape.com/catalogue/the-grand-design_405/index.html')

print(response.status_code)

# Exercício 4 Baseados em uma página contendo detalhes sobre um livro http://books.toscrape.com/catalogue/the-grand-design_405/index.html , faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.
# O preço deve vir somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76 .
# A descrição de ter o sufixo "more..." removido quando existir.
# Os campos extraídos devem ser apresentados separados por vírgula. Ex: título,preço,descrição,capa.
selector = Selector(text=response.text)

for product in selector.css(".product_main"):
    title = product.xpath("//title/text()").get()
    
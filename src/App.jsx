import products from './data/products.json'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-10 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold">Sélection Sexy AliExpress</h1>
        <p className="mt-3 text-lg">Bottes & accessoires tendances – Liens affiliés</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-96 object-cover object-top"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 line-clamp-2">{product.title}</h2>
                <p className="text-3xl font-extrabold text-red-600 mb-4">{product.price}</p>
                <p className="text-gray-700 mb-6 line-clamp-4">{product.description}</p>
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-4 rounded-xl font-bold text-lg transition"
                >
                  Voir sur AliExpress → Acheter maintenant
                </a>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Lien affilié – Prix indicatif, peut varier
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Yannick – Liens affiliés AliExpress</p>
      </footer>
    </div>
  )
}

export default App

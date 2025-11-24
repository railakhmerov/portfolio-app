import './reset.css'
import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-200 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 mb-4">
          Tailwind работает! 🎉
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Если ты видишь красивый градиент и эффекты — всё настроено верно.
        </p>
        <button className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200">
          Работает!
        </button>
      </div>
    </>
  )
}

export default App

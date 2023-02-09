/* Used by: keys-in-react */
import CodeEditor from './CodeEditor'

const initialProductsJSONv1 = `[
  { "name": "🥛 Milk", "stock": 5 },
  { "name": "🍞 Bread", "stock": 8 },
  { "name": "🧀 Cheese", "stock": 3 },
  { "name": "🥚 Eggs", "stock": 1 }
]
`

const initialProductsJSONv2 = `[
  { "id": 1, "name": "Milk", "stock": 5 },
  { "id": 2, "name": "Bread", "stock": 8 },
  { "id": 3, "name": "Cheese", "stock": 3 },
  { "id": 4, "name": "Eggs", "stock": 1 }
]
`

const appJSv1 = `import { useState } from 'react'
import { shuffle } from './utils'
import initialProducts from './data'

export default function Stock() {
  const [products, setProducts] = useState(initialProducts)

  const shuffleProducts = () => {
    setProducts(shuffle(products))
  }

  return (
    <div className='stock'>
      <button onClick={shuffleProducts}>Shuffle</button>
      {products.map((product, index) => (
        <Product key={index} productName={product.name} initialStock={product.stock} />
      ))}
    </div>
  )
}

function Product({ productName, initialStock }) {
  const [stock, setStock] = useState(initialStock)

  const onChangeStock = event => {
    setStock(event.target.value)
  }

  return (
    <div className='product'>
      <div>Product: {productName}</div>
      <div>
        Stock: <input type='number' value={stock} onChange={onChangeStock} />
      </div>
    </div>
  )
}
`

const appJSv2 = `import { useState } from 'react'
import { shuffle } from './utils'
import initialProducts from './data'

export default function Stock() {
  const [products, setProducts] = useState(initialProducts)

  const shuffleProducts = () => {
    setProducts(shuffle(products))
  }

  return (
    <div className='stock'>
      <button onClick={shuffleProducts}>Shuffle</button>
      {products.map((product, index) => (
        <Product key={product.id} productName={product.name} initialStock={product.stock} />
      ))}
    </div>
  )
}

function Product({ productName, initialStock }) {
  const [stock, setStock] = useState(initialStock)

  const onChangeStock = event => {
    setStock(event.target.value)
  }

  return (
    <div className='product'>
      <div>Product: {productName}</div>
      <div>
        Stock: <input type='number' value={stock} onChange={onChangeStock} />
      </div>
    </div>
  )
}
`

const utilsJS = `export function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
`

const stylesCSS = `body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  background: #ececec;
}

.stock button {
  margin-bottom: 20px;
}

.product {
  margin-bottom: 15px;
}

.product input {
  width: 45px;
  margin-top: 3px;
  text-align: center;
}
`

function StockManagement({ v2 = false }) {
  return (
    <CodeEditor
      files={{
        'data.json': v2 ? initialProductsJSONv2 : initialProductsJSONv1,
        'utils.js': utilsJS,
        'App.js': v2 ? appJSv2 : appJSv1,
        'styles.css': { code: stylesCSS, hidden: true }
      }}
    />
  )
}

export default StockManagement

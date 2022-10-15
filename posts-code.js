import { useState } from 'react'

function shuffle(unshuffled) {
  return unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

const initialProducts = [
  {
    id: 1,
    name: 'Milk',
    stock: 5
  },
  {
    id: 2,
    name: 'Bread',
    stock: 8
  },
  {
    id: 3,
    name: 'Cheese',
    stock: 3
  },
  {
    id: 4,
    name: 'Eggs',
    stock: 1
  }
]

function Stock() {
  const [products, setProducts] = useState(initialProducts)

  const shuffleProducts = () => {
    setProducts(shuffle(products))
  }

  return (
    <div className='stock'>
      <button onClick={shuffleProducts}>Shuffle</button>
      {products.map((product, index) => (
        <Item key={index} itemName={product.name} initialStock={product.stock} />
      ))}
    </div>
  )
}

function Item({ itemName, initialStock }) {
  const [stock, setStock] = useState(initialStock)

  const onChangeStock = event => {
    setStock(event.target.value)
  }

  return (
    <div className='item'>
      <div>Item: {itemName}</div>
      <div>
        Stock: <input type='number' value={stock} onChange={onChangeStock} />
      </div>
    </div>
  )
}

export { Stock }

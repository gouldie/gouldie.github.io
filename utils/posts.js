import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const mdxPath = path.join(process.env.PWD, '/pages/posts/')

function getPosts() {
  const files = fs.readdirSync(mdxPath)

  const meta = files.map(file => {
    const contents = fs.readFileSync(mdxPath + file, 'utf8')
    const meta = matter(contents)

    return meta.data
  })

  return meta
}

export { getPosts }

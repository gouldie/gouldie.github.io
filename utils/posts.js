import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsPath = path.join(process.env.PWD, '/posts/')

function getPosts() {
  const files = fs.readdirSync(postsPath)

  const meta = files.map(file => {
    const contents = fs.readFileSync(postsPath + file, 'utf8')
    const meta = matter(contents)

    return meta.data
  })

  return meta
}

function getPaths() {
  let paths = []

  const files = fs.readdirSync(postsPath)

  if (files) {
    files.forEach(file => {
      if (path.extname(file) == '.mdx') {
        paths.push({ params: { id: file.replace('.mdx', '') } })
      }
    })
    return paths
  } else {
    return null
  }
}

function getFileData(fileName) {
  const data = fs.readFileSync(path.join(postsPath, `${fileName}.mdx`), {
    encoding: 'utf-8'
  })
  if (data) {
    return data
  } else {
    return null
  }
}

export { getPosts, getPaths, getFileData }

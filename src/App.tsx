import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'


import './global.css'
import styles from './App.module.css'



const posts: PostType[]= [
     {
        id: 1,
        author: {
          avatarUrl: 'https://github.com/marqu1nhosp.png',
          name: 'Marcos Porto',
          role: 'Web Developer'
        },
        content: [ 
          { type: 'paragraph', content: 'Olá galera!', },
          { type: 'paragraph', content: 'Este projeto foi desenvolvido com React, Typescript e css-modules para o meu portifa.', },
          { type: 'link', content: 'https://github.com/marqu1nhosp'},
        ],
        publishedAt: new Date('2023-03-08 12:00:00')
     },

     {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/RobertCardosoo.png',
        name: 'Robert',
        role: 'Bubble Developer '
      },
      content: [ 
        { type: 'paragraph', content: 'Olá galera!', },
        { type: 'paragraph', content: 'Estou desenvolvendo esse projeto pro meu portifa com react e css-modules. Logo mais irei passar para o TypeScript.', },
        { type: 'link', content: 'marcos.design/doctorcore'},
      ],
      publishedAt: new Date('2023-03-07 12:00:00')
   },
   ];

function App() {
 
  return (
    <div>
     <Header/>

     <div className={styles.wrapper}>
       <Sidebar />
        <main>
            {posts.map(post => {
              return (
                 <Post 
                    key={post.id}
                    post={post}
                />
              )
            })}
        </main>
     </div>
         
    </div>
   
  )
}

export default App

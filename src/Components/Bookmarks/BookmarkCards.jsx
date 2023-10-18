import React from 'react'
import Card from '../Home/Card'

const BookmarkCards = () => {
    const data = [
        {
           "id" : 0,
           "image" : "src/assets/terraform.jpg",
           "author" : "Anchit Nayak",
           "date": "2023-01-05 16:46",
           "title" : "Noteworthy technology acquisitions 2021",
           "body" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, facere distinctio maiores nam velit qui saepe harum officia quam nisi." 
        },
        {
            "id" : 1,
            "image" : "src/assets/docker.jpg",
            "author" : "Aniket Pawar",
            "date": "2023-01-05 16:46",
            "title" : "Noteworthy technology acquisitions 2021",
            "body" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, facere distinctio maiores nam velit qui saepe harum officia quam nisi."
        },
    ]
  return (
    <div>
        {data.map((card)=>{
           return (<Card key={card.id} author={card.author} date={card.date} id ={card.id} image={card.image} title={card.title} content={card.body}/>)
        })}
    </div>
  )
}
export default BookmarkCards
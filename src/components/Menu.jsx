import React from 'react'

const posts = [
    {
      id: 1,
      title: "What is Lorem Ipsum?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lqgeLSbl2GagJpl6bOuc3bDmZYFF6szOuzaZJmHoYGp1i0v38jUzQNr3I7RU1W2UipQ&usqp=CAU",
    },
    {
      id: 2,
      title: "What is Lorem Ipsum?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lqgeLSbl2GagJpl6bOuc3bDmZYFF6szOuzaZJmHoYGp1i0v38jUzQNr3I7RU1W2UipQ&usqp=CAU",
    },
    {
      id: 3,
      title: "What is Lorem Ipsum?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lqgeLSbl2GagJpl6bOuc3bDmZYFF6szOuzaZJmHoYGp1i0v38jUzQNr3I7RU1W2UipQ&usqp=CAU",
    },
    {
      id: 4,
      title: "What is Lorem Ipsum?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lqgeLSbl2GagJpl6bOuc3bDmZYFF6szOuzaZJmHoYGp1i0v38jUzQNr3I7RU1W2UipQ&usqp=CAU",
    },
  ];

const Menu = () => {
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}

    </div>
  )
}

export default Menu
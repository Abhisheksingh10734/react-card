import Card from './components/card'

const App = () => {

  const avengers = [
  {
    img: "https://variety.com/wp-content/uploads/2013/04/ironman3_tonystark.jpg?w=1000&h=667&crop=1",
    name: "Iron Man",
    description:
      "Tony Stark is a genius billionaire who created the Iron Man suit to protect the world."
  },
  {
    img: "https://www.hollywoodreporter.com/wp-content/uploads/2014/03/captainamerica252caf98c7a36c.jpg?w=2000&h=1126&crop=1",
    name: "Captain America",
    description:
      "Steve Rogers is a super soldier known for his bravery, leadership, and vibranium shield."
  },
  {
    img: "https://i0.wp.com/voyagecomics.com/wp-content/uploads/2019/06/thor.jpg?fit=1400%2C900&ssl=1",
    name: "Thor",
    description:
      "Thor is the Asgardian God of Thunder who wields the magical hammer Mjolnir."
  },
  {
    img: "https://imageio.forbes.com/blogs-images/danidiplacido/files/2017/10/hpNTUvvUfJCx.jpg?height=433&width=650&fit=bounds",
    name: "Hulk",
    description:
      "Bruce Banner transforms into the Hulk, a massive green hero with unlimited strength."
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/black-widow-scarlett-johansson-marvel-1559233664.jpg?crop=0.670xw:1.00xh;0.255xw,0&resize=1200:*",
    name: "Black Widow",
    description:
      "Natasha Romanoff is a highly trained assassin and spy who became an Avenger."
  },
  {
    img: "https://ew.com/thmb/WC61I9BjJkLh2oa5T-i7Hch3PjU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Jeremy-Renner-The-Avengers-073025-5b56a9ec13d941c0b90d96215b755f3c.jpg",
    name: "Hawkeye",
    description:
      "Clint Barton is an expert marksman and master archer with incredible accuracy."
  },
  {
    img: "https://cdn.mos.cms.futurecdn.net/SUtmfqbrKaDhMBhVY8WDKW-1200-80.jpg",
    name: "Spider-Man",
    description:
      "Peter Parker is a young superhero with spider-like abilities and a strong sense of responsibility."
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Benedict_Cumberbatch_as_Doctor_Strange.jpeg/250px-Benedict_Cumberbatch_as_Doctor_Strange.jpeg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    name: "Doctor Strange",
    description:
      "Stephen Strange is the Sorcerer Supreme who protects Earth using mystical powers."
  },
  {
    img: "https://media.newyorker.com/photos/5a875e3f33aebd0cab9bab12/master/pass/Brody-Passionate-Politics-Black-Panther.jpg",
    name: "Black Panther",
    description:
      "T’Challa is the king of Wakanda and the protector known as Black Panther."
  },
  {
    img: "https://i0.wp.com/subjectifymedia.com/wp-content/uploads/2022/05/scarlet-witch-doctor-strange-2.jpg?fit=1300%2C650&ssl=1",
    name: "Scarlet Witch",
    description:
      "Wanda Maximoff possesses powerful chaos magic and reality-altering abilities."
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/f/fc/Paul_Bettany_as_Vision.jpg",
    name: "Vision",
    description:
      "Vision is a powerful android created using artificial intelligence and the Mind Stone."
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Anthony_Mackie_as_Captain_America.jpeg/250px-Anthony_Mackie_as_Captain_America.jpeg",
    name: "Falcon",
    description:
      "Sam Wilson uses advanced flying wings and later becomes the new Captain America."
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Sebastian_Stan_as_Bucky_Barnes.jpg/250px-Sebastian_Stan_as_Bucky_Barnes.jpg",
    name: "Winter Soldier",
    description:
      "Bucky Barnes is a super soldier with a cybernetic arm and a troubled past."
  },
  {
    img: "https://deadline.com/wp-content/uploads/2025/03/paul-rudd-ant-man-avengers-doomsday.jpg",
    name: "Ant-Man",
    description:
      "Scott Lang can shrink in size and communicate with ants using advanced technology."
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Evangeline_Lilly_as_Wasp.jpeg",
    name: "Wasp",
    description:
      "Hope van Dyne fights alongside Ant-Man using shrinking technology and energy blasts."
  },
  {
    img: "https://media.wired.com/photos/5c8025dfedfea42f35917d1c/4:3/w_1163,h_872,c_limit/Culture_CaptainMarvel7.jpg",
    name: "Captain Marvel",
    description:
      "Carol Danvers is one of the universe’s most powerful heroes with cosmic abilities."
  },
  {
    img: "https://images.indianexpress.com/2022/08/i-am-groot.jpg?w=1200",
    name: "Groot",
    description:
      "Groot is a tree-like being who can regenerate and only says 'I am Groot.'"
  },
  {
    img: "https://i.pinimg.com/564x/d7/0d/68/d70d68ec034c06968a12a9daa2a11d69.jpg",
    name: "Rocket Raccoon",
    description:
      "Rocket is a genetically engineered raccoon with exceptional combat and engineering skills."
  },
  {
    img: "https://www.denofgeek.com/wp-content/uploads/2023/05/star-lord.jpg",
    name: "Star-Lord",
    description:
      "Peter Quill is the leader of the Guardians of the Galaxy and a skilled space adventurer."
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/5/54/Zoe_Saldana_as_Gamora.jpeg",
    name: "Gamora",
    description:
      "Gamora is a deadly warrior and the adopted daughter of Thanos."
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Dave_Bautista_as_Drax.jpg/250px-Dave_Bautista_as_Drax.jpg",
    name: "Drax",
    description:
      "Drax is a powerful warrior seeking revenge against Thanos for his family’s death."
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/is-loki-alive-1618935098.jpeg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
    name: "Loki",
    description:
      "Loki is the God of Mischief known for his intelligence, magic, and unpredictable nature."
  }
]

  return (
  <>
    <div className="card-container">
      {avengers.map((hero, index) => {
        return (
          <Card
            key={index}
            img={hero.img}
            name={hero.name}
            description={hero.description}
          />
        )
      })}
    </div>
  </>
)
}

export default App
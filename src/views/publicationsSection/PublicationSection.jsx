import { useState } from 'react'
import { publications } from '../../assets/data'
import { Publication, Title } from '../../components'
import './publicationSection.css'

const PublicationSection = () => {

  const [publication, setPublication] = useState(null)

  return (
    <div id='publicationSection'>

    <Title
      title = {{ emphasize: 'Recent Publications', remaining: '' }}
      color1 = 'var(--primary)'
      color2 = 'var(--dark)'
      style = {{ fontWeight: '500'}}
    />

     <div id="publications">
      {publications.map((publication, index) => {
          const { icon, title, description } = publication
          return (
            <Publication
              key = {index}
              icon = {icon}
              publicationTitle = {title}
              publicationDescription = {description}
            />
          )
        })
      }
     </div>

    </div>
  )
}

export default PublicationSection
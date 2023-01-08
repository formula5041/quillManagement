import { Card, Grid, Col } from "@nextui-org/react"
import Text from '../Text'
import Airplane from '../../../assets/sampleCover/airplane.jpg'
import Travel from '../../../assets/sampleCover/travel.jpg'

export default function App() {
  const list = [
    {
      title: "It's My Travel Life",
      img: Travel,
      date: '2023-01-07 22:20:22'
    },
    {
      title: "Fly To The Sky",
      img: Airplane,
      date: '2023-01-03 18:40:12'
    },
    {
      title: "It's My Travel Life",
      img: Travel,
      date: '2023-01-07 22:20:22'
    },
    {
      title: "Fly To The Sky",
      img: Airplane,
      date: '2023-01-03 18:40:12'
    },
    {
      title: "It's My Travel Life",
      img: Travel,
      date: '2023-01-07 22:20:22'
    },
    {
      title: "Fly To The Sky",
      img: Airplane,
      date: '2023-01-03 18:40:12'
    },{
      title: "It's My Travel Life",
      img: Travel,
      date: '2023-01-07 22:20:22'
    },
    {
      title: "Fly To The Sky",
      img: Airplane,
      date: '2023-01-03 18:40:12'
    },
  ]

  return (
    <>
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={ item.img }
                objectFit="cover"
                width="100%"
                height="auto"
                alt={item.title}
              />
            </Card.Body>
            <Col css={{padding: 10}}>
              <Text
                h4
                text={item.title}
                css={{textAlign: "start", color: '#444444', margin: 0}}
              />
              <Text 
                size={12} 
                text={item.date}
                css={{textAlign: "start", color: '#6C6C6D'}}
              />
            </Col>
          </Card>
        </Grid>
      ))}
    </>
  )
}

import { Card, Grid, Col } from "@nextui-org/react"
import Text from '../Text'

export default function App(props) {
  let lists = props.lists
  let filName = props.fil !== '' ? props.fil.toLowerCase(): ''
  let latestState = props.latestState
  let publishedState = props.publishedState
  let currentTime = new Date().getTime() //1673362691446
  let addDays = (date, days) => {
    var result = new Date(date)
    result.setDate(result.getDate() - days)
    return new Date(result).getTime()
  }
  let latest7Day = addDays(currentTime, 7)

  lists = lists.filter(el=>{
    return el.title.trim().toLowerCase().indexOf(filName) > -1
  })

  // latest
  if(latestState) {
    lists = lists.filter(item=>{
      let timestamp = new Date(item.date).getTime()
      return timestamp > latest7Day
    })
  }

  // random
  if(publishedState) {
    lists = lists.filter(el=>{
      return el.published === true
    })
  }

  let ArticleLists = lists.map((item, index) => (
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
  ))

  return (
    <>
      {ArticleLists}
    </>
  )
}

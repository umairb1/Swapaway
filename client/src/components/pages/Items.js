// Items page to display all items
import React, { Component } from 'react';
import {Grid, Col, Thumbnail, Row, Button} from "react-bootstrap"
class Items extends Component {
 constructor() {
   super();
   this.state = {
     items: []
   }
 }

 componentDidMount() {
   fetch('/items')
   .then(res => res.json())
   .then(items => this.setState({items}, () => console.log('Got items...',
   items)))
 }
 render() {
   return (

     <Grid>
       <Button href={"/items/myitems"} byStyle="default">My Items</Button>
       <Row>{this.state.items.map(item =>
         <Col xs={6} md={4}>
           <Thumbnail src={item.picture} alt="242x200">
             <center>
               <Button href={"/items/" + item._id} bsStyle="default">View Item</Button>
             </center>
           </Thumbnail>
         </Col>)}
       </Row>
     </Grid>
   );
 }
}


export default Items;

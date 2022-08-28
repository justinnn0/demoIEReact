import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect,useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




import './DemoAPI.css';


import FetchData from './FetchData';






function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }

  function TextInput (){
    return (
        <div className='textField'>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
        <FetchData></FetchData>

       </div>
        );
  }

 
  
   
  
 function BasicTable(props) {

  function createData(foodName, qty, unit, grams, calories) {
    return { foodName, qty, unit, grams, calories };
  }

  const rows = [
    createData(props.foodName, props.qty, props.unit, props.grams, props.calories)  ];

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Food name</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Unit&nbsp;(g)</TableCell>
              <TableCell align="right">Grams&nbsp;(g)</TableCell>
              <TableCell align="right">Calories&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={props.foodName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {props.foodName}
                </TableCell>
                <TableCell align="right">{props.qty}</TableCell>
                <TableCell align="right">{props.unit}</TableCell>
                <TableCell align="right">{props.grams}</TableCell>
                <TableCell align="right">{props.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

 function MediaCard(props) {
    return (
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="300"
          image={props.imageUrl}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.foodName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.foodName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }


 function DemoAPI() {

 const [imageUrl, setImageUrl] = useState("https://nix-tag-images.s3.amazonaws.com/271_highres.jpg");

 const [message, setMessage] = useState('Apple');

 const [foodName, setFoodName] = useState('');
 
 const [qty, setQty] = useState('');
 const [unit, setUnit] = useState('');
 const [grams, setGrams] = useState('');
 const [calories, setCalories] = useState('');

 // here

 const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleClick =() => {
    //setMessage("Banana");

    const data =  {
        query: message
    };

    fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'x-app-key':'94537b0f4a332fbb98cdb56f8e6b83fd',
          'x-app-id':'c893f968'
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        console.log(data.foods[0].photo.highres);
        setImageUrl(data.foods[0].photo.highres);
        setFoodName(data.foods[0].food_name);
        setQty(data.foods[0].serving_qty);
        setUnit(data.foods[0].serving_unit);
        setGrams(data.foods[0].serving_weight_grams);
        setCalories(data.foods[0].nf_calories);

      })
      .catch((error) => {
        console.error('Error:', error);
      });



      //setTimeout(setImageUrl("h2"),2000);


  };

  return (
    <div>
         <div className='input'>
               <input 
                  type="text"
                  id="message"
                  name="message"
                  onChange={handleChange}
                  value={message}
                  className ='textField'
                  />
                <Button onClick={handleClick} variant="contained" size="small"> Submit</Button>
              </div>
       
        <div className='flex-container'> 
              <MediaCard imageUrl = {imageUrl} foodName={foodName}></MediaCard> 
              <BasicTable foodName={foodName} qty={qty}  unit={unit}  grams={grams} calories={calories}></BasicTable>        
         </div>
    </div>
   
  );
}

export default DemoAPI;

//             <BasicTable name={foodName} qty={qty}  unit={unit}  grams={grams} calories={calories}></BasicTable>
//             <BasicTable foodName={"testing"} qty={1}  unit={1}  grams={1} calories={1}></BasicTable>
//                 <button onClick={handleClick}>Submit</button>


//css 

//1: get data from text field -> fetch
// 2: pass image
// 3: pass table data

// button submit -> fetch data

// data, state here, pass to table, card as props
// fetched data store here as state, then pass to imagecard & table

// <TextInput id="message" name="message" onChange={handleChange} value={message}></TextInput>

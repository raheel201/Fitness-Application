import React, {useEffect, useState} from 'react';
import { Box, Stack, Button, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
      const fetchExerciseData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        console.log(bodyPartsData);
        setBodyParts(['all', ...bodyPartsData]);
      }

      fetchExerciseData();
  }, [])
  const handleSearch = async () => {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=900', exerciseOptions);
      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center">
      <Typography fontWeight="700" sx={{fontSize: {lg: '44px', xs: '20px'}}} mb="50px" textAlign="center">
        Awesome Exercises you <br/> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input:{
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width:{
              lg: '800px',
              xs: '350px'
            },
            backgroundColor: "#fff",
            borderRadius: "40px"
          }}

          height="76px"
          value={search}
          onChange={(e)=> setSearch(e.target.value.toLowerCase())}
          placeholder="Search for Exercises"
          type="text"
        
        />
        <Button className='search-btn'
        sx={{
          bgcolor: '#ff312e',
          color: '#fff',
          textTransform: 'none',
          width: { lg: '175px', xs: '80px'},
          height: '56px',
          fontSize: {lg: '20px', xs: '14px'}

        }}
        onClick={handleSearch}
        position="absolute"
        right="0"
        >Search</Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart = {setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  )
}

export default SearchExercises
import React from 'react';
import { useForm } from "react-hook-form";
import { Button, TextField, Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: "100%",
    },
    '& .MuiButton-root':{
      margin: theme.spacing(2)
    },
    '& .MuiBox-root':{
      marginLeft: theme.spacing(2)
    }
  },
}));

export default function Form() {

  const classes = useStyles();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}  autoComplete="off">
      <div>
        <TextField  label="First Name" {...register("firstName", { required: true, maxLength: 20, minLength: 3 })} />
        
        {errors.firstName?.type === 'required' && <Box color="secondary.main" > First name is required  </Box>}

      
      </div>
      <div>


        <TextField label="Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <span>
          {errors.lastName?.type === 'pattern' && "Last name should be character only"}

        </span>
      </div>
      <div>
        <TextField label="Age" type="number" {...register("age", { min: 18, max: 99 })} />
        <span>

          {errors.age?.type === 'min' && "min 18"}
        </span>
        <span>

          {errors.age?.type === 'max' && "max 99"}
        </span>

      </div>
      <div>
        <Button type="submit" variant="contained" color="primary" >Submit</Button>

      </div>
    </form>
  )
}

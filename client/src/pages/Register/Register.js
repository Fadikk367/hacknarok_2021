import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { register } from 'state/auth/authActions';
import { CustomLink, RegisterWrapper } from './register.css';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        height: 60,
        margin: theme.spacing(3, 0, 2),
    },    
}));


const Register = () => {
    const classes = useStyles();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isNameValid, setIsNameValid] = useState(true);
    const [isSurnameValid, setIsSurnameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);


    const validateFirstName = () => {
        const regName = /[0-9]+/g;
        return ( !regName.test(firstName) && firstName.length > 2 )
    }

    const validateLastName = () => {
        const regName = /[0-9]+/g;
        return ( !regName.test(lastName) && lastName.length > 2 )
    }
  
    const validateEmail = () => {
        const regEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (regEmail.test(email) && email.length > 1);
    }


    const validatePassword = () => {
        return password.length > 4 && password.length < 30;
    }
    
    const isValid = () => {
        return validateFirstName()
            && validateLastName()
            && validateEmail()
            && validatePassword();
    }


    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        if(isValid()){
            dispatch(register({ login: email, password, firstName, lastName }))
        }
    }

    return (
        <RegisterWrapper component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonAddRoundedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form className={classes.form} onSubmit={handleSubmitRegister}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="First name"
                                onBlur={() => setIsNameValid(validateFirstName())}
                                helperText={isNameValid ? null : "Imię powinno być dłuższe niż 2 znaki i nie powinno zawierać cyfr"}
                                error={!isNameValid}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="family-name"
                                required
                                fullWidth
                                id="lastName"
                                label="Last name"
                                name="lastName"
                                onBlur={() => setIsSurnameValid(validateLastName())}
                                helperText={isSurnameValid ? null : "Nazwisko powinno być dłuższe niż 2 znaki i nie powinno zawierać cyfr"}
                                error={!isSurnameValid}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onBlur={() => setIsEmailValid(validateEmail())}
                                helperText={isEmailValid ? null : "Wpisz poprawny email"}
                                error={!isEmailValid}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Grid>
                        
                    
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onBlur={() => setIsPasswordValid(validatePassword())}
                                helperText={isPasswordValid ? null :"Hasło powinno zawierać co najmniej 4 znaki"}
                                error={!isPasswordValid}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Grid>
                    </Grid> 
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                    <Grid container>
                        <Grid item>
                            <CustomLink to="/login" >
                                Already have an account? Login!
                            </CustomLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            { auth.isLoggedIn === true ? <Redirect to="/" /> : null }

        </RegisterWrapper>
    );
}

export default Register;
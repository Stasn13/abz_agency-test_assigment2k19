import React from 'react';
import "../scss/signup.scss"
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import api from '../utills/api';
import FormHelperText from '@material-ui/core/FormHelperText';
import MaskedInput from 'react-text-mask';
import {makeStyles} from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
//import api from '../utills/api'; 

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
    focused: {
        border: "3px solid khaki"
    }
  });

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            loader: true,
            positions: [],
            name: null,
            email: null,
            phone: null, 
            selectedPosition: '',
            photo: null,
            disableBtn: false,
            isValid: {
                name: true,
                email: true,
                phone: true,
                selectedPosition: true,
                photo: true
            }
        }
        this.fileInput = React.createRef();
    }

    TextMaskCustom = () => {

        return (
            <MaskedInput
                mask={['+', '3', '8', ' ', '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
                onChange={(e) => this.setState({ phone: e.target.value.replace(/[-  _)(]/g, '') })} 
                showMask
                placeholderChar={'_'}
                keepCharPositions={false}
                guide={true}
            />
        );
    }

    PhotoUploadInput = () => {
        return(
            <div className="upload-image">
                <div className="label-title">Upload your photo</div>
                <input type="file" name="file" id="file" className="inputfile"
                    ref={this.fileInput}
                    onChange={() => this.setState({ photo: this.fileInput.current.files[0] })} />
                <label htmlFor="file">Upload</label>
            </div>
        )
    }

    componentDidMount(){
        api.get('/positions')
            .then(response => {
                this.setState({
                    loader: false,
                    positions: response.data.positions
                })
            })
    }

    validateForm = () => {
        
        let validName = this.state.name.length > 1 && this.state.name.length < 61;
        let validEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(this.state.email) 
            && this.state.email.length > 1 
            && this.state.email.length < 101;
        let validPhone = /^[\+]{0,1}380([0-9]{9})$/.test(this.state.phone);
        let validPosition = this.state.selectedPosition >= 1; 
        let validPhoto = false;

        console.log(this.state.photo);
        // PHOTO VALIDATION 
        let file = this.state.photo;
        let img = new Image();
        let _URL = window.URL || window.webkitURL;
        img.src = _URL.createObjectURL(file);

        img.onload = () => {
            console.log(file.size, file.type, img.width + "X" + img.height)
            if (file.size < 5242880
                && (file.type === "image/jpg" || file.type === "image/jpeg")
                && (img.width > 70 && img.height > 70)) {
                validPhoto = true
            }
            // Here result
            this.setState({
                isValid: {
                    name: validName,
                    email: validEmail,
                    phone: validPhone,
                    selectedPosition: validPosition,
                    photo: validPhoto
                }})
            console.log(this.state.isValid)
        }
    }
    
    render() {
        let { positions, name, email, phone, selectedPosition, photo, isValid } = this.state;
        let disableBtn = (name === null || email === null || phone === null || selectedPosition === null || photo === null
                || name === "" || email === "" || phone === "+38" || phone.length !== 13);
        
        const classes = useStyles();
        
        return (
            <section id="sign-up">
                <div className="container">
                    <h2>Register to get a work</h2>
                    <h5>Attention! After successful registration and alert, update the list of users in the block from the top</h5>
                    <div className="form-block">
                        <div className="first-line">
                            <TextField
                                label="Name"
                                variant="outlined"
                                placeholder="Your name"
                                fullWidth
                                error={!isValid.name}
                                helperText={!isValid.name ? "error" : ""}
                                onChange={(e) => this.setState({ name: e.target.value })}
                                //classes={{
                                //    root: classes.root, 
                                //}}
                            />
                            <TextField
                                className="email-field"
                                label="Email"
                                variant="outlined"
                                placeholder="Your email"
                                fullWidth
                                error={!isValid.email}
                                helperText={!isValid.email ? "error" : ""}
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                            <FormControl fullWidth label="Phone">
                                <InputLabel htmlFor="phone-input-mui" shrink={true}>
                                    Phone
                                </InputLabel>
                                <OutlinedInput
                                    id="phone-input-mui"
                                    fullWidth
                                    inputComponent={this.TextMaskCustom}
                                    error={!isValid.phone}
                                />
                                {!isValid.phone &&
                                    <FormHelperText error={true}>error</FormHelperText>
                                }
                            </FormControl> 
                        </div>
                        <div className="second-line">
                            <FormControl variant="outlined" fullWidth>
                                <Select
                                    value={selectedPosition}
                                    onChange={(e) => this.setState({ selectedPosition: e.target.value })}
                                    input={<OutlinedInput />} 
                                    displayEmpty 
                                    MenuProps={{variant: 'menu',
                                        MenuListProps: {disablePadding: true}}}
                                >
                                    <MenuItem value="" disabled>Select your position</MenuItem>
                                    {positions.map((item, index) => {
                                        return(<MenuItem key={index} value={item.id}>{item.name}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl> 
                            {/* <TextField
                                select
                                fullWidth
                                value="slect yobaniy position"
                                defaultValue="Select your position"
                                placeholder="lolder" 
                                onChange={(e) => this.setState({ selectedPosition: e.target.value })}
                                variant="outlined"
                            >
                                {positions.map((item, index) => {
                                    return (<MenuItem key={index} value={item.id}>{item.name}</MenuItem>)
                                })}
                            </TextField> */}
                            {/* <FormControl variant="outlined" fullWidth>
                                <Select
                                    variant="outlined"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-simple',
                                        variant: 'outlined'
                                    }}
                                    value={selectedPosition}
                                    onChange={(e) => this.setState({ selectedPosition: e.target.value })}
                                >
                                    <MenuItem value="" disabled>Select your position</MenuItem>
                                    {positions.map((item, index) => {
                                        return (<MenuItem key={index} value={item.id}>{item.name}</MenuItem>)
                                    })}
                                </Select>
                            </FormControl> */}

                            <FormControl fullWidth error={true}>
                                <OutlinedInput
                                    label="Phone"
                                    fullWidth
                                    inputComponent={this.PhotoUploadInput}
                                    error={!isValid.phone}
                                />
                                <FormHelperText error={!isValid.photo}>File format jpg  up to 5 MB, the minimum size of 70x70px</FormHelperText>
                            </FormControl> 
                        </div>
                    </div>

                    <button className={disableBtn ? "cta btn-disabled" : "cta btn-primary"}
                        disabled={disableBtn} 
                        onClick={this.validateForm}
                    >
                        Sign Up
                    </button>
                </div>
            </section>
        );
    }
}

export default SignUp;
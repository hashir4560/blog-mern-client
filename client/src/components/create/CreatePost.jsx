import { Box,styled ,FormControl,InputBase, Button, TextareaAutosize} from "@mui/material"
import {AddCircle as Add} from '@mui/icons-material'




const Container=styled(Box)`
    margin: 50px 100px;
    `


const Image=styled('img')({
    width:'100%',
    height:'50vh',
    objectFit:'cover',

})

const StyledFormControl= styled(FormControl)`
    margin-top:10px;
    display:flex;
    flex-direction:row;
`
const InputTextField=styled(InputBase)`
    flex:1;
    margin: 0 30 px;
    font-size:25px;
`
const Textarea=styled(TextareaAutosize)`
    width:100%;
    margin-top:50px;
    font-size:18px;
    border:none;
    & :focus-visible{
        outline:none
    }
`


const CreatePost=()=>{
    const url ='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    return(
        <Container>
            <Image src={url} alt='banner'/>
            
            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action"/>
                </label>
                <input type="file"
                id="fileInput"   
                 style={{display:'none'}}
            

                />

                <InputTextField placeholder='Title' />
                <Button variant="contained">Publish</Button>

            </StyledFormControl>
            <Textarea
              minRows={5}
              placeholder="Tell Your Story "
            

            />



        </Container>
    )
}
export default CreatePost
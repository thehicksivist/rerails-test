import React from 'react'

const NewPost = (props) => {
    let formFields = {}
   
    return(
        <form> 
            <input ref={input => formFields.title = input} placeholder='Enter the title'/>
            <input ref={input => formFields.picture = input} placeholder='Add the image url'/>
            <input ref={input => formFields.description = input} placeholder='Enter a description' />
            <button>Submit</button>
        </form>
    )
}

export default NewPost
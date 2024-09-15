import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"


const NewPost = ({ handleSubmit, setPostTitle, setPostBody }) => {
    const ref=useRef()
    
    useEffect(() => {
        ref.current.focus();
    }, [])
    
    return (
        <div className='NewPost'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title*</label>
                <input type='text'
                    required
                    id='postTitle'
                    ref={ref}
                    onChange={(e) => setPostTitle(e.target.value)}
                /> <br></br>
                <label htmlFor="postBody">Body*</label>
                <textarea
                    required
                    id='postBody'
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <input type="submit"
                    value="Add new post"
                />
            </form>

        </div>
    )
}

export default NewPost


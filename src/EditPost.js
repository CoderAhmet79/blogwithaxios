import React from 'react'
import { useParams } from "react-router-dom";
import NoPost from './NoPost';

const EditPost = ({ posts, handleEdit, setPostTitle, setPostBody }) => {
    const { id } = useParams()

    const post = posts.find(post => (post.id).toString() === id)

    if (post === undefined || post === undefined) {
        return (
            < NoPost />
        )
    }

    else {
        return (
            <div className='NewPost'>
                <form onSubmit={handleEdit}>
                    <label htmlFor="postTitle">Title</label>
                    <input type='text'
                        required
                        id="sdfsa"
                        value={post.title}
                        onChange={(e) => setPostTitle(e.target.value)}
                    /> <br></br>
                    <label htmlFor="postBody">Body</label>
                    <textarea
                        required
                        id='postBody'
                        defaultValue={post.body}
                        rows={15}
                        onChange={(e) => setPostBody(e.target.value)}
                    />
                    <input type="submit"
                        value="Submit post"
                    />
                </form>
            </div >
        )
    }
}

export default EditPost

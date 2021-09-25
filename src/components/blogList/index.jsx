import React from 'react'
import { Li } from '../atoms/list';

const BlogList = () => {
    return (
        <>
        <div className="relative justify-center flex">
       <ul className="flex">
           <Li active>ALL BLOGS</Li>
           <Li nonActive>FASHION</Li>
           <Li nonActive>BEAUTY</Li>
           <Li nonActive>HEALTH</Li>
       </ul>
       <span className="border-bottom absolute"></span>
       </div>
       </>
    )
}

export default BlogList;

import React from 'react'

const Gallery = () => {
const img = [
"https://plus.unsplash.com/premium_photo-1664302152991-d013ff125f3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91ciUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1618245318763-a15156d6b23c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1649785182328-9fa444926974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://plus.unsplash.com/premium_photo-1663045238448-fbabf2e89f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRvdXIlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
 ]
 const imgContent = img.map(item=> <div className="col-sm-3">                
 <img 
 className='img-fluid rounded-start rounded-5 border border-1 border-warning' 
 src={item} alt="" />        
      
</div>)


    return <>
        <div className="container">
            <div className="row">
            {imgContent}
            </div>
        </div>
    </>
}

export default Gallery
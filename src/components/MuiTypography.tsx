import React from 'react'
import { Typography } from '@mui/material'
export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 heading</Typography>
        <Typography variant='h2'>h2 heading</Typography>
        <Typography variant='h3'>h3 heading</Typography>
        <Typography variant='h4' component="h1" gutterBottom>h4 heading</Typography>
        <Typography variant='h5'>h5 heading</Typography>
        <Typography variant='h6'>h6 heading</Typography>
        <Typography variant="subtitle1">subtitle 1</Typography>
        <Typography variant="subtitle2">subtitle 2</Typography>
        <Typography variant="body1">body 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem rerum totam commodi unde dolore aperiam est quaerat ipsum omnis perferendis itaque dolorum temporibus odio culpa expedita maxime deserunt fugit, quod vel tenetur debitis hic. Reprehenderit veritatis laboriosam voluptate sunt mollitia harum, similique obcaecati cumque perspiciatis pariatur ducimus? Rerum, ad!</Typography>
        <Typography variant="body2">body 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem rerum totam commodi unde dolore aperiam est quaerat ipsum omnis perferendis itaque dolorum temporibus odio culpa expedita maxime deserunt fugit, quod vel tenetur debitis hic. Reprehenderit veritatis laboriosam voluptate sunt mollitia harum, similique obcaecati cumque perspiciatis pariatur ducimus? Rerum, ad!</Typography>

    </div>
  )
}

//body1 is default value of the variant prop
//change the semantic element using the component prop . For e.g. h4 ki styling hogi lekin inspect karne pe google mein h1 tag show karega ( jadoo )
//gutterBottom prop bottom margin add karne ke liye hota hai , jitna bada element utna jyada bottom margin milega 


// Conclusion :->
//  Typography element of material UI has 3 props : 
// 1) variant ( styling kaisi/kiski hogi )  ( variant mein 10 variants padhe i.e. h1,h2,h3,h4,h5,h6,subtitle1,subtitle2,body1,body2 )
// 2) component ( Google mein inspect karke kaisa dikhega )   
// 3) gutterBottom ( bottom margin add karne ke liye , jitna bada variant utna jyada bottom margin ) (by default ye false set hota hai , aur iski koi value nahi hai )
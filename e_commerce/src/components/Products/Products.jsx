import React from 'react';
import {Grid} from '@material-ui/core/Grid';

import Product from './Product/Product';


/**
 *Creating a product 
 */
const products = [
{id: 1, name: 'Shoes', description: 'Running shoes',image : 'https://www.google.com/search?q=nike+shoes+image&rlz=1C1CHBF_enUS812US812&sxsrf=ALeKk02FQ0_Vp5I6INA3FtqLwmL_Hag0pg:1622596821005&tbm=isch&source=iu&ictx=1&fir=1eAXsIOMhITEWM%252C2x_Cddw_RKeA8M%252C_&vet=1&usg=AI4_-kQwHn1nCPYlBlJA945299-a8_YwXw&sa=X&ved=2ahUKEwjxmISZ5PfwAhWEcc0KHaA-DyEQ9QF6BAgSEAE#imgrc=1eAXsIOMhITEWM'},
{id: 2, name: 'Macbook', description: 'Apple macbook',image: 'https://www.google.com/search?q=apple+macbook+images&rlz=1C1CHBF_enUS812US812&sxsrf=ALeKk01t73cQX0YQHjsaYlqFFXQU7NLrCQ:1622596724114&tbm=isch&source=iu&ictx=1&fir=pmZKnPilNfQgqM%252CD0ytuTutEZ-JxM%252C_&vet=1&usg=AI4_-kRT_uSB9ZHXUHxqASxg3tH5zxYg2A&sa=X&ved=2ahUKEwiiq-rq4_fwAhVIVs0KHUqQDWoQ9QF6BAgPEAE#imgrc=pmZKnPilNfQgqM'},
];

const Products = () => {
  return(
<main>
        <Grid container justify = "center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
               
            
        
        </Grid>
    </main>
  )
  
    

}

export default Products;
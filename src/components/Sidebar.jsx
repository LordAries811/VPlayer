import { Stack } from '@mui/material'
import { categories } from '../utils/constants'


const Sidebar = ({selectedCategory,setselectedCategory}) => (
    <Stack
        direction="row"
        sx={{
            overflowY:"auto",
            height:{sx:'auto',sm:'95%'},
            flexDirection:{sm:"column"}
        }}>
        
        {
            categories.map((category)=>(
                <button
                    className='category-btn'
                    onClick={()=>setselectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && '#777777',
                        color:'white'
                    }}
                    key={category.name}
                >
                    <span
                    style={{
                        color: category.name===selectedCategory.name ? 'white':'#777777',
                        marginRight:"15px"
                    }}>{category.icon}</span>

                    <span
                    style={{
                        opacity: category.name===selectedCategory.name?
                        "1":"0.8",

                        color: category.name===selectedCategory.name ? '#777777':'white',
                    }}>{category.name}</span>
                </button>
            ))
        }
    </Stack>
)
  
export default Sidebar
import { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState("trending")

    return (
        <>
            <header>
                <h2>GifExpertApp</h2>
            </header>

            <section>
                <AddCategory setCategories={setCategories} />
            </section>

            <GifGrid
                key={categories}
                category={categories}
            />
        </>
    )
}

export default GifExpertApp
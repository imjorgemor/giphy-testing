import { getGifs } from "../../helpers/getGifs"


describe ('pruebas con getGifs Fetch', () => {

    test('debe traer 10 argumentos', async ()=>{
        const gifs = await getGifs('simpsons')
        expect(gifs.length).toBe(10)
    })

    test('si no le paso argumento', async ()=>{
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })

})
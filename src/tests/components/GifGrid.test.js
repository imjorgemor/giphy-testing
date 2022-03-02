import { shallow } from "enzyme";
import "@testing-library/jest-dom"
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("test sobre <GifGrid />", () => {

    const category = "simpsons"


    test("test de renderizado, snapshot", () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const component = shallow(<GifGrid category={category} />)
        expect(component).toMatchSnapshot();
    })

    test("debe mostrar items cuando se cargan imagenes con el useFetch", () => {

        const gifs = [{
            id: "test",
            url: "https://localhost/test.jpg",
            title: "test"
        },
        {
            id: "test1",
            url: "https://localhost/test.jpg",
            title: "test"
        }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const component = shallow(<GifGrid category={category} />)
        //comprobamos si el loading existe
        //expect(component).toMatchSnapshot();
        expect(component.find('p').exists()).toBe(false)
        expect(component.find('GifGridItem').length).toBe(gifs.length)

    })

})
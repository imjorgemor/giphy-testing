import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"


describe("prueba en gifgrid Item", () => {

    const title = "un titulo";
    const url = "https://localhost.3333"
    const component = shallow(<GifGridItem title={title} url={url} />)

    test("debe mostar el componente, test de render", () => {
        expect(component).toMatchSnapshot();
    })

    test("debe de tener un párrafo con el title", () => {
        const p = component.find('p')
        expect(p.text().trim()).toBe(title)
    })

    test('debe de tener la imagen igual al url y alt', () => {

        const img = component.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop("alt")).toBe(title);
    })

    test("debe tener class card", ()=> {
        // analizar si tiene una clase concreta
        const div = component.find('div');
        const className = div.prop('className');
        expect(className.includes("card")).toBe(true);
    })
})
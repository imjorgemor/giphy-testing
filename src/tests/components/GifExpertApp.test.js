import GifExpertApp from "../../components/GifExpertApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom"

describe("test app", ()=>{

    const component = shallow(<GifExpertApp />)

    test("test de renderizado", ()=>{
        expect(component).toMatchSnapshot();
    })
})
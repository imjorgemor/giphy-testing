import { shallow } from "enzyme"
import "@testing-library/jest-dom"
import AddCategory from "../../components/AddCategory"


describe("test en component <AddCategory />", () => {
    const setCategories = jest.fn();
    let component = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(()=>{
        jest.clearAllMocks();
        component = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('debe de mostrarse correctamente', () => {
        //test de renderizado
        expect(component).toMatchSnapshot();
    })

    test('test en el input del formulario', () => {
        const value = 'simpsons'
        component.find('input').simulate('change', {target: {value: value }});
    })

    test("no debe de postear a info onSbumit",()=> {
        const component = shallow(<AddCategory setCategories={setCategories} />)
        component.find('form').simulate('submit', {preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled();
    })

    test("debe de llamar el setCategories y limpiar la caja de texto", ()=> {
        const value = "gifs"
        //1. simular el inputchange
        component.find('input').simulate('change', {target: {value}})
        //2. simular el submit
        component.find('form').simulate('submit', {preventDefault(){}})
        //3. set categories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        //4. el valor del input debe estar ""
        expect(component.find('input').prop('value')).toBe("")
    })
})
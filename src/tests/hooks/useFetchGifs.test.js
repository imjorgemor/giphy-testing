import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks"

describe('Pruebas en el custom hook', () => {

    test('debe retornar el estado incial', async() => {

        const { result, waitForNextUpdate  } = renderHook(() => useFetchGifs('kanye'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true); //es como el toBe (true)  
    })

    test('debe retornar un array de images y el loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('kanye'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);  
    })

})
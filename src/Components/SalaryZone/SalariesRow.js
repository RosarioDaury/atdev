import { useRef } from 'react';
function SalariesRow(props) {
    const ref = useRef();
    const first = ref.current?.children[1]?.children[0]?.value;
    const second = ref.current?.children[2]?.children[0]?.value;

    const complete = () => {
        const originalSalary = ref.current.children[1].children[0].value;
        const originalBonus = ref.current.children[2].children[0].value;
        let sibling = ref.current.nextSibling;

        while (sibling) {
            sibling.children[1].children[0].value = originalSalary;
            sibling.children[2].children[0].value = originalBonus;
            sibling = sibling.nextSibling;
        }
    }

    return (
        <tr ref={ref}>
            <td>{props.index + 1}</td>
            <td>
                <input type="number" min={1} placeholder={0} name="salary" defaultValue={0} />
            </td>
            <td>
                <input type="number" min={1} placeholder={0} name="bonus" defaultValue={0} />
            </td>
            <td>
                {parseInt(first ? first : 0) + parseInt(second ? second : 0)}
            </td>
            <td>
                <button onClick={complete}>Completar</button>
            </td>
        </tr>
    )
}

export default SalariesRow
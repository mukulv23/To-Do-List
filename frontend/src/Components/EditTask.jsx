import { AddTask } from './AddTask'
import { useParams } from 'react-router-dom';

export const EditTask = () => {
    const edit = true;
    const {id} = useParams();
    return (
        <>
            <AddTask edit={edit} id = {id} />
        </>
    )
}

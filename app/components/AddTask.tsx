import {AiOutlinePlus} from 'react-icons/ai';
export default function AddTask() {
    return (
        <div>
            <button className="btn btn-primary w-full">
                Add New Task 
                <AiOutlinePlus size={20} className="ml-2"/>
            </button>
        </div>
    );
}
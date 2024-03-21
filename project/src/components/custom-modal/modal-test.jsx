



export default function ModalTest(){

    const [showModalPopup, setShowModalPopup] = useState(false);

        function handleToggleModalPopup(){
            setShowModalPopup(!showModalPopup);
        }

    return (
        <div>
            <button onClick={handleToggleModalPopup}> Open Modal Popup</button>
            {
                showModalPopup && <Modal body={<div> Customized body </div>} />
            }
        </div>
    )
}
import BlockInfoLayout from "@/Pages/Repairs/BlockInfo/Components/BlockInfoLayout.jsx";

const BlockInfoCalled = ({repair}) => {

    if(!repair.is_called){
        return null;
    }

    return (
        <BlockInfoLayout title='Called' date={repair.date_called}>
            <div>BlockInfoCalled</div>
        </BlockInfoLayout>
    );
}

export default BlockInfoCalled;

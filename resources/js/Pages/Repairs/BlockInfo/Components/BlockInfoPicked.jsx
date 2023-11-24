import BlockInfoLayout from "@/Pages/Repairs/BlockInfo/Components/BlockInfoLayout.jsx";

const BlockInfoPicked = ({repair}) => {
    if (!repair.is_picked_up) return <></>;
    return (
        <BlockInfoLayout title='Picked' date={repair.date_picked_up}>
            <div>BlockInfoPicked</div>
        </BlockInfoLayout>
    );
}

export default BlockInfoPicked;

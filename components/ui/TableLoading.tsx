import { Skeleton } from "antd";

const TableLoading = ({ columnNumber = 4 }: {
    columnNumber?: number
}) => {

    function createNumberArray(value: number) {
        const result = [];
        for (let i = 1; i <= value; i++) {
            result.push(i);
        }
        return result;
    }

    const columnItems = createNumberArray(columnNumber);
    const rowItems = createNumberArray(columnNumber + 3);

    return (
        <div className=''>
            <div className='flex items-center px-4 py-3 gap-12 justify-between w-full'>
                {columnItems.map(item => (
                    <Skeleton.Button key={item} size="default" block={true} active={true} />
                ))}
            </div>
            <hr />
            {
                rowItems.map(row => (
                    <div key={row + "a"} className='flex items-center px-4 py-3 gap-12 justify-between w-full'>
                        {columnItems.map(item => (
                            <Skeleton.Button key={item} size="default" block={true} active={true} />
                        ))}
                    </div>
                ))
            }
        </div>
    );
};

export default TableLoading;
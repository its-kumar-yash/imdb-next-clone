import Image from 'next/image';

const Loading = () => {
    return (
        <div>
            <Image src="/spinner.svg" alt="Loading" width={50} height={50} />
        </div>
    );
}

export default Loading;

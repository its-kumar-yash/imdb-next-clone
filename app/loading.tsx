import Image from 'next/image';

const Loading = () => {
    return (
        <div>
            <Image src="/loading.gif" alt="Loading" width={50} height={50} />
        </div>
    );
}

export default Loading;

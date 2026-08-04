import boucingLoader from '/bouncing-circles.svg';

export default function Loader() {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <img src={boucingLoader} className='w-20' />
        </div>
    );
}

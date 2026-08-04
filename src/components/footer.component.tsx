import type { FC } from 'react';

interface FooterProps {
    classes?: string;
}

const FooterComponent: FC<FooterProps> = ({ classes }) => {
    const year = new Date().getFullYear().toString();

    return (
        <div id='footer-c' className={`${classes?.toString()} w-full bg-mist-950 row-span-1 flex items-center justify-center`}>
            <a href='https://github.com/tutosrive/rrwtfai/LICENSE' className='font-mono text-sm'>
                Under the <img src='https://www.gnu.org.cach3.com/graphics/agplv3-with-text-162x68.png' alt='AGPL Open Source License - Logo' className='w-9 inline' /> License - {year} - <a href='https://github.com/tutosrive'>@tutosrive</a>
            </a>
        </div>
    );
};

export default FooterComponent;

import type { FC } from 'react';

interface FooterProps {
    classes?: string;
}

const FooterComponent: FC<FooterProps> = ({ classes }) => {
    return (
        <div id='footer-c' className={`${classes?.toString()} w-full bg-mist-950 row-span-1 flex items-center justify-center`}>
            Footer
        </div>
    );
};

export default FooterComponent;

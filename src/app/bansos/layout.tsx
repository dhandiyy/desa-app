import React from 'react';

const BansosLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <p className='bg-slate-400 text-white'>Layout</p>
            {children}
        </div>
    );
};

export default BansosLayout;
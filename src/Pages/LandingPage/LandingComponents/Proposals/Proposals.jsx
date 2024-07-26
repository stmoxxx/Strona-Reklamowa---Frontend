import React from 'react';
import myProposals from './Proposals.module.css'
import Cards from "./Cards";

const Proposals = () => {
    return (
        <div className={myProposals.container}>
            <div className={myProposals.heading}>
                Co Oferujemy
            </div>
            <div className={myProposals.proposals_container}>
                <Cards/>
            </div>
        </div>
    );
};

export default Proposals;
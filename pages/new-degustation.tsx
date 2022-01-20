import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const AromaCircle = dynamic(() => import('../components/degustation/diagram/AromaCircle'), { ssr: false });

const NewDegustation: NextPage = () => (
    <AromaCircle width={900}/>
);

export default NewDegustation;

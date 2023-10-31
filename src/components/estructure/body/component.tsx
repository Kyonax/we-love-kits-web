import FirstSection from "../../../sections/first_section/section";

interface BodyProps { innerPosition: number, sequenceAnimation: any }

const Body: React.FC<BodyProps> = ({ innerPosition, sequenceAnimation }) => {
    return(<>
        <FirstSection innerPosition={innerPosition} sequenceAnimation={sequenceAnimation} />
    </>)
}

export default Body

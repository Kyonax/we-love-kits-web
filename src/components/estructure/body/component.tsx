import FirstSection from "../../../sections/first_section/section";
import SecondSection from "../../../sections/second_section/index";
import ThirdSection from "../../../sections/third_section/index";

interface BodyProps { innerPosition: number, sequenceAnimation: any }

const Body: React.FC<BodyProps> = ({ innerPosition, sequenceAnimation }) => {
    return(<div className="bg-white space-y-0">
        <FirstSection innerPosition={innerPosition} sequenceAnimation={sequenceAnimation} />
        <SecondSection />
        <ThirdSection />
    </div>)
}

export default Body

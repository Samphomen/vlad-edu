
import Image from "next/image"
import "@/styles/testimonial.css"
import volo from '@/public/assets/images/volo.png'
import person from '@/public/assets/images/person.png'

const Testimonial = () => {
  return (
    <div className="test">
        <h1 className="test-header">What Our Students Say</h1>
        <div className="test-top">
            <div className="tt-card">
                <div className="tt-card-top">
                    <div className="card-image"><Image src={person} /></div>
                    <h2>Axel Whitney</h2>
                </div>
                <p className="tt-card-content">
                is a comprehensive program designed to support students' academic, social, and emotional development. It involves a collaborative effort between counselors, students, parents, and educators to create a supportive and nurturing learning environment.
                </p>
            </div>
            <div className="tt-card">
                <div className="tt-card-top">
                    <div className="card-image"><Image src={person} /></div>
                    <h2>Axel Whitney</h2>
                </div>
                <p className="tt-card-content">
                is a comprehensive program designed to support students' academic, social, and emotional development. It involves a collaborative effort between counselors, students, parents, and educators to create a supportive and nurturing learning environment.
                </p>
            </div>
            <div className="tt-card">
                <div className="tt-card-top">
                    <div className="card-image"><Image src={person} /></div>
                    <h2>Axel Whitney</h2>
                </div>
                <p className="tt-card-content">
                is a comprehensive program designed to support students' academic, social, and emotional development. It involves a collaborative effort between counselors, students, parents, and educators to create a supportive and nurturing learning environment.
                </p>
            </div>
        </div>
        <div className="test-bottom">
            <div className="card-image-2"><Image src={volo} /></div>
            <h4 className="tb-header"><span>Founder:</span> Volodymyr Naidiuk</h4>
            <p className="tb-bottom">“Dear Families and Students, My name is Volodymyr Naidiuk, MBA, the Founder and Managing Director of VLAD Education. I have been a leading expert in the education consulting industry since 2010. With a deep passion for empowering students, my team and I have successfully guided over 1,000 students to prestigious schools and universities worldwide. I have personal experience studying in the UK and earned an MBA with distinction from the University of Bolton. My thesis focused on education, skills, and the future of work—areas that reflect my deep passion for guiding students toward successful futures. I strongly believe that VLAD Education will become your trusted partner in the UK and beyond, offering personal and professional approach that helps each student unlock their full potential.”</p>
        </div>
    </div>
  )
}

export default Testimonial
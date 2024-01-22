import HeadTitle from "../components/HeadTitle";
import MainTitle from "../components/MainTitle";
import Title from "../components/Title";
import VerticalLine from "../components/VerticalLine";

const Resume = () => {
  return (
    <div className="resume">
      <MainTitle miniStyle="aboutTitle" minititle="Resume" />
      <HeadTitle headStyle="headOne" headtitle="A summary of My Resume" />

      <div className="project-all">

      <div >
        <VerticalLine/>
         <div >
         <HeadTitle headStyle="educationStyle" headtitle="My Education" />
          
          <div className="resume-det">
              <HeadTitle headStyle="projecttitle" headtitle="Master in Computer Engineering
" />
              <Title
                titleStyle="education"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
    
    "
              />
            </div>
            <div className="resume-det">
              <HeadTitle headStyle="projecttitle" headtitle="Bachelor in Computer Engineering

" />
              <Title
                titleStyle="education"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
    
    "
              />
            </div>
            <div className="resume-det">
              <HeadTitle headStyle="projecttitle" headtitle=" International Science

" />
              <Title
                titleStyle="education"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
    
    "
              />
            </div>
    
           
         </div>

      </div>

      <div >
        <VerticalLine/>
         <div >
         <HeadTitle headStyle="educationStyle" headtitle="My Experience" />
          
          <div className="resume-det">
              <HeadTitle headStyle="projecttitle" headtitle="Sr. Font End Developer

" />
              <Title
                titleStyle="education"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
    
    "
              />
            </div>
            <div className="resume-det">
              <HeadTitle headStyle="projecttitle" headtitle="Jr. Font End Developer
" />
              <Title
                titleStyle="education"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
    
    "
              />
            </div>
            <div className="resume-det">
              <HeadTitle headStyle="projecttitle" headtitle="HTML  Developer
" />
              <Title
                titleStyle="education"
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
    
    "
              />
            </div>
    
           
         </div>

      </div>


      

      </div>
    </div>
  );
};

export default Resume;

import HeadTitle from "../components/HeadTitle"
import MainTitle from "../components/MainTitle"
import Title from "../components/Title"


const Project = () => {
  return (
    <div className="project">
         <MainTitle miniStyle="aboutTitle" minititle=" What I  do" />
         <HeadTitle headStyle="headOne" headtitle="How I can help your next project
" />

           <div className="project-all">
        
           <div className="project-det" >
                <HeadTitle headStyle="projecttitle" headtitle="Graphic Design"/>
                <Title titleStyle="projectDescription"  title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.

" />
            </div>
            <div className="project-det" >
                <HeadTitle headStyle="projecttitle" headtitle="Web Design
"/>
                <Title titleStyle="projectDescription"  title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.

" />
            </div>
            <div className="project-det" >
                <HeadTitle headStyle="projecttitle" headtitle="UI/UX Design"/>
                <Title titleStyle="projectDescription"  title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.

" />
            </div>
            <div className="project-det" >
                <HeadTitle headStyle="projecttitle" headtitle="App Design"/>
                <Title titleStyle="projectDescription"  title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.

" />
            </div>
            <div className="project-det" >
                <HeadTitle headStyle="projecttitle" headtitle="SEO Marketng"/>
                <Title titleStyle="projectDescription"  title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.

" />
            </div>
            <div className="project-det" >
                <HeadTitle headStyle="projecttitle" headtitle="Business Analysis
"/>
                <Title titleStyle="projectDescription"  title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.

" />
            </div>
           </div>

    </div>
  )
}

export default Project
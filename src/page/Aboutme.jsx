import HeadTitle from "../components/HeadTitle"
import MainTitle from "../components/MainTitle"
import Title from "../components/Title"


const Aboutme = () => {
  return (
    <div className="about">
        <MainTitle miniStyle="aboutTitle" minititle="About Me" />
        <HeadTitle headStyle="headOne" headtitle="Know Me More" />
        <div className="flex-about">

             <div>
             <HeadTitle headStyle="headTwo" headtitle="Hi, I'm Callum Smith
" />
        <Title titleStyle='aboutStyle' title="I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.

" />
             </div>

             <div>
                <p className="para">22</p>
                <Title titleStyle='paraStyle' title="Years of Experiance
" />
             </div>

        </div>
  

    </div>
  )
}

export default Aboutme
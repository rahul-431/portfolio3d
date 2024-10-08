import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"
import { Link } from "react-router-dom"
const ProjectCard=({index,name,description,tags,image,source_code_link})=>{

  return (
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <Tilt options={{
        max:45,
        scale:1,
        speed:450
      }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={()=>window.open(source_code_link,"_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag,index)=>(
            <p className={`text-[14px] ${tag.color}`} key={index}>{
              tag.name
            }</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Projects</p>
        <h1 className={`${styles.sectionHeadText}`}>Projects.</h1>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("","",0.1,1)} className="mt-3 max-w-3xl leading-[30px] text-secondary text-[17px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam in est, error distinctio autem delectus tenetur praesentium molestiae expedita hic dolore, ut at officia vel repellendus nostrum quas maiores? Vero libero a ducimus? Eos culpa quis atque. Nihil accusantium delectus molestias enim libero minus molestiae ex accusamus possimus odit!
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {
          projects.map((project,index)=>(
            <ProjectCard key={`project-${index}`}
            index={index}
            {...project}
            />
          ))
        }
      </div>
      <div className="flex justify-start items-center mt-10">
        <Link to="https://rahulmijar.vercel.app/#/projects" target="_blank" className="bg-tertiary py-2 px-4 text-center rounded-md text-white font-medium">View all projects</Link>
      </div>
    </>
  )
}

export default SectionWrapper(Works,"project");
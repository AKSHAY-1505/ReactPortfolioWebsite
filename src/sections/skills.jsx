import React from 'react'
import ThinAndThickTitle from '../components/thin_and_thick_title'
import SkillCard from '../components/skill_card'
import GitIcon from '../assets/git_icon.svg'
import JavascriptIcon from '../assets/javascript_icon.svg'
import RubyIcon from '../assets/ruby_icon.svg'
import RailsIcon from '../assets/rails_icon.svg'
import MysqlIcon from '../assets/mysql_icon.svg'
import JavaIcon from '../assets/java_icon.svg'
import HtmlIcon from '../assets/html_icon.svg'
import CssIcon from '../assets/css_icon.svg'
import ReactIcon from '../assets/react_icon.svg'
import TailwindIcon from '../assets/tailwind_icon.svg'



function Skills() {
  return (
    <div className='section'>
        <div className="flex flex-col px-8 gap-5">
            <div className="flex py-5 items-center justify-center">
                <ThinAndThickTitle thin="My" thick="Skills" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 justify-between gap-10 py-5">
                <SkillCard icon={RubyIcon} text="Ruby" />
                <SkillCard icon={RailsIcon} text="Rails" />
                <SkillCard icon={JavaIcon} text="Java" />
                <SkillCard icon={MysqlIcon} text="MySQL" />
                <SkillCard icon={GitIcon} text="Git" />
                <SkillCard icon={ReactIcon} text="React" />
                <SkillCard icon={TailwindIcon} text="Tailwind" />
                <SkillCard icon={HtmlIcon} text="HTML" />
                <SkillCard icon={CssIcon} text="CSS" />
                <SkillCard icon={JavascriptIcon} text="Javascript" />
            </div> 
        </div>
    </div>
  )
}

export default Skills
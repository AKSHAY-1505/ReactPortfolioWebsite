import React from 'react'
import ThinAndThickTitle from '../components/thin_and_thick_title'
import SkillCard from '../components/skill_card'

const Skills = () => {
  return (
    <div className='section'>
        <div className="flex flex-col px-8 gap-5">
            <div className="flex items-center justify-center">
                <ThinAndThickTitle thin="My" thick="Skills" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 justify-between gap-10 py-5">
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
                <SkillCard />
            </div> 
        </div>
    </div>
  )
}

export default Skills
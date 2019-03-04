import React from 'react';
import About from './About';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Blog from './Blog';
import Certificate from './Certification';
import Hobby from "./Hobby";
import Projects from './Projects';
const categoryMap = {
    '<AboutMe />': About,
    '<ContactMe />': Contact,
    '<Education />': Education,
    '<SkillSet />': Skills,
    '<Experience />': Experience,
    '<Blog />': Blog,
    '<Certification />': Certificate,
    '<Hobby />': Hobby,
    '<Projects />': Projects,
};
export default class Text extends React.Component {
    render() {
        const CategoryComponent = categoryMap[this.props.category];
        return <CategoryComponent />
    }
}
import React from 'react';
import About from './About';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

const categoryMap = {
    '<AboutMe />': About,
    '<ContactMe />': Contact,
    '<Education />': Education,
    '<SkillSet />': Skills,
    '<Experience />': Experience
};
export default class Text extends React.Component {
    render() {
        const CategoryComponent = categoryMap[this.props.category];
        return <CategoryComponent />
    }
}
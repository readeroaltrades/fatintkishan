import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon =
        theme === "light" ? checkMarkIconLight : checkMarkIconDark;
    return (
        <section className={styles.container} id="skills">
            <h1 className="sectionTitle">Skills</h1>
            <h2>Programming Languages</h2>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="C++" />
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
            </div>
            <hr />
            <h2>Developer Tools</h2>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="Powershell" />
            </div>
            <hr />
            <h2>Miscellaneous</h2>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Generative Art" />
                <SkillList src={checkMarkIcon} skill="3D Modelling" />
                <SkillList src={checkMarkIcon} skill="Animation" />
            </div>
            <hr />
        </section>
    );
}

export default Skills;

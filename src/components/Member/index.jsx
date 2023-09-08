import { useState } from "react";
import { getGender, getImage } from "../../utils"
import styles from './member.module.css'
import Modal from 'react-responsive-modal';
import { BiNoEntry } from "react-icons/bi";

const Member = ({ gender, id, known_for_department, name, profile_path, credit_id, department, job, openImg }) => {
    const [isOPen, setIsOpen] = useState(openImg)

    return (


        <div className={ styles.member } >
            { profile_path && <Modal
                onClose={ () => setIsOpen(false) }
                center
                open={ isOPen }
                styles={ {
                    width: '80vw',
                    maxWidth: '500px'
                } }
            >
                <img style={ { width: '100%', height: '100%', objectFit: 'cover' } } src={ getImage(profile_path) } alt={ name } />
            </Modal> }
            <div className={ styles.memberImage }>
                { profile_path ? <img onClick={ () => {
                    setIsOpen(true)
                } } src={ getImage(profile_path) } alt={ name } title={ name } /> :
                    <BiNoEntry className={ styles.nullIcon } />
                }
            </div>
            <div className={ styles.memberInfo }>
                <p className={ styles.name }>{ name }</p>
                <p className={ styles.job }>{ job } </p>
            </div>
            <p className={ styles.gender }>{ getGender(gender) }</p>
        </div >
    )
}

export default Member
import { FaUser, FaPhone } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

export default function Contact({ id, name, phone, removeContact }) {
    return (
        <li className={css.container}>
            <div className={css.info}>
                <span><FaUser /> {name}</span>
                <span><FaPhone /> {phone}</span>
            </div>
            <button onClick={() => removeContact(id)}>
                Delete
            </button>
        </li>
    )
}

Contact.PropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    removeContact: PropTypes.func.isRequired
};

import { FieldArray } from 'formik';
import add from '../../../images/icons/add-icon.svg';
import close from '../../../images/icons/close-icon.svg';
import ModalInput from '../ModalInput';
import './styles.scss';

function CastForm() {
  return (
    <div className="cast">
      <FieldArray name="cast">
        { (fieldArrayProps) => {
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { cast } = values;
          return (
            <>
              <div className="cast-header">
                <h3 className="cast-header-title">Cast</h3>
                <button className="cast-header-add-btn" type="button" onClick={() => push('')}>
                  <img className="cast-header-add-btn-image" src={add} alt="add" />
                </button>
              </div>
              <ul className="cast-list">
                {cast.map((actor, index) => (
                  <li className="cast-list-actor">
                    <ModalInput
                      type="text"
                      name={`cast[${index}]`}
                      placeholderText="eg. Robert Downey Jr."
                      onButtonClick={() => remove(index)}
                      buttonIcon={close}
                      isButtonShown
                    />
                  </li>
                ))}
              </ul>
            </>
          );
        }}
      </FieldArray>
    </div>
  );
}

export default CastForm;

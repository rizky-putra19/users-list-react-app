import { Form } from "react-bootstrap";

const Filter = (props) => {
  const { changeHandler } = props;
  return (
    <Form.Select
      onChange={changeHandler}
      aria-label="Default select example"
      className="w-25 d-inline-flex mb-3"
    >
      <option>All Country</option>
      <option value="au">Australia</option>
      <option value="br">Brazil</option>
      <option value="ca">Canada</option>
      <option value="ch">Switzerland</option>
      <option value="de">Germany</option>
      <option value="dk">Denmark</option>
      <option value="es">Spain</option>
      <option value="fi">Finland</option>
      <option value="fr">France</option>
      <option value="gb">United Kingdom</option>
      <option value="ie">Ireland</option>
      <option value="ir">Iran</option>
      <option value="no">Norway</option>
      <option value="nl">Netherlands</option>
      <option value="nz">New Zealand</option>
      <option value="tr">Turkey</option>
      <option value="us">United States</option>
    </Form.Select>
  );
};

export default Filter;

import {FormGroup, TextInput} from "@carbon/react";
import TooltipWithLabel from "./TooltipWithLabel.jsx";

const SearchFormField = ({attr}) => {

    const validation = () => ({invalid: false, message: "Some validation"})

    return (
        <FormGroup legendText={""}>
            <TextInput
                id={attr.id}
                placeholder={attr.label}
                labelText={<TooltipWithLabel label={attr.label} tipContent={attr.tooltip} align={"right"}/>}
                className={"width--label"}
                value={attr.value}
                onChange={() => {}}
                invalid={validation.invalid}
                invalidText={validation.message}
                onKeyDown={() => {}}
            />
        </FormGroup>
    )
}
export default SearchFormField;
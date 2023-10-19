import {FormLabel, Toggletip, ToggletipButton, ToggletipContent} from "@carbon/react";
import {Information} from "@carbon/icons-react";

const TooltipWithLabel = props => {
    return (
        <div className={"search-form-label-and-toggle-tip"}>
            <FormLabel className={"search-form-label"}
                       id={"search-form-label"}>{props.label}</FormLabel>
            <Toggletip align={props.align}>
                <ToggletipButton>
                    <Information size={12}/>
                </ToggletipButton>
                <ToggletipContent>
                    {props.tipContent}
                </ToggletipContent>
            </Toggletip>
        </div>
    )
}

export default TooltipWithLabel;
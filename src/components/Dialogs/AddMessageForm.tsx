import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import styles from "./Dialogs.module.css";
import {FormDataType} from "./Dialogs";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";

let maxLength50 = maxLengthCreator(10);

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {



        return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.textarea}>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
                    name="newMessageBody"
                    placeholder="Enter your message"
                    type={"text"}
                />
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)
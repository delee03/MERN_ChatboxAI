import { TextField } from "@mui/material";

type Props = {
    name: string;
    type: string;
    label: string;
};

const CustomizedInput = (props: Props) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            style={{ margin: "15px 0" }}
            InputLabelProps={{ style: { color: "white" } }}
            name={props.name}
            label={props.label}
            type={props.type}
            InputProps={{
                style: {
                    width: "400px",
                    borderRadius: "10px",
                    color: "white",
                },
            }}
        />
    );
};

export default CustomizedInput;

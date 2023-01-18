import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
interface IColors {
    colors: string[]
}



const StrengthIndicator: React.FC<IColors> = ({ colors }) => {

    return (
        <List sx={{ display: "flex", gap: "10px" }}>
            <ListItem sx={{ width: "50px", height: "1px", backgroundColor: `${colors[0]}`, borderRadius: "5px", padding: "2px" }}></ListItem>
            <ListItem sx={{ width: "50px", height: "1px", backgroundColor: `${colors[1]}`, borderRadius: "5px", padding: "2px" }}></ListItem>
            <ListItem sx={{ width: "50px", height: "1px", backgroundColor: `${colors[2]}`, borderRadius: "5px", padding: "2px" }}></ListItem>

        </List>
    )
}
export default StrengthIndicator
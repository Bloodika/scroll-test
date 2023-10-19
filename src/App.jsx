import './App.scss'
import {
    Column,
    Content,
    DataTable,
    Dropdown,
    FlexGrid,
    Form,
    Row,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableHeader
} from "@carbon/react";
import SearchFormField from "./SearchFormField.jsx";

function App() {
    return (
        <>
            <Content className="content">
                <FlexGrid className={"flex-grid"} fullWidth>
                    <Row>
                        <Column lg={3}>
                            <Dropdown id={"f"} items={[]} label={"Some Dropdown"}/>
                            <Form className={"search-form"}>
                                {[
                                    {id: "A", label: "A", value: "Some Value A", tooltip: "This is some tooltip for A"},
                                    {id: "B", label: "B", value: "Some Value B", tooltip: "This is some tooltip for B"},
                                    {id: "C", label: "C", value: "Some Value C", tooltip: "This is some tooltip for C"}
                                ].map((attr) => (
                                    <SearchFormField onEnter={() => {
                                    }} key={attr.id} attr={attr} onChange={() => {
                                    }}/>
                                ))}
                            </Form>
                            <Column lg={9}>

                            </Column>
                        </Column>

                        <Column lg={4} className="right-panel">
                        </Column>
                    </Row>
                </FlexGrid>
            </Content>
        </>
    )
}

export default App;

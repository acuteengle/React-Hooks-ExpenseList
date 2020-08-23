import React from "react";
import ExpenseApp from "./components/ExpenseApp";

function App() {

    const styles = {
        app: {
            backgroundColor: "#d6f6e7",
            height: "100vh"
        }
    }

    return (
        <div style={styles.app}>
            <ExpenseApp />
        </div>
    );
}

export default App;

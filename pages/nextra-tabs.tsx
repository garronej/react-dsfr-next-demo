import * as React from 'react';
import { Tabs } from "../shared/Tabs";
import { Tab } from "../shared/Tab";

export default function Page() {

    return (
        <>
            <h1>Hello Tabs</h1>
            <Tabs
                items={[
                    "npm",
                    "yarn",
                    "pnpm"
                ]}
            >
                <Tab>Instruction for npm</Tab>
                <Tab>Instruction for yarn</Tab>
                <Tab>Instruction for pnpm</Tab>
            </Tabs>
        </>
    );
}

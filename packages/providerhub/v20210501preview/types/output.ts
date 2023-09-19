import * as pulumi from "@pulumi/pulumi";
    /**
     * Display information of the operation.
     */
    export interface OperationsDefinitionResponseDisplay {
        description: string;
        operation: string;
        provider: string;
        resource: string;
    }

import * as pulumi from "@pulumi/pulumi";
/**
 * Employee properties
 */
export interface EmployeePropertiesArgs {
    /**
     * Age of employee
     */
    age?: pulumi.Input<number>;
    /**
     * City of employee
     */
    city?: pulumi.Input<string>;
    /**
     * Profile of employee
     */
    profile?: pulumi.Input<string>;
}


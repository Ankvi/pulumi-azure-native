import * as pulumi from "@pulumi/pulumi";
/**
 * Employee properties
 */
export interface EmployeePropertiesArgs {
    /**
     * Age of employee
     */
    age?: pulumi.Input<number | undefined>;
    /**
     * City of employee
     */
    city?: pulumi.Input<string | undefined>;
    /**
     * Profile of employee
     */
    profile?: pulumi.Input<string | undefined>;
}

import * as pulumi from "@pulumi/pulumi";
/**
 * An array of administrator user identities
 */
export interface DFPInstanceAdministratorsArgs {
    /**
     * An array of administrator user identities.
     */
    members?: pulumi.Input<pulumi.Input<string>[]>;
}

import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the error.
 */
export interface ErrorArgs {
    /**
     * The error code.
     */
    code?: pulumi.Input<string>;
    /**
     * The error ID.
     */
    id?: pulumi.Input<number>;
    /**
     * The detailed error message.
     */
    message?: pulumi.Input<string>;
    /**
     * The error possible causes.
     */
    possibleCauses?: pulumi.Input<string>;
    /**
     * The error recommended action
     */
    recommendedAction?: pulumi.Input<string>;
    /**
     * The account ID used to login.
     */
    runAsAccountId?: pulumi.Input<string>;
    /**
     * The error severity
     */
    severity?: pulumi.Input<string>;
    /**
     * The summarized error message.
     */
    summaryMessage?: pulumi.Input<string>;
    /**
     * Time when this error was last updated.
     */
    updatedTimeStamp?: pulumi.Input<string>;
}

/**
 * The springbootservers resource definition.
 */
export interface SpringbootserversPropertiesArgs {
    /**
     * The list of errors.
     */
    errors?: pulumi.Input<pulumi.Input<ErrorArgs>[]>;
    /**
     * The alternative FQDN or IP addresses to discover for this server
     */
    fqdnAndIpAddressList?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The machine Id from ARM
     */
    machineArmId?: pulumi.Input<string>;
    /**
     * Target server port for remote login
     */
    port?: pulumi.Input<number>;
    /**
     * The resource provisioning state.
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
    /**
     * Server is the target server name or ip address to discover of SpringBootServer.
     */
    server: pulumi.Input<string>;
    /**
     * The total number of spring boot apps been discovered
     */
    springBootApps?: pulumi.Input<number>;
    /**
     * The total number of apps been discovered
     */
    totalApps?: pulumi.Input<number>;
}

/**
 * The extended location definition.
 */
export interface SpringbootsitesModelExtendedLocationArgs {
    /**
     * The extended location name.
     */
    name?: pulumi.Input<string>;
    /**
     * The extended location type.
     */
    type?: pulumi.Input<string>;
}

/**
 * The springbootsites resource definition.
 */
export interface SpringbootsitesPropertiesArgs {
    /**
     * The master site ID from Azure Migrate.
     */
    masterSiteId?: pulumi.Input<string>;
    /**
     * The migrate project ID from Azure Migrate.
     */
    migrateProjectId?: pulumi.Input<string>;
    /**
     * The resource provisioning state.
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
}
